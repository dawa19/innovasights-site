import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/695f880c8a9c082921fd53e5/8829ef500_Gemini_Generated_Image_szdbeoszdbeoszdbnobackgrongPNG.png';
const LOGO_WHITE_URL = LOGO_URL;

export function OrbitIcon({ size = 44, className = '' }) {
  return (
    <img
      src={LOGO_URL}
      alt="InnovaSights logo"
      className={className}
      style={{
        width: `${size * 4.4}px`,
        height: `${size}px`,
        objectFit: 'contain',
        objectPosition: 'center',
        display: 'block'
      }}
    />
  );
}

export function OrbitIconWhite({ size = 44, className = '' }) {
  return (
    <img
      src={LOGO_WHITE_URL}
      alt="InnovaSights logo"
      className={className}
      style={{
        width: `${size * 4.4}px`,
        height: `${size}px`,
        objectFit: 'contain',
        objectPosition: 'center',
        display: 'block'
      }}
    />
  );
}

export default function InnovaLogo({ size = 'md', showTagline = false, white = false }) {
  const dimensions = {
    sm: { width: 285, height: 64 },
    md: { width: 400, height: 90 },
    lg: { width: 510, height: 116 }
  };

  const { width, height } = dimensions[size] || dimensions.md;

  return (
    <img
      src={white ? LOGO_WHITE_URL : LOGO_URL}
      alt="InnovaSights - Insight Innovation Impact"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'contain',
        objectPosition: 'center',
        display: 'block',
        backgroundColor: white ? 'rgba(255,255,255,0.96)' : 'transparent',
        borderRadius: white ? '10px' : '0',
        padding: white ? '6px 10px' : '0',
        boxSizing: 'border-box'
      }}
    />
  );
}