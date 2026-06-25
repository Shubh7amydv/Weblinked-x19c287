// @ts-nocheck
import React, { useState } from 'react';
import { 
  X, 
  CalendarDays, 
  Clock, 
  Sparkles, 
  Smile, 
  MonitorPlay,
  Play,
  CheckCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ModulesGrid from './components/ModulesGrid';
import ERPWebview from './components/ERPWebview';
import WhyChooseUs from './components/WhyChooseUs';
import ERPAdvantages from './components/ERPAdvantages';
import ERPBenefits from './components/ERPBenefits';
import WhyGridaan from './components/WhyGridaan';
import Testimonials from './components/Testimonials';
import ServicesPortal from './components/ServicesPortal';
import MobileApps from './components/MobileApps';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isFilmModalOpen, setIsFilmModalOpen] = useState(false);

  // Demo Form States
  const [demoInstitution, setDemoInstitution] = useState('');
  const [demoState, setDemoState] = useState('Gujarat');
  const [demoDate, setDemoDate] = useState('2026-06-12');
  const [demoSlot, setDemoSlot] = useState('11:00 AM');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      alert(`⚡ Reservation Secured! Your personalized online walk-through for "${demoInstitution}" has been scheduled on ${demoDate} at ${demoSlot}. A link has been dispatched to ${demoEmail}.`);
      setIsFormSubmitted(false);
      setIsDemoModalOpen(false);
      // Clean states
      setDemoInstitution('');
      setDemoEmail('');
      setDemoPhone('');
    }, 1000);
  };

  return (
    <div className="bg-bg-offwhite min-h-screen relative flex flex-col justify-between overflow-x-hidden selection:bg-brand-red selection:text-white">
      
      {/* 1. Navbar Sticky Header */}
      <Header onCtasClick={() => setIsDemoModalOpen(true)} />

      {/* Main Container Core */}
      <main className="flex-1">
        
        {/* 2. Hero Carousel component */}
        <Hero 
          onCtasClick={() => setIsDemoModalOpen(true)} 
          onPlayVideo={() => setIsFilmModalOpen(true)} 
        />

        {/* 3. Operational Counter Stats Bar */}
        <Stats />

        {/* 4. Complete ERP Modules Category Grid */}
        <ModulesGrid />

        {/* 5. Live Interactive Sandbox Board */}
        <ERPWebview />

        {/* 6. Why Choose Us alternating rows */}
        <WhyChooseUs />

        {/* 7. AWS Redundancy Advantages Block */}
        <ERPAdvantages />

        {/* 8. Mission Timeline story modules */}
        <WhyGridaan />

        {/* 8b. Real-world numerical ROI & digitalization benefits */}
        <ERPBenefits onCtasClick={() => setIsDemoModalOpen(true)} />

        {/* 9. Customer Testimonials */}
        <Testimonials />

        {/* 10. Promotional custom websites showcases */}
        <ServicesPortal />

        {/* 11. Cross-Platform Mobile Apps console */}
        <MobileApps />

        {/* 12. SECTION 12 — Inline CTA Banner (Contrast near-black background) */}
        <section 
          id="cta-enrollment-banner" 
          className="relative bg-[#1a1a1a] py-16 md:py-20 px-6 lg:px-[56px] text-white overflow-hidden"
        >
          {/* Subtle diagonal stripe accent */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]" 
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 24px)',
              backgroundSize: '32px 32px'
            }}
          />

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            
            {/* Left Block */}
            <div className="max-w-2xl space-y-3" id="app-cta-banner-left">
              <span className="font-sans font-bold text-[10px] sm:text-[11px] tracking-wider uppercase text-white/50">
                TRANSFORM CLOUDS TODAY
              </span>
              <h2 className="font-display font-extrabold text-[28px] sm:text-[38px] leading-tight tracking-tight">
                Ready to stabilize your school management system?
              </h2>
              <p className="font-sans font-normal text-white/70 text-[14.5px] sm:text-[15.5px] leading-relaxed">
                Connect your rosters with bio-checkins and smart billing today. Speak to our implementation relationship managers to schedule free database planning folders.
              </p>
            </div>

            {/* Right Buttons group */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto shrink-0 select-none" id="app-cta-banner-right">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-brand-red text-white py-3.5 px-8 rounded-lg font-sans font-bold text-[14.5px] transition-all duration-200 hover:bg-brand-red-hover hover:-translate-y-0.5 shadow-md shadow-brand-red/10 focus:outline-none"
              >
                Schedule Free Demo
              </button>
              
              <button
                onClick={() => {
                  const target = document.getElementById('faq-contact');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white/40 hover:border-brand-red hover:bg-brand-red/10 text-white py-3.5 px-8 rounded-lg font-sans font-bold text-[14.5px] transition-colors focus:outline-none"
              >
                Consult on WhatsApp
              </button>
            </div>

          </div>
        </section>

        {/* 13. High fidelity FAQs + Contact Form block */}
        <ContactUs />

      </main>

      {/* 14. Near-black Footer */}
      <Footer />

      {/* ========================================================
          POPUP MODAL 1: PRESET DEMO BOOKING FORM WIDGET
          ======================================================== */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 bg-[#1a1a1a]/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative animate-slide-up border-t-4 border-brand-red"
            style={{ boxShadow: '0 30px 60px rgba(230,48,48,0.15)' }}
            id="demo-booking-modal"
          >
            {/* Close trigger button */}
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-red transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handleDemoSubmit} className="p-6 sm:p-8 space-y-4">
              
              <div className="text-center pb-2 select-none">
                <span className="font-sans font-bold text-[10px] text-brand-red uppercase tracking-wider block">RESERVATION DESK</span>
                <h3 className="font-display font-black text-xl text-[#1a1a1a] mt-1">Book Live Screen Walkthrough</h3>
                <p className="font-sans text-xs text-gray-400 mt-1">A senior system engineer will demonstrate our billing, attendance, and website capabilities.</p>
              </div>

              <div>
                <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">School / College Name</label>
                <input
                  type="text"
                  value={demoInstitution}
                  onChange={(e) => setDemoInstitution(e.target.value)}
                  placeholder="e.g. Sardar Patel Vidyalaya"
                  className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3.5 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/8 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">Target Date</label>
                  <input
                    type="date"
                    value={demoDate}
                    onChange={(e) => setDemoDate(e.target.value)}
                    className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red"
                    required
                  />
                </div>
                <div>
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">Preferred Slot</label>
                  <select 
                    value={demoSlot}
                    onChange={(e) => setDemoSlot(e.target.value)}
                    className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red"
                  >
                    <option value="10:00 AM">10:00 AM (Morning)</option>
                    <option value="11:30 AM">11:30 AM (Noon)</option>
                    <option value="02:30 PM">02:30 PM (Midday)</option>
                    <option value="04:30 PM">04:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">Mobile / WhatsApp No</label>
                <input
                  type="tel"
                  value={demoPhone}
                  onChange={(e) => setDemoPhone(e.target.value)}
                  placeholder="e.g. 98112 XXXXX"
                  className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3.5 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red"
                  required
                />
              </div>

              <div>
                <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">Email ID</label>
                <input
                  type="email"
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
                  placeholder="e.g. principal@school.org"
                  className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3.5 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isFormSubmitted}
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-3 rounded-lg font-sans font-bold text-xs shadow-md shadow-brand-red/10 transition-all flex items-center justify-center gap-2"
              >
                <span>{isFormSubmitted ? 'Verifying schedule...' : 'Reserve Demonstration Walkthrough'}</span>
              </button>

            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          POPUP MODAL 2: 3-MINUTE VIDEO SYSTEM FILM SIMULATION
          ======================================================== */}
      {isFilmModalOpen && (
        <div className="fixed inset-0 bg-[#1a1a1a]/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-scale-up"
            id="film-modal-view"
          >
            {/* Close button */}
            <button
              onClick={() => setIsFilmModalOpen(false)}
              className="absolute top-4 right-4 bg-[#1a1a1a]/40 text-white hover:bg-[#e63030] transition-all p-1.5 rounded-full z-15"
              aria-label="Close video film"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video mockup player */}
            <div className="relative aspect-video bg-[#1a1a1a]">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000" 
                alt="System Tour Film"
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
              
              {/* Play overlays */}
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-white p-6 bg-black/40 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center text-xl shadow-lg border-4 border-white/25 animate-scale-pulse cursor-pointer">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-[15px] sm:text-[18px]">Gridaan School ERP Suite Tour</h4>
                  <p className="font-sans text-[11px] sm:text-[12.8px] text-white/80 mt-1 max-w-md">
                    Watch our custom bio-metrics Swiping and WhatsApp Billing engines synchronized in real-time under average 4G limits.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsFilmModalOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                  className="bg-brand-red text-white font-sans text-[11px] font-bold px-4 py-2 rounded-lg mt-2 hover:bg-brand-red-hover"
                >
                  Schedule Live One-on-One DEMO
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
