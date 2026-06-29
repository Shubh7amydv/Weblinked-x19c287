import React from 'react';

interface DettroinLogoProps {
  className?: string;
  showTagline?: boolean;
  theme?: 'light' | 'dark';
}

export default function DettroinLogo({ 
  className = '', 
  showTagline = true, 
  theme = 'light' 
}: DettroinLogoProps) {
  const taglineColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  
  // In the dark theme: invert color, rotate hue, screen blend (transparent bg), and boost green dot.
  // In the light theme: apply SVG morphology (erode) filter to thicken black text, and boost green dot.
  const logoStyle = theme === 'dark' 
    ? 'invert hue-rotate-180 mix-blend-screen saturate-[2.5] brightness-[1.35]' 
    : '[filter:url(#bold-logo-filter)_saturate(2.5)_brightness(1.35)]';

  return (
    <div className={`flex flex-col items-start select-none ${className}`} id="dettroin-logo-brand">
      {/* Hidden SVG Filter to thicken black text in navbar */}
      {theme === 'light' && (
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <filter id="bold-logo-filter">
            <feMorphology operator="erode" radius="0.22" />
          </filter>
        </svg>
      )}

      {/* Brand logo wordmark image */}
      <div className="flex items-center leading-none">
        <img 
          src="/logo.png" 
          alt="Dettroin Logo" 
          className={`h-7 sm:h-8 object-contain ${logoStyle}`}
          referrerPolicy="no-referrer"
        />
      </div>
      {/* Brand tagline aligned underneath */}
      {showTagline && (
        <span 
          className={`font-sans font-medium text-[8.5px] sm:text-[9px] uppercase tracking-wider ${taglineColor} mt-1 block`}
          style={{ letterSpacing: '0.07em' }}
        >
          Simplifying Business, Amplifying Growth
        </span>
      )}
    </div>
  );
}

