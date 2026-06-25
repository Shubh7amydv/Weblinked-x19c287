import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bus, 
  BookOpen, 
  Calendar, 
  CreditCard, 
  Bell, 
  Heart, 
  FileText, 
  CheckSquare, 
  Shield, 
  Clock, 
  Monitor, 
  FileSpreadsheet,
  Search, 
  Filter,
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import { ERP_MODULES, ERPModule } from '../data';

// Map icon names to Lucide elements
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bus: Bus,
  BookOpen: BookOpen,
  Calendar: Calendar,
  CreditCard: CreditCard,
  Bell: Bell,
  Heart: Heart,
  FileText: FileText,
  CheckSquare: CheckSquare,
  Shield: Shield,
  Clock: Clock,
  Monitor: Monitor,
  FileSpreadsheet: FileSpreadsheet
};

interface ModulesGridProps {
  onPageChange?: (id: string) => void;
}

export default function ModulesGrid({ onPageChange }: ModulesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModule, setActiveModule] = useState<ERPModule | null>(null);

  const categories = ['All', 'Academics', 'Administration', 'Finance', 'Communication'];

  // Filter modules based on selection and search query
  const filteredModules = useMemo(() => {
    return ERP_MODULES.filter((mod) => {
      const matchesCategory = selectedCategory === 'All' || mod.category === selectedCategory;
      const matchesSearch = 
        mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.features.some(feat => feat.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handler for contacting/demoting
  const handleScrollToContact = () => {
    setActiveModule(null);
    if (onPageChange) {
      onPageChange('faqs-contact');
    }
    setTimeout(() => {
      const contactSection = document.getElementById('faq-contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section 
      id="modules" 
      className="bg-bg-white py-20 lg:py-24 px-6 lg:px-[56px] relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none" id="modules-section-header">
          <p className="font-sans font-medium text-[11px] tracking-[2px] uppercase text-[#1563c7] mb-3">
            ENTERPRISE STACK
          </p>
          <h2 className="font-display font-semibold text-[36px] sm:text-[40px] text-[#1a2a4a] tracking-[-0.2px] leading-[1.25] max-w-3xl">
            Comprehensive ERP Modules <span className="text-brand-red">Tailored</span> for Indian Institutions
            <span className="block w-[52px] h-[3px] bg-[#ff6a00] rounded-full mt-[14px] mx-auto"></span>
          </h2>
          <p className="font-sans font-normal text-gray-500 text-[15px] sm:text-[16px] max-w-2xl mt-4">
            Everything you need to automate classrooms, collect billing, track safety schedules, and manage teacher rosters on one lightning-fast web suite.
          </p>
        </div>

        {/* Filter bar and search input */}
        <div 
          className="bg-white border border-gray-100 rounded-2xl p-4 mb-14 flex flex-col md:flex-row gap-4 items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
          id="modules-filter-controls"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto" id="modules-tabs-list">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-sans font-bold text-[12.5px] rounded-lg transition-all duration-200 select-none cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-red text-white shadow-xs'
                    : 'bg-white text-gray-500 hover:text-[#1a1a1a] hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-[320px]" id="modules-search-container">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search features (e.g. GPS, Library, Fee)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 bg-[#fcfcfc] border border-gray-200 rounded-lg font-sans text-[13px] text-[#1a1a1a] focus:bg-white focus:outline-none focus:border-brand-red transition-all"
            />
          </div>
        </div>

        {/* Dynamic 12 Modules Grid in Exact Requested Layout Style */}
        {filteredModules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14" id="modules-grid-list">
            {filteredModules.map((mod) => {
              const IconComponent = iconMap[mod.iconName] || Bus;
              return (
                <div
                  key={mod.id}
                  className="flex gap-5 items-start bg-transparent p-1 group"
                >
                  {/* Icon Box on the Left */}
                  <div className="w-[66px] h-[66px] rounded-[14px] bg-white border border-gray-200/80 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.02)] group-hover:border-brand-red/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-slate-700 group-hover:text-brand-red transition-colors duration-300" />
                  </div>

                  {/* Text Details and Action Button on the Right */}
                  <div className="flex flex-col items-start pt-[1px]">
                    <h3 className="font-display font-extrabold text-[15.5px] sm:text-[16.5px] text-[#1a1a1a] tracking-tight leading-snug mb-1.5 group-hover:text-brand-red transition-colors duration-200">
                      {mod.name}
                    </h3>
                    
                    <p className="font-sans font-normal text-gray-500 text-[13px] sm:text-[13.5px] leading-relaxed mb-4 max-w-sm">
                      {mod.description}
                    </p>

                    <button
                      onClick={() => setActiveModule(mod)}
                      className="border border-brand-red text-brand-red hover:bg-brand-red hover:text-white rounded-full px-4.5 h-[30px] inline-flex items-center gap-1.5 font-sans font-black text-[10px] tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-[0_2px_8px_rgba(230,48,48,0.04)] focus:outline-none"
                    >
                      <span>READ MORE</span>
                      <ArrowRight className="w-3.5 h-3.5 text-current" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#fafafa] border border-gray-150 rounded-2xl py-16 px-6 text-center select-none">
            <Filter className="w-10 h-10 text-brand-red opacity-30 mx-auto mb-3" />
            <p className="font-display font-bold text-[#1a1a1a] text-lg">No ERP Modules Found</p>
            <p className="font-sans text-gray-500 text-sm max-w-md mx-auto mt-1">
              We couldn't match any system components to "{searchQuery}". Try modifying your category selection or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-5 px-5 py-2 bg-brand-red hover:bg-brand-red-hover text-white rounded-lg font-sans font-bold text-xs shadow-xs transition-colors"
            >
              Reset Search Parameters
            </button>
          </div>
        )}

      </div>

      {/* Exquisite popover modal for module workflows details */}
      <AnimatePresence>
        {activeModule && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModule(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              <div className="h-1 bg-brand-red w-full" id="modal-accent-top" />
              
              {/* Header */}
              <div className="p-6 md:p-8 flex items-start justify-between border-b border-gray-100">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-red-light flex items-center justify-center text-brand-red">
                    {React.createElement(iconMap[activeModule.iconName] || Bus, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <span className="font-sans font-bold text-[9.5px] uppercase text-brand-red tracking-wider block mb-0.5">
                      {activeModule.category} ERP MODULE
                    </span>
                    <h3 className="font-display font-extrabold text-[18px] sm:text-[20px] text-[#1a1a1a] tracking-tight leading-tight">
                      {activeModule.name}
                    </h3>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveModule(null)}
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#1a1a1a] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-display font-bold text-[12px] uppercase text-gray-400 tracking-wider mb-2">
                    Module Overview
                  </h4>
                  <p className="font-sans text-gray-600 text-[14px] leading-relaxed">
                    {activeModule.description} Our optimized integration guarantees instant record updates across school networks and supports 100% cloud backup.
                  </p>
                </div>

                {/* Workflow Checklist */}
                <div>
                  <h4 className="font-display font-bold text-[12px] uppercase text-gray-400 tracking-wider mb-3">
                    Configured Workflows
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModule.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start py-0.5">
                        <Check className="w-4.5 h-4.5 text-brand-red shrink-0 mt-0.5" />
                        <span className="font-sans text-[13px] text-gray-700 leading-normal font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System Audit Tags */}
                <div className="bg-[#fcfcfc] border border-gray-100 rounded-xl p-4 flex flex-wrap gap-y-2 gap-x-4 justify-between text-[11px] font-mono text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>Real-time Sync Active</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#D90707] rounded-full" />
                    <span>ISO 27001 SECURE</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>Latency: &lt;350ms</span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <span className="text-[12.5px] font-sans text-gray-400 text-center sm:text-left select-none">
                  Interested in setting this up?
                </span>
                <button
                  onClick={handleScrollToContact}
                  className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer text-center"
                >
                  Book Live Sandbox Demo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
