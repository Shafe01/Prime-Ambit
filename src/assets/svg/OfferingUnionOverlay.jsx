import React from "react";

export default function OfferingUnionOverlay(props) {
  const CARD_PATH =
    "M266.225 22.4191H170.302C161.995 22.4191 154.338 18.1272 150.289 11.2009C146.496 4.71247 139.323 0.691861 131.542 0.691861H36.2234C16.6179 0.691861 0.724468 15.87 0.724468 34.5931V173.368C0.724468 192.091 16.6179 207.269 36.2234 207.269H266.225C285.83 207.269 301.724 192.091 301.724 173.368V56.3203C301.724 37.5972 285.83 22.4191 266.225 22.4191ZM266.225 21.7272C286.23 21.7272 302.448 37.2151 302.448 56.3203V173.368C302.448 192.473 286.23 207.961 266.225 207.961H36.2234C16.2178 207.961 0 192.473 0 173.368V34.5931C0 15.4879 16.2178 0 36.2234 0H131.542C139.586 0 147 4.15626 150.922 10.8636C154.843 17.571 162.258 21.7272 170.302 21.7272H266.225Z";

  return (
    <svg
      width="303"
      height="208"
      viewBox="0 0 303 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* backdrop blur inside shape */}
      <foreignObject x="-30" y="-30" width="362.448" height="267.961">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            clipPath: "url(#bgblur_overlay_clip)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>

      <g>
        {/* MAIN BORDER GRADIENT (figma linear) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={CARD_PATH}
          fill="url(#paint0_linear)"
        />

        {/* RADIAL WHITE HIGHLIGHT */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={CARD_PATH}
          fill="url(#paint1_radial)"
        />
      </g>

      <defs>
        <clipPath id="bgblur_overlay_clip" transform="translate(30 30)">
          <path d={CARD_PATH} />
        </clipPath>

        {/* LINEAR BORDER GRADIENT — exact figma */}
        <linearGradient
          id="paint0_linear"
          x1="43.5257"
          y1="-7.42719"
          x2="264.402"
          y2="180.128"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2276" stopColor="#C4ECF7" stopOpacity="0.52" />
          <stop offset="0.4951" stopColor="#509AAF" stopOpacity="1" />
          <stop offset="0.8712" stopColor="#93D2E4" stopOpacity="0.1" />
        </linearGradient>

        {/* RADIAL WHITE GLOW */}
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(149.55 -126.881 184.529 267.57 45.1998 201.153)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
