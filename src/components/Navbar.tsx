"use client";

import { useState, useEffect } from 'react';
import { CircleUser, LayoutGrid, FileText } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
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

  // Mobile order: About (left) | Projects (center) | Certificates (right)
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
          <div className="hidden md:flex items-center bg-white/[0.06] border border-white/[0.08] rounded-full px-1.5 py-1.5 gap-1">
            {/* Desktop: About | Projects | Certificates */}
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

      {/* Mobile Floating Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none">
        <div className="flex justify-center pb-5 px-10">
          <div className="pointer-events-auto w-full flex items-center justify-around bg-white/[0.12] backdrop-blur-2xl border border-white/[0.15] rounded-full px-3 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.35)]">
            {navItems.map((item) => {
              const active = isActive(item);
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href || '/'}
                  onClick={(e) => handleScroll(e, item.id === 'about' ? 'hero' : item.id, !!item.isPage)}
                  className="relative flex items-center px-3 py-2"
                >
                  {/* Animated sliding pill background */}
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/20 rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}

                  <span className="relative flex items-center gap-2">
                    <Icon
                      size={20}
                      strokeWidth={active ? 2.2 : 1.6}
                      className={`flex-shrink-0 transition-colors duration-300 ${
                        active ? 'text-white' : 'text-white/50'
                      }`}
                    />
                    <AnimatePresence initial={false}>
                      {mounted && active && (
                        <motion.span
                          key={item.id + '-label'}
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          className="text-[11px] font-medium text-white whitespace-nowrap overflow-hidden"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
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
