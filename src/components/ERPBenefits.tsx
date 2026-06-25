import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Banknote, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  FileText, 
  Users 
} from 'lucide-react';

interface CountingStatProps {
  targetNum: number;
  suffix: string;
  label: string;
  subLabel: string;
}

function CountingStatItem({ targetNum, suffix, label, subLabel }: CountingStatProps) {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1800; // 1800ms per specifications
    const stepTime = 30; // ms per step
    const steps = duration / stepTime;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        clearInterval(timer);
        setCurrent(targetNum);
      } else {
        setCurrent(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, targetNum]);

  const displayVal = Math.floor(current).toString();

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center text-center">
      <div className="flex items-start justify-center select-none">
        <span className="font-display font-extrabold text-[44px] sm:text-[56px] text-white tracking-tight leading-none">
          {displayVal}
        </span>
        <span className="font-display font-bold text-[24px] sm:text-[34px] text-[#ff6a00] inline-block align-top mt-1 ml-0.5">
          {suffix}
        </span>
      </div>
      <span className="font-sans font-medium text-[11px] sm:text-[13px] text-white/65 uppercase tracking-[1.5px] mt-3 block">
        {label}
      </span>
      <span className="font-sans font-normal text-[10px] sm:text-[11.5px] text-white/40 italic mt-1 block">
        {subLabel}
      </span>
    </div>
  );
}

interface ERPBenefitsProps {
  onCtasClick?: () => void;
  hideTrustBar?: boolean;
}

