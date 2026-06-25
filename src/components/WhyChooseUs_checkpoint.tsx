import { Check } from 'lucide-react';
import { WHY_CHOOSE_US_ROWS } from '../data';

export default function WhyChooseUs() {
  return (
    <section 
      id="why-us" 
      className="bg-white py-20 lg:py-24 px-6 lg:px-[56px] relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none" id="why-choose-us-heading">
          <p className="font-sans font-medium text-[11px] tracking-[2.5px] uppercase text-[#D90707] mb-3">
            CAMPUS STABILIZATION
          </p>
          <h2 className="font-display font-bold tracking-[-0.5px] leading-[1.15] max-w-2xl">
            <span className="block text-[38px] sm:text-[46px] text-[#1a2a4a]">Why Hundreds of Premium Academies</span>
            <span className="block text-[38px] sm:text-[46px] text-[#1563c7] mt-1">Trust Gridaan ERP</span>
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mt-5 rounded-full" />
          <p className="font-sans font-normal text-gray-500 text-[15px] sm:text-[16px] max-w-xl mt-4">
            Engineered specifically to solve operational challenges for Indian schools, trust authorities, parents, and transportation boards.
          </p>
        </div>

        {/* Feature alternating rows */}
        <div className="space-y-16 lg:space-y-24" id="choose-rows-list">
          {WHY_CHOOSE_US_ROWS.map((row, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={row.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Visual Side Frame (Left or Right) */}
                <div 
                  className={`relative lg:col-span-6 w-full ${
                    isLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  id={`choose-row-${row.id}-visual`}
                >
                  <div className="bg-[#fafafa] rounded-[24px] p-5 md:p-8 border border-gray-100 shadow-[0_12px_40px_rgba(230,48,48,0.02)] transition-transform hover:scale-[1.01]">
                    {/* Inner Content Card with illustration */}
                    <div className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm">
                      <div className="relative h-[240px] overflow-hidden">
                        <img 
                          src={row.imageUrl} 
                          alt={row.alt}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-104"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      </div>
                      
                      {/* Thumbnail floating footer tag */}
                      <div className="p-4 bg-[#fafafa] border-t border-gray-100 flex items-center justify-between select-none">
                        <span className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                          🛡️ VERIFIED HARDWARE SENSOR SYNC
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-[#28c840] rounded-full inline-block animate-ping" />
                          <span className="font-sans text-[10.5px] font-semibold text-gray-500">Connected System</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Side (Left or Right) */}
                <div 
                  className={`lg:col-span-6 relative flex flex-col items-start ${
                    isLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  id={`choose-row-${row.id}-text`}
                >
                  
                  {/* Oversized background feature numbering */}
                  <div className="absolute -top-12 left-0 leading-none pointer-events-none select-none font-display font-black text-[#1563c7]/10 text-[72px] sm:text-[96px]">
                    {row.number}
                  </div>

                  <div className="relative pt-6">
                    {/* Label Tag Header */}
                    <span className="font-sans font-bold text-[10px] tracking-wider text-[#1563c7] block mb-2.5 uppercase">
                      {row.tagline}
                    </span>

                    {/* Headline */}
                    <h3 className="font-display font-extrabold text-[22px] sm:text-[28px] text-[#1a1a1a] leading-snug tracking-tight mb-4">
                      {row.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="font-sans font-normal text-gray-600 text-[14px] sm:text-[15.5px] leading-relaxed mb-6">
                      {row.description}
                    </p>

                    {/* Checkbox bullets list */}
                    <ul className="space-y-3.5" id={`bullet-chk-${row.id}`}>
                      {row.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-3 items-start text-gray-700 font-sans text-[13.5px] leading-relaxed">
                          <div className="w-5 h-5 rounded-full bg-brand-red/8 flex items-center justify-center shrink-0 text-brand-red mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
