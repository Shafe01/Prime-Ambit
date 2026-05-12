import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import web3Hero from "../../assets/images/web3_marketing_hero.png";
import web3Tool1 from "../../assets/images/web3_tool_1.png";
import web3Tool2 from "../../assets/images/web3_tool_2.png";
import web3Tool3 from "../../assets/images/web3_tool_3.png";
import web3Tool4 from "../../assets/images/web3_tool_4.png";
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

  const aiCards = [
    {
      title: "Token Strategy & Product Go-To-Market",
      titleWidth: "236.5px",
      description: "We ensure that your launch is not just a singular event, but a sustainable entry into the decentralized economy.",
      points: [
        "Tokenomics & Governance",
        "Launch Execution",
        "Vertical-Specific Marketing",
        "Liquidity & Ecosystem Growth"
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
        "Moderation & Security"
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: web3Icon2,
    },
    {
      title: <span>Strategic PR, <br /> Content & Authority</span>,
      titleWidth: "254.441px",
      description: "We translate complex blockchain concepts into compelling narratives that build trust with investors, developers, and the media.",
      points: [
        "Technical Literacy",
        "KOL & Influencer Outreach",
        "Media & Brand Identity",
        "Strategic Partnerships"
      ],
      bg: "#FFF",
      titleColor: "#2A394A",
      textColor: "#2A394A",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: web3Icon3,
    },
    {
      title: <span>Growth Advertising <br />& Acquisition</span>,
      titleWidth: "232.004px",
      description: "We utilize specialized Web3 advertising channels and technical optimization to attract high-intent users and liquidity without relying on traditional, restrictive ad platforms.",
      points: [
        "Native Ad Platforms",
        "Blockchain SEO",
        "Onboarding Optimization",
        "Performance Tracking"
      ],
      bg: "#509AAF",
      titleColor: "#FFF",
      textColor: "#FFF",
      iconBg: "#509AAF73",
      iconColor: "rgba(80, 154, 175, 0.45)",
      icon: web3Icon4,
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
                  width: "300.633px",
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "22.65px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "160.5%", // 36.353px
                  margin: 0,
                }}
              >
                Web3 Marketing & Ecosystem Growth
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                style={{
                  width: "390.109px",
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "160.5%", // 22.47px
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
                  Start a Build
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            style={{
              width: "469.241px",
              height: "422.042px",
              aspectRatio: "169/152",
              background: `url(${web3Hero}) transparent center / contain no-repeat`,
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
        <h2
          style={{
            width: "388.645px",
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
          Growth Strategies Built for Web3 Ecosystems
        </h2>
        <p
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
          We specialize in crypto-native growth strategies that combine community engagement, token incentives, on-chain analytics, and technical storytelling from pre-launch token strategy to post-launch ecosystem expansion.
        </p>
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
            borderRadius: "0px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
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
            <div
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
                <div
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
                </div>

                {/* Image */}
                <div
                  style={{
                    width: "432.374px",
                    height: "432.374px",
                    flexShrink: 0,
                    aspectRatio: "1/1",
                    background: `url(${web3Solution}) transparent 50% / cover no-repeat`,
                    alignSelf: "center",
                  }}
                />

                {/* Description and Button */}
                <div
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
                </div>
              </div>
            </div>

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
              {aiCards.map((card, index) => (
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
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
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
                          width: card.titleWidth,
                          flexShrink: 0,
                          color: card.titleColor,
                          fontFamily: "Inter, sans-serif",
                          fontSize: "22.65px",
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
          <h2
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
            Platforms & Tools We Use
          </h2>
          
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "65px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ width: "402.309px", height: "87.876px", background: `url(${web3Tool1}) transparent center / contain no-repeat` }} />
            <div style={{ width: "209.75px", height: "157.434px", background: `url(${web3Tool2}) transparent center / contain no-repeat` }} />
            <div style={{ width: "116.912px", height: "112.5px", background: `url(${web3Tool3}) transparent center / contain no-repeat` }} />
            <div style={{ width: "256px", height: "52px", background: `url(${web3Tool4}) transparent center / contain no-repeat` }} />
          </div>
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
          <h2
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
            Web3 Projects We Support
          </h2>
          <p
            style={{
              width: "778.137px",
              height: "74px",
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
            Prime Ambit AI systems support organizations across
          </p>

          {/* INDUSTRIES ICONS CONTAINER */}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "100px",
              marginTop: "32px",
            }}
          >
            {/* 1. Ecosystem Foundations */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", height: "80px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "80px", height: "80px", background: `url(${web3Industry1}) no-repeat center / contain` }} />
              </div>
              <span style={{ color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "22.65px", fontWeight: 300, lineHeight: "24px", letterSpacing: "-0.453px", textAlign: "center", width: "150px" }}>Ecosystem Foundations</span>
            </div>

            {/* 2. DeFi Protocols */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", height: "80px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "80px", height: "80px", background: `url(${web3Industry2}) no-repeat center / contain` }} />
              </div>
              <span style={{ color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "22.65px", fontWeight: 300, lineHeight: "24px", letterSpacing: "-0.453px", textAlign: "center", width: "120px" }}>DeFi Protocols</span>
            </div>

            {/* 3. Digital Culture */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", height: "80px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "80px", height: "80px", background: `url(${web3Industry3}) no-repeat center / contain` }} />
              </div>
              <span style={{ color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "22.65px", fontWeight: 300, lineHeight: "24px", letterSpacing: "-0.453px", textAlign: "center", width: "120px" }}>Digital Culture</span>
            </div>

            {/* 4. Consumer dApps */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", height: "80px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "80px", height: "80px", background: `url(${web3Industry4}) no-repeat center / contain` }} />
              </div>
              <span style={{ color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "22.65px", fontWeight: 300, lineHeight: "24px", letterSpacing: "-0.453px", textAlign: "center", width: "140px" }}>Consumer dApps</span>
            </div>
          </div>
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
            <h2
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
            </h2>
            <p
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
              Whether you are starting with AI automation or scaling enterprise AI, Prime Ambit helps you design and deploy intelligent systems that create measurable operational impact.
            </p>
          </div>

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
        </div>
      </div>

      <Footer />
    </div>
  );
}