export default function ERPBenefits({ onCtasClick, hideTrustBar }: ERPBenefitsProps) {
  const statsData = [
    { targetNum: 73, suffix: '%', label: 'Reduction in Admin Work', subLabel: 'vs. manual paper registers' },
    { targetNum: 98, suffix: '%', label: 'Fee Collection Rate', subLabel: 'up from avg. 71% on legacy systems' },
    { targetNum: 90, suffix: 'sec', label: 'Attendance SMS to Parents', subLabel: 'fired automatically every morning' },
    { targetNum: 3, suffix: 'x', label: 'Faster Result Processing', subLabel: 'marks entry to report card' },
  ];

  const cardsData = [
    {
      id: 1,
      icon: Banknote,
      pill: '₹0 Leakage',
      title: 'Complete Fee Transparency',
      body: 'Every payment, instalment, fine, and concession is tracked in real time. No cash goes unrecorded. No register gets lost.',
      proof: 'Avg. ₹2.4L recovered in year 1'
    },
    {
      id: 2,
      icon: Clock,
      pill: '11 hrs/week',
      title: 'Admin Time Saved Per Staff',
      body: 'Attendance, timetables, circulars, and fee reminders run on autopilot. Your staff focuses on students, not paperwork.',
      proof: 'Based on 200+ school deployments'
    },
    {
      id: 3,
      icon: ShieldCheck,
      pill: '99.9% SLA',
      title: 'Zero Downtime on Result Day',
      body: 'Our cloud infrastructure handles 10,000 concurrent logins. No crashes. No frozen portals. No angry parents on result day.',
      proof: 'Guaranteed in writing — every contract'
    },
    {
      id: 4,
      icon: MapPin,
      pill: '500m alert',
      title: 'Parents Always In the Loop',
      body: 'Bus location, attendance status, fee dues, and exam results — parents get notified before they even think to ask.',
      proof: '4.8★ parent satisfaction across schools'
    },
    {
      id: 5,
      icon: FileText,
      pill: '100% digital',
      title: 'CBSE & ICSE Ready Reports',
      body: 'Mark sheets, progress cards, and board submission formats are auto-generated. Fully compliant. Zero manual formatting.',
      proof: 'Used by 340+ CBSE-affiliated schools'
    },
    {
      id: 6,
      icon: Users,
      pill: 'Day 7',
      title: 'Live in One Week, Not Months',
      body: 'Our engineers handle data migration, biometric setup, and staff training on-site. Most schools go live in 7 days.',
      proof: '200+ migrations. Zero data loss.'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.55,
        ease: 'easeOut'
      }
    })
  };

  const handleDownloadBrochure = () => {
    alert("⚡ Dettroin Cloud ERP Brochure Download Request Received. Delivering full presentation PDF v3.2 package now!");
  };

  return (
    <section 
      id="benefits" 
      className="bg-[#f8f9fb] pt-16 pb-4 md:pt-[100px] md:pb-8 px-6 lg:px-[56px] relative select-none"
    >
      <div className="max-w-[1240px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-[600px] mx-auto" id="benefits-header">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <div className="w-6 h-[2px] bg-[#1563c7] rounded-full" />
            <span className="font-sans font-semibold text-[11px] tracking-[2.5px] uppercase text-[#1563c7]">
              The Numbers Don't Lie
            </span>
          </div>
          <h2 className="font-display font-semibold tracking-[-0.25px] leading-[1.22] text-center select-none">
            <span className="block text-[36px] sm:text-[42px] text-[#1a2a4a]">What Changes When Your School</span>
            <span className="block text-[40px] sm:text-[46px] font-bold text-[#1563c7] mt-1">Goes Digital</span>
          </h2>
          <p className="font-sans font-normal text-[#6b7280] text-[15px] sm:text-[17px] leading-[1.8] mt-4">
            Schools on Dettroin ERP report measurable improvements within 90 days — across admin efficiency, fee recovery, parent trust, and staff productivity.
          </p>
        </div>

        {/* Big Stats Row */}
        <div className="bg-[#1563c7] rounded-[20px] p-8 md:p-[56px_48px] mb-16 shadow-[0_20px_40px_rgba(21,99,199,0.12)] relative overflow-hidden" id="benefits-stats-row">
          {/* Subtle background strip stripes */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%,transparent)] bg-[size:32px_32px] pointer-events-none opacity-40" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 text-center items-stretch justify-center relative z-10">
            {statsData.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center justify-between text-center select-none px-4 ${
                  idx !== 3 ? 'md:border-r md:border-white/18' : ''
                }`}
              >
                <CountingStatItem 
                  targetNum={stat.targetNum}
                  suffix={stat.suffix}
                  label={stat.label}
                  subLabel={stat.subLabel}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" id="benefits-cards-grid">
          {cardsData.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                className="bg-white border border-[#e2e8f0] rounded-[14px] p-8 flex flex-col justify-between transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1.5 group border-t-3 border-t-[#1563c7] hover:border-t-[#ff6a00]"
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-[54px] h-[54px] rounded-[14px] bg-red-50 border border-red-100 flex items-center justify-center text-[#D90707] transition-all">
                      <IconComponent className="w-[26px] h-[26px]" />
                    </div>
                    <span className="bg-red-50 border border-red-100 rounded-full px-3.5 py-1.5 font-display font-bold text-[13px] sm:text-[14px] md:text-[16px] text-[#D90707]">
                      {card.pill}
                    </span>
                  </div>

                  {/* Benefit details */}
                  <h3 className="font-display font-semibold text-[19px] text-[#D90707] leading-[1.35] mb-2.5">
                    {card.title}
                  </h3>
                  <p className="font-sans font-normal text-[#6b7280] text-[14px] leading-[1.8]">
                    {card.body}
                  </p>
                </div>

                {/* Bottom proof line */}
                <div className="border-t border-[#f0f2f5] pt-4 mt-6 flex items-center gap-2 select-none">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e] shrink-0" />
                  <span className="font-sans font-medium text-[12px] text-[#9ca3af]">
                    {card.proof}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Bar */}
        {!hideTrustBar && (
          <div 
            className="bg-white border border-[#e2e8f0] rounded-[14px] p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_30px_rgba(0,0,0,0.015)]"
            id="benefits-trust-bar"
          >
            <p className="font-display font-semibold text-[16px] sm:text-[18px] text-[#1a2a4a] text-center md:text-left leading-snug">
              Still running on spreadsheets and paper registers?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 select-none">
              <button
                onClick={onCtasClick}
                className="w-full sm:w-auto bg-[#1563c7] text-white rounded-lg py-3 px-7 font-sans font-semibold text-sm transition-all duration-200 hover:bg-[#1253a8] hover:-translate-y-0.5 shadow-md shadow-[#1563c7]/10 flex items-center justify-center cursor-pointer"
              >
                See Dettroin in Action &rarr;
              </button>
              <button
                onClick={handleDownloadBrochure}
                className="w-full sm:w-auto bg-transparent border-1.5 border-[#e2e8f0] text-[#6b7280] rounded-lg py-3 px-7 font-sans font-semibold text-sm transition-all duration-200 hover:border-[#1563c7] hover:text-[#1563c7] hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
              >
                Download ERP Brochure
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
