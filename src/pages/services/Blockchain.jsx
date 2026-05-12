import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import blockchainHero from "../../assets/images/blockchain_hero.png";
import solidityLogo from "../../assets/images/tech_logo_1.png";
import ethereumLogo from "../../assets/images/tech_logo_2.png";
import polygonLogo from "../../assets/images/tech_logo_3.png";
import rustLogo from "../../assets/images/tech_logo_4.png";
import hyperledgerLogo from "../../assets/images/tech_logo_5.png";
import ipfsLogo from "../../assets/images/tech_logo_6.png";
import smartContractIcon from "../../assets/images/industry_blockchain_1.png";
import supplyChainIcon from "../../assets/images/industry_blockchain_2.png";
import mediaInteractiveIcon from "../../assets/images/industry_blockchain_3.png";
import enterpriseCoreIcon from "../../assets/images/industry_blockchain_4.png";
import blockchainSolution from "../../assets/images/blockchain_solution.png";
import nodeValidatorIcon from "../../assets/images/infra_blockchain_1.png";
import contractExecutionIcon from "../../assets/images/infra_blockchain_2.png";
import dataIndexingIcon from "../../assets/images/infra_blockchain_3.png";
import walletCustodyIcon from "../../assets/images/infra_blockchain_4.png";
import Footer from "../../components/layout/Footer";

