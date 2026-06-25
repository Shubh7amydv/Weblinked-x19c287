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
  // Brand color selection based on layout theme
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-950 pb-0.5';
  const taglineColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const dotColor = 'text-[#566c37]'; // Olive green color accent

  return (
    <div className={`flex flex-col items-start select-none ${className}`} id="dettroin-logo-brand">
      {/* Brand logo wordmark */}
      <div className="flex items-center leading-none">
        <span className={`font-display font-extrabold text-[23px] sm:text-[26px] leading-none tracking-tight ${textColor}`}>
          Dettroin<span className={dotColor}>.</span>
        </span>
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

