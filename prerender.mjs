// prerender.mjs
import puppeteer from "puppeteer";
import { preview } from "vite";
import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Config ────────────────────────────────────────────────────────────────
const ROUTES = [
  { route: "/", outFile: "index.html" },
  // Add more routes here if you add React Router later:
  // { route: "/about", outFile: "about/index.html" },
];
const PORT = 4173;
// ────────────────────────────────────────────────────────────────────────────

console.log("🚀 Starting prerender...");

// 1. Spin up Vite preview server against the freshly-built dist/
const server = await preview({
  preview: { port: PORT, open: false, strictPort: true },
});

// 2. Launch headless Chromium
const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const { route, outFile } of ROUTES) {
  const url = `http://localhost:${PORT}${route}`;
  console.log(`  📄 Rendering ${url}`);

  const page = await browser.newPage();

  // Suppress console noise from the app
  page.on("console", () => {});

  await page.goto(url, {
    waitUntil: "networkidle0", // wait until no network requests for 500ms
    timeout: 30_000,
  });

  // Extra safety: wait for a known element that signals full render
  // Change the selector to match something real in your Hero/Home section
  await page
    .waitForSelector("main", { timeout: 10_000 })
    .catch(() => console.warn("  ⚠️  <main> not found, snapshotting anyway"));

  // Grab the fully-rendered HTML
  const html = await page.content();

  // Write to dist/
  const outPath = resolve(__dirname, "dist", outFile);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf-8");
  console.log(`  ✅ Saved → dist/${outFile}`);

  await page.close();
}

await browser.close();

// Shut down preview server
await new Promise((res) => server.httpServer.close(res));

console.log("🎉 Prerender complete!");
