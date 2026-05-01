import React from "react";

export default function OfferingUnionBase(props) {
  return (
    <svg
      width="303"
      height="208"
      viewBox="0 0 303 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <foreignObject x="-30" y="-30" width="362.448" height="267.961">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            clipPath: "url(#bgblur_base_clip)",
            WebkitClipPath: "url(#bgblur_base_clip)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>

      <path
        d="M302.448 56.3203C302.448 37.215 286.23 21.7272 266.225 21.7272H170.302C162.258 21.7272 154.843 17.571 150.922 10.8636C147 4.15626 139.586 0 131.542 0H36.2234C16.2178 0 0 15.4879 0 34.5931V173.368C0 192.473 16.2178 207.961 36.2234 207.961H266.225C286.23 207.961 302.448 192.473 302.448 173.368V56.3203Z"
        fill="url(#base_linear)"
        fillOpacity="0.3"
      />

      <defs>
        <clipPath id="bgblur_base_clip" transform="translate(30 30)">
          <path d="M302.448 56.3203C302.448 37.215 286.23 21.7272 266.225 21.7272H170.302C162.258 21.7272 154.843 17.571 150.922 10.8636C147 4.15626 139.586 0 131.542 0H36.2234C16.2178 0 0 15.4879 0 34.5931V173.368C0 192.473 16.2178 207.961 36.2234 207.961H266.225C286.23 207.961 302.448 192.473 302.448 173.368V56.3203Z" />
        </clipPath>

        <linearGradient
          id="base_linear"
          x1="32.3653"
          y1="19.1869"
          x2="296.536"
          y2="218.119"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8ED0E3" stopOpacity="0.9" />
          <stop offset="0.447" stopColor="#509AAF" stopOpacity="0.96" />
          <stop offset="1" stopColor="#A7E8FA" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
