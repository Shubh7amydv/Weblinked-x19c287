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
import Careers from './components/Careers';
import Footer from './components/Footer';

export default function App() {
  // STATIC MIGRATION CHANGE: Router to map URL paths to active screen views
  const getPageFromPath = (path: string) => {
    const p = path.toLowerCase().replace(/\/$/, ""); // normalize and trim trailing slash
    if (p === "" || p === "/" || p === "/home") return "home";
    if (p === "/erp-system" || p === "/school-fee-management-software" || p === "/cbse-school-erp") return "erp-system";
    if (p === "/why-gridaan" || p === "/why-dettroin") return "why-gridaan";
    if (p === "/web-portals") return "web-portals";
    if (p === "/faqs-contact" || p === "/contact") return "faqs-contact";
    if (p === "/pricing") return "pricing";
    if (p === "/careers") return "careers";
    if (p === "/school-erp-software-india") return "home";
    return "home";
  };

  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      return getPageFromPath(window.location.pathname);
    }
    return 'home';
  });

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isFilmModalOpen, setIsFilmModalOpen] = useState(false);

  // STATIC MIGRATION CHANGE: Listen to back/forward navigation in modern browsers
  React.useEffect(() => {
    const handlePopState = () => {
      setActivePage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // STATIC MIGRATION CHANGE: Transition router callback with history state tracking
  const transitionToPage = (newPageId: string) => {
    setActivePage(newPageId);
    const mappedPath = newPageId === 'home' ? '/' : `/${newPageId}`;
    if (window.location.pathname !== mappedPath) {
      window.history.pushState(null, '', mappedPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // STATIC MIGRATION CHANGE: SEO automatic metadata tags updater on page navigation
  React.useEffect(() => {
    let title = "Dettroin School ERP Software | Simplifying Business, Amplifying Growth";
    let description = "Dettroin School ERP is India's leading secure school management software. Features include automated fee collections, CBSE academic grades, biometric attendance, and live bus tracking.";

    switch (activePage) {
      case 'home':
        title = "Dettroin School ERP Software | Simplifying Business, Amplifying Growth";
        description = "Discover India's easiest cloud-native school ERP software. Automated fee collection, WhatsApp invoicing, real-time GPS tracking, and parent mobile application setup in 7 days.";
        break;
      case 'erp-system':
        title = "Academic ERP Suite Modules | Dettroin School Management System";
        description = "Browse our complete SaaS modules list: online admissions portals, Indian board compatibilities (CBSE/ICSE CCE grading), fine collection ledger, and HR databases.";
        break;
      case 'why-gridaan':
        title = "Why Dettroin School ERP | Advanced school automation platform for Indian schools";
        description = "How Dettroin recovered ₹2.4 Lakhs of lost school fees and saved teachers 11 administrative hours per week with clean cloud automation.";
        break;
      case 'web-portals':
        title = "SEO-Optimized School Websites & Admissions Portals | Dettroin";
        description = "Deploy bilingual school apps and agency-level websites that inspire premium parent bookings and speed up digital document verification.";
        break;
      case 'faqs-contact':
        title = "Consult Our School ERP Implementation Managers | Dettroin Contact";
        description = "Reach out for school diagnostic audits, customized onboarding demos, or ask our engineers regarding legacy database migration configurations.";
        break;
      case 'pricing':
        title = "Tailored School ERP Pricing & Plans | Dettroin";
        description = "Get a tailored project bid for your school ERP system with unlimited module access, custom integration support, and zero hidden costs.";
        break;
      case 'careers':
        title = "Operations Careers Buffer | Dettroin Software Solutions";
        description = "Submit your credentials via Web3Forms-connected career dispatch nodes. Join Dettroin as we scale multi-tenant school databases and automatic GPS tracking systems.";
        break;
    }

    // Dynamic state metadata update
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [activePage]);

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
      <Header 
        onCtasClick={() => setIsDemoModalOpen(true)} 
        activePage={activePage}
        onPageChange={transitionToPage}
      />

      {/* Main Container Core */}
      <main className="flex-1">
        
        {activePage === 'home' && (
          <>
            {/* 2. Hero Carousel component */}
            <Hero 
              onCtasClick={() => setIsDemoModalOpen(true)} 
              onPlayVideo={() => setIsFilmModalOpen(true)} 
              onPageChange={transitionToPage}
            />

            {/* 4. Live Interactive Sandbox Board */}
            <ERPWebview />

            {/* 5. What Changes When Your School Goes Digital */}
            <ERPBenefits onCtasClick={() => setIsDemoModalOpen(true)} />

            {/* 6. High-Performance Companion Apps section */}
            <MobileApps />

            {/* 7. Customer Testimonials */}
            <Testimonials />

            {/* 8. SECTION 12 — Inline CTA Banner (Contrast blue background) */}
            <section 
              id="cta-enrollment-banner" 
              className="relative bg-[#1d4ed8] py-16 md:py-20 px-6 lg:px-[56px] text-white overflow-hidden"
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
                      setActivePage('faqs-contact');
                      setTimeout(() => {
                        const target = document.getElementById('faq-contact');
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className="border-2 border-white/40 hover:border-brand-red hover:bg-brand-red/10 text-white py-3.5 px-8 rounded-lg font-sans font-bold text-[14.5px] transition-colors focus:outline-none"
                  >
                    Consult on WhatsApp
                  </button>
                </div>

              </div>
            </section>
          </>
        )}

        {activePage === 'erp-system' && (
          <>
            {/* Complete ERP Modules Category Grid */}
            <ModulesGrid 
              onPageChange={(page) => {
                setActivePage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Operational Metrics Designed for Zero-Friction */}
            <WhyGridaan showPartA={false} showPartB={true} showPartC={false} />

            {/* AWS Redundancy Advantages Block */}
            <ERPAdvantages />
          </>
        )}

        {activePage === 'why-gridaan' && (
          <>
            {/* Why Choose Us alternating rows */}
            <WhyChooseUs />

            {/* Mission Timeline story modules (Part A & C only) */}
            <WhyGridaan showPartA={true} showPartB={false} showPartC={true} />
          </>
        )}

        {activePage === 'web-portals' && (
          <>
            {/* Promotional custom websites showcases */}
            <ServicesPortal 
              onPageChange={(page) => {
                setActivePage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onCtasClick={() => setIsDemoModalOpen(true)}
            />
          </>
        )}

        {activePage === 'faqs-contact' && (
          <>
            {/* High fidelity FAQs + Contact Form block */}
            <ContactUs />
          </>
        )}

        {/* 13. Careers Portal and Web3Forms Job Enquiry Block */}
        {activePage === 'careers' && (
          <>
            <Careers />
          </>
        )}

        {/* STATIC MIGRATION CHANGE: Highly optimized /pricing landing content mapping */}
        {activePage === 'pricing' && (
          <div className="max-w-7xl mx-auto py-16 px-6 lg:px-[56px] select-none text-[#1a1a1a]">
            {/* Header portion */}
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
              <span className="font-sans font-bold text-[10px] sm:text-[11px] text-[#566c37] uppercase tracking-widest bg-[#566c37]/8 px-4 py-1.5 rounded-full inline-block mb-3">
                TAILORED IMPLEMENTATION QUOTES
              </span>
              <h2 className="font-display font-black text-[32px] sm:text-[44px] leading-tight text-[#1a2a4a] tracking-tight">
                Honest, Custom Packaging<br />For Academic Systems
              </h2>
              <p className="font-sans text-gray-500 text-[14px] sm:text-[15.5px] leading-relaxed mt-4">
                No setup fees. No fixed template overheads. Contact our system implementation officers to lock in a customized proposal and real bid tuned for your regional, CBSE, or ICSE school networks.
              </p>
            </div>

            {/* Pricing cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tier 1: Small/Play schools */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#566c37]/30 transition-all flex flex-col justify-between relative shadow-sm hover:shadow-md">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#1a2a4a]">Swaraj Tier</h3>
                  <p className="font-sans text-xs text-gray-400 mt-1">Perfect for rural, local regional private institutions and play schools.</p>
                  
                  <div className="my-6">
                    <span className="font-sans font-bold text-[14px] text-[#566c37] bg-[#566c37]/5 px-3.5 py-2.5 rounded-lg border border-[#566c37]/15 inline-block w-full text-center">
                      Contact Us for Real Bid
                    </span>
                  </div>

                  <ul className="space-y-3.5 border-t border-gray-100 pt-6">
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Standard admission & invoice portals</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>CBSE report card generators</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Manual biometric attendance upload</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Email audit reports support</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full py-2.5 text-xs font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all"
                  >
                    Request Real Proposal
                  </button>
                </div>
              </div>

              {/* Tier 2: Premium (Most Popular) */}
              <div className="bg-white rounded-2xl p-8 border-2 border-[#566c37]/45 hover:border-[#566c37] transition-all flex flex-col justify-between relative shadow-lg" style={{ boxShadow: '0 20px 40px rgba(86,108,55,0.06)' }}>
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#566c37] text-white text-[9.5px] tracking-wider uppercase font-extrabold px-3 py-1 rounded-full whitespace-nowrap">
                  RECOMMENDED VOLUME
                </span>
                
                <div>
                  <h3 className="font-display font-bold text-xl text-[#1a2a4a] flex items-center gap-1.5">
                    Dettroin Premium
                    <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                  </h3>
                  <p className="font-sans text-xs text-gray-400 mt-1">The optimized solution for most CBSE, ICSE, and state credentialed schools in India.</p>
                  
                  <div className="my-6">
                    <span className="font-sans font-extrabold text-[14px] text-white bg-[#566c37] px-3.5 py-2.5 rounded-lg border border-[#566c37] inline-block w-full text-center hover:bg-[#3d4d27] transition-all">
                      Contact Us for Real Bid
                    </span>
                  </div>

                  <ul className="space-y-3.5 border-t border-gray-100 pt-6">
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <strong>Automated WhatsApp Fee Delivery</strong>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <strong>Bilingual Parents Portal PWA App</strong>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Live biometric thumb scanning hook</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Automatic active GPS bus live maps</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full py-3 text-xs font-bold text-white bg-[#566c37] hover:bg-[#3d4d27] rounded-lg transition-all shadow-md shadow-[#566c37]/10"
                  >
                    Initiate Setup Protocol
                  </button>
                </div>
              </div>

              {/* Tier 3: Enterprise */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#566c37]/30 transition-all flex flex-col justify-between relative shadow-sm hover:shadow-md">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#1a2a4a]">Enterprise Scale</h3>
                  <p className="font-sans text-xs text-gray-400 mt-1">Custom operations scale for major school groups (10,000+ students combined).</p>
                  
                  <div className="my-6">
                    <span className="font-sans font-bold text-[14px] text-[#566c37] bg-[#566c37]/5 px-3.5 py-2.5 rounded-lg border border-[#566c37]/15 inline-block w-full text-center">
                      Contact Us for Real Bid
                    </span>
                  </div>

                  <ul className="space-y-3.5 border-t border-gray-100 pt-6">
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Custom native Android & iOS app builds</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Dedicated hosting virtualization clusters</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Direct WhatsApp Business API onboarding</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>24/7 dedicated support relationship account manager</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full py-2.5 text-xs font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all"
                  >
                    Consult Corporate Integration
                  </button>
                </div>
              </div>
            </div>
            
            {/* Value Trust Accents */}
            <div className="mt-14 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-center select-none">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-[#D90707]" />
                <h4 className="font-display font-bold text-sm text-[#1a2a4a]">100% Secure Database</h4>
                <p className="font-sans text-xs text-gray-400">Strict end-parent privacy standards mapped with server-side TLS and backups.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Smile className="w-8 h-8 text-[#D90707]" />
                <h4 className="font-display font-bold text-sm text-[#1a2a4a]">Zero Setup Overhead</h4>
                <p className="font-sans text-xs text-gray-400">We verify, cleanse and migrate your legacy school registers in less than one academic week.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <HelpCircle className="w-8 h-8 text-[#D90707]" />
                <h4 className="font-display font-bold text-sm text-[#1a2a4a]">Instant Multi-Language Alerts</h4>
                <p className="font-sans text-xs text-gray-400 font-normal">Auto billing, attendance checks and syllabus tracking sent in parents preferred languages.</p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* 14. Near-black Footer */}
      <Footer 
        onPageChange={(page) => {
          setActivePage(page);
        }}
      />

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
                    <option value="02:30 PM">02:35 PM (Midday)</option>
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
                  <h4 className="font-display font-extrabold text-[15px] sm:text-[18px]">Dettroin School ERP Suite Tour</h4>
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
