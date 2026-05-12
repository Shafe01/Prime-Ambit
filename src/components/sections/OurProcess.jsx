import React, { useEffect, useRef, useState } from "react";
import OurProcessImage from "../../assets/images/OurProcessimage.png";

import Card1Svg from "../../assets/images/Card1.svg";
import Card2Svg from "../../assets/images/Card2.svg";
import Card3Svg from "../../assets/images/Card3.svg";
import Card4Svg from "../../assets/images/Card4.svg";
import Card5Svg from "../../assets/images/Card5.svg";

const cardImages = [Card1Svg, Card2Svg, Card3Svg, Card4Svg, Card5Svg];

export default function OurProcess() {
  const [pinState, setPinState] = useState("before");
  const [mobileActive, setMobileActive] = useState(0);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const mobileScrollContainerRef = useRef(null);

  // DESKTOP: pinned, progress-driven horizontal narrative.
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (window.innerWidth < 1024) return;

    let frameId = null;
    let visibleWidth = 0;
    let totalScrollNeeded = 0;
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const calculateScrollNeeded = () => {
      const container = track.parentElement;
      visibleWidth = container.clientWidth;
      totalScrollNeeded = Math.max(0, container.scrollWidth - visibleWidth);
    };

    const updateFromScroll = () => {
      frameId = null;
      calculateScrollNeeded();

      const scrollDistance = section.offsetHeight - window.innerHeight;
      if (scrollDistance <= 0) return;

      const sectionStart = section.offsetTop;
      const sectionEnd = sectionStart + scrollDistance;
      const currentY = window.scrollY;

      const nextPinState =
        currentY < sectionStart
          ? "before"
          : currentY > sectionEnd
            ? "after"
            : "fixed";
      const progress = clamp(
        (currentY - sectionStart) / scrollDistance,
        0,
        1,
      );
      const narrativeProgress = clamp((progress - 0.02) / 0.96, 0, 1);

      track.style.transform = `translate3d(-${
        narrativeProgress * totalScrollNeeded
      }px, 0, 0)`;
      setPinState(nextPinState);
    };

    const requestUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);
  // MOBILE: sync the polished step indicator with native snap scrolling.
  useEffect(() => {
    const container = mobileScrollContainerRef.current;
    if (!container) return;

    const syncActiveStep = () => {
      const card = container.querySelector("[data-process-card]");
      if (!card || !trackRef.current) return;

      const gap = parseFloat(window.getComputedStyle(trackRef.current).gap) || 0;
      const stride = card.getBoundingClientRect().width + gap;
      const nextActive = Math.round(container.scrollLeft / stride);
      setMobileActive(Math.max(0, Math.min(cardImages.length - 1, nextActive)));
    };

    container.addEventListener("scroll", syncActiveStep, { passive: true });
    window.addEventListener("resize", syncActiveStep, { passive: true });
    syncActiveStep();

    return () => {
      container.removeEventListener("scroll", syncActiveStep);
      window.removeEventListener("resize", syncActiveStep);
    };
  }, []);

  const handleMobileStepClick = (index) => {
    const container = mobileScrollContainerRef.current;
    const card = container?.querySelector("[data-process-card]");
    if (!container || !card || !trackRef.current) return;

    const gap = parseFloat(window.getComputedStyle(trackRef.current).gap) || 0;
    const stride = card.getBoundingClientRect().width + gap;
    container.scrollTo({ left: index * stride, behavior: "smooth" });
  };

  const tag = (top, left) => ({
    position: "absolute",
    top,
    left,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px",
    height: "20px",
    borderRadius: "89px",
    background: "rgba(255,255,255,0.50)",
    fontSize: "9px",
    fontWeight: 300,
    lineHeight: "20px",
    color: "#000",
    whiteSpace: "nowrap",
  });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden pb-12 md:pb-0 lg:h-[300vh] lg:pb-0"
    >
      <div
        className={`bg-white lg:flex lg:flex-col lg:justify-center lg:pb-24 ${
          pinState === "fixed"
            ? "lg:fixed lg:left-0 lg:top-0 lg:z-10 lg:h-screen lg:w-full"
            : pinState === "after"
              ? "lg:absolute lg:bottom-0 lg:left-0 lg:h-screen lg:w-full"
              : "lg:relative"
        }`}
      >
      <div className="max-w-[1295px] mx-auto px-6 pt-12 md:pt-24 pb-2">
        <div className="flex flex-col items-center -mt-8">
          <div
            className="text-center text-[8.65px] leading-[16px] md:text-[14px] md:leading-[20px]"
            style={{
              width: "468px",
              height: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#0C0A0899",
              fontFamily: "Inter",
              fontWeight: 400,
            }}
          >
            Our design philosophy
          </div>
          <h2
            className="text-center text-[22.65px] leading-[30px] md:text-[36.65px] md:leading-[50px]"
            style={{
              color: "#2A394A",
              fontFamily: "Inter",
              fontWeight: 400,
              letterSpacing: "-0.9px",
            }}
          >
            Our Process
          </h2>
          <p
            className="text-center w-[155px] mx-auto text-[8.65px] leading-[12px] md:w-auto md:text-[22.65px] md:leading-[40px]"
            style={{ color: "#4B5768", fontFamily: "Inter", fontWeight: 400 }}
          >
            A proven methodology refined across hundreds of projects.
          </p>
        </div>
      </div>

      <div className="relative md:h-[80vh] lg:h-auto">
        <div className="flex items-start overflow-hidden pt-10 md:min-h-[100vh] lg:min-h-0 lg:pt-8">
          <div className="w-full pl-6 md:pl-[calc((100%-1295px)/2-80px)] pr-0 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 md:gap-6 items-start h-full">
            {/* Left image — desktop only */}
            <div className="hidden lg:flex flex-col items-start mt-20">
              <img
                src={OurProcessImage}
                alt="Our Process"
                className="object-contain w-[280px] md:w-[420px] h-auto"
                style={{ width: "420px", height: "270px" }}
              />
              <div
                className="mt-8 ml-[140px] inline-flex items-center gap-[10px] cursor-pointer"
                style={{
                  color: "#0B5572",
                  fontFamily: "Inter",
                  fontSize: "13.3px",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                >
                  <path
                    d="M5.25 0.54541L0.75 4.79541L5.25 9.04541"
                    stroke="#0B5572"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Learn our Process
              </div>
            </div>

            {/* Cards scroll container */}
            <div
              ref={mobileScrollContainerRef}
              className="process-scroll overflow-x-auto lg:overflow-hidden w-screen -ml-6 px-6 lg:ml-0 lg:w-full lg:px-0 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Hide webkit scrollbar inline — no global CSS needed */}
              <style>{`.process-scroll::-webkit-scrollbar,.process-track::-webkit-scrollbar{display:none}`}</style>
              <div
                ref={trackRef}
                className="process-track flex gap-4 md:gap-8 lg:pr-10 will-change-transform"
                style={{ width: "max-content", transition: "none" }}
              >
                {cardImages.map((cardImg, i) => {
                  const content = [
                    {
                      num: "01",
                      title: "Discovery",
                      desc: "Understanding your goals, constraints, and success criteria.",
                    },
                    {
                      num: "02",
                      title: "Architecture",
                      desc: "Designing scalable systems and technical specifications.",
                    },
                    {
                      num: "03",
                      title: "Design + Build",
                      desc: "Iterative development with continuous feedback loops.",
                    },
                    {
                      num: "04",
                      title: "Testing",
                      desc: "Comprehensive QA, security reviews, and performance optimization.",
                    },
                    {
                      num: "05",
                      title: "Launch",
                      desc: "Deployment, monitoring setup, and handover documentation.",
                    },
                  ];
                  const item = content[i];
                  return (
                    <div
                      key={i}
                      data-process-card
                      className="relative shrink-0 snap-center bg-[#1f3442] rounded-xl overflow-hidden w-[calc(100vw-48px)] max-w-[350px] h-[430px] md:w-[350px] md:h-[470px]"
                      style={{ width: "350px", height: "470px" }}
                    >
                      <div className="absolute top-[40px] left-[40px] flex items-start gap-4">
                        <div
                          style={{
                            width: "33px",
                            height: "32px",
                            borderRadius: "9999px",
                            border: "1px solid rgba(255,255,255,0.03)",
                            background:
                              "linear-gradient(0deg, rgba(80,154,175,0.34) 0%, rgba(80,154,175,0.34) 100%), rgba(255,255,255,0.10)",
                            backdropFilter: "blur(11.4px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transform: "rotate(-90deg)",
                          }}
                        >
                          <span
                            style={{
                              transform: "rotate(90deg)",
                              color: "#2A394A",
                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontWeight: 500,
                              lineHeight: "20px",
                            }}
                          >
                            {item.num}
                          </span>
                        </div>
                        <div>
                          <div
                            style={{
                              marginTop: "6px",
                              color: "#FFFFFF",
                              fontFamily: "Inter",
                              fontSize: "22.65px",
                              fontWeight: 500,
                              lineHeight: "24px",
                            }}
                          >
                            {item.title}
                          </div>
                          <div
                            style={{
                              width: "182px",
                              marginTop: "40px",
                              marginLeft: "-20px",
                              color: "#FFFFFF",
                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontWeight: 400,
                              lineHeight: "20px",
                              opacity: 0.95,
                            }}
                          >
                            {item.desc}
                          </div>
                        </div>
                      </div>

                      {i === 0 && (
                        <div className="absolute left-[60px] bottom-[160px] z-20">
                          <div style={tag("-40px", "-12px")}>
                            Success Metrics
                          </div>
                          <div style={tag("-5px", "-30px")}>Audit Report</div>
                          <div style={tag("30px", "-2px")}>User Persona</div>
                          <div style={tag("65px", "-30px")}>
                            Market Research
                          </div>
                        </div>
                      )}
                      {i === 1 && (
                        <div className="absolute left-[65px] bottom-[160px] z-20">
                          <div style={tag("-80px", "100px")}>User Flow</div>
                          <div style={tag("-45px", "135px")}>
                            Technical Specs
                          </div>
                          <div style={tag("-10px", "170px")}>Data Modeling</div>
                          <div style={tag("25px", "135px")}>
                            API Integration
                          </div>
                          <div style={tag("60px", "175px")}>Sitemap</div>
                        </div>
                      )}
                      {i === 2 && (
                        <div className="absolute left-[70px] bottom-[165px] z-20">
                          <div style={tag("-85px", "0px")}>High-Fi Mockups</div>
                          <div style={tag("-50px", "60px")}>
                            Component Library
                          </div>
                          <div style={tag("-15px", "120px")}>Frontend Dev</div>
                          <div style={tag("20px", "180px")}>Backend Logic</div>
                        </div>
                      )}
                      {i === 3 && (
                        <div className="absolute left-[70px] bottom-[165px] z-20">
                          <div style={tag("-50px", "-45px")}>
                            Usability Testing
                          </div>
                          <div style={tag("-15px", "-10px")}>Bug Tracking</div>
                          <div style={tag("20px", "-45px")}>Security Audit</div>
                          <div style={tag("55px", "-5px")}>
                            UAT (User Acceptance)
                          </div>
                          <div style={tag("90px", "-45px")}>
                            Performance Check
                          </div>
                        </div>
                      )}
                      {i === 4 && (
                        <div className="absolute left-[70px] bottom-[165px] z-20">
                          <div style={tag("-50px", "170px")}>Deployment</div>
                          <div style={tag("-15px", "140px")}>
                            Final Handover
                          </div>
                          <div style={tag("20px", "120px")}>
                            Live Monitoring
                          </div>
                          <div style={tag("55px", "130px")}>Documentation</div>
                          <div style={tag("90px", "150px")}>
                            Post-Launch Support
                          </div>
                        </div>
                      )}

                      <div className="absolute bottom-[-78px] left-0 w-full flex items-end justify-center z-10">
                        <div
                          style={{
                            width: "350px",
                            height: "420px",
                            transform: "rotate(90deg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={cardImg}
                            alt="card visual"
                            style={{
                              transform: "rotate(-90deg)",
                              objectFit: "contain",
                              width:
                                i === 0
                                  ? "420px"
                                  : i === 1
                                    ? "335px"
                                    : i === 2
                                      ? "430px"
                                      : "330px",
                              height: "auto",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile step indicator */}
            <div className="lg:hidden flex items-center justify-center gap-2 mt-5 pb-2">
              {cardImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleMobileStepClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    mobileActive === index
                      ? "w-7 bg-[#2A394A]"
                      : "w-2 bg-[#2A394A]/25"
                  }`}
                  aria-label={`Show process step ${index + 1}`}
                />
              ))}
            </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
