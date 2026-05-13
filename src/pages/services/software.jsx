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
      description: "We focus on creating stable foundations rather than disposable prototypes.",
      points: [
        "SaaS & Multi-tenant Applications",
        "MVP Architecture",
        "Product Dashboards",
        "Growth Kits"
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
      description: "We specialize in building the \"connective tissue\" of modern business operations.",
      points: [
        "Custom Enterprise Software",
        "API Design",
        "Third-Party Integrations",
        "Data & Reporting"
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
      description: "We build high-performance mobile interfaces that act as seamless extensions of your core system architecture",
      points: [
        "Cross-Platform Excellence",
        "Secure Ecosystems",
        "Mobile Workflows"
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
      description: "Every system we build is designed for long-term health, focusing on the underlying architecture that keeps platforms running under load.",
      points: [
        "Operational Observability",
        "System Boundaries",
        "Scalable Backend Foundations"
      ],
      bg: "#509AAF",
      titleColor: "#FFF",
      textColor: "#FFF",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: softwareIcon4,
    }
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "2714px",
        background: "#436A75",
        display: "flow-root",
        paddingTop: "100px",
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
          justifyContent: "center",
          alignItems: "center",
          gap: "280px",
          padding: "20px 40px",
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
      </header>

      {/* ── HERO OUTER CONTAINER ── */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "475px",
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
            height: "100%",
            padding: "0 237.898px 0 237.902px",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          {/* LEFT SIDE CONTENT */}
          <div
            style={{
              display: "flex",
              width: "429px",
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
                fontSize: "59.3px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "54px",
                letterSpacing: "-4px",
                margin: 0,
              }}
            >
              Our Services
            </motion.h1>

            <div
              style={{
                display: "flex",
                width: "429px",
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
                  fontSize: "22.65px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "160.5%",
                  margin: 0,
                }}
              >
                Software Platforms
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                style={{
                  width: "399.539px",
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "160.5%",
                  margin: 0,
                }}
              >
                Prime Ambit builds production-ready AI systems that turn complex
                operations into intelligent, predictable workflows. From agentic
                workflow automation to enterprise knowledge assistants, we
                design AI solutions that plug into real processes and unlock
                data driven growth.
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
                  Start a Build
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
              width: "474.661px",
              height: "527.855px",
              aspectRatio: "116/129",
              background: `url(${softwareHero}) lightgray 50% / cover no-repeat`,
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
          padding: "60px 61.22px",
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
            color: "#D6DBC7",
            fontFamily: "Inter, sans-serif",
            fontSize: "36.65px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "38px",
            letterSpacing: "-1.833px",
            width: "388.645px",
            margin: 0,
            maxWidth: "100%",
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
            width: "1302px",
            color: "#FFF",
            fontFamily: "Inter, sans-serif",
            fontSize: "22.65px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "24px",
            letterSpacing: "-0.453px",
            margin: 0,
            maxWidth: "100%",
          }}
        >
          We design and build modern software platforms for the real world. Web
          applications, SaaS products, and enterprise systems that focus on
          architecture, usability, and operational reliability from first product 
          versions to large scale platforms.
        </motion.p>
      </div>

      {/* ── BIG WHITE CONTAINER ── */}
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 61.22px 80px 61.22px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1296px",
            maxWidth: "100%",
            height: "650px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            background: "#FFF",
            boxSizing: "border-box",
          }}
        >
          {/* Inner content for the white container will go here */}
          <div
            style={{
              display: "flex",
              width: "1255.005px",
              alignItems: "center",
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
                  }
                }
              }}
              style={{
                width: "519px",
                height: "610px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "519px",
                  height: "610px",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Points in button form */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "4px 5.158px 4px 5.063px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "6px",
                      border: "1px solid #000",
                      color: "#000",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "-0.1px",
                    }}
                  >
                    easy deployment
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "4px 15.5px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "6px",
                      border: "1px solid #000",
                      color: "#000",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "-0.1px",
                    }}
                  >
                    Scalability
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "4px 11.5px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "6px",
                      border: "1px solid #000",
                      color: "#000",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "-0.1px",
                    }}
                  >
                    Reliability
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  style={{
                    height: "432.374px",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    background: `url(${productEngineeringSolution}) transparent 74.18px 34.462px / 71.413% 84.059% no-repeat`,
                  }}
                />

                {/* Description and Button */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
                  style={{
                    width: "509.188px",
                    height: "110.575px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "509.188px",
                      height: "60.493px",
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
                    Building a Product That Needs Structure?<br />
                    Share your product scope, current stage (idea, MVP, v1+), and architecture<br />
                    environment. We’ll assess build feasibility and system alignment.
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

            {/* Right side container */}
            <div
              style={{
                display: "flex",
                width: "716px",
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
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + (index * 0.1), 
                    ease: "easeOut" 
                  }}
                  style={{
                    display: "flex",
                    width: "348px",
                    height: "295px",
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
                      height: "275px",
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
                        width: "328px",
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
                          width: "220.465px",
                          flexShrink: 0,
                          color: card.titleColor,
                          fontFamily: "Inter, sans-serif",
                          fontSize: "22.65px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          letterSpacing: "-0.453px",
                        }}
                      >
                        {card.title}
                      </div>
                    </div>

                    {/* Description Text */}
                    <div
                      style={{
                        display: "flex",
                        width: "328px",
                        height: "173px",
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
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {card.points.map((point, i) => (
                          <div key={i}>{i + 1}. {point}</div>
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

      {/* ── TECHNOLOGIES WE WORK SECTION ── */}
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
            height: "375px",
            padding: "60.837px 340px 79.873px 340px",
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
              fontSize: "36.65px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "38px",
              letterSpacing: "-1.833px",
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
                transition: { staggerChildren: 0.2 }
              }
            }}
            style={{
              display: "flex",
              width: "837px",
              height: "155.692px",
              maxWidth: "100%",
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "center",
              gap: "65px",
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "178px", height: "102px", background: `url(${techLogo7}) transparent center / contain no-repeat` }} />
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "98px", height: "102px", background: `url(${techLogo8}) transparent center / contain no-repeat` }} />
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "93px", height: "102px", background: `url(${techLogo9}) transparent center / contain no-repeat` }} />
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "121px", height: "102px", background: `url(${techLogo10}) transparent center / contain no-repeat` }} />
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "87px", height: "93px", background: `url(${techLogo11}) transparent center / contain no-repeat` }} />
          </motion.div>
        </div>
      </div>

      {/* ── INDUSTRIES WE SUPPORT SECTION ── */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "425px",
          justifyContent: "center",
          background: "#2A394A",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1440px",
            height: "100%",
            paddingTop: "48.4px",
            paddingLeft: "66.49px",
            paddingRight: "66.49px",
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
              fontSize: "36.65px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "38px",
              letterSpacing: "-1.833px",
              margin: 0,
            }}
          >
            Industries We Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: "778.137px",
              maxWidth: "100%",
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "22.65px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "24px",
              letterSpacing: "-0.453px",
              margin: 0,
            }}
          >
            Prime Ambit software systems support organizations across
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
                transition: { staggerChildren: 0.15 }
              }
            }}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "100px",
              marginTop: "80px",
            }}
          >
            {[
              { icon: financeIcon, label: "FinTech", width: "60px", height: "60px" },
              { icon: marketingIcon, label: "Growth & Platforms", width: "80px", height: "80px" },
              { icon: logisticsIcon, label: "Logistics & Ops", width: "80px", height: "80px" },
              { icon: healthIcon, label: "Health Systems", width: "71.667px", height: "65.008px" },
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}
              >
                <div style={{ display: "flex", height: "80px", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: industry.width, height: industry.height, background: `url(${industry.icon}) no-repeat center / contain` }} />
                </div>
                <span style={{ maxWidth: "160px", textAlign: "center", color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "22.65px", fontWeight: 300, lineHeight: "24px", letterSpacing: "-0.453px" }}>{industry.label}</span>
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
          padding: "67px 67px 92px 67px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1301.508px",
            maxWidth: "100%",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "35px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "25px", width: "100%" }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                width: "100%",
                color: "#D6DBC7",
                fontFamily: "Inter, sans-serif",
                fontSize: "36.65px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "38px",
                letterSpacing: "-1.833px",
                margin: 0,
              }}
            >
              Build Intelligent Systems for Your Business
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
                fontSize: "22.65px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "160.5%",
                margin: 0,
              }}
            >
              Whether you are starting with complex automation or scaling enterprise platforms, Prime Ambit helps you design and deploy systems that create measurable operational impact.
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
