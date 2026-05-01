import React, { useEffect, useRef } from "react";
import OurProcessImage from "../../assets/images/OurProcessimage.png";

import Card1Svg from "../../assets/images/Card1.svg";
import Card2Svg from "../../assets/images/Card2.svg";
import Card3Svg from "../../assets/images/Card3.svg";
import Card4Svg from "../../assets/images/Card4.svg";
import Card5Svg from "../../assets/images/Card5.svg";

export default function OurProcess() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const scrollProgressRef = useRef(0);
  const isInSectionRef = useRef(false);
  const animationFrameRef = useRef(null);
  const accumulatedScrollRef = useRef(0);
  const ignoreWheelRef = useRef(false);
  const isSnappingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTargetXRef = useRef(0);
  const mobileScrollContainerRef = useRef(null);
  // thumb  = the moving filled portion of the bar
  // handle = the small pill/dot that sits at the thumb's trailing edge
  const mobileThumbRef = useRef(null);
  const mobileHandleRef = useRef(null);
  const mobileBarRef = useRef(null);
  const mobileBarDraggingRef = useRef(false);

  // ── DESKTOP: wheel-scroll + mouse-drag ──────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (window.innerWidth <= 768) return;

    const DELTA_SCALE = 0.6;
    const LERP_FACTOR = 0.12;
    const LAST_CARD_PADDING = 24;
    const MAX_EXTRA_CAP = 120;

    let visibleWidth = track.parentElement.clientWidth;
    let totalScrollNeeded = Math.max(0, track.scrollWidth - visibleWidth);

    const calculateScrollNeeded = () => {
      visibleWidth = track.parentElement.clientWidth;
      const baseNeeded = Math.max(0, track.scrollWidth - visibleWidth);
      const lastCard = track.lastElementChild;
      let extra = 0;
      if (lastCard) {
        extra = Math.max(
          0,
          lastCard.offsetLeft +
            lastCard.offsetWidth -
            visibleWidth +
            LAST_CARD_PADDING,
        );
      }
      totalScrollNeeded = Math.max(
        0,
        baseNeeded + Math.min(extra, MAX_EXTRA_CAP),
      );
    };

    calculateScrollNeeded();
    window.addEventListener("resize", calculateScrollNeeded);

    let targetX = 0;
    let currentX = 0;
    let rafId = null;
    const pendingAnim = null;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const animate = () => {
      currentX += (targetX - currentX) * LERP_FACTOR;
      if (Math.abs(targetX - currentX) < 0.5) currentX = targetX;
      track.style.transform = `translateX(-${currentX}px)`;
      rafId = requestAnimationFrame(animate);
    };
    animate();

    track.style.cursor = "grab";
    track.style.userSelect = "none";

    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartTargetXRef.current = targetX;
      track.style.cursor = "grabbing";
      e.preventDefault();
    };
    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      targetX = clamp(
        dragStartTargetXRef.current + (dragStartXRef.current - e.clientX),
        0,
        totalScrollNeeded,
      );
      accumulatedScrollRef.current = targetX;
      scrollProgressRef.current = totalScrollNeeded
        ? targetX / totalScrollNeeded
        : 0;
    };
    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      track.style.cursor = "grab";
    };

    track.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const handleWheel = (e) => {
      if (ignoreWheelRef.current) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const sh = rect.height;
      const down = e.deltaY > 0;
      const up = e.deltaY < 0;

      const inSnapZone =
        (rect.top <= vh * 0.5 && rect.top > -sh * 0.1) ||
        (rect.bottom >= vh * 0.5 && rect.top < 0 && rect.top > -80);
      const perfectLock = Math.abs(rect.top) <= 8;

      if (inSnapZone && !perfectLock) {
        e.preventDefault();
        isInSectionRef.current = false;
        const toward = (down && rect.top > 0) || (up && rect.top < 0);
        if ((toward || Math.abs(rect.top) < 60) && !isSnappingRef.current) {
          isSnappingRef.current = true;
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => {
            isSnappingRef.current = false;
          }, 700);
        }
        return;
      }

      if (!(rect.top <= 8 && rect.top >= -8 && rect.bottom > 0)) {
        isInSectionRef.current = false;
        if (rect.bottom <= 0) {
          targetX = 0;
          currentX = 0;
          accumulatedScrollRef.current = 0;
          scrollProgressRef.current = 0;
          track.style.transform = "translateX(0px)";
        }
        return;
      }

      if (targetX <= 0 && up) {
        isInSectionRef.current = false;
        if (!ignoreWheelRef.current) {
          ignoreWheelRef.current = true;
          isSnappingRef.current = true;
          setTimeout(() => {
            const prev = section.previousElementSibling;
            if (prev)
              prev.scrollIntoView({ behavior: "smooth", block: "start" });
            else
              window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
            setTimeout(() => {
              ignoreWheelRef.current = false;
              isSnappingRef.current = false;
            }, 1000);
          }, 180);
        }
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      isInSectionRef.current = true;
      targetX = clamp(targetX + e.deltaY * DELTA_SCALE, 0, totalScrollNeeded);
      accumulatedScrollRef.current = targetX;
      scrollProgressRef.current = totalScrollNeeded
        ? targetX / totalScrollNeeded
        : 0;

      if (scrollProgressRef.current >= 0.999) {
        targetX = totalScrollNeeded;
        accumulatedScrollRef.current = totalScrollNeeded;
        scrollProgressRef.current = 1;
        isInSectionRef.current = false;
        if (!ignoreWheelRef.current) {
          ignoreWheelRef.current = true;
          isSnappingRef.current = true;
          setTimeout(() => {
            const next = section.nextElementSibling;
            if (next)
              next.scrollIntoView({ behavior: "smooth", block: "start" });
            else
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            setTimeout(() => {
              ignoreWheelRef.current = false;
              isSnappingRef.current = false;
            }, 1000);
          }, 180);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    const handleScroll = () => {
      if (isInSectionRef.current) return;
      const rect = section.getBoundingClientRect();
      if (rect.top > 120) {
        targetX = 0;
        currentX = 0;
        accumulatedScrollRef.current = 0;
        scrollProgressRef.current = 0;
        track.style.transform = "translateX(0px)";
      }
      calculateScrollNeeded();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", calculateScrollNeeded);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      track.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // ── MOBILE: progress bar sync + bar drag ────────────────────
  useEffect(() => {
    const container = mobileScrollContainerRef.current;
    const thumb = mobileThumbRef.current;
    const handle = mobileHandleRef.current;
    const bar = mobileBarRef.current;
    if (!container || !bar) return;

    // Keeps thumb + handle in sync with native scroll
    const syncBar = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;
      const progress = container.scrollLeft / maxScroll;
      const barW = bar.clientWidth;
      const handleW = 28; // arrow svg width
      const travel = barW - handleW;
      const offset = progress * travel;
      if (handle)
        handle.style.transform = `translateX(${offset}px) translateY(-50%)`;
    };

    container.addEventListener("scroll", syncBar, { passive: true });
    syncBar();
    return () => container.removeEventListener("scroll", syncBar);
  }, []);

  // ── MOBILE: nudge hint when section enters view ──────────────
  useEffect(() => {
    const container = mobileScrollContainerRef.current;
    const section = sectionRef.current;
    if (!container || !section || window.innerWidth > 1024) return;

    let hasNudged = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasNudged) {
          hasNudged = true;
          setTimeout(() => {
            container.scrollTo({ left: 80, behavior: "smooth" });
            setTimeout(
              () => container.scrollTo({ left: 0, behavior: "smooth" }),
              700,
            );
          }, 400);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Pointer handler for dragging the bar (defined here so JSX can reference it)
  const handleBarPointerDown = (e) => {
    const bar = mobileBarRef.current;
    const container = mobileScrollContainerRef.current;
    const thumb = mobileThumbRef.current;
    if (!bar || !container) return;

    e.preventDefault();
    bar.setPointerCapture(e.pointerId);
    mobileBarDraggingRef.current = true;

    const scrub = (clientX) => {
      const { left, width } = bar.getBoundingClientRect();
      const handleW = 28;
      const ratio = Math.max(
        0,
        Math.min(1, (clientX - left - handleW / 2) / (width - handleW)),
      );
      container.scrollLeft =
        ratio * (container.scrollWidth - container.clientWidth);
    };

    scrub(e.clientX);

    const onMove = (ev) => {
      if (mobileBarDraggingRef.current) scrub(ev.clientX);
    };
    const onUp = () => {
      mobileBarDraggingRef.current = false;
      bar.removeEventListener("pointermove", onMove);
      bar.removeEventListener("pointerup", onUp);
    };
    bar.addEventListener("pointermove", onMove);
    bar.addEventListener("pointerup", onUp);
  };

  const cardImages = [Card1Svg, Card2Svg, Card3Svg, Card4Svg, Card5Svg];

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
      className="w-full bg-white overflow-hidden pb-12 md:pb-0"
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

      <div className="relative md:h-[80vh]">
        <div className="sticky top-0 flex items-start overflow-hidden pt-10 md:min-h-[100vh]">
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
              className="overflow-x-auto md:overflow-hidden w-[calc(100%+1.5rem)] -ml-6 pl-10 md:ml-0 md:w-full md:pl-[80px]"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Hide webkit scrollbar inline — no global CSS needed */}
              <style>{`.process-track::-webkit-scrollbar{display:none}`}</style>
              <div
                ref={trackRef}
                className="process-track flex gap-6 md:gap-8 will-change-transform"
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
                      className="relative bg-[#1f3442] rounded-xl overflow-hidden w-[300px] md:w-[350px] h-[440px] md:h-[470px]"
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

            {/* ── Mobile progress bar — lg:hidden ── */}
            <div className="lg:hidden w-full px-6 mt-4 pb-2">
              {/*
                mobileBarRef is the full-width interactive zone (tall for easy touch targeting).
                Inside: a 1px track line, a filled thumb that translateX-es as you scroll,
                and a small rounded-pill handle parked at the thumb's right edge.
                All three are position:absolute so they don't affect layout.
              */}
              <div
                ref={mobileBarRef}
                onPointerDown={handleBarPointerDown}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "20px", // invisible hit area — makes dragging easy on mobile
                  cursor: "grab",
                  touchAction: "none", // prevents browser from hijacking the pointer for scroll
                }}
              >
                {/*
                  Handle — a small rounded pill that sits right at the thumb's trailing edge.
                  JS sets its transform to `translateX(offset + thumbWidth) translateY(-50%)`
                  so it always tracks with the thumb end.
                */}
                <div
                  ref={mobileHandleRef}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)", // JS will override
                    willChange: "transform",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="16"
                    viewBox="0 0 28 16"
                    fill="none"
                  >
                    <path
                      d="M0 8H22M22 8L16 3M22 8L16 13"
                      stroke="#2A394A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
