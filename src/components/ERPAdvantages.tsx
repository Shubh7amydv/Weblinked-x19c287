import React from 'react';
import { 
  CloudLightning, 
  RefreshCw, 
  ShieldCheck, 
  Headphones, 
  WifiOff, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ERP_ADVANTAGES, Advantage } from '../data';

const advantageIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CloudLightning: CloudLightning,
  RefreshCw: RefreshCw,
  ShieldCheck: ShieldCheck,
  Headphones: Headphones,
  WifiOff: WifiOff,
  MessageSquareText: MessageSquare
};

export default function ERPAdvantages() {
  return (
    <section 
      id="advantages" 
      className="bg-[#f4f6f9] py-12 lg:py-16 px-6 lg:px-[56px] relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 select-none" id="advantages-header">
          <p className="font-sans font-bold text-[10px] tracking-[2.5px] uppercase text-[#0031AD] mb-2.5">
            ARCHITECTURAL ADVANTAGE
          </p>
          <h2 className="font-display font-semibold text-[26px] sm:text-[32px] text-[#1a2a4a] tracking-[-0.2px] leading-[1.3] max-w-2xl">
            Our Next-Gen Cloud Architecture & Operations are <span className="font-bold text-brand-red not-italic">Secure & Scalable</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-brand-red to-[#0031AD] mt-4 rounded-full" />
          <p className="font-sans font-normal text-gray-500 text-[14.5px] sm:text-[15.5px] max-w-xl mt-4">
            Durgapur to Mumbai, we provide secure networks engineered to stay responsive under critical heavy operations.
          </p>
        </div>

        {/* Dynamic Architectural Banner */}
        <div 
          className="bg-white border-l-4 border-[#0031AD] rounded-xl p-5 md:p-6.5 mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          id="architecture-banner"
        >
          <div className="flex gap-4 items-start md:items-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50/60 text-[#0031AD] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-[#1a1a1a] text-[15.5px] sm:text-[17px]">
                High Availability & Decentralized Redundancy
              </h3>
              <p className="font-sans font-normal text-gray-500 text-[13px] md:text-[13.5px] mt-1 pr-4">
                We bundle enterprise database clustering with daily hot backups to make sure school rosters never encounter loss, corruption, or sluggish load limits.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-1 font-sans font-bold text-xs text-[#0031AD] bg-blue-50/50 px-3.5 py-2 rounded-lg">
            <span>Enterprise SLA Compliant</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="advantages-cards-grid">
          {ERP_ADVANTAGES.map((adv: Advantage) => {
            const IconEl = advantageIconMap[adv.iconName] || CloudLightning;
            return (
              <div
                key={adv.id}
                className="bg-white border border-gray-200/80 rounded-[14px] p-6 flex flex-col items-start transition-all duration-300 transform hover:-translate-y-1.5 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-md group"
                style={{ borderTop: '3px solid #D90707' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = '#0031AD';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = '#D90707';
                }}
              >
                {/* Icon Container with custom red background tint, turning blue on hover */}
                <div className="w-11 h-11 rounded-lg bg-brand-red/7 text-brand-red group-hover:bg-[#0031AD] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5 select-none">
                  <IconEl className="w-5 h-5" />
                </div>

                {/* Advantage Title */}
                <h4 className="font-display font-semibold text-[15.5px] sm:text-[16.5px] text-[#1a1a1a] leading-tight mb-2.5">
                  {adv.title}
                </h4>

                {/* Description Text */}
                <p className="font-sans font-normal text-gray-600 text-[13px] sm:text-[13.5px] leading-relaxed mb-5 flex-1">
                  {adv.description}
                </p>

                {/* Technology Code Tag */}
                <div className="bg-blue-50 text-[#0031AD] font-mono text-[9.5px] font-bold px-3 py-1.5 rounded-md tracking-wider">
                  {adv.techTag}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
