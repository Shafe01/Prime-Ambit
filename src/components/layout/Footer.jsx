import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logoWhite.png";

import FacebookIcon from "../../assets/icons/Facebook.svg";
import XIcon from "../../assets/icons/X.svg";
import LinkedInIcon from "../../assets/icons/LinkedIn.svg";
import TelegramIcon from "../../assets/icons/Telegram.svg";
import InstagramIcon from "../../assets/icons/Instagram.svg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });

  return (
    <footer className="w-full flex justify-center bg-[#2A394A]">
      {/* Footer container */}
      <div className="w-full lg:w-[1440px] min-h-[429px] lg:h-[429px] py-[40px] md:py-[50px] lg:py-[60px] flex flex-col items-center">
        {/* Inner container */}
        <div className="w-full max-w-[1280px] px-6 md:px-8 flex flex-col items-start gap-[32px] md:gap-[40px] lg:gap-[48px]">
          {/* Top section */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:justify-between gap-8 lg:gap-0">
            {/* Brand container */}
            <div className="flex flex-col items-start gap-4 lg:gap-5 w-full lg:w-[420px] lg:-ml-6">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src={logo}
                  alt="Prime Ambit"
                  className="w-[180px] md:w-[200px] lg:w-[227.118px] h-auto lg:h-[74.935px] object-contain"
                />
              </Link>

              <p
                className="self-stretch w-full lg:max-w-[380px]"
                style={{
                  color: "rgba(255,255,255,0.70)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                Engineering-first studio building scalable web platforms and
                production-grade blockchain systems.
              </p>

              {/* Subscribe */}
              <div className="mt-2 flex flex-col w-full lg:max-w-[380px]">
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[40px] flex-1 px-4 text-[13px] rounded-[10px] bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none text-white"
                  />

                  <button
                    onClick={() => {
                      if (!email.trim()) {
                        setStatus({
                          type: "error",
                          text: "Please enter your email",
                        });
                        setTimeout(
                          () => setStatus({ type: "", text: "" }),
                          2500,
                        );
                        return;
                      }

                      setStatus({
                        type: "success",
                        text: "Subscribed successfully! 🎉",
                      });

                      setEmail("");
                      setTimeout(() => setStatus({ type: "", text: "" }), 2500);
                    }}
                    className="h-[40px] px-5 text-[13px] rounded-[10px] bg-white text-[#263a4a] font-medium"
                  >
                    Subscribe
                  </button>
                </div>

                {/* MESSAGE BELOW (same as contact form) */}
                <div
                  style={{
                    height: "18px",
                    marginTop: "6px",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    lineHeight: "120%",
                    letterSpacing: "0.2px",
                    textAlign: "left",
                    transition: "opacity .25s ease",
                    opacity: status.text ? 1 : 0,
                    color:
                      status.type === "success"
                        ? "#D6DBC7"
                        : status.type === "error"
                          ? "#CECECE"
                          : "transparent",
                  }}
                >
                  {status.text}
                </div>
              </div>
            </div>

            {/* Links wrapper - Grid on mobile, individual sections on desktop */}
            <div className="w-full lg:w-auto grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between gap-6 md:gap-8 lg:gap-10">
              {/* Services */}
              <div className="flex flex-col items-start gap-3 lg:gap-4 w-full lg:w-[162.67px]">
                <h4
                  style={{
                    alignSelf: "stretch",
                    color: "#FFF",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "24px",
                  }}
                >
                  Services
                </h4>
                <ul className="space-y-2">
                  <Link to="/services/ai-development" style={{ display: "block", color: "rgba(255,255,255,0.70)", fontFamily: "Inter", fontSize: "14px", fontWeight: 400, lineHeight: "20px", textDecoration: "none" }}>AI Development</Link>
                  <Link to="/services/software-development" style={{ display: "block", color: "rgba(255,255,255,0.70)", fontFamily: "Inter", fontSize: "14px", fontWeight: 400, lineHeight: "20px", textDecoration: "none" }}>Software Development</Link>
                  <Link to="/services/marketing-branding" style={{ display: "block", color: "rgba(255,255,255,0.70)", fontFamily: "Inter", fontSize: "14px", fontWeight: 400, lineHeight: "20px", textDecoration: "none" }}>Marketing and Branding</Link>
                </ul>
              </div>

              {/* Web3 */}
              <div className="flex flex-col items-start gap-3 lg:gap-4 w-full lg:w-[162.67px]">
                <h4
                  style={{
                    alignSelf: "stretch",
                    color: "#FFF",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "24px",
                  }}
                >
                  Web3
                </h4>
                <ul className="space-y-2">
                  <Link to="/services/web3-development" style={{ display: "block", color: "rgba(255,255,255,0.70)", fontFamily: "Inter", fontSize: "14px", fontWeight: 400, lineHeight: "20px", textDecoration: "none" }}>Web3 Development</Link>
                  <Link to="/services/web3-marketing" style={{ display: "block", color: "rgba(255,255,255,0.70)", fontFamily: "Inter", fontSize: "14px", fontWeight: 400, lineHeight: "20px", textDecoration: "none" }}>Web3 Marketing</Link>
                </ul>
              </div>

              {/* Company */}
              <div className="flex flex-col items-start gap-3 lg:gap-4 w-full lg:w-[162.67px]">
                <h4
                  style={{
                    alignSelf: "stretch",
                    color: "#FFF",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "24px",
                  }}
                >
                  Company
                </h4>
                <ul className="space-y-2">
                  <li
                    onClick={() => {
                      const section = document.getElementById("offering");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    style={{
                      flex: "1 0 0",
                      color: "rgba(255,255,255,0.70)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20px",
                      cursor: "pointer",
                    }}
                  >
                    About
                  </li>
                  <li
                    onClick={() => {
                      const section = document.getElementById("process");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    style={{
                      flex: "1 0 0",
                      color: "rgba(255,255,255,0.70)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20px",
                      cursor: "pointer",
                    }}
                  >
                    Process
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="flex flex-col items-start gap-3 lg:gap-4 w-full lg:w-[162.67px]">
                <h4
                  style={{
                    alignSelf: "stretch",
                    color: "#FFF",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "24px",
                  }}
                >
                  Contact
                </h4>
                <ul className="space-y-2">
                  <li
                    onClick={() => {
                      const section = document.getElementById("contact-cta");
                      if (section)
                        section.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      flex: "1 0 0",
                      color: "rgba(255,255,255,0.70)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20px",
                      cursor: "pointer",
                    }}
                  >
                    Get in Touch
                  </li>
                  <li
                    onClick={() => {
                      const section = document.getElementById("contact-cta");
                      if (section)
                        section.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      flex: "1 0 0",
                      color: "rgba(255,255,255,0.70)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20px",
                      cursor: "pointer",
                    }}
                  >
                    Careers
                  </li>
                  <li
                    onClick={() => {
                      const section = document.getElementById("contact-cta");
                      if (section)
                        section.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      flex: "1 0 0",
                      color: "rgba(255,255,255,0.70)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20px",
                      cursor: "pointer",
                    }}
                  >
                    Partners
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="w-full lg:w-[calc(100%+24px)] lg:-ml-6 pt-4 md:pt-5 lg:pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {/* Left: copyright + address */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <p
                className="text-center md:text-left"
                style={{
                  color: "rgba(255,255,255,0.50)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                {String.fromCharCode(169)} 2026 Prime Ambit. All rights
                reserved.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=400-A+4th+Floor+12+Ajit+Singh+House+Yusuf+Sarai+Commercial+Complex+New+Delhi+110016"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[6px] text-center md:text-left -ml-1"
                style={{ textDecoration: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.50)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span
                  style={{
                    color: "rgba(255,255,255,0.50)",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  <span className="md:hidden">Address</span>
                  <span className="hidden md:inline">
                    400-A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai
                    Commercial Complex, Near Green Park Metro Station Exit-2,
                    New Delhi - 110016
                  </span>
                </span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/primeambit/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] flex items-center justify-center rounded-full bg-white/10"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] object-contain"
                />
              </a>

              {/* X */}
              <a
                href="https://x.com/primeambit/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] flex items-center justify-center rounded-full bg-white/10"
              >
                <img
                  src={XIcon}
                  alt="X"
                  className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] object-contain"
                />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/PrimeAmbit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] flex items-center justify-center rounded-full bg-white/10"
              >
                <img
                  src={TelegramIcon}
                  alt="Telegram"
                  className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/primeambit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] flex items-center justify-center rounded-full bg-white/10"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] object-contain"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/primeambit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] flex items-center justify-center rounded-full bg-white/10"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
