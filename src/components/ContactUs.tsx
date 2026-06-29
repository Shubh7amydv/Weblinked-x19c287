import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Clock,
  Heart,
  Send
} from 'lucide-react';
import { FAQS, FAQItem } from '../data';

export default function ContactUs() {
  // Frequently Asked Questions Active Accordion state
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formSchool, setFormSchool] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSize, setFormSize] = useState('100-500');
  const [formComment, setFormComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email Transaction States
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isRealSmtp, setIsRealSmtp] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setSubmissionMessage('');

    // STATIC MIGRATION CHANGE: Removed server-side send-audit-email endpoint in favor of static-friendly client-side Web3Forms submission
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      console.warn("VITE_WEB3FORMS_KEY is missing. Operating in Simulation Mode.");
      // Graceful local simulated response for local testing and zero-config previews
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmissionStatus('success');
        setSubmissionMessage('Audit request simulated successfully! Add VITE_WEB3FORMS_KEY to your environment to enable real email notifications.');
        setIsRealSmtp(false);

        // Clear fields on successful submit
        setFormName('');
        setFormSchool('');
        setFormEmail('');
        setFormPhone('');
        setFormComment('');
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `🚨 New Dettroin School Audit Request: ${formSchool}`,
          from_name: "Dettroin Cloud ERP",
          name: formName,
          school: formSchool,
          email: formEmail,
          phone: formPhone,
          size: formSize,
          comment: formComment || "None provided",
        }),
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (response.ok && data.success) {
        setSubmissionStatus('success');
        setSubmissionMessage('Your Free Operational Audit request was transmitted successfully to the Dettroin team! A ground execution agent will reach out in 24 hours.');
        setIsRealSmtp(true);
        
        // Clear fields on successful dispatch
        setFormName('');
        setFormSchool('');
        setFormEmail('');
        setFormPhone('');
        setFormComment('');
      } else {
        setSubmissionStatus('error');
        setSubmissionMessage(data.message || 'Web3Forms API rejected the transmission. Check if the VITE_WEB3FORMS_KEY is active and valid.');
      }
    } catch (error: any) {
      console.error('Error submitting audit request form via Web3Forms:', error);
      setIsSubmitting(false);
      setSubmissionStatus('error');
      setSubmissionMessage('Failed to connect to the external transmission nodes. Please check your internet connection.');
    }
  };

  const contactInfos = [
    {
      title: 'Sales & Systems Demo',
      detail1: 'info@dettroin.com',
      detail2: '',
      icon: Mail,
      time: '09:00 AM - 07:00 PM'
    },
    {
      title: 'Ground R&D Office',
      detail1: 'Delhi,',
      detail2: 'India',
      icon: MapPin,
      time: 'National Operations'
    },
    {
      title: 'Institutional Support',
      detail1: 'info@dettroin.com',
      detail2: '',
      icon: Mail,
      time: 'Always Accessible'
    }
  ];

  return (
    <section 
      id="faq-contact" 
      className="bg-bg-offwhite py-20 lg:py-24 px-6 lg:px-[56px] relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ========================================================
            PART A: COORDINATE CARDS & HEADER
            ======================================================== */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          
          {/* Section Header Left Block */}
          <div className="lg:w-5/12 space-y-6 select-none animate-fade-in" id="contact-head-block">
            <p className="font-sans font-medium text-[11px] tracking-[2.5px] uppercase text-[#1563c7]">
              OPERATION HUB
            </p>
            <h1 className="font-display font-bold text-[36px] sm:text-[44px] leading-[1.18] text-[#1a2a4a] tracking-[-0.5px]">
              Let's <span className="text-[#1563c7] font-bold">Modernize</span> Your <span className="text-brand-red font-bold">Campus Roster</span> Together
            </h1>
            <div className="w-12 h-0.5 bg-brand-red rounded-full" />
            <p className="font-sans font-normal text-gray-500 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-xl">
              Connect with India's premium School systems operations desk. Use the form to lock in a sandbox test or speak with an engineer about migrating your paper files into our cloud.
            </p>
          </div>

          {/* Coordinate Cards list */}
          <div className="lg:w-7/12 w-full grid grid-cols-1 sm:grid-cols-3 gap-6" id="coordinate-cards-list">
            {contactInfos.map((info, idx) => {
              const IconComp = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/80 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 transform shadow-[0_4px_15px_rgba(217,7,7,0.01)] hover:shadow-md h-[180px] group"
                  style={{ borderTop: '3px solid #D90707' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderTopColor = '#ff6a00';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderTopColor = '#D90707';
                  }}
                >
                  <div className="flex justify-between items-start mb-4 select-none">
                    <div className="w-10 h-10 rounded-lg bg-brand-red/7 flex items-center justify-center text-brand-red shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] text-gray-300 font-bold group-hover:text-brand-orange transition-colors">
                      LOG #0{idx+1}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-[#1a1a1a] text-[13.5px] leading-snug">{info.title}</h4>
                    <p className="font-sans font-semibold text-brand-red text-[12px] mt-1.5 truncate">
                      {info.detail1}
                    </p>
                    {info.detail2 && (
                      <p className="font-sans font-semibold text-brand-red text-[12px] truncate">
                        {info.detail2}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1 mt-3 text-gray-400 font-sans text-[10px] font-bold select-none">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span className="truncate">{info.time}</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================
            PART B: THE INQUIRY FORM & ACCORDION FAQ ROW SCREEN
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dynamic FAQ Widget (7cols) */}
          <div className="lg:col-span-7 space-y-4" id="faq-accordion-panel">
            
            <div className="mb-6 select-none">
              <span className="font-sans font-medium text-[9.5px] tracking-[2px] text-[#1563c7] uppercase block">SUPPORT FAQ</span>
              <h3 className="font-display font-semibold text-[19px] text-[#1a2a4a] tracking-[-0.15px] mt-1">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-3.5" id="faqs-accordion-list">
              {FAQS.map((faqItem: FAQItem) => {
                const isOpen = openFaqId === faqItem.id;
                return (
                  <div
                    key={faqItem.id}
                    className="bg-white border rounded-xl overflow-hidden transition-all duration-300 shadow-xs"
                    style={{
                      borderColor: isOpen ? '#D90707' : '#e5e7eb',
                      borderLeft: isOpen ? '3px solid #D90707' : 'none'
                    }}
                  >
                    
                    {/* Header trigger */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(faqItem.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-medium text-sm transition-colors focus:outline-none cursor-pointer"
                    >
                      <span 
                        className={`font-semibold text-[14.5px] leading-tight ${
                          isOpen ? 'text-brand-red' : 'text-[#1a1a1a]'
                        }`}
                      >
                        {faqItem.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-brand-red shrink-0 font-bold" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                      )}
                    </button>

                    {/* Collapsible Answer */}
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-gray-50 text-xs text-gray-500 font-medium leading-[1.75] animate-fade-in">
                        <span className="bg-brand-red-light text-brand-red border border-brand-red/5 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-3">
                          {faqItem.category} Category
                        </span>
                        <p className="text-gray-600 font-sans font-medium text-[13px]">
                          {faqItem.answer}
                        </p>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Interactive Contact Inquiry Form (5cols) */}
          <div className="lg:col-span-5 bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8" id="inquiry-form-card">
            
            <div className="mb-6 select-none">
              <span className="font-sans font-medium text-[9.5px] tracking-[2px] text-[#ff6a00] uppercase block">CRM DATABASE INBOUND</span>
              <h3 className="font-display font-bold text-[19px] text-[#1a2a4a] tracking-[-0.1px] leading-snug mt-1">Book Free Operational Audit</h3>
              <p className="font-sans font-normal text-gray-400 text-[12px] leading-normal mt-1">Provide basic institutional metrics down below.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div id="inp-contact-person">
                <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">Contact Person Name</label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Sanjay Patel (Trust Director)"
                  className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3.5 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/8 transition-all"
                  required
                />
              </div>

              <div id="inp-institute-name">
                <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">School / Academy Name</label>
                <input
                  type="text"
                  value={formSchool}
                  onChange={(e) => setFormSchool(e.target.value)}
                  placeholder="e.g. Sanskriti International Academy"
                  className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3.5 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/8 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div id="inp-contact-phone">
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">Mobile number</label>
                  <input
                    type="tel"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. 9845X XXXXX"
                    className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3.5 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/8 transition-all"
                    required
                  />
                </div>
                <div id="inp-student-capacity">
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">Roster Capacity</label>
                  <select
                    value={formSize}
                    onChange={(e) => setFormSize(e.target.value)}
                    className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3.5 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/8 transition-all"
                  >
                    <option value="100-500">100 - 500 Students</option>
                    <option value="500-1500">500 - 1,500 Students</option>
                    <option value="1500-3000">1,500 - 3,000 Students</option>
                    <option value="3000+">3,000+ Students</option>
                  </select>
                </div>
              </div>

              <div id="inp-contact-email">
                <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">Official Email ID</label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="e.g. director@academy.edu"
                  className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3.5 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/8 transition-all"
                  required
                />
              </div>

              <div id="inp-comment">
                <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">Operational Requirements</label>
                <textarea
                  rows={2}
                  value={formComment}
                  onChange={(e) => setFormComment(e.target.value)}
                  placeholder="Tell us about current software challenges (e.g. late fees, attendance, GPS tracking)..."
                  className="w-full bg-[#fafafa] border border-gray-200 rounded-lg py-2 px-3.5 font-sans text-xs focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/8 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D90707] text-white py-3 rounded-lg font-sans font-bold text-xs hover:bg-[#B80606] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md shadow-brand-red/10 animate-fade-in"
              >
                <span>{isSubmitting ? 'Transmitting data...' : 'Request Free operational Audit'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* ========================================================
          PART C: AUDIT SUBMISSION MODAL STATUS DIALOG
          ======================================================== */}
      {submissionStatus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
          <div 
            className="bg-white border rounded-2xl max-w-sm w-full shadow-2xl p-6 sm:p-7 animate-fade-in relative overflow-hidden" 
            style={{ borderTop: `4px solid ${submissionStatus === 'success' ? '#10b981' : '#D90707'}` }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              
              {/* Icon Container */}
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  submissionStatus === 'success' 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'bg-red-50 text-brand-red'
                }`}
              >
                {submissionStatus === 'success' ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>

              {/* Header Title */}
              <h3 className="font-display font-extrabold text-[18px] text-[#1a2a4a] leading-tight">
                {submissionStatus === 'success' ? 'Audit Request Received' : 'Transmission Failure'}
              </h3>

              {/* Description Body */}
              <p className="font-sans font-medium text-gray-500 text-[13px] leading-relaxed">
                {submissionMessage}
              </p>

              {/* Dynamic SMTP Status Badge */}
              {/* STATIC MIGRATION CHANGE: Switched from Express SMTP notification to client-side Web3Forms API dispatch */}
              {submissionStatus === 'success' && (
                <div className="pt-2 pb-2 px-3 bg-gray-50 border border-gray-100 rounded-lg w-full flex items-center justify-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isRealSmtp ? 'bg-emerald-500' : 'bg-amber-400 animate-pulse'}`} />
                  <span className="font-mono text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                    {isRealSmtp ? 'Web3Forms API Dispatch Active' : 'SIMULATOR MODE (KEY PENDING)'}
                  </span>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={() => setSubmissionStatus(null)}
                className="w-full bg-[#1a1a1a] hover:bg-brand-red text-white py-3 rounded-lg font-sans font-bold text-xs transition-colors cursor-pointer mt-2 focus:outline-none"
              >
                Acknowledge
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
