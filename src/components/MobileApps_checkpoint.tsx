import { 
  Smartphone, 
  Download, 
  MapPin, 
  BellRing, 
  CheckCircle,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  Send,
  Lock
} from 'lucide-react';

export default function MobileApps() {
  return (
    <section 
      id="mobile-apps" 
      className="relative py-20 lg:py-24 px-6 lg:px-[56px] text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #D90707 0%, #9E0505 100%)'
      }}
    >
      {/* Dot overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 animate-pulse" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          animationDuration: '8s'
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Mobile App Marketing Text (55% / 7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 select-none" id="mobile-text-column">
          <div className="bg-white/10 border border-white/20 rounded-full px-4 py-1 flex items-center">
            <span className="font-sans font-semibold text-[10px] tracking-[3px] uppercase text-[#ff6a00]">
              CROSS-PLATFORM STACK
            </span>
          </div>

          <h2 className="font-display font-bold leading-[1.12] tracking-[-0.5px]">
            <span className="block text-[36px] sm:text-[48px] text-white">High Performance Companion Apps</span>
            <span className="block text-[24px] sm:text-[32px] font-semibold text-white/70 mt-1.5 font-sans">For Parents & Faculty</span>
          </h2>
          
          <p className="font-sans font-normal text-white/80 text-[14.5px] sm:text-[16.5px] leading-relaxed max-w-2xl">
            Keep parents connected with live alerts and real-time updates. Our bilingual (English & regional options) Progressive Web Apps function smoothly even in low-reception environments, reducing school administrative calls by 70%.
          </p>

          {/* Core Feature Bullet Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2" id="mobile-features-grid">
            
            <div className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4 transition-colors hover:bg-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-white">
                <BellRing className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">Instant Attendance Alerts</h4>
                <p className="font-sans text-[11.5px] text-white/70 mt-1">Get custom push notices the moment your child swipes their RFID card at the corridor gate.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4 transition-colors hover:bg-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-white">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">Live GPS Fleets Maps</h4>
                <p className="font-sans text-[11.5px] text-white/70 mt-1">View the live route location and Estimated Time of Arrival (ETA) of the school bus on-screen.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4 transition-colors hover:bg-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-white">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">One-Tap Online Invoicing</h4>
                <p className="font-sans text-[11.5px] text-white/70 mt-1">Settle homework fee arrears via any leading UPI handle with real-time receipt generation.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4 transition-colors hover:bg-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-white">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">Bilingual Security</h4>
                <p className="font-sans text-[11.5px] text-white/70 mt-1">Two-factor OTP verified numbers, protecting student profiles and data leakage.</p>
              </div>
            </div>

          </div>

          {/* App Store Playstore Badges */}
          <div className="flex flex-wrap items-center gap-4 mt-4 w-full" id="store-pills-row">
            
            <a 
              href="#demo-section-header"
              className="flex items-center gap-3 bg-white/15 hover:bg-white/20 border border-white/25 rounded-xl px-5 py-3 transition-colors shrink-0 select-none cursor-pointer"
            >
              <Smartphone className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="font-mono text-[9px] text-white/60 font-semibold leading-none uppercase">AVAILABLE FOR</p>
                <p className="font-sans font-black text-xs text-white mt-1">Android & iOS Play</p>
              </div>
            </a>

            <a 
              href="#demo-section-header"
              className="flex items-center gap-3 bg-white/15 hover:bg-white/20 border border-white/25 rounded-xl px-5 py-3 transition-colors shrink-0 select-none cursor-pointer"
            >
              <Download className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="font-mono text-[9px] text-white/60 font-semibold leading-none uppercase">GET IT DIRECT</p>
                <p className="font-sans font-black text-xs text-white mt-1">Progressive Web App (PWA)</p>
              </div>
            </a>

          </div>
        </div>

        {/* Right Column: Physical phone frame with interactive light screen (45% / 5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0" id="phone-frame-column">
          
          {/* External phone device layout wrapper */}
          <div 
            className="w-[280px] sm:w-[310px] h-[580px] bg-white rounded-[40px] shadow-2xl relative overflow-hidden transition-transform duration-500 hover:scale-102 flex flex-col justify-between"
            style={{ 
              border: '8px solid rgba(255,255,255,0.25)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
            }}
            id="mobile-phone-device"
          >
            {/* Top Speaker camera cut notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a1a1a] h-5 w-28 rounded-b-xl z-20 flex items-center justify-center">
              <span className="w-10 h-0.5 bg-gray-600 rounded-full inline-block mb-1 mr-4" />
              <span className="w-1.5 h-1.5 bg-gray-700 rounded-full inline-block mb-1" />
            </div>

            {/* Simulated App screen container (dark text on light bg per spec) */}
            <div className="flex-1 bg-[#ffffff] text-[#1a1a1a] pt-7 flex flex-col justify-between select-none relative h-full">
              
              {/* Device Header */}
              <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Gridaan mobile</span>
                  <span className="font-display font-extrabold text-[12.5px] text-brand-red leading-none mt-0.5 inline-block">Sanskrit Academy</span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-red/6 border border-brand-red/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
                  <span className="font-sans text-[9px] text-[#D90707] font-black">Live GPS</span>
                </div>
              </div>

              {/* Core App Viewport */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                
                {/* 1. Simulated User Profile Box */}
                <div className="bg-[#fafafa] border border-gray-100 rounded-xl p-3.5 flex items-center gap-3 shadow-xs">
                  <div className="w-9 h-9 rounded-full bg-brand-red text-white flex items-center justify-center font-display font-black text-xs">
                    AS
                  </div>
                  <div>
                    <h5 className="font-display font-black text-[12.5px] text-[#1a1a1a] leading-none">Aarav Sharma</h5>
                    <p className="font-sans text-[10px] text-gray-500 mt-0.5">Grade 9-A • Roll No 04</p>
                  </div>
                </div>

                {/* 2. Simulated Outstanding invoice alert notification card */}
                <div 
                  className="bg-brand-red-light rounded-xl p-3.5 border-l-3 border-[#D90707] space-y-2 relative"
                >
                  <p className="font-sans text-[9px] font-bold text-brand-red leading-none tracking-wider uppercase">FEE BILL PAYMENT DUE</p>
                  <p className="font-sans text-[11.5px] text-slate-700 leading-snug">
                    Academic term invoice <strong className="text-[#1a1a1a] font-semibold">INV-2026-093</strong> for <strong className="text-[#D90707] font-extrabold">₹22,000</strong> is due on 12th June.
                  </p>
                  <button className="w-full bg-[#D90707] text-white py-1.5 rounded-lg font-sans font-bold text-[10px] shadow-sm tracking-wide flex items-center justify-center gap-1.5 hover:bg-brand-red-hover active:scale-95 transition-all">
                    <span>Pay Instantly with UPI</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* 3. Live bus route notification details card */}
                <div className="bg-[#fafafa] border border-gray-100 rounded-xl p-3.5 space-y-1.5 relative">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] font-bold text-gray-400 tracking-wider uppercase">LIVE VEHICLE STATUS</span>
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-[8px] font-extrabold px-1.5 py-0.5 rounded">3 MINS AWAY</span>
                  </div>
                  <p className="font-sans text-[11px] text-slate-700 leading-snug">
                    Route 14 Bus (Satish Kumar MD) is <strong className="text-[#1a1a1a] font-semibold">3 mins away</strong> from your boarding point. Please queue.
                  </p>
                  <div className="flex items-center justify-between pt-1 font-mono text-[9px] text-[#9ca3af] font-semibold mt-1">
                    <span>ETA: 07:42 AM</span>
                    <span className="text-[#16a34a] font-bold">● Tracking Active</span>
                  </div>
                </div>

                {/* 4. Quick Action panel Grid mock */}
                <div>
                  <p className="font-sans font-bold text-[9px] text-gray-400 tracking-wider uppercase mb-1.5">Quick Academic access</p>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-bg-offwhite border border-gray-100 p-2 rounded-lg text-center flex flex-col items-center justify-center">
                      <span className="text-[13px] mb-0.5">📂</span>
                      <span className="font-sans text-[8.5px] font-bold text-[#1a1a1a] leading-tight block">Rosters</span>
                    </div>
                    <div className="bg-bg-offwhite border border-gray-100 p-2 rounded-lg text-center flex flex-col items-center justify-center">
                      <span className="text-[13px] mb-0.5">🏆</span>
                      <span className="font-sans text-[8.5px] font-bold text-[#1a1a1a] leading-tight block">Grades</span>
                    </div>
                    <div className="bg-bg-offwhite border border-gray-100 p-2 rounded-lg text-center flex flex-col items-center justify-center">
                      <span className="text-[13px] mb-0.5">📝</span>
                      <span className="font-sans text-[8.5px] font-bold text-[#1a1a1a] leading-tight block">Inquiry</span>
                    </div>
                    <div className="bg-bg-offwhite border border-gray-100 p-2 rounded-lg text-center flex flex-col items-center justify-center">
                      <span className="text-[13px] mb-0.5">💬</span>
                      <span className="font-sans text-[8.5px] font-bold text-[#1a1a1a] leading-tight block">Discuss</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Home Indicator */}
              <div className="bg-bg-offwhite border-t border-gray-100 py-3.5 flex justify-center items-center">
                <span className="w-24 h-1 bg-gray-300 rounded-full" />
              </div>

            </div>

          </div>

          {/* Absolute Background Accent shapes behind phone */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-white/5 blur-[80px] pointer-events-none -z-10" />

        </div>

      </div>
    </section>
  );
}
