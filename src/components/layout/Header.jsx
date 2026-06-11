import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";

export default function Header({ bgColor }) {
  const [show, setShow] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { label: "AI Development", href: "/services/ai-development" },
    { label: "Web3 Development", href: "/services/web3-development" },
    { label: "Software Development", href: "/services/software-development" },
    { label: "Web3 Marketing", href: "/services/web3-marketing" },
    { label: "Marketing and Branding", href: "/services/marketing-branding" },
  ];

  return (
    <header
      className="px-4 py-4 lg:px-[40px] lg:py-[20px]"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        transform: `translateY(${show ? "0" : "-120%"})`,
        transition: "transform 0.3s ease",
        background: bgColor || "transparent",
      }}
    >
      {/* DESKTOP HEADER */}
      <div className="hidden lg:flex w-full items-center justify-center" style={{ gap: "280px" }}>
        {/* LOGO */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={logo}
            alt="Prime Ambit"
            style={{
              width: "151.544px",
              height: "50px",
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
        </Link>

        {/* CENTER NAV */}
        <nav
          style={{
            display: "flex",
            height: "50px",
            padding: "12px",
            alignItems: "center",
            gap: "4px",
            borderRadius: "32px",
            border: "1px solid rgba(255, 255, 255, 0.01)",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(4.8px)",
          }}
        >
          {/* Services with Hover Dropdown */}
          <div
            onMouseEnter={() => {
              setIsServicesHovered(true);
              setHoveredNav("Services");
            }}
            onMouseLeave={() => {
              setIsServicesHovered(false);
              setHoveredNav(null);
            }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                display: "flex",
                height: "36px",
                padding: "8px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                borderRadius: "20px",
                background: hoveredNav === "Services" ? "rgba(255, 255, 255, 0.23)" : "transparent",
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                cursor: "default",
                transition: "background 0.2s ease",
              }}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isServicesHovered ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <AnimatePresence>
              {isServicesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "12px",
                    background: "rgba(30, 41, 59, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    padding: "8px",
                    width: "220px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                    zIndex: 1001,
                  }}
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      style={{
                        display: "block",
                        padding: "10px 16px",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "13px",
                        borderRadius: "8px",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { label: "About Us", href: "/#services" },
            { label: "Blog", href: "/blog" },
            { label: "Case Studies", href: "#" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onMouseEnter={() => setHoveredNav(item.label)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                display: "flex",
                height: "36px",
                padding: "8px 16px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                background: hoveredNav === item.label ? "rgba(255, 255, 255, 0.23)" : "transparent",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CONTACT US BUTTON */}
        <Link
          to="/contact"
          onMouseEnter={() => setHoveredNav("Contact Us")}
          onMouseLeave={() => setHoveredNav(null)}
          style={{
            display: "flex",
            width: "145px",
            height: "50px",
            padding: "12px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "32px",
            border: "1px solid rgba(255, 255, 255, 0.01)",
            background: hoveredNav === "Contact Us" ? "rgba(255, 255, 255, 0.23)" : "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(4.8px)",
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            textDecoration: "none",
            transition: "background 0.2s ease",
          }}
        >
          Contact Us
        </Link>
      </div>

      {/* MOBILE HEADER */}
      <div className="flex lg:hidden w-full items-center justify-between px-0" style={{ height: "60px" }}>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={logo}
            alt="Logo"
            style={{
              width: "120px",
              height: "40px",
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
        </Link>
        <button
          id="mobile-menu-toggle"
          onClick={() => {
            setMobileMenuOpen((prev) => {
              if (prev) setMobileServicesOpen(false);
              return !prev;
            });
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            padding: "8px",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "#FFF",
              borderRadius: "2px",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: mobileMenuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "#FFF",
              borderRadius: "2px",
              transition: "opacity 0.3s ease",
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "#FFF",
              borderRadius: "2px",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: mobileMenuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              minHeight: "100dvh",
              background: "rgba(42, 57, 74, 0.98)",
              backdropFilter: "blur(14px)",
              padding: "80px 20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              boxSizing: "border-box",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              overflowY: "auto",
              zIndex: -1,
            }}
          >
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#FFF",
                background: "transparent",
                border: "none",
                fontSize: "15px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                padding: "12px 12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: mobileServicesOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <AnimatePresence initial={false}>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      style={{
                        display: "block",
                        padding: "10px 12px",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        borderRadius: "8px",
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.08)",
                margin: "8px 0",
              }}
            />

            {[
              { label: "About Us", href: "/#services" },
              { label: "Blog", href: "/blog" },
              { label: "Case Studies", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 12px",
                  color: "#FFF",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  borderRadius: "8px",
                }}
              >
                {item.label}
              </Link>
            ))}

            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.08)",
                margin: "8px 0",
              }}
            />

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "13px",
                borderRadius: "16px",
                background: "#509AAF",
                color: "#FFF",
                textDecoration: "none",
                fontSize: "15px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                marginTop: "4px",
              }}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
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
  transition: "background 0.2s",
};

