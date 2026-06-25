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
      className="bg-bg-offwhite py-20 lg:py-24 px-6 lg:px-[56px] relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 select-none" id="advantages-header">
          <p className="font-sans font-medium text-[11px] tracking-[2.5px] uppercase text-[#1563c7] mb-3">
            ARCHITECTURAL ADVANTAGE
          </p>
          <h2 className="font-display font-semibold text-[34px] sm:text-[38px] text-[#1a2a4a] tracking-[-0.2px] leading-[1.3] max-w-2xl">
            Our Next-Gen Cloud Architecture & Operations are <span className="font-bold text-[#1563c7] not-italic">Secure & Scalable</span>
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mt-5 rounded-full" />
          <p className="font-sans font-normal text-gray-500 text-[15px] sm:text-[16px] max-w-xl mt-4">
            Durgapur to Mumbai, we provide secure networks engineered to stay responsive under critical heavy operations.
          </p>
        </div>

        {/* Dynamic Architectural Banner */}
        <div 
          className="bg-white border-l-4 border-brand-red rounded-xl p-5 md:p-8 mb-10 shadow-[0_8px_30px_rgba(230,48,48,0.02)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          id="architecture-banner"
        >
          <div className="flex gap-4 items-start md:items-center">
            <div className="w-12 h-12 rounded-xl bg-brand-red/8 text-brand-red flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-[#1a1a1a] text-[16px] sm:text-[18px]">
                High Availability & Decentralized Redundancy
              </h3>
              <p className="font-sans font-normal text-gray-500 text-[13px] md:text-[13.5px] mt-1 pr-4">
                We bundle enterprise database clustering with daily hot backups to make sure school rosters never encounter loss, corruption, or sluggish load limits.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-1 font-sans font-bold text-xs text-brand-red bg-brand-red-light px-3.5 py-2 rounded-lg">
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
                className="bg-white border border-gray-200/80 rounded-[14px] p-7 flex flex-col items-start transition-all duration-300 transform hover:-translate-y-1.5 shadow-[0_4px_25px_rgba(217,7,7,0.02)] hover:shadow-[0_20px_40px_rgba(217,7,7,0.08)] group"
                style={{ borderTop: '3px solid #D90707' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = '#ff6a00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = '#D90707';
                }}
              >
                {/* Icon Container with custom red tint background */}
                <div className="w-11 h-11 rounded-lg bg-brand-red/7 flex items-center justify-center text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white mb-5 select-none">
                  <IconEl className="w-5 h-5" />
                </div>

                {/* Advantage Title */}
                <h4 className="font-display font-semibold text-[16px] sm:text-[17px] text-[#1a1a1a] leading-tight mb-3">
                  {adv.title}
                </h4>

                {/* Description Text */}
                <p className="font-sans font-normal text-gray-600 text-[13px] sm:text-[13.5px] leading-relaxed mb-6 flex-1">
                  {adv.description}
                </p>

                {/* Technology Code Tag */}
                <div className="bg-brand-red/6 text-brand-red font-mono text-[10px] font-bold px-3 py-1.5 rounded-md tracking-wider">
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
