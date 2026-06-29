import { Check } from 'lucide-react';
import { WHY_CHOOSE_US_ROWS } from '../data';

export default function WhyChooseUs() {
  return (
    <div id="why-choose-us-container">
      {/* Full Width Red Header Band */}
      <div className="bg-gradient-to-r from-[#D90707] to-[#A30505] pt-4 lg:pt-5 pb-6 px-6 lg:px-[56px] text-center text-white relative select-none">
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
            CAMPUS STABILIZATION
          </p>
          <h1 className="font-display font-extrabold text-[30px] sm:text-[38px] tracking-tight leading-[1.2]">
            Why Hundreds of <span className="text-yellow-300 font-black">Premium Academies</span> Trust Dettroin ERP
          </h1>
          <p className="font-sans font-medium text-red-100/90 text-[13.5px] sm:text-[14.5px] leading-relaxed mt-4 max-w-2xl mx-auto">
            Engineered specifically to solve operational challenges for Indian schools, trust authorities, parents, and transportation boards.
          </p>
        </div>
      </div>

      {/* Feature alternating rows */}
      <section 
        id="why-us" 
        className="bg-white py-12 lg:py-16 px-6 lg:px-[56px] relative"
      >
        <div className="max-w-7xl mx-auto w-full">

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
                  <div className="bg-[#fafafa] rounded-[24px] p-4 md:p-6 border border-gray-100 shadow-[0_12px_40px_rgba(230,48,48,0.02)] transition-transform hover:scale-[1.01]">
                    {/* Inner Content Card with illustration */}
                    <div className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img 
                          src={row.imageUrl} 
                          alt={row.alt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-103"
                          referrerPolicy="no-referrer"
                        />
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
                  <div className="absolute -top-12 left-0 leading-none pointer-events-none select-none font-display font-black text-[#1563c7]/15 text-[72px] sm:text-[96px]">
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
  </div>
  );
}
