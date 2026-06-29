import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid } from 'lucide-react';
import DettroinLogo from './DettroinLogo';

interface HeaderProps {
  onCtasClick: () => void;
  activePage: string;
  onPageChange: (id: string) => void;
}

export default function Header({ onCtasClick, activePage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    onPageChange(id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'ERP System', id: 'erp-system' },
    { label: 'Why Dettroin', id: 'why-gridaan' },
    { label: 'Web Portals', id: 'web-portals' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQs & Contact', id: 'faqs-contact' },
  ];

  return (
    <header
      id="brand-header"
      className={`sticky top-0 w-full bg-white border-b-2 border-brand-red z-50 transition-all duration-300 min-h-[82px] py-3.5 flex items-center px-6 lg:px-[56px] justify-between ${
        isScrolled ? 'shadow-[0_4px_24px_rgba(230,48,48,0.12)]' : 'shadow-[0_2px_16px_rgba(230,48,48,0.08)]'
      }`}
    >
      {/* Logo Container */}
      <a
        href="#home"
        onClick={(e) => handleLinkClick(e, 'home')}
        className="flex items-center gap-2 group cursor-pointer"
        id="header-logo-container"
      >
        <DettroinLogo showTagline={true} />
      </a>

      {/* Navigation Links — Desktop */}
      <nav className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleLinkClick(e, item.id)}
            className={`relative font-sans font-semibold text-[15px] transition-all duration-200 py-1.5 ${
              activePage === item.id
                ? 'text-brand-red'
                : 'text-gray-500 hover:text-[#1a1a1a]'
            }`}
          >
            {item.label}
            {/* Slide active indicator */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-300 ${
                activePage === item.id ? 'w-full' : 'w-0'
              }`}
            />
          </a>
        ))}
      </nav>

      {/* Right Column CTA Buttons */}
      <div className="hidden lg:flex items-center gap-4" id="desktop-cta-container">
        <button
          onClick={onCtasClick}
          className="bg-brand-red text-white font-sans font-bold text-[14px] px-6 py-2.5 rounded-lg transition-all duration-200 hover:bg-brand-red-hover hover:-translate-y-0.5 shadow-md hover:shadow-brand-red/20 hover:shadow-lg focus:outline-none"
          id="btn-header-demo"
        >
          Schedule Free Demo
        </button>
      </div>

      {/* Hamburger Menu Icon — Mobile */}
      <button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="block lg:hidden text-[#1a1a1a] p-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
        aria-label="Toggle menu"
        id="btn-hamburger"
      >
        {isDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Off-canvas Mobile Drawer */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#1a1a1a]/30 backdrop-blur-xs transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Body */}
          <div className="relative w-[280px] max-w-full bg-white h-full shadow-2xl z-50 flex flex-col border-l-2 border-brand-red animate-slide-in p-6">
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <DettroinLogo showTagline={false} />
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-[#1a1a1a] p-1 rounded-md hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stacked Links */}
            <div className="flex flex-col gap-1 mt-6 overflow-y-auto flex-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`font-sans font-medium text-[16px] py-3.5 px-3 rounded-lg border-b border-gray-50 flex items-center transition-all ${
                    activePage === item.id
                      ? 'bg-brand-red/5 text-brand-red border-l-4 border-l-brand-red font-semibold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Footer Area inside Drawer */}
            <div className="pt-6 border-t border-gray-100 mt-auto">
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  onCtasClick();
                }}
                className="w-full bg-brand-red text-white py-3 rounded-lg font-sans font-bold text-[15px] shadow-md hover:bg-brand-red-hover active:scale-95 transition-all text-center"
              >
                Schedule Free Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
