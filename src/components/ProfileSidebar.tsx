"use client";

import { Github, Linkedin, Instagram, Mail, Monitor, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const navSections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'experience', label: 'Organization & Work Experience' },
  { id: 'project-event', label: 'Project Event' },
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
      {/* Circular Profile Photo — scale in dari kecil */}
      <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10 shadow-2xl animate-scale-in delay-0">
        <img 
          src="/images/image(4).webp"
          alt="Muhammad Dzaki Abrar"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Language Badges — fade up */}
      <div className="flex items-center gap-2 flex-wrap justify-center animate-fade-up delay-150">
        {['English', 'Indonesian'].map((lang) => (
          <span key={lang} className="text-white/60 text-[11px] font-medium font-Inter bg-white/[0.06] border border-white/[0.08] rounded-md px-3 py-1">
            {lang}
          </span>
        ))}
      </div>

      {/* Download CV Button — fade up */}
      <div className="w-full flex justify-center md:justify-start md:px-3 mb-2 mt-2 animate-fade-up delay-250">
        <a 
          href="/cv.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/60 hover:text-white text-[13px] font-semibold font-Inter transition-all cursor-pointer group"
        >
          <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
          <span className="border-b border-transparent group-hover:border-white/50 pb-[1px] transition-colors tracking-wide">Download CV</span>
        </a>
      </div>

      {/* Sidebar Navigation — tiap item stagger */}
      <nav className="hidden md:flex w-full flex-col gap-0.5 mt-2">
        {navSections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            style={{ animationDelay: `${350 + i * 50}ms` }}
            className="flex items-center gap-2 text-left text-white/40 hover:text-white/70 text-[13px] font-Inter py-2 px-3 rounded-lg hover:bg-white/[0.03] transition-all cursor-pointer animate-fade-up"
          >
            <span className="text-white/20">—</span>
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
