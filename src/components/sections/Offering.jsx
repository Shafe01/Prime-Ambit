import React from "react";
import UnionBase from "../../assets/svg/OfferingUnionBase.jsx";
import UnionOverlay from "../../assets/svg/OfferingUnionOverlay.jsx";
import OfferingBG from "../../assets/images/OfferingBG.png";

// NEW: small blue rectangle asset (you said it's in assets/icons)
import OfferingRectangle from "../../assets/icons/OfferingRectangle.svg";

// CARD ICONS (left → right)
import CleanCodeIcon from "../../assets/icons/clean-code.svg";
import FastDeliveryIcon from "../../assets/icons/fast-delivery.svg";
import ModernTechIcon from "../../assets/icons/modern-tech.svg";
import TransparentPricingIcon from "../../assets/icons/transparent-pricing.svg";

export default function Offering() {
  return (
    <section
      id="offering"
      className="relative text-white"
      style={{
        background: `url(${OfferingBG}) lightgray 50% / cover no-repeat`,
        width: "100%",
      }}
    >
      {/* Mobile: px-6 pt-12 pb-20 | Tablet: px-12 pt-14 pb-32 | Desktop: px-18 pt-16 pb-44 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-18 pt-6 sm:pt-14 lg:pt-16 pb-20 sm:pb-32 lg:pb-44">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16 flex flex-col items-center">
          <div
            className="text-[5.35px] sm:text-sm"
            style={{
              alignSelf: "stretch",
              color: "#FFFFFF",
              textAlign: "center",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              marginBottom: "6px",
            }}
          >
            Our offerings
          </div>

          {/* Mobile: 28px | Tablet: 32px | Desktop: 36.65px */}
          <h2 className="mt-2 text-white text-[22.65px] sm:text-[32px] lg:text-[36.65px] leading-[6px] sm:leading-[36px] lg:leading-[40px] font-normal tracking-[-0.9px]">
            Why Prime Ambit
          </h2>

          {/* Mobile: adjust width and font size */}
          <p
            className="
    mt-3 px-4 sm:px-0
    w-full max-w-[181.128px] lg:max-w-[568.045px] mx-auto
    text-white text-center font-normal font-[Inter]
    text-[8.65px] leading-[11px]
    lg:text-[22.65px] lg:leading-[28px]
  "
          >
            <span className="hidden lg:inline">
              Small team, senior execution brings faster decisions, cleaner
              delivery.
            </span>

            <span className="lg:hidden">
              Small team, senior execution brings faster decisions, cleaner
              delivery.
            </span>
          </p>
        </div>

        {/* Cards - Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-12 lg:gap-36 items-end justify-items-center">
          <FeatureCard
            icon={CleanCodeIcon}
            title="Clean Code"
            description="Maintainable, well-documented codebases built to last."
            mobileDescription="Maintainable, well-
            documented 
            codebases built to last." // YOU CAN EDIT THIS
          />

          <FeatureCard
            icon={FastDeliveryIcon}
            title="Faster Delivery"
            description={
              <>
                Streamlined <br /> processes that get <br /> you to market
                quickly.
              </>
            }
            mobileDescription="Streamlined 
            processes that get 
            you to market quickly." // YOU CAN EDIT THIS
            offset
          />

          <FeatureCard
            icon={ModernTechIcon}
            title="Modern Tech Stacks"
            description={
              <>
                <span className="block">Leveraging AI & small</span>
                <span className="block">battle-tested technologies</span>
                <span className="block">chosen for your needs.</span>
              </>
            }
            mobileDescription="Leveraging AI & battle-
            tested technologies chosen for 
            your needs." // YOU CAN EDIT THIS
          />

          <FeatureCard
            icon={TransparentPricingIcon}
            title="Transparent Pricing"
            description={
              <>Maintainable, well-documented codebases built to last.</>
            }
            mobileDescription="Maintainable, well-
            documented 
            codebases built to last." // YOU CAN EDIT THIS
            offset
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, mobileDescription, offset }) {
  return (
    <div
      className={`
    relative
    w-[302.448px]
    sm:w-[280px]
    lg:w-[302.448px]
    h-[207.961px]
    sm:h-[200px]
    lg:h-[207.961px]
    ${offset ? "sm:translate-y-[50px] lg:translate-y-[100px]" : ""}
    group
  `}
    >
      {/* ===== small blue rectangle behind the folder (z-0) ===== */}
      <img
        src={OfferingRectangle}
        alt=""
        className="absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-5 lg:-top-6 w-[218.972px] sm:w-[200px] lg:w-[218.972px] h-[134.019px] sm:h-[120px] lg:h-[134.019px] z-0 pointer-events-none"
      />

      {/* keep union SVGs (borders/visuals) above the translucent folder so they still control hover focus */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Union base (almost no change on hover) */}
        <UnionBase
          className="
            absolute inset-0 w-full h-full
            opacity-[0.55]
            backdrop-blur-[0px]
            transition-opacity duration-200 ease-linear
            group-hover:opacity-[0.8]
          "
          preserveAspectRatio="xMidYMid meet"
        />

        {/* REAL GLASS — clipped to folder shape */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            transform: "translateZ(0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            background:
              "linear-gradient(117deg, rgba(142,208,227,0.30) 10%, rgba(80,154,175,0.33) 50%, rgba(167,232,250,0.30) 100%)",

            clipPath:
              "path('M302.448 56.3203C302.448 37.215 286.23 21.7272 266.225 21.7272H170.302C162.258 21.7272 154.843 17.571 150.922 10.8636C147 4.15626 139.586 0 131.542 0H36.2234C16.2178 0 0 15.4879 0 34.5931V173.368C0 192.473 16.2178 207.961 36.2234 207.961H266.225C286.23 207.961 302.448 192.473 302.448 173.368V56.3203Z')",
          }}
        />

        {/* Union overlay (controls border focus only) */}
        <UnionOverlay
          className="
            absolute inset-0 w-full h-full
            opacity-[0.18]
            transition-opacity duration-200 ease-linear
            group-hover:opacity-[0.28]
          "
          preserveAspectRatio="xMidYMid meet"
        />
      </div>

      {/* Content - static (no hover effects here). Keep it above everything */}
      <div className="relative z-30 px-4 sm:px-5 lg:px-6 pt-10 sm:pt-7 lg:pt-8">
        <img
          src={icon}
          alt=""
          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mb-3 sm:mb-3.5 lg:mb-4"
        />

        <h3
          className="text-lg sm:text-xl lg:text-[22.65px]"
          style={{
            color: "#FFF",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "1.2",
          }}
        >
          {title}
        </h3>

        {/* Desktop description */}
        <p
          className="hidden lg:block"
          style={{
            width: "175px",
            color: "#2A394A",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "16px",
            marginTop: "8px",
          }}
        >
          {description}
        </p>

        {/* Mobile/Tablet description - YOU CAN EDIT THESE IN THE PARENT COMPONENT */}
        <p
          className="lg:hidden"
          style={{
            maxWidth: "180px",
            color: "#2A394A",
            fontFamily: "Inter",
            fontSize: "13px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "1.3",
            marginTop: "8px",
          }}
        >
          {mobileDescription || description}
        </p>
      </div>
    </div>
  );
}
