import React, { useEffect, useRef, useState } from "react";

export default function StatsStrip() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-20"
    >
      <div className="flex justify-center">
        <div
          className="
            w-[340px] md:w-[740px] lg:w-[1295px]
            py-[16px] lg:py-[48px]
            flex
            justify-center
            rounded-[16px] lg:rounded-[32px]
            bg-[#D6DBC7]
          "
        >
          <div
            className="
              flex
              w-auto lg:w-[736px]
              justify-center
              items-center
              gap-4 md:gap-12 lg:gap-[100px]
            "
          >
            <Stat value="25+" label="Systems Delivered" start={startCount} />
            <Stat
              value="10+"
              label="Production Deployments"
              start={startCount}
            />
            <Stat value="5+" label="Platforms Scaled" start={startCount} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, start }) {
  const [count, setCount] = useState(0);
  const hasPlus = value.includes("+");
  const target = parseInt(value.replace("+", ""));

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1000; // animation speed
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="
          text-[#2A394A]
          font-medium
          text-[14px]
          leading-[24px]
          md:text-[20px]
          md:leading-[32px]
          lg:text-[36.65px]
          lg:leading-[40px]
        "
      >
        {count}
        {hasPlus ? "+" : ""}
      </div>

      <div
        className="
          mt-1
          text-[#436A75]
          font-normal
          text-[8px]
          leading-[14px]
          md:text-[14px]
          md:leading-[18px]
          lg:text-[14px]
          lg:leading-[20px]
        "
      >
        {label}
      </div>
    </div>
  );
}