export default function Blockchain() {
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

  const infrastructureCards = [
    {
      title: "Node & Validator Architecture",
      description: "We set up and operate the core execution environment your protocol depends on.",
      points: [
        "Full node deployment and configuration",
        "Validator setup, orchestration, and lifecycle management",
        "RPC endpoint design and traffic handling",
        "High‑availability clustering and redundancy",
        "Monitoring, alerting, and failover strategies"
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: nodeValidatorIcon,
      titleWidth: "184.383px",
    },
    {
      title: "Smart Contract Execution Infrastructure",
      description: "Contracts are only as reliable as the infrastructure they run on.",
      points: [
        "CI/CD pipelines for contract deployment",
        "Upgrade‑safe, versioned deployment frameworks",
        "Multi‑contract architecture and dependency mapping",
        "Event indexing and data capture for on‑chain activity",
        "Cost and execution path optimization"
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: contractExecutionIcon,
      titleWidth: "252.035px",
    },
    {
      title: "Indexing & Data Layers",
      description: "We make on‑chain data usable for products, analytics, and operations.",
      points: [
        "Custom indexers for protocol‑specific needs",
        "Event listeners and stream processors",
        "On‑chain to off‑chain data pipelines",
        "Subgraph‑style architectures and query endpoints",
        "Real‑time analytics feeds and dashboards"
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: dataIndexingIcon,
      titleWidth: "183.824px",
    },
    {
      title: "Wallet & Custody Systems",
      description: "Security is an infrastructure decision, not a feature.",
      points: [
        "MPC integrations and custody workflows",
        "Secure key management setups and policies",
        "Multi‑signature schemes and signing infrastructure",
        "Transaction orchestration and queuing systems",
        "Chain abstraction flows for multi‑chain products"
      ],
      bg: "#509AAF",
      titleColor: "#FFF",
      textColor: "#FFF",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: walletCustodyIcon,
      titleWidth: "203.305px",
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
          background: "#436A75",
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
              height: "365.276px",
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
                lineHeight: "54px", // 91.062%
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
                  width: "341.203px",
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "22.65px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "115%",
                  margin: 0,
                }}
              >
                Web3 Infrastructure & Blockchain Development
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                style={{
                  alignSelf: "stretch",
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "160.5%", // 22.47px
                  margin: 0,
                }}
              >
                Prime Ambit builds scalable blockchain systems, decentralized applications, and tokenized ecosystems that help your organization launch secure, future ready Web3 platforms. From smart contracts and DeFi protocols to modular blockchains and decentralized identity, we engineer the infrastructure behind the next generation of digital economies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  onMouseEnter={() => setHoveredNav("Start a Build")}
                  onMouseLeave={() => setHoveredNav(null)}
                  style={{
                    display: "inline-flex",
                    height: "30.727px",
                    padding: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "16px",
                    background: hoveredNav === "Start a Build" ? "rgba(255, 255, 255, 0.23)" : "#509AAF",
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
                    transition: "background 0.2s ease",
                  }}
                >
                  Start a Build
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            style={{
              width: "582.902px",
              height: "419.427px",
              transform: "rotate(-10.219deg)",
              aspectRatio: "82/59",
              background: `url(${blockchainHero}) transparent -93.267px 0px / 127.826% 100% no-repeat`,
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
          padding: "60px 61.22px", // Updated to match Figma 61.22px margin
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "32px", // Increased gap between heading and description
          boxSizing: "border-box",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{
            width: "392.129px",
            color: "#D6DBC7",
            fontFamily: "Inter, sans-serif",
            fontSize: "36.65px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "38px",
            letterSpacing: "-1.833px",
            margin: 0,
            maxWidth: "100%",
          }}
        >
          Engineering the Foundations of Web3
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
          We specialize in building scalable blockchain platforms, secure smart
          contract systems, decentralized financial applications, and
          privacy-preserving Web3 architectures.
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
                  variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
                  style={{
                    width: "518.969px",
                    height: "432.374px",
                    flexShrink: 0,
                    background: `url(${blockchainSolution}) #FFF 99.428px 1.233px / 61.859% 99.715% no-repeat`,
                  }}
                />

                {/* Description and Button */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
                  style={{
                    width: "519px",
                    height: "110.575px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "519px",
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
                    Running Infrastructure or Planning to Launch?
                    <br />
                    Share your protocol scope, target chain(s), and current
                    infrastructure state. We’ll review your architecture and
                    identify risk surfaces.
                  </div>
                  <div>
                    <Link
                      to="/contact"
                      onMouseEnter={() => setHoveredNav("Review Infrastructure Scope")}
                      onMouseLeave={() => setHoveredNav(null)}
                      style={{
                        display: "inline-flex",
                        height: "40px",
                        padding: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "16px",
                        background: hoveredNav === "Review Infrastructure Scope" ? "rgba(255, 255, 255, 0.23)" : "#509AAF",
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
                        transition: "background 0.2s ease",
                      }}
                    >
                      Review Infrastructure Scope
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
                flexWrap: "wrap",
              }}
            >
              {infrastructureCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + (Math.floor(index / 2) * 0.4), 
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
                          flex: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: card.titleWidth,
                            flexShrink: 0,
                            color: card.titleColor,
                            fontFamily: "Inter, sans-serif",
                            fontSize: "22.65px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "24px",
                            letterSpacing: "-0.453px",
                            textAlign: "left",
                          }}
                        >
                          {card.title}
                        </div>
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
              width: "1004px",
              height: "155.692px",
              maxWidth: "100%",
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "center",
              gap: "70px",
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "109px", height: "109px", aspectRatio: "1/1", borderRadius: "50%", background: `url(${solidityLogo}) transparent center / contain no-repeat` }} />
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "109px", height: "109px", aspectRatio: "1/1", borderRadius: "50%", background: `url(${ethereumLogo}) transparent center / contain no-repeat` }} />
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "109px", height: "109px", aspectRatio: "1/1", borderRadius: "50%", background: `url(${polygonLogo}) transparent center / contain no-repeat` }} />
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "109px", height: "109px", aspectRatio: "1/1", borderRadius: "50%", background: `url(${rustLogo}) transparent center / contain no-repeat` }} />
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "109px", height: "109px", aspectRatio: "1/1", borderRadius: "50%", background: `url(${hyperledgerLogo}) transparent center / contain no-repeat` }} />
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} style={{ width: "109px", height: "109px", aspectRatio: "1/1", borderRadius: "50%", background: `url(${ipfsLogo}) transparent center / contain no-repeat` }} />
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
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
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
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: "778.137px",
              maxWidth: "100%",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "22.65px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "24px",
              letterSpacing: "-0.453px",
              margin: 0,
            }}
          >
            Our blockchain solutions support organizations across multiple sectors
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
            {/* 1. Smart Contract */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", height: "80px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "80px", height: "80px", background: `url(${smartContractIcon}) no-repeat center / contain` }} />
              </div>
              <span style={{ width: "132.852px", textAlign: "center", color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "22.65px", fontWeight: 300, lineHeight: "24px", letterSpacing: "-0.453px" }}>Smart Contract</span>
            </motion.div>

            {/* 2. Supply Chain */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", height: "80px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "80px", height: "80px", background: `url(${supplyChainIcon}) no-repeat center / contain` }} />
              </div>
              <span style={{ width: "128.813px", textAlign: "center", color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "22.65px", fontWeight: 300, lineHeight: "24px", letterSpacing: "-0.453px" }}>Supply Chain</span>
            </motion.div>

            {/* 3. Media & Interactive */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", height: "80px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "80px", height: "80px", background: `url(${mediaInteractiveIcon}) no-repeat center / contain` }} />
              </div>
              <span style={{ width: "110.359px", textAlign: "center", color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "22.65px", fontWeight: 300, lineHeight: "24px", letterSpacing: "-0.453px" }}>Media & Interactive</span>
            </motion.div>

            {/* 4. Enterprise Core */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", height: "85px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "80px", height: "80px", background: `url(${enterpriseCoreIcon}) no-repeat center / contain` }} />
              </div>
              <span style={{ width: "139.301px", textAlign: "center", color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "22.65px", fontWeight: 300, lineHeight: "24px", letterSpacing: "-0.453px" }}>Enterprise Core</span>
            </motion.div>
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
              Build the Next Generation of Decentralized Systems
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
              Prime Ambit helps organizations design and deploy secure blockchain platforms, decentralized applications, and tokenized ecosystems that power the future of digital economies.
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
              onMouseEnter={() => setHoveredNav("CTA Start a Build")}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                display: "inline-flex",
                height: "40px",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "16px",
                background: hoveredNav === "CTA Start a Build" ? "rgba(255, 255, 255, 0.23)" : "#509AAF",
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
                transition: "background 0.2s ease",
              }}
            >
              Start a Build
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
