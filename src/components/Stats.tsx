import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  targetNum: number;
  suffix: string;
  label: string;
  hasDecimal?: boolean;
}

function CountingStat({ targetNum, suffix, label, hasDecimal = false }: StatItemProps) {
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
    const duration = 2000; // 2000ms animation
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

  // Format the display
  const displayVal = hasDecimal ? current.toFixed(1) : Math.floor(current).toString();

  return (
    <div 
      ref={elementRef}
      className="flex flex-col items-center justify-center text-center px-4 py-2 md:py-1 select-none"
    >
      <div className="flex items-baseline justify-center">
        <span className="font-display font-extrabold text-[40px] sm:text-[48px] lg:text-[54px] text-white tracking-tight">
          {displayVal}
        </span>
        {/* Suffix is Poppins 700, white with slight opacity per spec */}
        <span className="font-display font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-white/75 ml-0.5">
          {suffix}
        </span>
      </div>
      <p className="font-sans font-medium text-[11px] sm:text-[12px] text-white/70 uppercase tracking-[1.5px] mt-2 max-w-[160px]">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const statsData = [
    { targetNum: 500, suffix: '+', label: 'Schools Partnered' },
    { targetNum: 1.5, suffix: 'M+', label: 'Students Powered', hasDecimal: true },
    { targetNum: 12, suffix: '+', label: 'Years of Leadership' },
    { targetNum: 98, suffix: '%', label: 'Client Retention' },
  ];

  return (
    <section 
      id="stats-bar" 
      className="bg-[#1563c7] py-6 md:py-[28px] relative overflow-hidden"
    >
      {/* Decorative background stripes */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%,transparent)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-[56px]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20 items-center justify-center">
          {statsData.map((stat, i) => (
            <div key={i} className="pt-2 md:pt-0">
              <CountingStat 
                targetNum={stat.targetNum} 
                suffix={stat.suffix} 
                label={stat.label} 
                hasDecimal={stat.hasDecimal} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
