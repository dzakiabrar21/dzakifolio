"use client";

import { Github, Linkedin, Instagram, Mail, Monitor, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const navSections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'experience', label: 'Organization & Work Experience' },
  { id: 'committee', label: 'Committee' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function ProfileSidebar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Circular Profile Photo */}
      <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10 shadow-2xl">
        <img 
          src="/images/image(4).JPG"
          alt="Muhammad Dzaki Abrar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Language Badges */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {['English', 'Indonesian'].map((lang) => (
          <span key={lang} className="text-white/60 text-[11px] font-medium font-Inter bg-white/[0.06] border border-white/[0.08] rounded-md px-3 py-1">
            {lang}
          </span>
        ))}
      </div>

      {/* Sidebar Navigation */}
      <nav className="hidden md:flex w-full flex-col gap-0.5 mt-2">
        {navSections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="flex items-center gap-2 text-left text-white/40 hover:text-white/70 text-[13px] font-Inter py-2 px-3 rounded-lg hover:bg-white/[0.03] transition-all cursor-pointer"
          >
            <span className="text-white/20">—</span>
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
