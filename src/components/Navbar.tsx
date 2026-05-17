"use client";

import { useState, useEffect } from 'react';
import { CircleUser, LayoutGrid, FileText } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, isPage: boolean) => {
    if (isPage) return;

    if (pathname !== '/') return;

    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: CircleUser, href: '/' },
    { id: 'projects', label: 'Projects', icon: LayoutGrid, isPage: true, href: '/projects' },
    { id: 'certificates', label: 'Certificates', icon: FileText, isPage: true, href: '/certificates' },
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.isPage) return pathname === item.href;
    if (item.id === 'about') return pathname === '/';
    return false;
  };

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 hidden md:block ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-[1428px] mx-auto px-4 md:px-[122px] h-16 flex items-center justify-between">
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
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex min-w-[140px]" />
        </div>
      </nav>

      {/* Mobile Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-black/85 backdrop-blur-xl border-t border-white/[0.08] pb-safe">
          <div className="flex items-center justify-around max-w-sm mx-auto">
            {navItems.map((item) => {
              const active = isActive(item);
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href || '/'}
                  onClick={(e) => handleScroll(e, item.id === 'about' ? 'hero' : item.id, !!item.isPage)}
                  className="flex flex-col items-center gap-0.5 py-2 px-5 group"
                >
                  <div className={`flex items-center justify-center w-9 h-6 rounded-full transition-all duration-200 ${
                    active ? 'bg-white/15' : ''
                  }`}>
                    <Icon
                      size={18}
                      strokeWidth={active ? 2.2 : 1.6}
                      className={`transition-all duration-200 ${
                        active ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    />
                  </div>
                  <span className={`text-[9px] font-medium tracking-wide transition-all duration-200 ${
                    active ? 'text-white' : 'text-white/40 group-hover:text-white/60'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}