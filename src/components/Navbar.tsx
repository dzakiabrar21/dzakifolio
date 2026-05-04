"use client";

import { useState, useEffect } from 'react';
import { Menu, X, CircleUser, LayoutGrid, FileText } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'skills', 'experience', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, isPage: boolean) => {
    if (isPage) {
      setIsMobileMenuOpen(false);
      return;
    }

    if (pathname !== '/') {
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About', icon: CircleUser, href: '/' },
    { id: 'projects', label: 'Project', icon: LayoutGrid, isPage: true, href: '/projects' },
    { id: 'certificates', label: 'Licenses & certifications', icon: FileText, isPage: true, href: '/certificates' },
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.isPage) return pathname === item.href;
    if (item.id === 'about') return pathname === '/';
    return false;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-[1428px] mx-auto px-4 md:px-[122px] h-16 flex items-center justify-between">
        
        {/* Left: empty spacer for symmetry */}
        <div className="hidden md:flex min-w-[140px]" />

        {/* Center: Pill Navigation */}
        <div className="hidden md:flex items-center bg-white/[0.06] border border-white/[0.08] rounded-full px-1.5 py-1.5 gap-1">
          {navItems.map((item) => {
            const active = isActive(item);
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href || '/'}
                onClick={(e) => handleScroll(e, item.id === 'about' ? 'hero' : item.id, !!item.isPage)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-white/10 text-white border border-white/10 shadow-sm'
                    : 'text-white/50 hover:text-white/80 border border-transparent'
                }`}
              >
                <Icon size={16} strokeWidth={active ? 2.2 : 1.8} />
                {item.label && <span>{item.label}</span>}
              </Link>
            );
          })}
        </div>

        {/* Right: empty spacer for symmetry */}
        <div className="hidden md:flex min-w-[140px]" />

        {/* Mobile: Hamburger */}
        <div className="flex md:hidden items-center justify-end w-full">
          <button 
            className="text-white hover:text-white/70 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 flex flex-col p-5 gap-2 shadow-2xl animate-fadeIn">
          {navItems.map((item) => {
            const active = isActive(item);
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href || '/'}
                onClick={(e) => handleScroll(e, item.id === 'about' ? 'hero' : item.id, !!item.isPage)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  active 
                    ? 'bg-white/10 text-white border border-white/10' 
                    : 'text-white/50 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}