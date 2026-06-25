import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data';

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="bg-[#f8f9fb] pt-2 pb-20 lg:pt-2 lg:pb-24 px-6 lg:px-[56px]"
    >
      <div className="max-w-7xl mx-auto w-full font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 select-none animate-fade-in" id="testimonials-header">
          <span className="font-display font-black text-[54px] md:text-[64px] text-[#ff6a00] leading-[0.5] block mb-2 opacity-50">"</span>
          <p className="font-sans font-medium text-[10px] tracking-[2px] uppercase text-[#ff6a00] mb-3">
            VERIFIED FEEDBACK
          </p>
          <h2 className="font-display font-medium text-[32px] sm:text-[38px] text-[#1a2a4a] tracking-[0px] leading-[1.4] max-w-2xl">
            What School Directors & Principals Say Alike
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mt-5 rounded-full" />
          <p className="font-sans font-normal text-gray-500 text-[15px] sm:text-[16px] max-w-xl mt-4">
            Hear from leading trust officers, boards directors, and administrators utilizing Dettroin to streamline campus collections and communication.
          </p>
        </div>

        {/* Live Grid of Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="testimonials-cards-list">
          {TESTIMONIALS.map((t: Testimonial) => {
            // Get reviewer initials
            const initials = t.author
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2);

            return (
              <div 
                key={t.id}
                className="bg-white border border-gray-200/80 rounded-[18px] p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_25px_rgba(217,7,7,0.02)] hover:shadow-[0_20px_40px_rgba(217,7,7,0.08)] relative group"
                style={{ borderTop: '3px solid #D90707' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = '#ff6a00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = '#D90707';
                }}
              >
                <div>
                  
                  {/* Rating Stars and Quote Icon header row */}
                  <div className="flex items-center justify-between mb-6 select-none">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-brand-red text-brand-red" />
                      ))}
                    </div>
                    {/* Big red quote symbol */}
                    <span className="font-display text-[44px] text-brand-red opacity-15 leading-none font-extrabold select-none pointer-events-none">
                      “
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="font-sans font-normal italic text-[#374151] text-[15px] leading-[1.75] mb-6">
                    "{t.quote}"
                  </p>

                </div>

                {/* Card footer details */}
                <div>
                  
                  {/* Subtle Separator border */}
                  <div className="w-full h-px bg-gray-100 mb-5" />

                  <div className="flex items-center gap-3.5">
                    
                    {/* Initials Avatar Badge */}
                    <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-display font-extrabold text-[13px] text-white select-none shrink-0" style={{ boxShadow: '0_4px_12px_rgba(230,48,48,0.15)' }}>
                      {initials}
                    </div>

                    <div className="truncate">
                      <p className="font-display font-black text-[#1a1a1a] text-[14.5px] leading-tight">
                        {t.author}
                      </p>
                      <p className="font-sans font-medium text-gray-500 text-[11.5px] mt-0.5">
                        {t.role}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center justify-between mt-4 bg-brand-red-light/40 border border-brand-red/5 px-3 py-1.5 rounded-lg select-none">
                    <span className="font-sans font-extrabold text-[11px] text-[#1a1a1a] truncate pr-2">
                      🏫 {t.schoolName}
                    </span>
                    <span className="font-mono font-bold text-[9px] text-[#D90707] uppercase shrink-0">
                      {t.board}
                    </span>
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
