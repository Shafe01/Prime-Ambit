import React, { useState, useEffect, useRef, useCallback } from "react";
import roadmap1 from "../../assets/images/Roadmap1.png";
import roadmap2 from "../../assets/images/Roadmap2.png";
import roadmap3 from "../../assets/images/Roadmap3.png";
import roadmap4 from "../../assets/images/Roadmap4.png";

const roadmapData = [
  {
    title: "Strategic Discovery",
    tag: "Web3",
    desc: "We define your project's tokenomics, game theory, and technical requirements to choose the optimal chain (L1 vs L2).",
    img: roadmap1,
    size: "w-[380px] h-[500px]",
    pos: "right-[-24px] top-1/2 -translate-y-1/2",
    mobileSize: "w-[160px] h-[240px]",
  },
  {
    title: "Precision Engineering",
    tag: "App Development",
    desc: "We specialize in building secure smart contracts and high-performance application layers with a strong focus on reliability, security, and scalability.",
    img: roadmap2,
    size: "w-[320px] h-[300px]",
    pos: "right-[70px] top-[0px]",
    mobileSize: "w-[140px] h-[160px]",
  },
  {
    title: "Rigorous Auditing",
    tag: "Audits",
    desc: "Trust is our currency. We conduct deep-dive internal peer reviews and stress-test contracts on multiple Testnets.",
    img: roadmap3,
    size: "w-[380px] h-[380px]",
    pos: "right-[-10px] top-[-50px]",
    mobileSize: "w-[150px] h-[150px]",
  },
  {
    title: "Deployment & Evolution",
    tag: "Coding & Web development",
    desc: "We manage Mainnet deployment and provide post-launch support, from data indexing to gas fee optimization.",
    img: roadmap4,
    size: "w-[410px] h-[340px]",
    pos: "right-[0px] top-[-20px]",
    mobileSize: "w-[160px] h-[160px]",
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const [pinState, setPinState] = useState("before");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const activeRef = useRef(0);
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  const current = roadmapData[active];

  useEffect(() => {
    roadmapData.forEach(({ img: src }) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    let frameId = null;

    const updateFromScroll = () => {
      frameId = null;

      const section = sectionRef.current;
      if (!section || window.innerWidth < 1024) return;

      const scrollDistance = section.offsetHeight - window.innerHeight;
      if (scrollDistance <= 0) return;

      const sectionStart = section.offsetTop;
      const sectionEnd = sectionStart + scrollDistance;
      const nextPinState =
        window.scrollY < sectionStart
          ? "before"
          : window.scrollY > sectionEnd
            ? "after"
            : "fixed";

      const progress = clamp(
        (window.scrollY - sectionStart) / scrollDistance,
        0,
        1
      );

      // Keep slight breathing room at the start/end while preserving touchpad-native motion.
      const narrativeProgress = clamp((progress - 0.02) / 0.96, 0, 1);
      const nextActive = clamp(
        Math.round(narrativeProgress * (roadmapData.length - 1)),
        0,
        roadmapData.length - 1
      );

      setScrollProgress(narrativeProgress);
      setPinState(nextPinState);
      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }
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

  const handleStepClick = useCallback((index) => {
    setActive(index);
    activeRef.current = index;

    const section = sectionRef.current;
    if (!section || window.innerWidth < 1024) return;

    const scrollDistance = section.offsetHeight - window.innerHeight;
    const narrativeProgress =
      roadmapData.length <= 1 ? 0 : index / (roadmapData.length - 1);
    const sectionProgress = clamp(0.06 + narrativeProgress * 0.88, 0, 1);

    window.scrollTo({
      top: section.offsetTop + scrollDistance * sectionProgress,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white md:min-h-[80vh] lg:h-[300vh]"
      aria-label="Project roadmap"
    >
      <div
        className={`bg-white ${
          pinState === "fixed"
            ? "lg:fixed lg:left-0 lg:top-0 lg:z-10 lg:h-screen lg:w-full"
            : pinState === "after"
              ? "lg:absolute lg:bottom-0 lg:left-0 lg:h-screen lg:w-full"
              : "lg:relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-24 lg:flex lg:h-screen lg:items-center lg:py-0">
        <div className="w-full">
          <div className="flex flex-col items-center gap-[5px] max-w-[468px] lg:max-w-[900px] mx-auto mb-16 -mt-14">
            <div
              style={{
                alignSelf: "stretch",
                color: "#0C0A0899",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
                marginBottom: "4px",
              }}
            >
              Our project strategy
            </div>
            <h2 className="w-full text-[34px] md:text-[36.65px] leading-[30px] md:leading-[50px] font-normal text-[#0C0A08] text-center">
              Project Roadmap
            </h2>

            <div className="pt-[7.5px] flex justify-center px-4">
              <p
                style={{
                  maxWidth: "547.73px",
                  color: "rgba(12,10,8,0.60)",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontWeight: 400,
                }}
                className="text-[14px] leading-[22px] md:text-[18px] lg:text-[22.65px] lg:leading-[24px]"
              >
                We take clear and defined steps into our process and cater to
                the project with utmost precision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="hidden lg:block lg:col-span-5 lg:-ml-[48px]">
              <ul className="flex flex-col items-start w-[326px] space-y-6">
                {roadmapData.map((item, index) => (
                  <StepItem
                    key={item.title}
                    title={item.title}
                    active={active === index}
                    onClick={() => handleStepClick(index)}
                  />
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex lg:col-span-7 justify-end">
              <div className="relative w-[680px] h-[280px] rounded-[16px] border border-[#509AAF] p-8 overflow-hidden translate-x-[32px] shadow-[0_24px_70px_rgba(80,154,175,0.12)] transition-shadow duration-500 ease-out">
                <div className="absolute left-0 top-0 h-[3px] w-full bg-[#509AAF]/10">
                  <div
                    className="h-full bg-[#509AAF] transition-transform duration-300 ease-out origin-left"
                    style={{ transform: `scaleX(${scrollProgress})` }}
                  />
                </div>

                <div
                  key={`copy-${active}`}
                  className="flex flex-col items-start w-[240px] gap-2 relative z-10 animate-[roadmapFade_520ms_cubic-bezier(0.22,1,0.36,1)_both]"
                >
                  <span className="text-[14px] leading-[20px] text-[#2A394A]">
                    {current.tag}
                  </span>

                  <p className="text-[14px] leading-[20px] text-[#436A75]">
                    {current.desc}
                  </p>
                </div>

                <img
                  key={active}
                  src={current.img}
                  alt="roadmap visual"
                  className={`
                    absolute
                    object-cover
                    pointer-events-none
                    animate-[roadmapImage_640ms_cubic-bezier(0.22,1,0.36,1)_both]
                    ${current.size}
                    ${current.pos}
                  `}
                />
              </div>
            </div>

            <div className="lg:hidden col-span-1 flex flex-col items-center gap-6 w-full">
              <div
                className="relative w-full max-w-[500px] h-[320px] md:h-[360px] rounded-[16px] border border-[#509AAF] p-6 md:p-8 overflow-hidden"
                onTouchStart={(e) => {
                  touchStartXRef.current = e.touches[0].clientX;
                  touchStartYRef.current = e.touches[0].clientY;
                }}
                onTouchEnd={(e) => {
                  if (touchStartXRef.current === null) return;

                  const deltaX =
                    e.changedTouches[0].clientX - touchStartXRef.current;
                  const deltaY =
                    e.changedTouches[0].clientY - touchStartYRef.current;

                  if (
                    Math.abs(deltaX) > Math.abs(deltaY) &&
                    Math.abs(deltaX) > 40
                  ) {
                    if (deltaX < 0 && active < roadmapData.length - 1) {
                      handleStepClick(active + 1);
                    } else if (deltaX > 0 && active > 0) {
                      handleStepClick(active - 1);
                    }
                  }

                  touchStartXRef.current = null;
                  touchStartYRef.current = null;
                }}
              >
                <h3 className="text-[20px] md:text-[32px] leading-[36px] md:leading-[40px] font-light tracking-[-1px] text-[#0C0A08] mb-4">
                  {current.title}
                </h3>

                <div className="w-full h-[0.8px] bg-black mb-4" />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`
                      flex flex-col items-start gap-2 relative z-10
                      ${active === 3 ? "max-w-[75%]" : "max-w-[68%]"}
                    `}
                  >
                    <span className="text-[10px] leading-[20px] text-[#2A394A]">
                      {current.tag}
                    </span>

                    <p className="text-[10px] md:text-[15px] leading-[20px] md:leading-[22px] text-[#436A75]">
                      {current.desc}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-end justify-end">
                    <img
                      key={active}
                      src={current.img}
                      alt="roadmap visual"
                      className={`
                        object-cover
                        pointer-events-none
                        ${current.mobileSize}
                        ${active === 0 ? "translate-x-[14px] -translate-y-10" : ""}
                        ${active === 1 ? "translate-x-[8px]" : ""}
                        ${active === 2 ? "translate-x-[20px]" : ""}
                        ${active === 3 ? "translate-x-[10px]" : ""}
                      `}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 justify-center mt-4">
                {roadmapData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      active === index
                        ? "bg-[#509AAF] w-8"
                        : "bg-[#509AAF]/30 hover:bg-[#509AAF]/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ title, active, onClick }) {
  return (
    <li
      onClick={onClick}
      className="flex flex-col items-start gap-4 cursor-pointer group"
    >
      <h3
        className={`w-full text-[36.65px] leading-[40px] font-light tracking-[-1px] transition-colors duration-300
        ${active ? "text-[#0C0A08]" : "text-[#436A75] group-hover:text-black"}`}
      >
        {title}
      </h3>

      <div
        className={`w-[548.75px] h-[0.8px] transition-all duration-300
        ${active ? "bg-black" : "bg-[#2A394A]"}`}
      />
    </li>
  );
}
