import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import logoOpen from "../../assets/images/Menu.svg";

export default function Header({ bgColor }) {
  const [show, setShow] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "280px",
        padding: "20px 40px",
        boxSizing: "border-box",
        transform: `translateY(${show ? "0" : "-120%"})`,
        transition: "transform 0.3s ease",
        background: bgColor || "transparent",
      }}
    >
      {/* DESKTOP HEADER */}
      <div className="hidden lg:flex items-center" style={{ gap: "280px" }}>
        {/* LOGO */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img
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
                <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

          {["About Us", "Blog", "Our Works"].map((item) => (
            <a
              key={item}
              href="#"
              onMouseEnter={() => setHoveredNav(item)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                display: "flex",
                height: "36px",
                padding: "8px 16px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                background: hoveredNav === item ? "rgba(255, 255, 255, 0.23)" : "transparent",
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
              {item}
            </a>
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
      <div className="flex lg:hidden w-full items-center justify-between px-4" style={{ height: "60px" }}>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Logo" style={{ height: "32px", width: "auto" }} />
        </Link>
        <div
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "100%",
              height: "100dvh",
              background: "#1E293B",
              zIndex: 1002,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "40px" }}>
              <img src={logoOpen} alt="Close" onClick={() => setMobileMenuOpen(false)} style={{ width: "32px", height: "32px", cursor: "pointer" }} />
            </div>
            <div style={{ overflowY: "auto", flex: 1 }}>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", textTransform: "uppercase", marginBottom: "16px" }}>Services</p>
              {serviceLinks.map((s) => (
                <Link key={s.label} to={s.href} onClick={() => setMobileMenuOpen(false)} style={{ display: "block", padding: "12px 0", color: "#FFF", fontSize: "18px", textDecoration: "none" }}>{s.label}</Link>
              ))}
              <div style={{ marginTop: "32px" }}>
                {["About Us", "Blog", "Our Works", "Contact Us"].map((item) => (
                  <Link key={item} to={item === "Contact Us" ? "/contact" : "#"} onClick={() => setMobileMenuOpen(false)} style={{ display: "block", padding: "12px 0", color: "#FFF", fontSize: "18px", textDecoration: "none" }}>{item}</Link>
                ))}
              </div>
            </div>
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

