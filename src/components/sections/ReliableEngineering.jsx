import React from "react";
import ReliableEngineeringGrid from "../../assets/svg/ReliableEngineeringGrid";

export default function ReliableEngineering() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, #2A394A 0.05%, #436A75 24.52%, #509AAF 60.39%, #D6DBC7 110.65%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1295px] mx-auto px-6 lg:px-6 pt-6 md:pt-20 lg:pt-24 pb-0 lg:-mt-4">
        {/* Heading + description */}
        <div className="max-w-none lg:ml-[-48px]">
          <h2
            className="text-white font-normal 
  text-[22.65px] md:text-[48px] 
  leading-[40px] md:leading-[52px]
  w-[360.611px] md:w-[520px]"
            style={{ fontFamily: "Inter" }}
          >
            Reliable Engineering Built for Growth
          </h2>

          <p
            className="text-white font-light mt-6 md:mt-8 text-[14px] md:text-[28px] leading-[26px] md:leading-[36px]"
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter",
              maxWidth: "90%",
              letterSpacing: "-0.2px",
            }}
          >
            We ship secure, scalable systems trusted by teams that can't afford
            downtime. Our engineering practices prioritize stability,
            observability, and maintainability from day one.
          </p>
        </div>

        {/* Cards row */}
        <div className="pt-12 md:pt-20 lg:pt-28 lg:mr-7 flex justify-center">
          <div className="flex flex-col items-center md:items-stretch md:flex-row md:flex-wrap lg:flex-nowrap gap-4 md:gap-5 lg:gap-[26px] w-full lg:w-[1295.5px] lg:h-[210px] rounded-[36px] p-0">
            {[
              {
                id: "01",
                title: "2x faster",
                desc: "Rapid MVP deployment to get you to market before the competition.",
              },
              {
                id: "02",
                title: "99.9%",
                desc: "Auto-scaling systems that handle massive traffic spikes seamlessly.",
              },
              {
                id: "03",
                title: "100%",
                desc: "Mandatory end-to-end audits and rigorous automated vulnerability testing.",
              },
              {
                id: "04",
                title: "Weekly",
                desc: "Consistent feature rollouts to keep your product ahead of the curve.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="relative w-[310px] h-[210px] md:w-[calc(50%-10px)] lg:w-[310px] md:h-[200px] lg:h-[210px] flex items-center justify-center rounded-[36px] bg-transparent group"
              >
                {/* CARD WITH KNOCKOUT NUMBER */}
                <svg
                  className="absolute inset-0 rounded-[36px]"
                  viewBox="0 0 310 210"
                  preserveAspectRatio="none"
                  width="100%"
                  height="100%"
                >
                  <defs>
                    {/* mask: white = visible, black = transparent */}
                    <mask id={`mask-${item.id}`}>
                      <rect
                        x="0"
                        y="0"
                        width="310"
                        height="210"
                        rx="36"
                        fill="white"
                      />

                      {/* BIG TRANSPARENT NUMBER */}
                      <text
                        x="286"
                        y="98"
                        textAnchor="end"
                        fontFamily="Inter, sans-serif"
                        fontWeight="700"
                        fontSize="100"
                        fill="black"
                      >
                        {item.id}
                      </text>
                    </mask>
                  </defs>

                  {/* CARD BG */}
                  <rect
                    x="0"
                    y="0"
                    width="310"
                    height="210"
                    rx="36"
                    fill="rgba(255,255,255,0.25)"
                    mask={`url(#mask-${item.id})`}
                    className="transition-all duration-200"
                  />

                  {/* HOVER BORDER */}
                  <rect
                    x="1"
                    y="1"
                    width="308"
                    height="208"
                    rx="36"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    className="opacity-0 transition-opacity duration-200 group-hover:opacity-40"
                  />
                </svg>

                {/* Content */}
                <div className="relative px-6 md:px-7 pt-[40px] md:pt-[48px] lg:pt-[56px] text-left">
                  <p
                    className="text-[#D6DBC7] font-medium text-[20px] md:text-[22.65px] leading-[28px] md:leading-[32px]"
                    style={{
                      fontFamily: "Inter",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="mt-2 md:mt-3 text-white font-normal text-[13px] md:text-[14px] leading-[18px] md:leading-[20px]"
                    style={{
                      maxWidth: "272.295px",
                      fontFamily: "Inter",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-16 md:mt-24 lg:mt-36 lg:ml-auto lg:mr-[-110px] w-full md:w-[480px] lg:w-[560px]">
          <p
            className="text-white font-light text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[28px] lg:leading-[30px]"
            style={{
              fontFamily: "Inter",
              letterSpacing: "-0.2px",
            }}
          >
            We combine Web3 expertise and technology to deliver results that
            only meet expectations, but exceed them.
          </p>

          <button
            className="mt-4 lg:ml-1 flex items-center gap-[6px]"
            style={{
              fontFamily: "Inter",
              fontSize: "13.3px",
              lineHeight: "24px",
              color: "#D6DBC7",
            }}
          >
            <span>Learn more</span>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path
                d="M0.514954 0.545166L5.01495 4.79517L0.514954 9.04517"
                stroke="#D6DBC7"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="pt-12 md:pt-16 lg:pt-20 pb-0">
        <ReliableEngineeringGrid />
      </div>

      {/* Desktop-specific styles */}
      <style jsx>{`
        @media (min-width: 1024px) {
          #reliable-engineering .max-w-\\[1295px\\] > div:first-child h2 {
            width: 588px !important;
            font-size: 36.6px !important;
            line-height: 60px !important;
          }
          #reliable-engineering .max-w-\\[1295px\\] > div:first-child p {
            width: 748.473px !important;
            font-size: 36.65px !important;
            font-weight: 300 !important;
            line-height: 45px !important;
            letter-spacing: -0.367px !important;
            margin-top: 48px !important;
            max-width: none !important;
          }
        }
      `}</style>
    </section>
  );
}
