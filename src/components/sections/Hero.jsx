import React, { useEffect } from "react";
import heroOverlay from "../../assets/images/HeroOverlay.png";

export default function Hero() {
  useEffect(() => {
    // try to find the header element without forcing changes to header code
    const header =
      document.querySelector(
        "header, #site-header, .site-header, #header, .header, [data-header]",
      ) || null;
    const headerHeight = header ? header.offsetHeight : 96; // fallback if not found
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`,
    );
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-visible">
      {/* Background image extended upward under the header */}
      <img
        src={heroOverlay}
        alt=""
        aria-hidden="true"
        className="absolute left-0 w-screen object-cover -z-10"
        style={{
          top: "-85px", // pull image upward behind header
          height: "calc(100% + 85px)", // extend image height to cover header
        }}
      />

      {/* CONTENT */}
      <div
        className="relative z-20 flex flex-col items-center text-center px-6"
        style={{
          minHeight: "70vh",
          paddingTop: "clamp(160px, 22vh, 220px)",
        }}
      >
        {/* SUBTITLE */}
        <p
          className="text-center"
          style={{
            color: "#FFFFFF",
            fontWeight: 400,
            fontFamily: "Inter",
            marginTop: "27px",
            maxWidth: "784.84px",
            width: "100%",
          }}
        >
          <span
            className="block md:hidden"
            style={{
              width: "296.67px",
              margin: "0 auto",
              fontSize: "5.35px",
              lineHeight: "8px",
            }}
          >
            Built for Real Products
          </span>

          <span
            className="hidden md:block"
            style={{
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            Built for Real Products
          </span>
        </p>

        {/* HEADING */}
        <h1
          className="text-center"
          style={{
            color: "#FFFFFF",
            fontStyle: "normal",
            fontWeight: 400,
            fontFamily: "Inter",
            maxWidth: "784.84px",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <span
            className="block md:hidden"
            style={{
              width: "296.67px",
              margin: "0 auto",
              fontSize: "36.65px",
              lineHeight: "45px",
              letterSpacing: "-2px",
            }}
          >
            Engineers of the
            <br />
            New Internet.
          </span>

          <span
            className="hidden md:block"
            style={{
              fontSize: "95.95px",
              lineHeight: "120px",
              letterSpacing: "-4px",
            }}
          >
            Engineers of the
            <br />
            New Internet.
          </span>
        </h1>

        {/* CTA */}
        {/* CTA */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={() => {
              const section = document.getElementById("contact-cta");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="rounded-full text-white shadow-md"
            style={{
              background: "#233241E6",
            }}
          >
            {/* Mobile Only */}
            <span
              className="inline-flex md:hidden"
              style={{
                height: "32px",
                padding: "8px 16px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
              }}
            >
              Get In Touch!
            </span>

            {/* Tablet + Desktop */}
            <span
              className="hidden md:inline-flex"
              style={{
                padding: "12px 24px",
                fontSize: "14px",
              }}
            >
              Get In Touch!
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
