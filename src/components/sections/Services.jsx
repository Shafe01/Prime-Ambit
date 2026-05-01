import React from "react";
import ServicesTopLines from "../../assets/svg/ServicesTopLines";
import servicesBg from "../../assets/images/services1.png";
import servicesBg2 from "../../assets/images/services2.svg";
import services3 from "../../assets/images/services3.png";
import services35 from "../../assets/images/services3.5.png";
import services4 from "../../assets/images/services4.png";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-white/95 text-[#2A394A] overflow-hidden"
    >
      {/* TOP SVG DECORATION */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <ServicesTopLines />
      </div>

      {/* CONTENT */}
      <div className="max-w-[1500px] mx-auto px-4 md:px-6 lg:px-8 pt-20 md:pt-28 lg:pt-32 md:pb-16 relative z-10">
        {/* Headline + subtitle */}
        <div className="text-center max-w-5xl mx-auto mb-12 -mt-4 md:mb-16 lg:mb-20">
          <div className="text-center font-inter text-[6px] md:text-[14px] font-normal leading-[8px] md:leading-[20px] text-[#0C0A0899] mb-1">
            Service Vertical definitions
          </div>
          <h2 className="font-inter text-[22.65px] md:text-[32px] lg:text-[36.65px] leading-[28px] md:leading-[42px] lg:leading-[50px] font-normal tracking-[-0.01px] text-[#0C0A08] text-center px-4">
            An Engineering studio for the modern internet.
          </h2>
          <p className="mt-3 text-center font-inter text-[9px] md:text-[18px] lg:text-[22.65px] font-light leading-[14px] md:leading-[24px] lg:leading-[25px] text-[#0C0A0899] px-4">
            We design, build, and scale end-to-end systems across
            <br className="hidden md:block" />
            Web3 infrastructure, web applications, and growth.
          </p>
        </div>

        {/* Three-card row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-2 mb-8 items-start">
          {/* ARTICLE 1 - Web3 Systems */}
          <article className="w-full lg:col-span-5 flex items-start justify-center lg:justify-start relative lg:-mt-0 lg:translate-x-4">
            {/* OUTER CONTAINER */}
            <div className="w-[calc(100vw-2rem)] max-w-[380px] h-auto min-h-[220px] md:w-full md:max-w-[560px] md:h-auto">
              {/* BORDERED CONTAINER */}
              {/* BORDERED CONTAINER */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden px-6 py-8 md:px-8 h-full md:min-h-[300px]"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid rgba(80, 154, 175, 0.15)",
                }}
              >
                {/* TEXT CONTAINER */}
                <div
                  className="relative z-10 flex flex-col items-start w-full md:w-auto"
                  style={{
                    maxWidth: "320px",
                    gap: "18px",
                  }}
                >
                  {/* HEADING */}
                  <h3
                    className="font-inter font-normal text-black text-[36.65px] md:text-[52px] leading-[44px] md:leading-[54px]"
                    style={{
                      maxWidth: "411.428px",
                      marginTop: "-14px",
                      letterSpacing: "-2.5px",
                    }}
                  >
                    Web3 Systems,
                    <br />
                    Done Properly
                  </h3>

                  {/* PARAGRAPH */}
                  <p
                    className="font-inter font-normal text-black text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]"
                    style={{
                      maxWidth: "443.414px",
                    }}
                  >
                    Prime Ambit is a Web3-focused consulting and execution firm
                    helping founders, protocols, and enterprises design, build,
                    and scale production-grade blockchain systems. We build
                    Operational and growth layers that help products scale
                    adoption and revenue.
                  </p>
                </div>
              </div>
            </div>

            {/* NEWSPAPER IMAGE (TABLET & DESKTOP) */}
            <div
              className="
    block absolute 
    right-[-100px] bottom-[0px] w-[400px] h-[290px]   /* mobile */
    md:right-[-80px] md:bottom-[-10px] md:w-[420px] md:h-[340px]
    lg:right-[-140px] lg:bottom-[10px] lg:w-[460px] lg:h-[420px]
  "
              style={{
                transform: "rotate(-8deg)",
                backgroundImage: `url(${servicesBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                mixBlendMode: "multiply",
                pointerEvents: "none",
              }}
            />
          </article>

          {/* ARTICLE 2 - Core Engineering */}
          <article className="w-full lg:col-span-4 flex items-start justify-center lg:justify-start lg:ml-1">
            <div
              className="relative flex flex-col items-start justify-start 
  w-[calc(100vw-2rem)] max-w-[380px] h-[240px] 
  md:w-full md:max-w-[460px] md:min-h-[340px]"
              style={{
                background: "linear-gradient(180deg, #509AAF 0%, #436A75 100%)",
              }}
            >
              {/* SVG PATTERN (background) */}
              <img
                src={servicesBg2}
                alt=""
                className="absolute inset-0 w-[120%] h-[120%] object-cover pointer-events-none"
                style={{
                  opacity: 0.3,
                }}
              />

              {/* CONTENT */}
              <div
                className="relative z-10 flex flex-col items-start px-8 py-10 md:px-12 md:py-12"
                style={{
                  gap: "12px",
                  maxWidth: "380px",
                }}
              >
                <h3
                  className="font-inter font-normal text-white 
text-[36.65px] leading-[38px] 
md:text-[36.65px] md:leading-[38px]"
                >
                  Core Engineering (Web2 & Web3)
                </h3>

                <p
                  className="font-inter font-normal text-[14px] leading-[16px]"
                  style={{
                    width: "206px",
                    flexShrink: 0,
                    color: "#F5F5F5",
                    fontWeight: 400,
                  }}
                >
                  Build custom APIs, Smart <br />
                  contracts, protocols and <br />
                  decentralized applications
                </p>

                <div
                  className="flex items-center gap-2 mt-1 cursor-pointer"
                  style={{ width: "fit-content" }}
                >
                  <span
                    className="font-inter"
                    style={{
                      color: "#FFFFFF80",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22px",
                    }}
                  >
                    Learn more
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33325 8.00017H12.6665M12.6665 8.00017L7.99994 3.3335M12.6665 8.00017L7.99994 12.6669"
                      stroke="#FFFFFF80"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </article>

          {/* ARTICLE 3 - Product & App Development */}
          <article className="w-full lg:col-span-3 flex items-start justify-center lg:justify-start lg:ml-4">
            <div
              className="relative flex flex-col items-start justify-start w-[calc(100vw-2rem)] max-w-[380px] min-h-[626px] md:min-h-[626px]"
              style={{
                background: "#436A75",
              }}
            >
              {/* TOP IMAGE */}
              <img
                src={services3}
                alt=""
                className="absolute pointer-events-none w-[250px] h-[260px] md:w-[220px] top-[-30px] right-[170px] md:right-[80px]"
                style={{
                  objectFit: "cover",
                }}
              />

              {/* BOTTOM IMAGE */}
              <img
                src={services35}
                alt=""
                className="absolute pointer-events-none w-[460px] md:w-[380px] bottom-[180px] md:bottom-[220px] left-[-20px] md:left-[-60px]"
                style={{
                  maxWidth: "none",
                }}
              />

              {/* LOWER TEXT CONTENT */}
              <div
                className="absolute flex flex-col items-start bottom-[30px] left-[24px] md:left-[32px]"
                style={{
                  gap: "8px",
                }}
              >
                {/* HEADING */}
                <h3
                  className="font-inter font-normal text-[32px] md:text-[36.65px] leading-[34px] md:leading-[38px]"
                  style={{
                    maxWidth: "262px",
                    color: "#D6DBC7",
                    letterSpacing: "-1.833px",
                  }}
                >
                  Product & App Development
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="font-inter font-normal text-[13px] md:text-[13.3px] leading-[20px]"
                  style={{
                    maxWidth: "229px",
                    color: "#FFFFFF",
                  }}
                >
                  Modern web and mobile applications that are powered by UX that
                  speaks for itself.
                </p>

                {/* LEARN MORE */}
                <div className="flex items-center gap-2 mt-1 cursor-pointer">
                  <span
                    className="font-inter"
                    style={{
                      color: "#FFFFFF80",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22px",
                    }}
                  >
                    Learn more
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33325 8.00017H12.6665M12.6665 8.00017L7.99994 3.3335M12.6665 8.00017L7.99994 12.6669"
                      stroke="#FFFFFF80"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </article>

          {/* ARTICLE 4 - Web3 Infrastructure */}
          <article className="w-full lg:col-span-9 lg:col-start-2 flex justify-center lg:justify-start lg:-mt-[380px] lg:-translate-x-[104px] mt-0">
            <div
              className="relative overflow-hidden w-[calc(100vw-2rem)] max-w-[380px] h-[573px] md:w-full md:max-w-[1050px] md:min-h-[343px]"
              style={{
                background: "#436A75",
                marginTop: "0",
              }}
            >
              {/* RIGHT SIDE IMAGE */}
              <img
                src={services4}
                alt=""
                className="pointer-events-none absolute bottom-[-60px] left-1/2 -translate-x-1/2 md:hidden"
                style={{
                  width: "460px",
                  height: "450px",
                  objectFit: "cover",
                }}
              />

              {/* DESKTOP IMAGE */}
              <img
                src={services4}
                alt=""
                className="absolute pointer-events-none hidden md:block"
                style={{
                  right: "-50px",
                  bottom: "-80px",
                  height: "155%",
                  width: "auto",
                  objectFit: "contain",
                }}
              />

              {/* LEFT TAGS UPPER CONTAINER */}
              <div className="absolute left-[24px] md:left-[40px] top-[30px] md:top-[30px] flex flex-wrap gap-[8px] md:gap-[10px] max-w-[90%] md:max-w-[393.05px]">
                {[
                  "production",
                  "state-of-the-art",
                  "easy deployment",
                  "efficient",
                  "scalable",
                  "simple operations",
                ].map((text, i) => (
                  <div
                    key={i}
                    style={{
                      display: "inline-flex",
                      padding: "4px 8.439px 4px 7.441px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "6px",
                      border: "1px solid #D6DBC7",
                      color: "#D6DBC7",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "16px",
                      letterSpacing: "-0.1px",
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>

              {/* LEFT TEXT CONTENT */}
              <div className="absolute left-[24px] md:left-[40px] top-[140px] md:top-[180px]">
                {/* HEADING */}
                <h2
                  className="text-[32px] md:text-[36.65px] leading-[34px] md:leading-[38px]"
                  style={{
                    maxWidth: "328.609px",
                    color: "#D6DBC7",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    letterSpacing: "-1.833px",
                  }}
                >
                  Web3 Infrastructure
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="text-[13px] md:text-[13.3px]"
                  style={{
                    maxWidth: "387px",
                    color: "#FFFFFF",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    lineHeight: "20px",
                    marginTop: "12px",
                  }}
                >
                  Production-grade infrastructure that powers reliable
                  blockchain products.
                </p>

                {/* LEARN MORE */}
                <div className="flex items-center gap-2 mt-[14px] cursor-pointer">
                  <span
                    style={{
                      color: "#FFFFFF80",
                      fontSize: "14px",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: "22px",
                    }}
                  >
                    Learn more
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33325 8.00017H12.6665M12.6665 8.00017L7.99994 3.3335M12.6665 8.00017L7.99994 12.6669"
                      stroke="#FFFFFF80"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Desktop-specific styles for Article 1 */}
      <style jsx>{`
        @media (min-width: 1024px) {
          article:nth-of-type(1) > div {
            width: 560px !important;
            height: 340px !important;
          }
          article:nth-of-type(1) > div > div {
            width: 560px !important;
            height: 340px !important;
          }
          article:nth-of-type(1) h3 {
            font-size: 64px !important;
            line-height: 60px !important;
            letter-spacing: -4px !important;
            width: 411.428px !important;
          }
          article:nth-of-type(1) p {
            width: 443.414px !important;
          }
          article:nth-of-type(2) > div {
            width: 460px !important;
            height: 340px !important;
          }
          article:nth-of-type(2) > div > div:last-child {
            padding: 54px 54px !important;
            width: 380px !important;
          }
          article:nth-of-type(3) > div {
            width: 323px !important;
            height: 717px !important;
          }
          article:nth-of-type(3) img:first-of-type {
            width: 263.976px !important;
            height: 263.976px !important;
            top: -20px !important;
            right: 120px !important;
          }
          article:nth-of-type(3) img:nth-of-type(2) {
            width: 500px !important;
          }
          article:nth-of-type(4) > div {
            width: 1050px !important;
            height: 343px !important;
            margin-top: 30px !important;
          }
          article:nth-of-type(4) .absolute:first-of-type {
            width: 393.05px !important;
            height: 62px !important;
          }
          article:nth-of-type(4) .absolute:first-of-type > div {
            font-size: 14px !important;
            line-height: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
