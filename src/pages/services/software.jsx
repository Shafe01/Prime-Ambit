import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import softwareHero from "../../assets/images/software_hero.png";
import financeIcon from "../../assets/images/finance.png";
import marketingIcon from "../../assets/images/marketing.png";
import logisticsIcon from "../../assets/images/logistics.png";
import healthIcon from "../../assets/images/health.png";
import productEngineeringSolution from "../../assets/images/product_engineering_solution.png";
import softwareIcon1 from "../../assets/images/software_icon_1.png";
import softwareIcon2 from "../../assets/images/software_icon_2.png";
import softwareIcon3 from "../../assets/images/software_icon_3.png";
import softwareIcon4 from "../../assets/images/software_icon_4.png";
import techLogo7 from "../../assets/images/tech_logo_7.png";
import techLogo8 from "../../assets/images/tech_logo_8.png";
import techLogo9 from "../../assets/images/tech_logo_9.png";
import techLogo10 from "../../assets/images/tech_logo_10.png";
import techLogo11 from "../../assets/images/tech_logo_11.png";
import Footer from "../../components/layout/Footer";

export default function Software() {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  // Responsive breakpoint state
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1100;
  const isDesktop = windowWidth >= 1100;

  useEffect(() => {
    if (isDesktop) {
      setMobileMenuOpen(false);
      setMobileServicesOpen(false);
    }
  }, [isDesktop]);

  const serviceLinks = [
    { label: "AI Development", href: "/services/ai-development" },
    { label: "Web3 Development", href: "/services/web3-development" },
    { label: "Software Development", href: "/services/software-development" },
    { label: "Web3 Marketing", href: "/services/web3-marketing" },
    { label: "Marketing and Branding", href: "/services/marketing-branding" },
  ];

  const softwareCards = [
    {
      title: "SaaS & Product Engineering",
      description:
        "We focus on creating stable foundations rather than disposable prototypes.",
      points: [
        "SaaS & Multi-tenant Applications",
        "MVP Architecture",
        "Product Dashboards",
        "Growth Kits",
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: softwareIcon1,
    },
    {
      title: "Enterprise Systems & API Integrations",
      description:
        'We specialize in building the "connective tissue" of modern business operations.',
      points: [
        "Custom Enterprise Software",
        "API Design",
        "Third-Party Integrations",
        "Data & Reporting",
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: softwareIcon2,
    },
    {
      title: "Mobile Application Development",
      description:
        "We build high-performance mobile interfaces that act as seamless extensions of your core system architecture",
      points: [
        "Cross-Platform Excellence",
        "Secure Ecosystems",
        "Mobile Workflows",
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: softwareIcon3,
    },
    {
      title: (
        <span>
          Cloud Infrastructure <br />& System Reliability
        </span>
      ),
      description:
        "Every system we build is designed for long-term health, focusing on the underlying architecture that keeps platforms running under load.",
      points: [
        "Operational Observability",
        "System Boundaries",
        "Scalable Backend Foundations",
      ],
      bg: "#509AAF",
      titleColor: "#FFF",
      textColor: "#FFF",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: softwareIcon4,
    },
  ];

  const industryItems = [
    { icon: financeIcon, label: "FinTech", width: "60px", height: "60px" },
    {
      icon: marketingIcon,
      label: "Growth & Platforms",
      width: "80px",
      height: "80px",
    },
    {
      icon: logisticsIcon,
      label: "Logistics & Ops",
      width: "80px",
      height: "80px",
    },
    {
      icon: healthIcon,
      label: "Health Systems",
      width: "71.667px",
      height: "65.008px",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#436A75",
        display: "flow-root",
        paddingTop: "100px",
        overflowX: "hidden",
      }}
    >
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: isDesktop ? "center" : "space-between",
          alignItems: "center",
          gap: isDesktop ? "280px" : "0",
          padding: isMobile
            ? "26px 20px"
            : isTablet
              ? "16px 32px"
              : "20px 40px",
          boxSizing: "border-box",
          transform: `translateY(${showHeader ? "0" : "-120%"})`,
          transition: "transform 0.3s ease",
          background: "rgba(67, 106, 117, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={logo}
            alt="Prime Ambit"
            style={{
              width: isMobile ? "120px" : "151.544px",
              height: isMobile ? "40px" : "50px",
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
        </Link>

        {isDesktop && (
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
                  background:
                    hoveredNav === "Services"
                      ? "rgba(255, 255, 255, 0.23)"
                      : "transparent",
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  cursor: "default",
                  transition: "background 0.2s ease",
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
                    transform: isServicesHovered
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
                        onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255,255,255,0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
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
                  background:
                    hoveredNav === item
                      ? "rgba(255, 255, 255, 0.23)"
                      : "transparent",
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
        )}

        {isDesktop && (
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
              background:
                hoveredNav === "Contact Us"
                  ? "rgba(255, 255, 255, 0.23)"
                  : "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(4.8px)",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
        )}

        {!isDesktop && (
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
        )}

        <AnimatePresence>
          {!isDesktop && mobileMenuOpen && (
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
                padding: isMobile ? "80px 20px 24px" : "92px 32px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                boxSizing: "border-box",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                overflowY: "auto",
                zIndex: 1001,
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

              {["About Us", "Blog", "Our Works"].map((item) => (
                <a
                  key={item}
                  href="#"
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
                  {item}
                </a>
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

      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: isMobile ? "calc(100vh - 100px)" : "475px",
          justifyContent: "center",
          alignItems: "center",
          background: "#2A394A",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1440px",
            minHeight: isMobile ? "calc(100vh - 100px)" : "475px",
            padding: isMobile
              ? "48px 24px 40px"
              : isTablet
                ? "48px 40px"
                : "0 237.898px 0 237.902px",
            justifyContent: isMobile ? "center" : "space-between",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "32px" : "0",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              width: isMobile ? "100%" : isTablet ? "55%" : "429px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "40px",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                alignSelf: "stretch",
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: isMobile ? "40px" : isTablet ? "48px" : "59.3px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: isMobile ? "44px" : "54px",
                letterSpacing: isMobile ? "-2px" : "-4px",
                margin: 0,
              }}
            >
              Our Services
            </motion.h1>

            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "25px",
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                style={{
                  alignSelf: "stretch",
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: isMobile ? "18px" : "22.65px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "160.5%",
                  margin: 0,
                }}
              >
                Intelligent Platforms for Operations & Insight
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                style={{
                  width: "100%",
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "160.5%",
                  margin: 0,
                }}
              >
                We create fast, reliable web and mobile applications, along with
                custom ERP and CRM systems that streamline everyday operations,
                cut manual work, and improve team productivity. Every platform
                is built with clean architecture, strong security, and
                performance in mind, so it scales smoothly as you grow from
                first release to heavy real-world usage.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    height: "30.727px",
                    padding: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "16px",
                    background: "#509AAF",
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "160.5%",
                    textTransform: "capitalize",
                    textDecoration: "none",
                    boxSizing: "border-box",
                  }}
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE — scaled appropriately on all devices */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: isMobile ? "100%" : isTablet ? "42%" : "474.661px",
              height: isMobile ? "300px" : isTablet ? "320px" : "527.855px",
              aspectRatio: isTablet || isMobile ? "auto" : "116/129",
              flex: isMobile ? "1" : "none",
              background: `url(${softwareHero}) transparent 50% / ${isMobile ? "contain" : "cover"} no-repeat`,
              marginTop: isMobile || isTablet ? "0" : "40px",
              flexShrink: 0,
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: isMobile
            ? "40px 24px"
            : isTablet
              ? "48px 40px"
              : "60px 61.22px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "32px",
          boxSizing: "border-box",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            width: "100%",
            maxWidth: isDesktop ? "388.645px" : "100%",
            color: "#D6DBC7",
            fontFamily: "Inter, sans-serif",
            fontSize: isMobile ? "28px" : isTablet ? "32px" : "36.65px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: isMobile ? "34px" : "38px",
            letterSpacing: isMobile ? "-1px" : "-1.833px",
            margin: 0,
          }}
        >
          Product Engineering, Not Just Coding.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            width: "100%",
            color: "#FFF",
            fontFamily: "Inter, sans-serif",
            fontSize: isMobile ? "16px" : isTablet ? "19px" : "22.65px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: isMobile ? "26px" : "24px",
            letterSpacing: "-0.453px",
            margin: 0,
          }}
        >
          We design and build modern software platforms for the real world. Web
          applications, SaaS products, and enterprise systems that focus on
          architecture, usability, and operational reliability from first
          product versions to large scale platforms.
        </motion.p>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: isMobile
            ? "0 24px 60px"
            : isTablet
              ? "0 40px 60px"
              : "0 61.22px 80px 61.22px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "100%",
            minHeight: isDesktop ? "650px" : "auto",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            background: "#FFF",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: isMobile || isTablet ? "flex-start" : "center",
              flexDirection: isMobile || isTablet ? "column" : "row",
              gap: "20px",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    staggerChildren: 0.2,
                  },
                },
              }}
              style={{
                width: isDesktop ? "519px" : "100%",
                minHeight: isDesktop ? "610px" : "auto",
                flexShrink: isDesktop ? 0 : 1,
              }}
            >
              <div
                style={{
                  width: "100%",
                  minHeight: isDesktop ? "610px" : "auto",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: isDesktop ? "space-between" : "flex-start",
                  gap: isMobile ? "24px" : isTablet ? "28px" : "0",
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: isMobile ? "8px" : "15px",
                    flexWrap: isMobile ? "nowrap" : "wrap",
                    width: isMobile ? "100%" : "auto",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: isMobile ? "4px 8px" : "4px 5.158px 4px 5.063px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 1,
                      borderRadius: "6px",
                      border: "1px solid #000",
                      color: "#000",
                      fontFamily: "Inter, sans-serif",
                      fontSize: isMobile ? "11px" : "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: isMobile ? "16px" : "18px",
                      letterSpacing: isMobile ? 0 : "-0.1px",
                      whiteSpace: "nowrap",
                      boxSizing: "border-box",
                    }}
                  >
                    easy deployment
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: isMobile ? "4px 8px" : "4px 15.5px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 1,
                      borderRadius: "6px",
                      border: "1px solid #000",
                      color: "#000",
                      fontFamily: "Inter, sans-serif",
                      fontSize: isMobile ? "11px" : "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: isMobile ? "16px" : "18px",
                      letterSpacing: isMobile ? 0 : "-0.1px",
                      whiteSpace: "nowrap",
                      boxSizing: "border-box",
                    }}
                  >
                    Scalability
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: isMobile ? "4px 8px" : "4px 11.5px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 1,
                      borderRadius: "6px",
                      border: "1px solid #000",
                      color: "#000",
                      fontFamily: "Inter, sans-serif",
                      fontSize: isMobile ? "11px" : "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: isMobile ? "16px" : "18px",
                      letterSpacing: isMobile ? 0 : "-0.1px",
                      whiteSpace: "nowrap",
                      boxSizing: "border-box",
                    }}
                  >
                    Reliability
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  style={{
                    height: isMobile
                      ? "220px"
                      : isTablet
                        ? "300px"
                        : "432.374px",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    background: isMobile ? `url(${productEngineeringSolution}) transparent center / contain no-repeat` : `url(${productEngineeringSolution}) transparent 74.18px 34.462px / 71.413% 84.059% no-repeat`,
                  }}
                />

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 },
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                      justifyContent: "center",
                      color: "#000",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "20px",
                    }}
                  >
                    Building a Product That Needs Structure?
                    <br />
                    Share your product scope, current stage (idea, MVP, v1+),
                    and architecture
                    <br />
                    environment. We’ll assess build feasibility and system
                    alignment.
                  </div>
                  <div>
                    <Link
                      to="/contact"
                      style={{
                        display: "inline-flex",
                        height: "40px",
                        padding: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "16px",
                        background: "#509AAF",
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "120%",
                        letterSpacing: "-0.56px",
                        textTransform: "capitalize",
                        textDecoration: "none",
                      }}
                    >
                      Discuss Product Engineering
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div
              style={{
                display: "flex",
                width: isDesktop ? "716px" : "100%",
                alignItems: "flex-start",
                alignContent: "flex-start",
                gap: "20px",
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              {softwareCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  style={{
                    display: "flex",
                    width: isMobile
                      ? "100%"
                      : isTablet
                        ? "calc(50% - 10px)"
                        : "348px",
                    minHeight: "295px",
                    padding: "10px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                    flexShrink: 0,
                    border: "1px solid #509AAF",
                    background: card.bg,
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      minHeight: "275px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "10px",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        padding: "10px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: `url(${card.icon}) no-repeat center / contain`,
                          flexShrink: 0,
                        }}
                      />
                      <div
                        style={{
                          width: isMobile ? "calc(100% - 66px)" : "220.465px",
                          flexShrink: 0,
                          color: card.titleColor,
                          fontFamily: "Inter, sans-serif",
                          fontSize: isMobile ? "18px" : "22.65px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          letterSpacing: "-0.453px",
                        }}
                      >
                        {card.title}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        minHeight: "173px",
                        flexDirection: "column",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: card.textColor,
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13.3px",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "18px",
                      }}
                    >
                      <p style={{ margin: "0 0 8px 0" }}>{card.description}</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        {card.points.map((point, i) => (
                          <div key={i}>
                            {i + 1}. {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          background: "#509AAF",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1440px",
            minHeight: isDesktop ? "375px" : "auto",
            padding: isMobile
              ? "48px 24px 52px"
              : isTablet
                ? "52px 60px 56px"
                : "60.837px 340px 79.873px 340px",
            flexDirection: "column",
            alignItems: "center",
            gap: "40.597px",
            boxSizing: "border-box",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{
              color: "#2A394A",
              fontFamily: "Inter, sans-serif",
              fontSize: isMobile ? "28px" : isTablet ? "32px" : "36.65px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "38px",
              letterSpacing: isMobile ? "-1px" : "-1.833px",
              margin: 0,
              textAlign: "center",
            }}
          >
            Technologies We Work With
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            style={{
              display: "flex",
              width: "100%",
              maxWidth: isMobile ? "280px" : "837px",
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "center",
              gap: isMobile ? "24px" : "65px",
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            {[
              {
                width: isMobile ? "56px" : "178px",
                height: isMobile ? "56px" : "102px",
                background: `url(${techLogo7}) transparent center / contain no-repeat`,
              },
              {
                width: isMobile ? "56px" : "98px",
                height: isMobile ? "56px" : "102px",
                background: `url(${techLogo8}) transparent center / contain no-repeat`,
              },
              {
                width: isMobile ? "56px" : "93px",
                height: isMobile ? "56px" : "102px",
                background: `url(${techLogo9}) transparent center / contain no-repeat`,
              },
              {
                width: isMobile ? "56px" : "121px",
                height: isMobile ? "56px" : "102px",
                background: `url(${techLogo10}) transparent center / contain no-repeat`,
              },
              {
                width: isMobile ? "56px" : "87px",
                height: isMobile ? "56px" : "93px",
                background: `url(${techLogo11}) transparent center / contain no-repeat`,
              },
            ].map((logoItem, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                style={{
                  width: logoItem.width,
                  height: logoItem.height,
                  background: logoItem.background,
                  flexShrink: 0,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: isDesktop ? "425px" : "auto",
          justifyContent: "center",
          background: "#2A394A",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1440px",
            paddingTop: isMobile ? "40px" : "48.4px",
            paddingBottom: isMobile ? "52px" : "48px",
            paddingLeft: isMobile ? "24px" : isTablet ? "40px" : "66.49px",
            paddingRight: isMobile ? "24px" : isTablet ? "40px" : "66.49px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
            boxSizing: "border-box",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              color: "#D6DBC7",
              fontFamily: "Inter, sans-serif",
              fontSize: isMobile ? "28px" : isTablet ? "32px" : "36.65px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "38px",
              letterSpacing: isMobile ? "-1px" : "-1.833px",
              margin: 0,
            }}
          >
            Industries We Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: "100%",
              maxWidth: "100%",
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: isMobile ? "16px" : isTablet ? "19px" : "22.65px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "24px",
              letterSpacing: "-0.453px",
              margin: 0,
            }}
          >
            Prime Ambit software systems support organizations across
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: isMobile ? "space-around" : "center",
              alignItems: "flex-start",
              gap: isMobile ? "16px" : isTablet ? "48px" : "100px",
              marginTop: isMobile ? "32px" : "80px",
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            {industryItems.map((industry, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  width: isMobile ? "calc(50% - 8px)" : "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: isMobile ? "60px" : "80px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: isMobile ? "48px" : industry.width,
                      height: isMobile ? "48px" : industry.height,
                      background: `url(${industry.icon}) no-repeat center / contain`,
                    }}
                  />
                </div>
                <span
                  style={{
                    maxWidth: isMobile ? "140px" : "160px",
                    textAlign: "center",
                    color: "#FFF",
                    fontFamily: "Inter, sans-serif",
                    fontSize: isMobile ? "16px" : "22.65px",
                    fontWeight: 300,
                    lineHeight: "24px",
                    letterSpacing: "-0.453px",
                  }}
                >
                  {industry.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: isMobile ? "48px 24px 64px" : "67px 67px 92px 67px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1301.508px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "35px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              width: "100%",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                width: "100%",
                color: "#D6DBC7",
                fontFamily: "Inter, sans-serif",
                fontSize: isMobile ? "28px" : isTablet ? "32px" : "36.65px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "38px",
                letterSpacing: isMobile ? "-1px" : "-1.833px",
                margin: 0,
              }}
            >
              Build Reliable Software Platforms for Your Business
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                width: "100%",
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: isMobile ? "16px" : isTablet ? "19px" : "22.65px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "160.5%",
                margin: 0,
              }}
            >
              Prime Ambit helps you build sustainable software solutions focused
              on quality, speed, and reliable delivery.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                height: "40px",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "16px",
                background: "#509AAF",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-0.56px",
                textTransform: "capitalize",
                textDecoration: "none",
                boxSizing: "border-box",
              }}
            >
              Talk to Our Team
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
