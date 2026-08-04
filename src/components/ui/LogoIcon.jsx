import React from 'react';

export function LogoIcon({ className = "w-8 h-8", color = "#E2C08D" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="square"
    >
      {/* Corner Brackets */}
      <path d="M14 26 V14 H26" />
      <path d="M86 26 V14 H74" />
      <path d="M14 74 V86 H26" />
      <path d="M86 74 V86 H74" />

      {/* Diagonal Starburst Lines */}
      <path d="M28 28 L72 72" strokeWidth="1.8" />
      <path d="M72 28 L28 72" strokeWidth="1.8" />

      {/* Center Axis Lines */}
      <path d="M50 8 V92" strokeWidth="1.8" />
      <path d="M8 50 H92" strokeWidth="1.8" />

      {/* Outline Cross */}
      <path d="M43 22 H57 V43 H78 V57 H57 V78 H43 V57 H22 V43 H43 Z" strokeWidth="2.5" fill="#09090B" />
    </svg>
  );
}
