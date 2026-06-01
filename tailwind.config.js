/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        glass: "4.8px",
      },
      colors: {
        primary: "#5FAFB7",
        dark: "#0F2E36",
        muted: "#E6ECEA",
        glass: "rgba(255, 255, 255, 0.15)",
        glassBorder: "rgba(255, 255, 255, 0.01)",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },
    },
  },
  plugins: [],
};
