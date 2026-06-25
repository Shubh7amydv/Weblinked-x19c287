import React, { useState, useEffect } from 'react';
import { Play, GraduationCap, Users, Star, FileText } from 'lucide-react';

interface SchoolLogoProps {
  name: string;
  src: string;
}

function SchoolLogo({ name, src }: SchoolLogoProps) {
  const [error, setError] = useState(!src);

  if (error) {
    return (
      <div className="flex items-center justify-center h-[44px] px-5 bg-gray-100/90 border border-gray-200/50 rounded-xl text-gray-500 font-sans font-bold text-xs uppercase tracking-wider whitespace-nowrap select-none">
        {name}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} Logo`}
      onError={() => setError(true)}
      className="h-[44px] w-auto object-contain select-none max-w-[200px]"
    />
  );
}

const schoolLogos = [
  {
    name: 'Delhi Public School',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Delhi_Public_School_logo.svg/200px-Delhi_Public_School_logo.svg.png'
  },
  {
    name: 'Kendriya Vidyalaya',
    src: 'https://upload.wikimedia.org/wikipedia/en/b/b8/Kendriya_Vidyalaya_logo.png'
  },
  {
    name: 'DAV Public School',
    src: 'https://upload.wikimedia.org/wikipedia/en/0/0e/DAV_College_Trust_and_Management_Society_logo.png'
  },
  {
    name: 'Ryan International School',
    src: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Ryan_International_School_logo.png'
  },
  {
    name: 'Amity International School',
    src: ''
  },
  {
    name: 'The Doon School',
    src: 'https://upload.wikimedia.org/wikipedia/en/6/6e/The_Doon_School_crest.png'
  },
  {
    name: 'Bal Bharati Public School',
    src: ''
  },
  {
    name: 'St. Xavier\'s School',
    src: ''
  }
];

interface HeroProps {
  onCtasClick: () => void;
  onPlayVideo: () => void;
  onPageChange?: (id: string) => void;
}

export default function Hero({ onCtasClick, onPlayVideo, onPageChange }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  // 3 high-quality stock images of professionals working on laptops in modern office or school settings
  const carouselImages = [
    {
      id: 0,
      url: '/why-dettroin-1.png',
      alt: 'Illustration of student thinking with gears and charts representing analytics'
    },
    {
      id: 1,
      url: '/why-dettroin-3.png',
      alt: 'Illustration of teacher presenting an ERP dashboard showing attendance, fees and list'
    },
    {
      id: 2,
      url: '/why-dettroin-2.jpg',
      alt: 'Illustration of teacher and students collaborating using a laptop'
    }
  ];

  const statTiles = [
    { number: '11+', label: 'Successful Years', icon: GraduationCap },
    { number: '300+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Customer Satisfaction', icon: Star },
    { number: '1500+', label: 'Reports', icon: FileText },
    { number: '100000+', label: 'Students', icon: GraduationCap }
  ];

  // Auto-slide carousel every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section
      id="home"
      className="relative w-full select-none flex flex-col bg-white overflow-hidden"
    >
      {/* ========================================================
          1. FULL-SCREEN BACKGROUND CAROUSEL (100vw, 80vh)
          ======================================================== */}
      <div className="relative w-full h-[80vh] min-h-[640px] bg-gray-950 overflow-hidden shrink-0 z-0 flex flex-col justify-center">
        
        {/* Background Images with smooth transitions */}
        {carouselImages.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? 'opacity-100 z-1' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-[3500ms] ease-out ${
                activeSlide === index ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Dark semi-transparent overlay so text is clearly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/75 to-gray-950/55 z-10 pointer-events-none" />

        {/* ========================================================
            HERO TEXT CONTENT SITTING DIRECTLY ON THE IMAGE
            ======================================================== */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-[56px] py-8 md:py-12 flex flex-col items-start gap-4 sm:gap-5 pb-20 sm:pb-24">
          
          {/* Top Left Badges & Tags */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              <span className="font-sans font-bold text-xs text-white tracking-wide">
                Trusted by 500+ Schools
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Teacher Apps', 'Live Alerts', 'WhatsApp API'].map((tag, idx) => (
                <span 
                  key={idx} 
                  className="bg-white/10 text-white font-sans font-semibold text-xs px-3 py-1.5 border border-white/20 rounded-md backdrop-blur-md shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bilingual Communication Hub Label */}
          <p className="font-sans font-bold text-xs sm:text-[13px] tracking-[3px] uppercase text-[#ff5252] mt-1">
            BILINGUAL COMMUNICATION HUB
          </p>

          {/* Main Heading */}
          <h1 className="font-display font-extrabold text-[34px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.08] text-white tracking-tight max-w-4xl">
            Empowering Parents & Teachers in <span className="text-[#38b6ff] font-bold italic">Real-Time</span>
          </h1>

          {/* Body Paragraph */}
          <p className="font-sans font-normal text-[15.5px] sm:text-[17.5px] leading-relaxed text-gray-200 max-w-3xl">
            Bring absolute transparency to school operations. Instant homework notices, results, biometric check-in alerts, and direct WhatsApp invoice delivery made fluid.
          </p>

          {/* Three CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-2">
            <button
              onClick={onCtasClick}
              className="bg-brand-red text-white font-sans font-bold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:bg-brand-red-hover hover:-translate-y-0.5 shadow-lg shadow-brand-red/30 hover:shadow-xl w-full sm:w-auto text-center cursor-pointer"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => {
                if (onPageChange) {
                  onPageChange('erp-system');
                }
                setTimeout(() => {
                  const target = document.getElementById('sandbox');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 font-sans font-bold text-[15px] px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto text-center cursor-pointer"
            >
              Live Sandbox
            </button>
            
            <button
              onClick={onPlayVideo}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/25 px-6 py-4 rounded-xl backdrop-blur-md group transition-all shrink-0 w-full sm:w-auto justify-center cursor-pointer"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-red text-white transition-all group-hover:scale-110 shadow-sm">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </span>
              <span className="font-sans font-bold text-[14px] text-white">
                Watch 3-Min Film
              </span>
            </button>
          </div>

        </div>

        {/* Carousel dot indicators sitting inside the image bottom area (above the straddling tiles) */}
        <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
          {carouselImages.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setActiveSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx ? 'w-8 bg-brand-red shadow-sm' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to carousel slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* ========================================================
          2. WHITE SECTION & 5 HORIZONTAL STAT TILES STRADDLING THE BOTTOM EDGE
          ======================================================== */}
      <div className="relative w-full bg-white px-6 lg:px-[56px] pb-12 pt-0 z-20">
        {/* Floating tiles straddling the boundary (top 50% on image, bottom 50% below image) */}
        <div className="relative z-30 max-w-7xl mx-auto -mt-[70px] sm:-mt-[80px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 w-full">
            {statTiles.map((tile, idx) => {
              const IconComp = tile.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.14)] transition-all duration-300 flex flex-col items-center justify-center text-center ${
                    idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="flex items-center justify-center mb-3 text-brand-red">
                    <IconComp className="w-8 h-8 stroke-[1.75]" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1a2a4a] leading-tight">
                    {tile.number}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] font-medium text-gray-500 mt-1">
                    {tile.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trust Bar: Scrolling Logo Marquee Band */}
      <div className="w-full bg-[#f9f9f9] border-y border-[#eeeeee] py-5 select-none z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-[56px] flex flex-col items-center">
          <p className="text-center text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase mb-5">
            TRUSTED BY SCHOOLS ACROSS INDIA
          </p>
          <div className="marquee-container">
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
      </div>

    </section>
  );
}



