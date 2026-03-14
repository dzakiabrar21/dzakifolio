"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'skills', 'projects', 'experience', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Use a threshold relative to window height (e.g., halfway down the screen)
          // This prevents sections like 'projects' from triggering too early
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-[1428px] mx-auto px-6 md:px-[122px] h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter"></div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-white/70 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {[
            { id: 'hero', label: 'About Me' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`transition-colors ${
                activeSection === item.id ? 'text-white' : 'hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href="/Muhammad Dzaki Abrar-CV.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-all">
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 flex flex-col p-6 gap-6 shadow-2xl animate-fadeIn">
          {[
            { id: 'hero', label: 'About Me' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`text-lg font-medium transition-colors ${
                activeSection === item.id ? 'text-white font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href="/Muhammad Dzaki Abrar-CV.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-6 py-3 text-center border border-white/20 rounded-lg hover:bg-white hover:text-black transition-all font-medium text-white">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}