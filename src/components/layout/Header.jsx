import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import logoOpen from "../../assets/images/Menu.svg";

export default function Header() {
  const [show, setShow] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(false); // hide after scroll
      } else {
        setShow(true); // show at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-transform duration-300"
      style={{
        transform: show ? "translateY(0)" : "translateY(-120%)",
      }}
    >
      {/* DESKTOP CONTAINER (unchanged) */}
      <div className="hidden lg:flex w-full px-8 h-[85px] relative items-end">
        {/* LEFT: LOGO */}
        <img
          src={logo}
          alt="Prime Ambit"
          style={{
            width: "151.544px",
            height: "50px",
            objectFit: "cover",
          }}
        />

        {/* CENTER NAV */}
        <nav
          aria-label="Primary"
          style={{
            position: "absolute",
            left: "50%",
            bottom: "0",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "666px",
            height: "50px",
            padding: "12px 24px",
            borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.01)",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4.8px)",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          <a href="#services" style={anchorStyle}>
            Services
          </a>
          <a href="#services" style={anchorStyle}>
            Development
          </a>
          <a href="#process" style={anchorStyle}>
            Process
          </a>
          <a href="#insights" style={anchorStyle}>
            Insights
          </a>
          <a href="#contact-cta" style={anchorStyle}>
            Contact
          </a>
          <a href="#work" style={anchorStyle}>
            View Work
          </a>
        </nav>

        {/* RIGHT CTA */}
        <button
          onClick={() => {
            const el = document.getElementById("contact-cta");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{
            marginLeft: "auto",
            width: "145px",
            height: "50px",
            padding: "12px",
            borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.01)",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4.8px)",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          Start a Build
        </button>
      </div>

      {/* MOBILE HEADER */}
      <div
        className="flex lg:hidden items-center justify-between px-4"
        style={{
          height: "50px",
        }}
      >
        {/* LEFT LOGO */}
        <div
          style={{
            display: "flex",
            height: "28px",
            alignItems: "flex-end",
          }}
        >
          <img
            src={logo}
            alt="Prime Ambit"
            style={{
              height: "28px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* RIGHT MENU */}
        <div
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            width: "24px",
            height: "24px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {mobileMenuOpen ? (
            <img
              src={logoOpen}
              alt="Close Menu"
              style={{ width: "24px", height: "24px", objectFit: "contain" }}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                fill="#1D1B20"
              />
            </svg>
          )}
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div
          className="flex lg:hidden flex-col"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(4.8px)",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            height: "calc(100dvh - 50px)",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { label: "Services", href: "#services" },
              { label: "Development", href: "#services" },
              { label: "Process", href: "#process" },
              { label: "Insights", href: "#services" },
              { label: "Contact", href: "#contact-cta" },
              { label: "View Work", href: "#services" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "22px 24px",
                  color: "#1D1B20",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  display: "block",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Start a Build button at bottom */}
          <div style={{ padding: "24px" }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("contact-cta");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                width: "100%",
                height: "52px",
                borderRadius: "32px",
                border: "1px solid rgba(0,0,0,0.12)",
                background: "#1D1B20",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              Start a Build
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

const anchorStyle = {
  padding: "8px 12px",
  borderRadius: "12px",
  color: "#FFF",
  textDecoration: "none",
  lineHeight: "20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};
