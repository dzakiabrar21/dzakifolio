"use client";

import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="pt-12 pb-12 border-t border-white/10 mt-8">
      <div className="max-w-[1428px] mx-auto px-6 md:px-[122px] space-y-16">
        {/* Top Footer: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <p className="text-white/60 text-sm leading-relaxed">
              Engineering Intelligence.<br />Crafting Modern Web.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="hover:text-white transition-colors">Home</a>
              <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="hover:text-white transition-colors">About Me</a>
              <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-white transition-colors">Experience</a>
              <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-white transition-colors">Skills</a>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white">Projects</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-white transition-colors">All Work</a>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-white transition-colors">Featured</a>
              <a href="#certificates" onClick={(e) => handleScroll(e, 'certificates')} className="hover:text-white transition-colors">Certificates</a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="https://github.com/dzakiabrar21" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/muhammad-dzaki-abrar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/dzaki.abrarr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="mailto:muhammaddzakiabrar21@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>

        {/* Bottom Footer: Copyright & Socials */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-white/60 text-sm">© 2026 Muhammad Dzaki Abrar. All rights reserved.</p>
            <p className="text-white/40 text-[13px]">Coded with Next.js & Tailwind CSS.</p>
          </div>

          <div className="flex items-center gap-4">
            <SocialButton icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/muhammad-dzaki-abrar" />
            <SocialButton icon={<Github size={18} />} href="https://github.com/dzakiabrar21" />
            <SocialButton icon={<Instagram size={18} />} href="https://www.instagram.com/dzaki.abrarr" />
            <SocialButton icon={<Mail size={18} />} href="mailto:muhammaddzakiabrar21@gmail.com" />
            <button 
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  return (
    <a 
      href={href} 
      target={isExternal && !href.startsWith('mailto:') ? "_blank" : undefined} 
      rel={isExternal && !href.startsWith('mailto:') ? "noopener noreferrer" : undefined}
      className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
    >
      {icon}
    </a>
  );
}