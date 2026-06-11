import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import web3Hero from "../../assets/images/web3_marketing_hero.png";
import web3Tool1 from "../../assets/images/web3_tool_1.png";
import web3Tool2 from "../../assets/images/web3_tool_2.png";
import web3Tool3 from "../../assets/images/web3_tool_3.png";
import web3Tool4 from "../../assets/images/web3_tool_4.png";
import galxeLogo from "../../assets/images/galxe_logo.png";
import zealyLogo from "../../assets/images/zealy_logo.png";
import web3Industry1 from "../../assets/images/web3_industry_1.png";
import web3Industry2 from "../../assets/images/web3_industry_2.png";
import web3Industry3 from "../../assets/images/web3_industry_3.png";
import web3Industry4 from "../../assets/images/web3_industry_4.png";
import web3Solution from "../../assets/images/web3_marketing_solution.png";
import web3Icon1 from "../../assets/images/web3_icon_1.png";
import web3Icon2 from "../../assets/images/web3_icon_2.png";
import web3Icon3 from "../../assets/images/web3_icon_3.png";
import web3Icon4 from "../../assets/images/web3_icon_4.png";
import Footer from "../../components/layout/Footer";

export default function Web3Marketing() {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  // ── Responsive breakpoint state ─────────────────────────────────────────────
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
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

  // Track window width for responsive values
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1100;
  const isDesktop = windowWidth >= 1100;

  // Close mobile menu on resize to desktop
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

  const aiCards = [
    {
      title: "Token Strategy & Product Go-To-Market",
      titleWidth: "236.5px",
      description:
        "We ensure that your launch is not just a singular event, but a sustainable entry into the decentralized economy.",
      points: [
        "Tokenomics & Governance",
        "Launch Execution",
        "Vertical-Specific Marketing",
        "Liquidity & Ecosystem Growth",
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: web3Icon1,
    },
    {
      title: "Community & Ecosystem Engagement",
      titleWidth: "250.539px",
      description: "Web3 projects live and die by their community.",
      points: [
        "Platform Operations",
        "Live Engagement",
        "Growth Mechanics",
        "Moderation & Security",
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: web3Icon2,
    },
    {
      title: (
        <span>
          Strategic PR, <br /> Content & Authority
        </span>
      ),
      titleWidth: "254.441px",
      description:
        "We translate complex blockchain concepts into compelling narratives that build trust with investors, developers, and the media.",
      points: [
        "Technical Literacy",
        "KOL & Influencer Outreach",
        "Media & Brand Identity",
        "Strategic Partnerships",
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: web3Icon3,
    },
    {
      title: (
        <span>
          Growth Advertising <br />& Acquisition
        </span>
      ),
      titleWidth: "232.004px",
      description:
        "We utilize specialized Web3 advertising channels and technical optimization to attract high-intent users and liquidity without relying on traditional, restrictive ad platforms.",
      points: [
        "Native Ad Platforms",
        "Blockchain SEO",
        "Onboarding Optimization",
        "Performance Tracking",
      ],
      bg: "#509AAF",
      titleColor: "#FFF",
      textColor: "#FFF",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: web3Icon4,
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
      {/* ── HEADER ─────────────────────────────────────────────────────────────── */}
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
          padding: isMobile ? "26px 20px" : isTablet ? "16px 32px" : "20px 40px",
          boxSizing: "border-box",
          transform: `translateY(${showHeader ? "0" : "-120%"})`,
          transition: "transform 0.3s ease",
          background: "rgba(67, 106, 117, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* LOGO */}
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

        {/* CENTER NAV — desktop only */}
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
                  background:
                    hoveredNav === item.label
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
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* CONTACT US BUTTON — desktop only */}
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

        {/* HAMBURGER BUTTON — mobile & tablet only */}
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

        {/* MOBILE DROPDOWN MENU */}
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
                zIndex: -1,
              }}
            >
              {/* Services sub-list */}
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

      {/* ── HERO OUTER CONTAINER ── */}
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: isMobile ? "calc(100vh - 100px)" : "475px",
          justifyContent: "center",
          alignItems: "center",
          background: "#2A394A",
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
          {/* LEFT SIDE CONTENT */}
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
                Smart Marketing & Ecosystem Strategy
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
                Prime Ambit helps blockchain projects launch, grow, and scale
                their ecosystems through strategic Web3 marketing. From token
                launch strategy and community building to crypto-native
                advertising and investor relations, we design growth systems
                tailored for decentralized products.
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

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: isMobile ? "100%" : isTablet ? "42%" : "469.241px",
              height: isMobile ? "280px" : isTablet ? "320px" : "422.042px",
              flex: isMobile ? "1" : "none",
              aspectRatio: "169/152",
              background: `url(${web3Hero}) transparent center / ${isMobile ? "contain" : "contain"} no-repeat`,
              flexShrink: 0,
            }}
          />
        </div>
      </div>

      {/* ── INTRO SOLUTIONS CONTAINER ── */}
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            width: "100%",
            maxWidth: isDesktop ? "453.465px" : "100%",
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
          Growth Strategies Built for Web3 Ecosystems
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            width: "100%",
            maxWidth: "100%",
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
          We specialize in crypto-native growth strategies that combine
          community engagement, token incentives, on-chain analytics, and
          technical storytelling from pre-launch token strategy to post-launch
          ecosystem expansion.
        </motion.p>
      </div>

      {/* ── BIG WHITE CONTAINER ── */}
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
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Inner layout: left info + right cards */}
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: isMobile || isTablet ? "flex-start" : "center",
              flexDirection: isMobile || isTablet ? "column" : "row",
              gap: "20px",
            }}
          >
            {/* Left side container */}
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
                {/* Points in button form */}
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
                      padding: isMobile
                        ? "4px 8px"
                        : "4px 5.158px 4px 5.063px",
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

                {/* Image */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  style={{
                    height: isMobile ? "220px" : isTablet ? "300px" : "432.374px",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    background: `url(${web3Solution}) transparent 50% / contain no-repeat`,
                  }}
                />

                {/* Description and Button */}
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
                    environment. We'll assess build feasibility and system
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

            {/* Right side container — Cards grid */}
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
              {aiCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6 + Math.floor(index / 2) * 0.4,
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
                    {/* Heading Detail */}
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
                          width: isMobile ? "calc(100% - 66px)" : card.titleWidth,
                          flexShrink: 0,
                          color: card.titleColor,
                          fontFamily: "Inter, sans-serif",
                          fontSize: isMobile ? "18px" : "22.65px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          letterSpacing: "-0.453px",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ display: "inline-block", textAlign: "left" }}>
                          {card.title}
                        </div>
                      </div>
                    </div>

                    {/* Description Text */}
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

      {/* ── TECHNOLOGIES / PLATFORMS WE USE SECTION ── */}
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
            Platforms & Tools We Use
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
              maxWidth: "900px",
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "center",
              gap: isMobile ? "24px" : "40px",
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            {/* web3Tool1 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              style={{
                width: isMobile ? "140px" : "318.049px",
                height: isMobile ? "30px" : "69.471px",
                background: `url(${web3Tool1}) transparent center / contain no-repeat`,
                flexShrink: 0,
              }}
            />
            {/* galxeLogo */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              style={{
                width: isMobile ? "90px" : "180px",
                height: isMobile ? "18px" : "35.5px",
                background: `url(${galxeLogo}) transparent center / contain no-repeat`,
                flexShrink: 0,
              }}
            />
            {/* web3Tool2 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              style={{
                width: isMobile ? "48px" : "107.969px",
                height: isMobile ? "50px" : "112.009px",
                background: `url(${web3Tool2}) transparent center / contain no-repeat`,
                flexShrink: 0,
              }}
            />
            {/* zealyLogo */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              style={{
                width: isMobile ? "36px" : "75.076px",
                height: isMobile ? "36px" : "75.076px",
                background: `url(${zealyLogo}) transparent center / contain no-repeat`,
                flexShrink: 0,
              }}
            />
            {/* web3Tool3 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              style={{
                width: isMobile ? "40px" : "84.548px",
                height: isMobile ? "38px" : "81.357px",
                background: `url(${web3Tool3}) transparent center / contain no-repeat`,
                flexShrink: 0,
              }}
            />
            {/* web3Tool4 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              style={{
                width: isMobile ? "80px" : "172.318px",
                height: isMobile ? "16px" : "35.002px",
                background: `url(${web3Tool4}) transparent center / contain no-repeat`,
                flexShrink: 0,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── WEB3 PROJECTS WE SUPPORT SECTION ── */}
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
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
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
            Web3 Projects We Support
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
            Prime Ambit AI systems support organizations across
          </motion.p>

          {/* INDUSTRIES ICONS CONTAINER */}
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
            {[
              {
                icon: web3Industry1,
                label: "Ecosystem Foundations",
                width: isMobile ? "48px" : "80px",
                height: isMobile ? "48px" : "80px",
              },
              {
                icon: web3Industry2,
                label: "DeFi Protocols",
                width: isMobile ? "48px" : "80px",
                height: isMobile ? "48px" : "80px",
              },
              {
                icon: web3Industry3,
                label: "Digital Culture",
                width: isMobile ? "48px" : "80px",
                height: isMobile ? "48px" : "80px",
              },
              {
                icon: web3Industry4,
                label: "Consumer dApps",
                width: isMobile ? "48px" : "80px",
                height: isMobile ? "48px" : "80px",
              },
            ].map((industry, index) => (
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
                      width: industry.width,
                      height: industry.height,
                      background: `url(${industry.icon}) no-repeat center / contain`,
                    }}
                  />
                </div>
                <span
                  style={{
                    maxWidth: isMobile ? "auto" : "160px",
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

      {/* ── CALL TO ACTION SECTION ── */}
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: isMobile
            ? "48px 24px 60px"
            : isTablet
              ? "56px 40px 72px"
              : "67px 67px 92px 67px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "100%",
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
                lineHeight: isMobile ? "34px" : "38px",
                letterSpacing: isMobile ? "-1px" : "-1.833px",
                margin: 0,
              }}
            >
              Scale Your Web3 Ecosystem Today
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
              Ready to turn code into a thriving, decentralized community? Let's
              design a hyper-targeted growth strategy that attracts high-intent
              users, optimizes token incentives, and scales your protocol
              securely.
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
