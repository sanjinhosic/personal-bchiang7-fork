import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Hexagon Shape */}
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 67 78 22"
        />
        {/* Initials */}
        <text
          x="39"
          y="58"
          fill="currentColor"
          fontSize="45px"
          fontFamily="Calibre, sans-serif"
          fontWeight="bold"
          textAnchor="middle">
          SH
        </text>
      </g>
    </g>
  </svg>
);

export default IconLogo;
