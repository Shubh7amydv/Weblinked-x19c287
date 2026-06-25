import React, { useState } from 'react';
import { 
  FileText, 
  Paintbrush, 
  Smartphone, 
  ArrowRight,
  Globe2, 
  Sparkles, 
  Monitor, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { SHOWCASE_SCHOOLS, ShowcaseSchool } from '../data';

export default function ServicesPortal() {
  const [activeShowcase, setActiveShowcase] = useState<string>('sch-1');

  const capabilitiesList = [
    {
      title: 'Agency Grade UI Layout Pairing',
      text: 'Banish cookie-cutter default formats. We design custom typographic pairings, vector icons, and page margins representing your actual campus identity.',
      icon: Paintbrush
    },
    {
      title: '100% Mobile Fluid Diagnostics',
      text: 'Over 82% of prospective parents view portals on cellular screens. All layouts adjust with premium structural response and readable typography sizing.',
      icon: Smartphone
    },
    {
      title: 'Integrated Admission Form Pipeline',
      text: 'Inquiry inputs land directly in school admin rosters with automated CRM pipelines. Instant alerts notify registrar desks immediately.',
      icon: FileText
    },
    {
      title: 'SEO Friendly Page-Speed Audits',
      text: 'Lightweight static bundles compile perfectly for fast indexing. Ensure your institute ranks #1 on local educational maps.',
      icon: Globe2
    }
  ];

  return (
    <section id="services">
      
      {/* ========================================================
          PART A: SERVICES BANNER (Full-themed Red Section)
          ======================================================== */}
      <div 
        className="py-16 md:py-20 px-6 lg:px-[56px] text-white overflow-hidden relative select-none"
        style={{
          background: 'linear-gradient(135deg, #D90707 0%, #9E0505 100%)'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="font-sans font-semibold text-[10px] tracking-[3px] uppercase text-[#ff6a00]">
            CREATIVE AGENCY
          </span>
          <h2 className="font-display font-bold text-[34px] sm:text-[42px] text-white leading-[1.2] tracking-[-0.45px]">
            Premium Custom Websites Engineered for Schools
          </h2>
          <p className="font-sans font-normal text-white/75 text-[14px] sm:text-[15.5px] max-w-xl mx-auto leading-relaxed">
            Stand out in your community. We combine high-speed CMS frameworks with gorgeous responsive layout design to tell your institute's story.
          </p>
        </div>
      </div>

      {/* ========================================================
          PART B: SPECTRE MATRIX & SHOWCASE
          ======================================================== */}
      <div className="bg-white py-20 lg:py-24 px-6 lg:px-[56px] relative">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Specifications List column */}
            <div className="lg:col-span-5 flex flex-col items-start gap-8" id="website-design-specs">
              <div className="select-none">
                <span className="font-sans font-semibold text-[10px] tracking-[3px] uppercase text-[#ff6a00] block mb-1">
                  BRAND INGENUITY
                </span>
                <h3 className="font-display font-medium text-[26px] sm:text-[30px] text-[#1a2a4a] leading-[1.5] tracking-[0px] mt-1 mb-3">
                  Stunning Visual Portals for Elite Institutions, Shaping <span className="italic">dynamic brand ingenuity</span>
                </h3>
                <p className="font-sans font-normal text-gray-500 text-[13.5px] sm:text-[14px] leading-relaxed">
                  We don't just write ERP codes. We have a dedicated studio design desk shaping high-performance promotional portals completely synced back to Gridaan CRM databases.
                </p>
              </div>

              {/* Specs Rows */}
              <div className="space-y-6 w-full" id="service-specs-rows">
                {capabilitiesList.map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-lg bg-brand-red/7 text-brand-red flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-red group-hover:text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-[#1a1a1a] text-[15px] group-hover:text-brand-red transition-colors">
                          {cap.title}
                        </h4>
                        <p className="font-sans font-normal text-gray-500 text-[12.8px] leading-relaxed mt-1">
                          {cap.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Mock browser and live school showcases column (7cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6" id="browser-mockup-showcase">
              
              {/* Browser frame Mockup container */}
              <div className="bg-bg-offwhite border border-gray-200/80 rounded-2xl p-4 shadow-[0_20px_40px_rgba(230,48,48,0.06)] overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200/40 px-2 select-none mb-4">
                  <div className="flex items-center gap-1.5 hover:opacity-100">
                    <span className="w-3 h-3 bg-[#ff5f57] rounded-full inline-block" />
                    <span className="w-3 h-3 bg-[#febc2e] rounded-full inline-block" />
                    <span className="w-3 h-3 bg-[#28c840] rounded-full inline-block" />
                  </div>
                  <div className="bg-[#fafafa] border border-gray-100 rounded px-4 py-0.5 text-[11px] font-mono text-gray-400 font-semibold select-all">
                    https://showcase.gridaan.com/{activeShowcase}
                  </div>
                  <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
                </div>

                {/* Simulated Web portal content based on active selection */}
                <div className="bg-white rounded-xl overflow-hidden shadow-xs relative">
                  {SHOWCASE_SCHOOLS.map((school) => {
                    const isActive = school.id === activeShowcase;
                    if (!isActive) return null;
                    return (
                      <div key={school.id} className="animate-fade-in flex flex-col">
                        <div className="relative h-[220px] overflow-hidden">
                          <img 
                            src={school.image} 
                            alt={school.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <span className="font-mono text-[9px] font-black uppercase text-brand-orange bg-white/10 px-2 py-0.5 rounded tracking-widest bg-blur">
                              LIVE WEBSITE SHOT
                            </span>
                            <h4 className="font-display font-black text-lg mt-1">{school.name}</h4>
                            <p className="font-sans text-[11px] text-white/85">{school.city}</p>
                          </div>
                        </div>
                        <div className="p-4 bg-bg-offwhite border-t border-gray-100 flex items-center justify-between">
                          <div>
                            <span className="font-sans text-[10.5px] font-bold text-gray-400 uppercase tracking-widest block font-bold">CLIENT OUTCOME</span>
                            <p className="font-sans font-bold text-[#1a1a1a] text-[12.8px] leading-relaxed mt-0.5">{school.achievement}</p>
                          </div>
                          <span className="font-sans text-[11px] font-bold text-[#D90707] bg-[#fff1f1] px-2.5 py-1 rounded">
                            {school.tag}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selector Cards Strip below browser */}
              <div className="grid grid-cols-3 gap-3" id="showcase-selector-cards">
                {SHOWCASE_SCHOOLS.map((sch: ShowcaseSchool) => {
                  const isActive = sch.id === activeShowcase;
                  return (
                    <button
                      key={sch.id}
                      onClick={() => setActiveShowcase(sch.id)}
                      className="bg-white border rounded-xl p-3.5 text-left transition-all duration-300 transform select-none relative focus:outline-none"
                      style={{
                        borderTop: isActive ? '3px solid #ff6a00' : '3px solid #D90707',
                        boxShadow: isActive ? '0 12px 24px rgba(217,7,7,0.06)' : 'none',
                        transform: isActive ? 'translateY(-2px)' : 'none',
                        borderColor: isActive ? '#e5e7eb' : '#e5e7eb'
                      }}
                    >
                      <h4 className="font-display font-black text-[11px] text-[#1a1a1a] leading-tight truncate">{sch.name}</h4>
                      <p className="font-sans font-bold text-gray-400 text-[9px] mt-1 uppercase tracking-wider">{sch.city}</p>
                      
                      <div className="flex items-center gap-1 mt-3 font-sans text-[10px] text-brand-red font-bold">
                        <span>Preview Live</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
