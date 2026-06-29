import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface SandboxIframeProps {
  url: string;
  title: string;
}

function SandboxIframe({ url, title }: SandboxIframeProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(0.65);
  const [wrapperHeight, setWrapperHeight] = React.useState(520);

  React.useEffect(() => {
    const handleResize = () => {
      if (wrapperRef.current) {
        const containerWidth = wrapperRef.current.offsetWidth;
        const iframeWidth = 1440; // Desktop design scale baseline
        const calculatedScale = containerWidth / iframeWidth;

        if (calculatedScale > 0) {
          setScale(calculatedScale);
          // Scale original 900px vertical space design layout baseline
          const calculatedHeight = Math.max(320, Math.round(900 * calculatedScale));
          setWrapperHeight(calculatedHeight);
        }
      }
    };

    handleResize();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && wrapperRef.current) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(wrapperRef.current);
    } else {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full overflow-hidden bg-white"
      style={{ height: `${wrapperHeight}px` }}
    >
      <iframe
        src={url}
        title={title}
        className="absolute top-0 left-0 border-none origin-top-left"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-cookies allow-popups"
        style={{
          width: '1440px',
          height: `${scale > 0 ? Math.round(wrapperHeight / scale) : 900}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      />
    </div>
  );
}

interface ServicesPortalProps {
  onPageChange?: (id: string) => void;
  onCtasClick?: () => void;
}

export default function ServicesPortal({ onPageChange, onCtasClick }: ServicesPortalProps) {

  const demos = [
    {
      id: 'demo-1',
      url: 'https://demoschool1.onrender.com/',
      label: 'Demo 01 — Primary School Portal',
      heading: 'Clean. Structured. Parent-Friendly.',
      body: 'A complete school portal designed for clarity. Parents can navigate announcements, fee updates, and academic calendars without friction. Built with accessibility and mobile responsiveness as the foundation — not an afterthought.'
    },
    {
      id: 'demo-2',
      url: 'https://santsara-public-school-2.vercel.app/',
      label: 'Demo 02 — Institution Branding Portal',
      heading: 'Where Tradition Meets Modern Design.',
      body: 'This portal captures the heritage and credibility of an established institution while giving it a contemporary digital presence. Every section is designed to build trust — from admissions to faculty profiles.'
    },
    {
      id: 'demo-3',
      url: 'https://abcschooldemo.vercel.app/',
      label: 'Demo 03 — Full-Feature School Website',
      heading: 'Everything a School Website Should Be.',
      body: 'Gallery, notices, results, about us, contact — all in one cohesive design. This demo shows our ability to handle content-heavy school websites without sacrificing visual appeal or loading speed.'
    }
  ];

  const handleScrollToDemos = () => {
    const target = document.getElementById('demos-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetInTouch = () => {
    if (onPageChange) {
      onPageChange('faqs-contact');
    }
    setTimeout(() => {
      const contactSection = document.getElementById('faq-contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div id="web-portals-page" className="bg-bg-offwhite min-h-screen">

      {/* ========================================================
          1. HERO SECTION (Top of Page)
          ======================================================== */}
      <section 
        className="relative pt-4 lg:pt-5 pb-6 px-6 lg:px-[56px] text-center overflow-hidden flex flex-col items-center justify-center text-white select-none"
        style={{
          background: 'linear-gradient(to right, #D90707, #A30505)'
        }}
      >
        {/* Subtle grid lines background pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05]" 
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 24px)',
            backgroundSize: '32px 32px'
          }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="font-sans font-bold text-[10px] tracking-[2.5px] uppercase text-red-200 mb-2.5">
            PORTFOLIO SHOWCASE
          </p>
          <h1 className="font-display font-extrabold text-[30px] sm:text-[38px] tracking-tight leading-[1.2]">
            We Don't Just Build Websites. We Build <span className="text-yellow-300 font-black">Digital Identities</span>
          </h1>
          <p className="font-sans font-medium text-red-100/90 text-[13.5px] sm:text-[14.5px] leading-relaxed mt-4 max-w-2xl mx-auto">
            Every school, every institution, every business has a story. Dettroin turns that story into a web experience your audience remembers. Browse our live school portal demos below — fully functional, fully interactive.
          </p>
          
          <div className="pt-6 flex justify-center">
            <button
              onClick={handleScrollToDemos}
              className="group flex flex-col items-center gap-2 font-sans font-semibold text-xs uppercase tracking-widest text-white hover:text-yellow-300 transition-colors focus:outline-none cursor-pointer"
              aria-label="Scroll to interactive demos"
            >
              <span>Explore Live Demos</span>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 shadow-xs group-hover:border-yellow-300 transition-all duration-200">
                <ChevronDown className="w-4 h-4 text-white group-hover:text-yellow-300 transition-colors group-hover:translate-y-0.5 transform duration-200" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. DEMO SHOWCASE SECTION
          ======================================================== */}
      <section id="demos-section" className="pt-12 pb-20 md:pt-16 md:pb-28 px-6 lg:px-[56px] bg-[#0031AD] text-white relative">
        {/* Subtle grid lines background pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 24px)',
            backgroundSize: '32px 32px'
          }}
        />
        
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-36 relative z-10">
          
          {demos.map((demo, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={demo.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                
                {/* Text Content Block */}
                <div 
                  className={`w-full space-y-5 lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  id={`text-block-${demo.id}`}
                >
                  <div className="relative pl-4">
                    <div className="absolute left-0 top-1 bottom-1 w-1 bg-sky-400 rounded-full" />
                    <span className="font-sans font-extrabold text-[11px] tracking-[0.2em] text-sky-300 uppercase">
                      {demo.label}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-[28px] sm:text-[34px] text-white leading-tight tracking-tight">
                    {demo.heading}
                  </h3>
                  <p className="font-sans font-normal text-blue-100/95 text-[14.5px] sm:text-[15.5px] leading-relaxed">
                    {demo.body}
                  </p>
 
                  <div className="pt-2">
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-[13px] px-5 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                    >
                      <span>Open Full Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
 
                {/* Interactive Sandbox iFrame Block */}
                <div 
                  className={`w-full lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  id={`iframe-container-${demo.id}`}
                >
 
                  {/* Mock browser mockup address bar chrome */}
                  <div className="bg-[#00227a]/30 border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                    {/* MS Windows Style Window Header */}
                    <div className="flex items-center justify-between h-9 px-3 bg-[#202020] border-b border-[#333333] select-none text-xs text-gray-300 font-sans">
                      {/* Left: Window Icon and Title */}
                      <div className="flex items-center gap-2 truncate pr-4">
                        <span className="w-3.5 h-3.5 flex items-center justify-center text-blue-400">🌐</span>
                        <span className="truncate text-[11px] font-medium text-gray-300">Dettroin Sandbox Demo - Microsoft Edge</span>
                      </div>

                      {/* Right: Windows Controls (Min, Max, Close) */}
                      <div className="flex items-center h-full shrink-0">
                        {/* Minimise */}
                        <div className="w-11 h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-gray-400">
                          <span className="w-2.5 h-[1.5px] bg-current block mt-1" />
                        </div>
                        {/* Maximise */}
                        <div className="w-11 h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-gray-400">
                          <span className="w-2.5 h-2.5 border border-current block" />
                        </div>
                        {/* Close */}
                        <div className="w-11 h-full flex items-center justify-center hover:bg-[#e81123] hover:text-white transition-colors cursor-pointer text-gray-400">
                          <span className="font-mono text-xs">✕</span>
                        </div>
                      </div>
                    </div>

                    {/* Address bar/toolbar row under Windows header */}
                    <div className="flex items-center justify-between py-2.5 px-4 bg-[#2c2c2c] border-b border-[#3c3c3c]">
                      {/* Left: Navigation Buttons (back, forward, refresh) */}
                      <div className="flex items-center gap-3.5 text-gray-400 shrink-0 select-none mr-2">
                        <span className="text-xs hover:text-white cursor-default">←</span>
                        <span className="text-xs hover:text-white cursor-default">→</span>
                        <span className="text-xs hover:text-white cursor-default">↻</span>
                      </div>

                      {/* Center: URL Address Bar */}
                      <div className="bg-[#1e1e1e] border border-[#3e3e3e] rounded px-4 py-1 text-[11px] font-mono text-gray-300 font-medium truncate max-w-lg w-full flex items-center justify-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-0.5" />
                        <span className="truncate select-all text-blue-100/90">{demo.url}</span>
                      </div>

                      {/* Right: Open Action Link */}
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors shrink-0 flex items-center gap-1 font-sans text-xs font-semibold pl-3"
                        title="Open in new tab"
                      >
                        <span className="hidden sm:inline">Open</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Actual scrollable interactive iframe */}
                    <SandboxIframe url={demo.url} title={demo.heading} />
                  </div>

                  <p className="font-mono text-[10.5px] text-blue-200/60 font-semibold text-center mt-3 select-none">
                    ↑ This demo is fully interactive. Scroll and click inside to explore.
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ========================================================
          3. WHY DETTROIN — MID-PAGE TRUST SECTION
          ======================================================== */}
      <section className="py-16 md:py-20 px-6 lg:px-[56px] bg-[#f4f6f9] border-t border-b border-gray-200/50 relative">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">

          <div className="max-w-xl">
            <span className="font-sans font-bold text-[10px] tracking-[2.5px] uppercase text-[#0031AD] block mb-2.5">
              OUR STANDARDS
            </span>
            <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] text-[#1a2a4a] tracking-tight leading-tight">
              An <span className="text-brand-red">Architectural Approach</span> to Web Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Column 01 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150/60 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all hover:scale-[1.01] hover:shadow-md hover:border-brand-red/20 space-y-4" id="trust-col-1">
              <div className="font-display font-black text-brand-red text-4xl select-none leading-none">
                01
              </div>
              <h4 className="font-display font-bold text-lg text-[#1a2a4a] tracking-tight">
                Tailored Design
              </h4>
              <p className="font-sans font-normal text-gray-500 text-[13.5px] sm:text-[14px] leading-relaxed">
                No templates. No recycled layouts. Every project starts from your brand, your audience, and your goals.
              </p>
            </div>

            {/* Column 02 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150/60 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all hover:scale-[1.01] hover:shadow-md hover:border-brand-red/20 space-y-4" id="trust-col-2">
              <div className="font-display font-black text-brand-red text-4xl select-none leading-none">
                02
              </div>
              <h4 className="font-display font-bold text-lg text-[#1a2a4a] tracking-tight">
                End-to-End Delivery
              </h4>
              <p className="font-sans font-normal text-gray-500 text-[13.5px] sm:text-[14px] leading-relaxed">
                From wireframe to deployment, Dettroin handles everything. You focus on your work, we handle your web presence.
              </p>
            </div>

            {/* Column 03 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150/60 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all hover:scale-[1.01] hover:shadow-md hover:border-brand-red/20 space-y-4" id="trust-col-3">
              <div className="font-display font-black text-brand-red text-4xl select-none leading-none">
                03
              </div>
              <h4 className="font-display font-bold text-lg text-[#1a2a4a] tracking-tight">
                Ongoing Support
              </h4>
              <p className="font-sans font-normal text-gray-500 text-[13.5px] sm:text-[14px] leading-relaxed">
                We don't disappear after launch. Your website evolves with your needs — updates, redesigns, and scaling included.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
