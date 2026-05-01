import React, { useState, useEffect, useRef } from "react";
import roadmap1 from "../../assets/images/Roadmap1.png";
import roadmap2 from "../../assets/images/Roadmap2.png";
import roadmap3 from "../../assets/images/Roadmap3.png";
import roadmap4 from "../../assets/images/Roadmap4.png";

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const scrollAccumulatorRef = useRef(0);
  const ignoreWheelRef = useRef(false);
  const isSnappingRef = useRef(false);
  const activeRef = useRef(0);
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  const roadmapData = [
    {
      title: "Strategic Discovery",
      tag: "Web3",
      desc: "We define your project's tokenomics, game theory, and technical requirements to choose the optimal chain (L1 vs L2).",
      img: roadmap1,
      size: "w-[380px] h-[500px]",
      pos: "right-[-24px] top-1/2 -translate-y-1/2",
      mobileSize: "w-[160px] h-[240px]",
      mobilePos: "right-[-12px] bottom-[-20px]",
    },
    {
      title: "Precision Engineering",
      tag: "App Development",
      desc: "We specialize in building secure smart contracts and high-performance application layers with a strong focus on reliability, security, and scalability.",
      img: roadmap2,
      size: "w-[320px] h-[300px]",
      pos: "right-[70px] top-[0px]",
      mobileSize: "w-[140px] h-[160px]",
      mobilePos: "right-[20px] bottom-[-10px]",
    },
    {
      title: "Rigorous Auditing",
      tag: "Audits",
      desc: "Trust is our currency. We conduct deep-dive internal peer reviews and stress-test contracts on multiple Testnets.",
      img: roadmap3,
      size: "w-[380px] h-[380px]",
      pos: "right-[-10px] top-[-50px]",
      mobileSize: "w-[150px] h-[150px]",
      mobilePos: "right-[-30px] bottom-[-20px]",
    },
    {
      title: "Deployment & Evolution",
      tag: "Coding & Web development",
      desc: "We manage Mainnet deployment and provide post-launch support, from data indexing to gas fee optimization.",
      img: roadmap4,
      size: "w-[410px] h-[340px]",
      pos: "right-[0px] top-[-20px]",
      mobileSize: "w-[160px] h-[160px]",
      mobilePos: "right-[0px] bottom-[-15px]",
    },
  ];

  const current = roadmapData[active];
  const SCROLL_THRESHOLD = 220;

  useEffect(() => {
    [roadmap1, roadmap2, roadmap3, roadmap4].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const handleWheel = (e) => {
      if (ignoreWheelRef.current) return;

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionHeight = rect.height;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      const currentActive = activeRef.current;
      const isAtFirstCard = currentActive === 0;
      const isAtLastCard = currentActive === roadmapData.length - 1;

      const enteredFromTop =
        sectionTop <= viewportHeight * 0.4 &&
        sectionTop >= -sectionHeight * 0.6;

      const enteredFromBottom =
        sectionBottom >= viewportHeight * 0.6 &&
        sectionBottom <= viewportHeight + sectionHeight * 0.6;

      const sectionInZone = enteredFromTop || enteredFromBottom;

      if (sectionInZone) {
        const perfectTop = Math.abs(sectionTop) <= 20;

        if (!perfectTop) {
          e.preventDefault();
          if (!isSnappingRef.current) {
            isSnappingRef.current = true;
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            scrollAccumulatorRef.current = 0;
            setTimeout(() => {
              isSnappingRef.current = false;
            }, 700);
          }
          return;
        }

        const shouldExitDown =
          isAtLastCard &&
          scrollingDown &&
          scrollAccumulatorRef.current >= SCROLL_THRESHOLD;

        const shouldExitUp =
          isAtFirstCard &&
          scrollingUp &&
          scrollAccumulatorRef.current <= -SCROLL_THRESHOLD;

        if (shouldExitDown || shouldExitUp) {
          scrollAccumulatorRef.current = 0;
          ignoreWheelRef.current = true;
          isSnappingRef.current = true;

          // Brief resistance pause — lets the user feel the section "release"
          // before the page begins moving, eliminating the abrupt jump
          setTimeout(() => {
            const targetSection = shouldExitDown
              ? section.nextElementSibling
              : section.previousElementSibling;

            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            } else {
              window.scrollBy({
                top: shouldExitDown ? window.innerHeight : -window.innerHeight,
                behavior: "smooth",
              });
            }

            setTimeout(() => {
              ignoreWheelRef.current = false;
              isSnappingRef.current = false;
            }, 1000);
          }, 180);

          return;
        }
        scrollAccumulatorRef.current += e.deltaY;
        e.preventDefault();

        if (
          scrollingDown &&
          scrollAccumulatorRef.current >= SCROLL_THRESHOLD &&
          !isAtLastCard
        ) {
          const next = currentActive + 1;
          setActive(next);
          activeRef.current = next;
          scrollAccumulatorRef.current = 0;
        }

        if (
          scrollingUp &&
          scrollAccumulatorRef.current <= -SCROLL_THRESHOLD &&
          !isAtFirstCard
        ) {
          const prev = currentActive - 1;
          setActive(prev);
          activeRef.current = prev;
          scrollAccumulatorRef.current = 0;
        }
      } else {
        scrollAccumulatorRef.current = 0;
      }
    };

    document.body.style.overflowX = "hidden";
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflowX = "";
    };
  }, []);

  const handleStepClick = (index) => {
    setActive(index);
    activeRef.current = index;
    scrollAccumulatorRef.current = 0;
  };

  return (
    <section ref={sectionRef} className="relative bg-white md:min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-24">
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
              className="
    text-[14px] leading-[22px]
    md:text-[18px]
    lg:text-[22.65px] lg:leading-[24px]
  "
            >
              We take clear and defined steps into our process and cater to the
              project with utmost precision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="hidden lg:block lg:col-span-5 lg:-ml-[48px]">
            <ul className="flex flex-col items-start w-[326px] space-y-6">
              {roadmapData.map((item, index) => (
                <StepItem
                  key={index}
                  title={item.title}
                  active={active === index}
                  onClick={() => handleStepClick(index)}
                />
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex lg:col-span-7 justify-end">
            <div className="relative w-[680px] h-[280px] rounded-[16px] border border-[#509AAF] p-8 overflow-hidden translate-x-[32px]">
              <div className="flex flex-col items-start w-[240px] gap-2 relative z-10">
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
                    setActive((prev) => prev + 1);
                  } else if (deltaX > 0 && active > 0) {
                    setActive((prev) => prev - 1);
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

              {/* TEXT LEFT + IMAGE RIGHT (mobile only) */}
              <div className="flex items-start justify-between gap-4">
                {/* LEFT TEXT */}
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

                {/* RIGHT IMAGE */}
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
