import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  LayoutGrid, 
  ShieldAlert, 
  Mail, 
  PhoneCall, 
  MapPin,
  ArrowUp
} from 'lucide-react';
import DettroinLogo from './DettroinLogo';

interface FooterProps {
  onPageChange?: (id: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const socialIcons = [
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    let targetPage = 'home';
    if (id === 'modules' || id === 'sandbox') {
      targetPage = 'erp-system';
    } else if (id === 'why-us' || id === 'story') {
      targetPage = 'why-gridaan';
    } else if (id === 'faq-contact') {
      targetPage = 'faqs-contact';
    } else if (id === 'careers' || id === 'careers-form') {
      targetPage = 'careers';
    } else if (id === 'web-portals') {
      targetPage = 'web-portals';
    }

    if (onPageChange) {
      onPageChange(targetPage);
    }

    // Scroll to the element or top
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        const offset = 68; // height of sticky header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <footer 
      id="brand-footer" 
      className="bg-[#1a1a1a] text-white pt-[72px] px-6 lg:px-[56px] relative overflow-hidden"
      style={{ borderTop: '3px solid #D90707' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12">
          
          {/* Column 1: Brand Header details (4 cols) */}
          <div className="lg:col-span-4 space-y-6" id="footer-col-brand">
            <DettroinLogo theme="dark" showTagline={true} />

            <p className="font-sans font-normal text-gray-400 text-[13px] leading-relaxed max-w-sm font-light">
              Simplifying Business, Amplifying Growth. The premier operations database and custom branding studio engineered specifically to streamline billing recoveries, safety, and roster records.
            </p>

            {/* Social Handles */}
            <div className="flex items-center gap-3" id="footer-social-handles">
              {socialIcons.map((soc, i) => {
                const IconEl = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    className="w-9 h-9 rounded-full bg-[#D90707] flex items-center justify-center text-white transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5"
                  >
                    <IconEl className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Certification Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2" id="footer-certification-panels">
              <span className="bg-white/[0.06] text-white/50 border border-white/5 px-2.5 py-1 rounded font-mono text-[9px] font-bold tracking-wider uppercase flex items-center gap-1.5 select-none">
                🔒 ISO 27001 SECURE
              </span>
              <span className="bg-white/[0.06] text-white/50 border border-white/5 px-2.5 py-1 rounded font-mono text-[9px] font-bold tracking-wider uppercase flex items-center gap-1.5 select-none">
                ⚡ SSL VERIFIED
              </span>
            </div>
          </div>

          {/* Column 2: Services product and capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-5" id="footer-col-erp-stack">
            <div className="relative">
              <h4 className="font-display font-bold text-[14.5px] uppercase tracking-wider text-white">
                Services
              </h4>
              <div className="w-8 h-0.5 bg-[#566c37] mt-2.5 rounded-full" />
            </div>

            <ul className="space-y-2.5 font-sans text-[13px]">
              <li>
                <a href="#web-portals" onClick={(e) => handleLinkClick(e, 'web-portals')} className="text-gray-400 hover:text-white transition-colors">
                  Enterprise software Development
                </a>
              </li>
              <li>
                <a href="#modules" onClick={(e) => handleLinkClick(e, 'modules')} className="text-gray-400 hover:text-white transition-colors">
                  School ERP
                </a>
              </li>
              <li>
                <a href="#web-portals" onClick={(e) => handleLinkClick(e, 'web-portals')} className="text-gray-400 hover:text-white transition-colors">
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="#web-portals" onClick={(e) => handleLinkClick(e, 'web-portals')} className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-gray-400 hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-gray-400 hover:text-white transition-colors">
                  CRM Solutions
                </a>
              </li>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-gray-400 hover:text-white transition-colors">
                  Software Architecture
                </a>
              </li>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-gray-400 hover:text-white transition-colors">
                  Customer Experience Plateform
                </a>
              </li>
              <li>
                <a href="#web-portals" onClick={(e) => handleLinkClick(e, 'web-portals')} className="text-gray-400 hover:text-white transition-colors">
                  API Integration
                </a>
              </li>
              <li>
                <a href="#faq-contact" onClick={(e) => handleLinkClick(e, 'faq-contact')} className="text-gray-400 hover:text-white transition-colors">
                  Support & Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Career Section replacing Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-5" id="footer-col-corporate">
            <div className="relative">
              <h4 className="font-display font-bold text-[14.5px] uppercase tracking-wider text-white">
                Career
              </h4>
              <div className="w-8 h-0.5 bg-brand-red mt-2.5 rounded-full" />
            </div>

            <ul className="space-y-3.5 font-sans text-[13px]">
              <li>
                <a href="#careers" onClick={(e) => handleLinkClick(e, 'careers')} className="text-gray-400 hover:text-white transition-colors">
                  Openings
                </a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => handleLinkClick(e, 'careers')} className="text-gray-400 hover:text-white transition-colors font-semibold text-[#566c37]">
                  Job Enquiry Form
                </a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => handleLinkClick(e, 'careers')} className="text-gray-400 hover:text-white transition-colors">
                  Submit Resume
                </a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => handleLinkClick(e, 'careers')} className="text-gray-400 hover:text-white transition-colors">
                  Work Culture
                </a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => handleLinkClick(e, 'careers')} className="text-gray-400 hover:text-white transition-colors">
                  Join Dettroin Crew
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact specifications (3 cols) */}
          <div className="lg:col-span-3 space-y-5" id="footer-col-contact">
            <div className="relative">
              <h4 className="font-display font-bold text-[14.5px] uppercase tracking-wider text-white">
                State operations
              </h4>
              <div className="w-8 h-0.5 bg-brand-red mt-2.5 rounded-full" />
            </div>

            <ul className="space-y-4 font-sans text-[12.8px] text-gray-400 pr-2">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4.5 h-4.5 text-brand-red shrink-0 mt-0.5" />
                <span>302, Iscon Crossroad Heights, Satellite, Ahmedabad, India</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <PhoneCall className="w-4.5 h-4.5 text-brand-red shrink-0 mt-0.5" />
                <span className="truncate">+91 97421 XXXXX (Sales PRI)</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Mail className="w-4.5 h-4.5 text-brand-red shrink-0 mt-0.5" />
                <span className="truncate">info@dettroin.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment bar */}
        <div 
          className="py-6 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4 mt-8"
          id="footer-bottom-segment"
        >
          <p className="font-sans font-medium text-[#6b7280] text-xs text-center md:text-left selection:bg-brand-red">
            © {new Date().getFullYear()} Dettroin Software Solutions Private Limited. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-[11px] text-[#6b7280] font-semibold select-none">
            <a href="#faq-contact" onClick={(e) => handleLinkClick(e, 'faq-contact')} className="hover:text-white">Privacy Standard</a>
            <a href="#faq-contact" onClick={(e) => handleLinkClick(e, 'faq-contact')} className="hover:text-white">Terms of use</a>
            <a href="#faq-contact" onClick={(e) => handleLinkClick(e, 'faq-contact')} className="hover:text-white">RBI Payout Mandates</a>
          </div>

          {/* Interactive Back to top anchor */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 bg-white/[0.05] hover:bg-brand-red hover:text-white transition-all text-gray-400 font-sans font-bold text-[11px] py-1.5 px-3 rounded-lg focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
