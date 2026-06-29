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
    <div id="modules-container">
      {/* Full Width Red Header Band */}
      <div className="bg-gradient-to-r from-[#D90707] to-[#A30505] pt-4 lg:pt-5 pb-6 px-6 lg:px-[56px] text-center text-white relative select-none">
        {/* Subtle grid lines background pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 24px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="font-sans font-bold text-[10px] tracking-[2.5px] uppercase text-red-200 mb-2.5">
            ENTERPRISE STACK
          </p>
          <h1 className="font-display font-extrabold text-[30px] sm:text-[38px] tracking-tight leading-[1.2]">
            Comprehensive ERP Modules <span className="text-yellow-300 font-black">Tailored</span> for Indian Institutions
          </h1>
          <p className="font-sans font-medium text-red-100/90 text-[13.5px] sm:text-[14.5px] leading-relaxed mt-4 max-w-2xl mx-auto">
            Everything you need to automate classrooms, collect billing, track safety schedules, and manage teacher rosters on one lightning-fast web suite.
          </p>
        </div>
      </div>

      {/* Main Modules Section */}
      <section
        id="modules"
        className="bg-[#f8f9fb] py-10 px-6 lg:px-[56px] relative"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Filter bar and search input */}
          <div
            className="bg-white border border-gray-150 rounded-2xl p-4 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between shadow-[0_4px_25px_rgba(0,0,0,0.02)]"
            id="modules-filter-controls"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto" id="modules-tabs-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-sans font-bold text-[12.5px] rounded-lg transition-all duration-200 select-none cursor-pointer ${selectedCategory === cat
                      ? 'bg-[#0031AD] text-white shadow-xs'
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
                className="w-full pl-9.5 pr-4 py-2 bg-[#fcfcfc] border border-gray-200 rounded-lg font-sans text-[13px] text-[#1a1a1a] focus:bg-white focus:outline-none focus:border-[#0031AD] transition-all"
              />
            </div>
          </div>

          {/* Dynamic 12 Modules Grid in Exact Requested Layout Style */}
          {filteredModules.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="modules-grid-list">
              {filteredModules.map((mod) => {
                const IconComponent = iconMap[mod.iconName] || Bus;
                return (
                  <div
                    key={mod.id}
                    className="bg-white border border-gray-150 border-t-3 border-t-[#0031AD] hover:border-t-brand-red rounded-xl p-6 flex gap-4 items-start shadow-[0_12px_36px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    {/* Icon Box on the Left */}
                    <div className="w-[48px] h-[48px] rounded-[10px] bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5.5 h-5.5 text-brand-red" />
                    </div>

                    {/* Text Details and Action Button on the Right */}
                    <div className="flex flex-col items-start pt-[1px] flex-1">
                      <h3 className="font-display font-extrabold text-[15.5px] text-[#1a1a1a] tracking-tight leading-snug mb-1 group-hover:text-brand-red transition-colors duration-200">
                        {mod.name}
                      </h3>

                      <p className="font-sans font-normal text-gray-500 text-[13px] leading-relaxed mb-4">
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
                <div className="h-1 bg-gradient-to-r from-brand-red to-[#0031AD] w-full" id="modal-accent-top" />

                {/* Header */}
                <div className="p-6 md:p-8 flex items-start justify-between border-b border-gray-100">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-brand-red">
                      {React.createElement(iconMap[activeModule.iconName] || Bus, { className: 'w-5.5 h-5.5' })}
                    </div>
                    <div>
                      <span className="font-sans font-bold text-[9.5px] uppercase text-[#0031AD] tracking-wider block mb-0.5">
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
                    className="w-full sm:w-auto bg-gradient-to-r from-brand-red to-[#0031AD] hover:from-brand-red-hover hover:to-blue-700 text-white font-sans font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-center"
                  >
                    Book Live Sandbox Demo
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
