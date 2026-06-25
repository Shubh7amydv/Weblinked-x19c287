import React, { useState } from 'react';
import { 
  Briefcase, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Send, 
  CheckCircle,
  AlertTriangle,
  Bookmark,
  Building2,
  Clock,
  Compass
} from 'lucide-react';

export default function Careers() {
  // Job Enquiry Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('software-engineering');
  const [experience, setExperience] = useState('mid-level');
  const [resumeLink, setResumeLink] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Submission Status
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [statusMsg, setStatusMsg] = useState('');

  const careersList = [
    {
      id: 'job-1',
      title: 'Full Stack Software Engineer',
      type: 'Full-time',
      location: 'Ahmedabad (Hybrid)',
      department: 'Engineering',
      description: 'Design and deploy core multi-tenant school modules, telemetry tracking integrations, and high-performance React web clients.',
    },
    {
      id: 'job-2',
      title: 'SaaS product specialist & QA',
      type: 'Full-time',
      location: 'Ahmedabad (On-site)',
      department: 'Product Assurance',
      description: 'Conduct comprehensive database testing, design automated integration test scripts, and coordinate sandbox stress-tests.',
    },
    {
      id: 'job-3',
      title: 'Business Development Manager',
      type: 'Full-time',
      location: 'Gujarat Region (Field)',
      department: 'Sales & BD',
      description: 'Engage with premium CBSE and ICSE school operators, showcase academic modules, and coordinate custom enterprise migrations.',
    },
    {
      id: 'job-4',
      title: 'ERP Training & Support Executive',
      type: 'Full-time',
      location: 'Ahmedabad / Remote',
      department: 'Customer Experience',
      description: 'Conduct parent and teacher training tutorials, assist school administration desks during billing collections, and monitor system setups.',
    }
  ];

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setStatusMsg('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      console.warn("VITE_WEB3FORMS_KEY is missing. Simulating career job enquiry transmission.");
      setTimeout(() => {
        setIsSubmitting(false);
        setStatus('success');
        setStatusMsg('Job enquiry details successfully simulated! (Specify VITE_WEB3FORMS_KEY in your settings to connect the live Web3Forms delivery node).');
        
        // Reset form fields
        setFullName('');
        setEmail('');
        setPhone('');
        setResumeLink('');
        setMessage('');
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
          subject: `💼 New Dettroin Career Enquiry: ${fullName} (${position})`,
          from_name: "Dettroin Careers Bureau",
          career_name: fullName,
          career_email: email,
          career_phone: phone,
          career_position: position,
          career_experience: experience,
          career_resume_url: resumeLink || "None provided",
          career_message: message || "None provided",
        }),
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMsg('Your job application and coordinates have been safely synchronized into the Dettroin hiring directory! The operations crew will review and revert.');
        
        // Reset form fields
        setFullName('');
        setEmail('');
        setPhone('');
        setResumeLink('');
        setMessage('');
      } else {
        setStatus('error');
        setStatusMsg(data.message || 'Web3Forms API rejected the transmission. Verify your credentials.');
      }
    } catch (err) {
      console.error('Careers form submit error:', err);
      setIsSubmitting(false);
      setStatus('error');
      setStatusMsg('Connection to the external transmission node failed. Please verify your connection.');
    }
  };

  const handleApplyClick = (jobTitle: string) => {
    // Scroll to form
    const formEl = document.getElementById('career-enquiry-form-card');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // Set position
    const optionName = jobTitle.toLowerCase().replace(/\s+/g, '-');
    setPosition(optionName);
  };

  return (
    <section id="careers-section" className="bg-white py-20 lg:py-24 px-6 lg:px-[56px] text-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ========================================================
            PART A: HERO BLOCK / TYPOGRAPHY HEADER
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-none" id="career-header-intro">
          <span className="font-sans font-bold text-[11px] tracking-[2.5px] uppercase text-[#566c37] bg-[#566c37]/10 px-4 py-1.5 rounded-full inline-block mb-4">
            JOIN DETTROIN CREW
          </span>
          <h1 className="font-display font-black text-[36px] sm:text-[48px] leading-tight text-black tracking-tight" id="career-headline">
            Build the Future of <span className="text-[#566c37]">Enterprise Operations</span>
          </h1>
          <div className="w-16 h-1.5 bg-[#566c37] mx-auto my-6 rounded-full" />
          <p className="font-sans font-normal text-gray-600 text-[15px] sm:text-[17px] leading-relaxed">
            We are looking for bold, disciplined individuals who value pristine software aesthetics, rigorous multi-tenant engineering, and clear system simplicity. Explore our active roles and join India's premium operations software suite.
          </p>
        </div>

        {/* ========================================================
            PART B: MAIN BENTO SYSTEM LAYOUT (Open roles + Enquiry Form)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="careers-split-grid">
          
          {/* LEFT: OPEN POSITIONS COLUMN (7 COLS) */}
          <div className="lg:col-span-7 space-y-6" id="open-roles-column">
            <h2 className="font-display font-extrabold text-[22px] tracking-tight text-black flex items-center gap-2 mb-4 select-none">
              <Briefcase className="w-5.5 h-5.5 text-[#566c37]" />
              Active Operational Openings
            </h2>
            
            <div className="grid grid-cols-1 gap-6" id="careers-cards-group">
              {careersList.map((job) => (
                <div 
                  key={job.id} 
                  id={`job-card-${job.id}`}
                  className="bg-[#fafafa] border border-gray-100 p-6 rounded-xl hover:bg-white hover:border-[#566c37]/20 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="font-display font-bold text-[17px] text-black">
                      {job.title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="bg-[#566c37]/10 text-[#566c37] font-sans font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                        {job.type}
                      </span>
                      <span className="bg-gray-100 text-gray-500 font-sans font-medium text-[10px] px-2.5 py-1 rounded">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  
                  <span className="font-sans font-bold text-[11px] text-[#566c37] uppercase tracking-wider block mb-2">
                    Department: {job.department}
                  </span>

                  <p className="font-sans text-[13px] text-gray-600 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <button
                    onClick={() => handleApplyClick(job.title)}
                    className="inline-flex items-center gap-1.5 font-sans font-bold text-xs text-[#566c37] hover:text-[#3d4d27] transition-all hover:translate-x-0.5"
                    id={`btn-apply-job-${job.id}`}
                  >
                    Apply for this opening &rarr;
                  </button>
                </div>
              ))}
            </div>

            {/* General Hiring Note */}
            <div className="bg-[#566c37]/5 border-l-4 border-[#566c37] p-5 rounded-r-xl mt-8 select-none" id="career-general-notice">
              <h4 className="font-display font-bold text-[14px] text-[#566c37] mb-1">
                Don’t see a matching schedule?
              </h4>
              <p className="font-sans text-[12.5px] text-gray-600 leading-relaxed">
                We are always seeking incredible talent. Submit your credentials in the Job Enquiry Form using the <strong className="text-black">Other / General Nomination</strong> option and explain how you can help optimize our systems database.
              </p>
            </div>
          </div>

          {/* RIGHT: JOB ENQUIRY FORM PANEL (5 COLS) */}
          <div className="lg:col-span-5" id="career-form-column">
            <div 
              id="career-enquiry-form-card"
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xl relative"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}
            >
              <div className="border-b border-gray-100 pb-5 mb-5 select-none text-center">
                <span className="font-mono font-bold text-[10px] text-[#566c37] tracking-widest uppercase block">
                  FAST TRANSMISSION DESK
                </span>
                <h3 className="font-display font-black text-xl text-black mt-1">
                  Job Enquiry Portal
                </h3>
                <p className="font-sans text-xs text-gray-500 mt-1">
                  Connect your resume coordinates with Web3Forms secure endpoints.
                </p>
              </div>

              {/* Status Message Display */}
              {status && (
                <div 
                  id="career-enquiry-status"
                  className={`p-4 rounded-xl flex items-start gap-3 mb-6 font-sans text-xs ${
                    status === 'success' 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <span>{statusMsg}</span>
                </div>
              )}

              <form onSubmit={handleJobSubmit} className="space-y-4" id="career-enquiry-active-form">
                
                {/* Full Name */}
                <div>
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Vikram Patel"
                      className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 font-sans text-xs focus:bg-white focus:outline-none focus:border-[#566c37] focus:ring-4 focus:ring-[#566c37]/5 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. vikram@dettroin.com"
                      className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 font-sans text-xs focus:bg-white focus:outline-none focus:border-[#566c37] focus:ring-4 focus:ring-[#566c37]/5 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Mobile / Contact Number */}
                <div>
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">
                    Mobile / Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98112 34567"
                      className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 font-sans text-xs focus:bg-white focus:outline-none focus:border-[#566c37] focus:ring-4 focus:ring-[#566c37]/5 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Position of Interest */}
                <div>
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">
                    Position of Interest
                  </label>
                  <div className="relative">
                    <Bookmark className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
                    <select
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 font-sans text-xs focus:bg-white focus:outline-none focus:border-[#566c37] focus:ring-4 focus:ring-[#566c37]/5 transition-all appearance-none"
                    >
                      <option value="full-stack-software-engineer">Full Stack Software Engineer</option>
                      <option value="saas-product-specialist-&-qa">SaaS Product Specialist & QA</option>
                      <option value="business-development-manager">Business Development Manager</option>
                      <option value="erp-training-&-support-executive">ERP Training & Support Executive</option>
                      <option value="other-general-nomination">Other / General Nomination</option>
                    </select>
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">
                    Experience Level
                  </label>
                  <div className="grid grid-cols-3 gap-2 font-sans text-[11px] font-semibold text-center mt-1 select-none">
                    <button
                      type="button"
                      onClick={() => setExperience('entry-level')}
                      className={`py-2 border rounded-lg transition-all ${
                        experience === 'entry-level' 
                          ? 'border-[#566c37] bg-[#566c37]/5 text-[#566c37]' 
                          : 'border-gray-200 hover:bg-gray-50 text-gray-500'
                      }`}
                    >
                      Entry
                    </button>
                    <button
                      type="button"
                      onClick={() => setExperience('mid-level')}
                      className={`py-2 border rounded-lg transition-all ${
                        experience === 'mid-level' 
                          ? 'border-[#566c37] bg-[#566c37]/5 text-[#566c37]' 
                          : 'border-gray-200 hover:bg-gray-50 text-gray-500'
                      }`}
                    >
                      Mid (2-5 yrs)
                    </button>
                    <button
                      type="button"
                      onClick={() => setExperience('senior-level')}
                      className={`py-2 border rounded-lg transition-all ${
                        experience === 'senior-level' 
                          ? 'border-[#566c37] bg-[#566c37]/5 text-[#566c37]' 
                          : 'border-gray-200 hover:bg-gray-50 text-gray-500'
                      }`}
                    >
                      Senior (5+)
                    </button>
                  </div>
                </div>

                {/* Resume URL */}
                <div>
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">
                    Link to Resume (Drive / Dropbox) <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Compass className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                      type="url"
                      value={resumeLink}
                      onChange={(e) => setResumeLink(e.target.value)}
                      placeholder="e.g. https://drive.google.com/..."
                      className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 font-sans text-xs focus:bg-white focus:outline-none focus:border-[#566c37] focus:ring-4 focus:ring-[#566c37]/5 transition-all"
                    />
                  </div>
                </div>

                {/* Cover Message / Core Pitch */}
                <div>
                  <label className="font-sans font-bold text-[10.5px] text-gray-500 uppercase tracking-widest block mb-1">
                    Brief Statement / Cover Pitch
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Provide a short breakdown of your core stack, capabilities or why you want to operate with Dettroin."
                      rows={3}
                      className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 font-sans text-xs focus:bg-white focus:outline-none focus:border-[#566c37] focus:ring-4 focus:ring-[#566c37]/5 transition-all"
                    />
                  </div>
                </div>

                {/* Action Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#566c37] hover:bg-[#3d4d27] text-white py-3.5 rounded-lg font-sans font-bold text-xs shadow-md shadow-[#566c37]/15 transition-all flex items-center justify-center gap-2 select-none"
                  id="btn-careers-submit"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Transmitting credentials...' : 'Transmit Career Enquiry'}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
