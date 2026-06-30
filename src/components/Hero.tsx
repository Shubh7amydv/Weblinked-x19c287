import React, { useState } from 'react';
import { Play, GraduationCap, Users, Star, FileText } from 'lucide-react';

interface SchoolLogoProps {
  name: string;
  src: string;
  key?: string;
}

function SchoolLogo({ name, src }: SchoolLogoProps) {
  const [error, setError] = useState(!src);

  if (error) {
    return (
      <div className="flex items-center gap-3 h-[130px] px-10 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/60 rounded-xl text-blue-700 font-sans font-bold text-[28px] uppercase tracking-wider whitespace-nowrap select-none shadow-sm hover:shadow-md transition-all duration-300">
        <GraduationCap className="w-12 h-12 text-blue-600 shrink-0" />
        <span>{name}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-[130px] px-10 bg-white/40 border border-gray-100/50 rounded-xl shadow-xs">
      <img
        src={src}
        alt={`${name} Logo`}
        onError={() => setError(true)}
        className="h-[100px] w-auto object-contain select-none max-w-[520px] transition-all duration-300"
        loading="lazy"
        width="420"
        height="100"
      />
    </div>
  );
}

const schoolLogos = [
  {
    name: 'The Doon School',
    src: '/logo-1.png'
  },
  {
    name: 'Delhi Public School',
    src: '/logo-2.png'
  },
  {
    name: 'DAV Public School',
    src: '/logo-3.png'
  },
  {
    name: 'Amity International School',
    src: '/logo-4.png'
  },
  {
    name: 'Bal Bharati Public School',
    src: '/logo-5.png'
  }
];

interface HeroProps {
  onCtasClick: () => void;
  onPlayVideo: () => void;
  onPageChange?: (id: string) => void;
}

export default function Hero({ onCtasClick, onPlayVideo, onPageChange }: HeroProps) {
  const statTiles = [
    { number: '6+', label: 'Successful Years', icon: GraduationCap },
    { number: '300+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Customer Satisfaction', icon: Star },
    { number: '1500+', label: 'Reports', icon: FileText },
    { number: '100000+', label: 'Students', icon: GraduationCap }
  ];

  return (
    <section
      id="home"
      className="relative w-full select-none flex flex-col bg-white overflow-hidden"
    >
      {/* ========================================================
          1. HERO VISUAL BANNER (Top Section with Image Background)
          ======================================================== */}
      <div className="relative w-full h-[calc(100vh-160px)] min-h-[420px] bg-[#E63030] overflow-hidden shrink-0 z-0 flex flex-col justify-center select-none">
        
        {/* Background Image stretching to cover this banner height */}
        <img
          src="/hero-bg.png"
          alt="School ERP background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
        />

        {/* Soft overlay to ensure white text readability */}
        <div className="absolute inset-0 bg-red-950/5 z-0 pointer-events-none" />

        {/* Text content overlayed directly on the image */}
        <div className="relative z-10 max-w-xl md:max-w-2xl px-6 lg:px-[56px] flex flex-col items-start gap-4 select-none">
          <h1 className="font-display font-extrabold text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] leading-[1.12] text-white tracking-tight">
            An ERP build with <span className="text-white font-bold">Django security</span>. <br />
            A bank level security in school ERP software.
          </h1>

          <p className="font-sans font-medium text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed text-slate-100 max-w-xl">
            Enabling connected schools, unlocking new possibilities. <br />
            An Integrated ecosystem of educational products that work together seamlessly.
          </p>
        </div>
      </div>

      {/* ========================================================
          2. STAT TILES ROW (Floating half-on-image and half-below)
          ======================================================== */}
      <div className="relative w-full px-6 lg:px-[56px] z-20 shrink-0 bg-transparent -mt-8 sm:-mt-11 md:-mt-12 lg:-mt-16">
        <div className="relative z-30 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4 w-full">
            {statTiles.map((tile, idx) => {
              const IconComp = tile.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-slate-200/80 rounded-xl p-3 sm:p-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                    }`}
                >
                  <div className="flex items-center justify-center mb-1.5 text-red-600">
                    <IconComp className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl md:text-2xl text-[#1a2a4a] leading-tight">
                    {tile.number}
                  </h3>
                  <p className="font-sans text-[10px] sm:text-xs font-medium text-gray-500 mt-0.5">
                    {tile.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trust Bar: Scrolling Logo Marquee Band (adjusted padding to accommodate floating tiles) */}
      <div className="w-full bg-[#f4f5f7] border-b border-gray-200/60 pt-16 pb-5 select-none z-10 flex flex-col items-center">
        <p className="text-center text-[11px] font-bold text-red-600 tracking-[0.15em] uppercase mb-5 px-6 lg:px-[56px]">
          TRUSTED BY SCHOOLS ACROSS INDIA
        </p>
        <div className="marquee-container w-full">
          <div className="marquee-track flex items-center">
            {schoolLogos.map((logo, idx) => (
              <SchoolLogo key={`orig-${idx}`} name={logo.name} src={logo.src} />
            ))}
            {schoolLogos.map((logo, idx) => (
              <SchoolLogo key={`dup-${idx}`} name={logo.name} src={logo.src} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}



