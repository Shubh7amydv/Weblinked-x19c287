import { Trophy, Compass, Star, Server, Milestone } from 'lucide-react';
import { CAPABILITIES, TIMELINE } from '../data';

interface WhyGridaanProps {
  showPartA?: boolean;
  showPartB?: boolean;
  showPartC?: boolean;
}

export default function WhyGridaan({ 
  showPartA = true, 
  showPartB = true, 
  showPartC = true 
}: WhyGridaanProps = {}) {
  return (
    <div id="story">
      
      {/* ========================================================
          PART A: THE STORY BANNER (Full-themed Red Section)
          ======================================================== */}
      {showPartA && (
        <section 
          className="relative py-8 lg:py-10 px-6 lg:px-[56px] text-white overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0031AD 0%, #00227a 100%)'
          }}
        >
          {/* Subtle dot overlay pattern */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40" 
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Text Column */}
            <div className="lg:col-span-7 space-y-4" id="story-banner-text">
              <span className="font-sans font-bold text-[11px] tracking-[2.5px] uppercase text-white/80">
                CRAFTING INDIAN SYSTEM INTELLIGENCE
              </span>
              <h1 className="font-display font-bold text-[38px] sm:text-[48px] text-white leading-[1.18] tracking-[-0.4px] select-none">
                Over a Decade of Empowering <span className="font-black italic text-white/90">Indian</span> Educational Progress
              </h1>
              <p className="font-sans font-normal text-[15px] sm:text-[16.5px] leading-relaxed text-white/80 max-w-2xl">
                Founded under Ahmedabad trust regulations, Dettroin set out with a simple goal: replacing manual record-keeping stacks with secure, simple digital interfaces. Today, we assist schools in securing operations, improving communication, and modernizing public branding.
              </p>
            </div>

            {/* Right Achievement Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4" id="story-banner-tiles">
              
              <div 
                className="bg-white/12 border border-white/20 p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all hover:bg-white/18 select-none"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <Trophy className="w-6 h-6 text-white opacity-80 mb-2" />
                <div className="flex items-baseline">
                  <span className="font-display font-black text-3xl">500</span>
                  <span className="font-display font-semibold text-lg text-white/75 ml-0.5">+</span>
                </div>
                <p className="font-sans font-medium text-[10px] sm:text-[11px] text-white/60 uppercase tracking-wider mt-1.5">
                  institutes
                </p>
              </div>

              <div 
                className="bg-white/12 border border-white/20 p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all hover:bg-white/18 select-none"
                style={{ backdropFilter: 'blur(8px)' }}
            >
              <Compass className="w-6 h-6 text-white opacity-80 mb-2" />
              <div className="flex items-baseline">
                <span className="font-display font-black text-3xl">15</span>
                <span className="font-display font-semibold text-lg text-white/75 ml-0.5">Lakh</span>
              </div>
              <p className="font-sans font-medium text-[10px] sm:text-[11px] text-white/60 uppercase tracking-wider mt-1.5">
                Students
              </p>
            </div>

            <div 
              className="bg-white/12 border border-white/20 p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all hover:bg-white/18 select-none"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <Star className="w-6 h-6 text-white opacity-80 mb-2" />
              <div className="flex items-baseline">
                <span className="font-display font-black text-3xl">12</span>
                <span className="font-display font-semibold text-lg text-white/75 ml-0.5">Yrs</span>
              </div>
              <p className="font-sans font-medium text-[10px] sm:text-[11px] text-white/60 uppercase tracking-wider mt-1.5">
                Experience
              </p>
            </div>

            <div 
              className="bg-white/12 border border-white/20 p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all hover:bg-white/18 select-none"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <Server className="w-6 h-6 text-white opacity-80 mb-2" />
              <div className="flex items-baseline">
                <span className="font-display font-black text-3xl">99.9</span>
                <span className="font-display font-semibold text-lg text-white/75 ml-0.5">%</span>
              </div>
              <p className="font-sans font-medium text-[10px] sm:text-[11px] text-white/60 uppercase tracking-wider mt-1.5">
                Uptime SLA
              </p>
            </div>

          </div>

        </div>
      </section>
      )}

      {/* ========================================================
          PART B: OUR MISSION (Light Section with orange accents)
          ======================================================== */}
      {showPartB && (
        <section className="bg-[#0031AD] py-12 lg:py-16 px-6 lg:px-[56px] relative">
          {/* Subtle grid accent */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]" 
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 24px)',
              backgroundSize: '32px 32px'
            }}
          />

          <div className="max-w-7xl mx-auto w-full relative z-10">
            
            <div className="flex flex-col items-center text-center mb-10 select-none" id="mission-heading">
              <p className="font-sans font-bold text-[10px] tracking-[2.5px] uppercase text-sky-300 mb-2.5">
                PRODUCT PHILOSOPHY
              </p>
              <h3 className="font-display font-semibold text-[26px] sm:text-[32px] text-white tracking-[-0.1px] leading-[1.35]">
                Operational Metrics <span className="text-yellow-300 font-bold">Designed</span> for Zero-Friction
              </h3>
              <div className="w-12 h-[3px] bg-gradient-to-r from-brand-red to-sky-400 mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="capabilities-cards-list">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.id}
                  className="bg-white border border-transparent rounded-[16px] p-6.5 flex flex-col justify-between transition-all duration-300 hover:border-brand-red group shadow-[0_12px_36px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.2)] hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-baseline mb-3">
                      {/* Number is red, Suffix is blue per specification */}
                      <span className="font-display font-extrabold text-[40px] text-brand-red tracking-tight leading-none">
                        {cap.num}
                      </span>
                      <span className="font-display font-bold text-[24px] text-[#0031AD] ml-0.5">
                        {cap.suffix}
                      </span>
                    </div>
                    
                    {/* Label: Upper, bold, spaced */}
                    <h4 className="font-sans font-bold text-[10.5px] text-slate-500 tracking-[1.5px] uppercase mb-3 transition-colors group-hover:text-brand-red">
                      {cap.label}
                    </h4>
                  </div>

                  <p className="font-sans font-normal text-gray-600 text-[13px] leading-relaxed">
                    {cap.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================
          PART C: TIMELINE MILESTONES (Off-white Section)
          ======================================================== */}
      {showPartC && (
        <section className="bg-bg-offwhite py-20 lg:py-24 px-6 lg:px-[56px] relative">
          <div className="max-w-5xl mx-auto w-full">
            
            <div className="flex flex-col items-center text-center mb-16 select-none" id="timeline-heading">
              <Milestone className="w-10 h-10 text-brand-red opacity-80 mb-3" />
              <p className="font-sans font-medium text-[11px] tracking-[2.5px] uppercase text-[#1563c7] mb-3">
                HISTORIC PROGRESSION
              </p>
              <h3 className="font-display font-medium text-[30px] sm:text-[36px] text-[#1a2a4a] tracking-[0px] leading-[1.45]">
                A Decade of Development R&D
                <span className="block font-sans font-normal text-[16px] text-[#6b7280] mt-2 tracking-[0px]">2014 — Present</span>
              </h3>
            </div>

            {/* Robust connected vertical timeline layout */}
            <div className="relative space-y-0" id="story-time-line">
              {TIMELINE.map((evt, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={evt.year} 
                    className="grid grid-cols-12 md:grid-cols-11 items-stretch"
                  >
                    {/* Left Content Column (Desktop Only) */}
                    <div className="hidden md:flex md:col-span-5 items-center justify-end text-right pr-8">
                      {isEven && (
                        <div className="bg-white border-r-3 border-l-0 border-[#D90707] rounded-xl p-5 shadow-[0_4px_20px_rgba(217,7,7,0.02)] transition-shadow hover:shadow-md text-right w-full">
                          <span className="font-mono text-[10px] font-extrabold tracking-widest text-[#D90707] block mb-1">
                            MILESTONE • {evt.year}
                          </span>
                          <h4 className="font-display font-bold text-[#1a1a1a] text-[15.5px] leading-snug mb-1">
                            {evt.title}
                          </h4>
                          <p className="font-sans font-normal text-gray-500 text-[12.5px] leading-relaxed">
                            {evt.description}
                          </p>
                          {evt.bullets && (
                            <ul className="mt-3 space-y-1.5 text-right flex flex-col items-end">
                              {evt.bullets.map((b, bIdx) => (
                                <li key={bIdx} className="font-sans text-[12.5px] text-gray-600 flex items-start gap-1.5 flex-row-reverse text-right">
                                  <span className="text-[#D90707] shrink-0 font-bold mt-1">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Middle Spine (Circle Year & Dotted Connector) */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center">
                      {/* Year Circle Badge */}
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-display font-black text-[12.5px] md:text-[13.5px] border-2 shadow-sm shrink-0 transition-transform duration-300 hover:scale-110 z-10 ${
                        evt.isCurrent 
                          ? 'bg-[#D90707] border-[#D90707] text-white' 
                          : 'bg-white border-[#D90707] text-[#D90707]'
                      }`}>
                        {evt.year}
                      </div>

                      {/* Continuous vertical connection line to the next year circle */}
                      {idx < TIMELINE.length - 1 && (
                        <div className="w-0.5 flex-grow border-l-3 border-dotted border-[#D90707]/40 min-h-[60px] my-1" />
                      )}
                    </div>

                    {/* Right Content Column (Desktop shows Odd, Mobile shows all) */}
                    <div className="col-span-10 md:col-span-5 flex items-center pl-4 md:pl-8 pb-12 md:pb-8">
                      <div className="w-full">
                        {/* 1. Mobile-friendly view: Shows card for ALL entries */}
                        <div className="block md:hidden">
                          <div className="bg-white border-l-3 border-[#D90707] rounded-xl p-5 shadow-[0_4px_20px_rgba(217,7,7,0.02)] transition-shadow hover:shadow-md text-left w-full">
                            <span className="font-mono text-[10px] font-extrabold tracking-widest text-[#D90707] block mb-1">
                              MILESTONE • {evt.year}
                            </span>
                            <h4 className="font-display font-bold text-[#1a1a1a] text-[15.5px] leading-snug mb-1">
                              {evt.title}
                            </h4>
                            <p className="font-sans font-normal text-gray-500 text-[12.5px] leading-relaxed">
                              {evt.description}
                            </p>
                            {evt.bullets && (
                              <ul className="mt-3 space-y-1.5 text-left">
                                {evt.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="font-sans text-[12.5px] text-gray-600 flex items-start gap-1.5 text-left">
                                    <span className="text-[#D90707] shrink-0 font-bold mt-1">•</span>
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>

                        {/* 2. Desktop-friendly view: Shows card ONLY for Odd indices (Even indices are rendered on the Left Column) */}
                        <div className="hidden md:block">
                          {!isEven && (
                            <div className="bg-white border-l-3 border-[#D90707] rounded-xl p-5 shadow-[0_4px_20px_rgba(217,7,7,0.02)] transition-shadow hover:shadow-md text-left w-full">
                              <span className="font-mono text-[10px] font-extrabold tracking-widest text-[#D90707] block mb-1">
                                MILESTONE • {evt.year}
                              </span>
                              <h4 className="font-display font-bold text-[#1a1a1a] text-[15.5px] leading-snug mb-1">
                                {evt.title}
                              </h4>
                              <p className="font-sans font-normal text-gray-500 text-[12.5px] leading-relaxed">
                                {evt.description}
                              </p>
                              {evt.bullets && (
                                <ul className="mt-3 space-y-1.5 text-left">
                                  {evt.bullets.map((b, bIdx) => (
                                    <li key={bIdx} className="font-sans text-[12.5px] text-gray-600 flex items-start gap-1.5 text-left">
                                      <span className="text-[#D90707] shrink-0 font-bold mt-1">•</span>
                                      <span>{b}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
