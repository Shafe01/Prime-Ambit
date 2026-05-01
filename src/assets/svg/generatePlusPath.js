{
  /* SVG GRID OVERLAY */
}
<div className="absolute inset-0 pointer-events-none z-20">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1422 647"
    preserveAspectRatio="xMidYMid meet"
    className="w-full h-full"
    fill="none"
  >
    {/* FIGMA MATCH GROUP */}
    <g opacity="0.8" style={{ mixBlendMode: "soft-light" }}>
      {/* GRID PATH */}
      <path
        d={HERO_GRID_PATH}
        stroke="url(#gridFade)"
        strokeWidth="1.611"
        strokeOpacity="0.6"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* PLUS SIGNS (FIGMA STYLE) */}
      <g stroke="url(#gridFade)" strokeWidth="1.611" strokeOpacity="0.6">
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((__, col) => {
            if (row % 4 !== 0 || col % 4 !== 0) return null;

            const x = CENTER_OFFSET + col * GRID;
            const y = CENTER_OFFSET + row * GRID;
            const half = 9.686 / 2; // EXACT figma size

            return (
              <g key={`${row}-${col}`}>
                <line x1={x - half} y1={y} x2={x + half} y2={y} />
                <line x1={x} y1={y - half} x2={x} y2={y + half} />
              </g>
            );
          }),
        )}
      </g>
    </g>

    {/* RADIAL FADE FROM CENTER (CRUCIAL) */}
    <defs>
      <radialGradient
        id="gridFade"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(711 323.5) rotate(90) scale(330 720)"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
</div>;
