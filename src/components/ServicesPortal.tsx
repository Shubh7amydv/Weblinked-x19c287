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
        className="relative pt-16 pb-12 md:pt-20 md:pb-16 px-6 lg:px-[56px] text-center overflow-hidden flex flex-col items-center justify-center border-b border-gray-200/50"
        style={{
          background: 'radial-gradient(circle at top, rgba(217, 7, 7, 0.05) 0%, rgba(250, 250, 250, 0) 70%)'
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,0,0,0.01)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-6 z-10">
          <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-brand-red">
            PORTFOLIO SHOWCASE
          </span>
          <h1 className="font-display font-extrabold text-[36px] sm:text-[48px] md:text-[56px] text-[#1a1a1a] leading-[1.1] tracking-tight">
            We Don't Just Build Websites.<br className="hidden sm:inline" /> We Build <span className="text-brand-red">Digital Identities</span>.
          </h1>
          <p className="font-sans font-normal text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every school, every institution, every business has a story. Dettroin turns that story into a web experience your audience remembers. Browse our live school portal demos below — fully functional, fully interactive.
          </p>
          
          <div className="pt-8 flex justify-center">
            <button
              onClick={handleScrollToDemos}
              className="group flex flex-col items-center gap-2 font-sans font-semibold text-xs uppercase tracking-widest text-[#1a1a1a] hover:text-brand-red transition-colors focus:outline-none"
              aria-label="Scroll to interactive demos"
            >
              <span>Explore Live Demos</span>
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-xs group-hover:border-brand-red group-hover:shadow-sm transition-all duration-200">
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-brand-red transition-colors group-hover:translate-y-0.5 transform duration-200" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. DEMO SHOWCASE SECTION
          ======================================================== */}
      <section id="demos-section" className="pt-10 pb-20 md:pt-14 md:pb-28 px-6 lg:px-[56px] bg-white">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-36">
          
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
                    <div className="absolute left-0 top-1 bottom-1 w-1 bg-brand-red rounded-full" />
                    <span className="font-sans font-extrabold text-[11px] tracking-[0.2em] text-[#ff6a00] uppercase">
                      {demo.label}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-[28px] sm:text-[34px] text-[#1a1a1a] leading-tight tracking-tight">
                    {demo.heading}
                  </h3>
                  <p className="font-sans font-normal text-gray-600 text-[14.5px] sm:text-[15.5px] leading-relaxed">
                    {demo.body}
                  </p>
                  
                  <div className="pt-2">
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-brand-red text-white font-sans font-bold text-[13px] px-5 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
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
                  <div className="bg-bg-offwhite border border-gray-200/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                    <div className="flex items-center justify-between pb-3.5 pt-3.5 px-4 bg-gray-50 border-b border-gray-200/50">
                      <div className="flex items-center gap-1.5 select-none shrink-0">
                        <span className="w-3 h-3 bg-[#ff5f57] rounded-full inline-block" />
                        <span className="w-3 h-3 bg-[#febc2e] rounded-full inline-block" />
                        <span className="w-3 h-3 bg-[#28c840] rounded-full inline-block" />
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded px-4 py-1 text-[11px] font-mono text-gray-400 font-semibold truncate max-w-[280px] sm:max-w-md w-full flex items-center justify-center gap-1.5 bg-gray-50/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-0.5" />
                        <span className="text-gray-600 select-all truncate">{demo.url}</span>
                      </div>
                      
                      <a 
                        href={demo.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-brand-red transition-colors shrink-0 flex items-center gap-1 font-sans text-xs font-semibold"
                        title="Open in new tab"
                      >
                        <span className="hidden sm:inline">Open</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Actual scrollable interactive iframe */}
                    <SandboxIframe url={demo.url} title={demo.heading} />
                  </div>

                  <p className="font-mono text-[10.5px] text-gray-400 font-semibold text-center mt-3 select-none">
                    ↑ This demo is fully interactive. Scroll and click inside to explore.
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ========================================================
          3. WHY GRIDAAN — MID-PAGE TRUST SECTION
          ======================================================== */}
      <section className="py-20 md:py-24 px-6 lg:px-[56px] bg-bg-offwhite border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto space-y-14">
          
          <div className="max-w-xl">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#ff6a00] block mb-2">
              OUR STANDARDS
            </span>
            <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] text-[#1a1a1a] tracking-tight leading-tight">
              An Architectural Approach to Web Development.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            
            {/* Column 01 */}
            <div className="space-y-4" id="trust-col-1">
              <div className="font-display font-extrabold text-brand-red text-4xl select-none leading-none">
                01
              </div>
              <h4 className="font-display font-bold text-lg text-[#1a1a1a] tracking-tight">
                Tailored Design
              </h4>
              <p className="font-sans font-normal text-gray-600 text-[14px] sm:text-[14.5px] leading-relaxed">
                No templates. No recycled layouts. Every project starts from your brand, your audience, and your goals.
              </p>
            </div>

            {/* Column 02 */}
            <div className="space-y-4" id="trust-col-2">
              <div className="font-display font-extrabold text-brand-red text-4xl select-none leading-none">
                02
              </div>
              <h4 className="font-display font-bold text-lg text-[#1a1a1a] tracking-tight">
                End-to-End Delivery
              </h4>
              <p className="font-sans font-normal text-gray-600 text-[14px] sm:text-[14.5px] leading-relaxed">
                From wireframe to deployment, Dettroin handles everything. You focus on your work, we handle your web presence.
              </p>
            </div>

            {/* Column 03 */}
            <div className="space-y-4" id="trust-col-3">
              <div className="font-display font-extrabold text-brand-red text-4xl select-none leading-none">
                03
              </div>
              <h4 className="font-display font-bold text-lg text-[#1a1a1a] tracking-tight">
                Ongoing Support
              </h4>
              <p className="font-sans font-normal text-gray-600 text-[14px] sm:text-[14.5px] leading-relaxed">
                We don't disappear after launch. Your website evolves with your needs — updates, redesigns, and scaling included.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
