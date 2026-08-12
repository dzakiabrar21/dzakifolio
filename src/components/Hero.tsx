"use client";

import { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Monitor, ArrowRight, Check } from 'lucide-react';
import EmailModal from './EmailModal';

export default function Hero() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const email = "muhammaddzakiabrar21@gmail.com";

  return (
    <section id="introduction" className="pb-10">
      {/* Name — slide in dari kanan, delay sedikit */}
      <h1 className="text-white text-3xl md:text-[42px] font-bold leading-tight md:leading-[50px] font-Inter tracking-tight mb-3 animate-slide-right delay-100">
        Muhammad Dzaki Abrar
      </h1>

      {/* Role — fade up */}
      <p className="text-white/50 text-base md:text-[18px] font-normal font-Inter mb-5 animate-fade-up delay-200">
        Informatics Student · AI Enthusiast
      </p>

      {/* Social Links Row — fade up */}
      <div className="flex items-center gap-4 flex-wrap mb-8 animate-fade-up delay-300">
        <SocialLink href="https://github.com/dzakiabrar21" icon={<Github size={15} />} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/muhammad-dzaki-abrar" icon={<Linkedin size={15} />} label="LinkedIn" />
        <SocialLink href="https://www.instagram.com/dzaki.abrarr" icon={<Instagram size={15} />} label="Instagram" />
        
        <button 
          onClick={() => setIsEmailModalOpen(true)}
          className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[13px] font-medium font-Inter transition-colors cursor-pointer"
        >
          <Mail size={15} />
          <span>Email</span>
        </button>
      </div>

      {/* Bio Description — fade up */}
      <p className="text-white text-[14px] md:text-[15px] font-normal leading-relaxed md:leading-[26px] font-Inter max-w-[650px] animate-fade-up delay-400">
        Informatics student at President University specializing in Artificial Intelligence. 
        I am passionate about building high-performance web applications and intelligent systems, 
        focusing on bridging the gap between complex algorithms and seamless user experiences.
      </p>

      {/* Key Metrics Grid — Glassmorphism Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 animate-fade-up delay-500">
        <StatCard value="10+" label="Projects Built" />
        <StatCard value="3" label="Tech Internships" />
        <StatCard value="85%" label="AI mAP Accuracy" />
        <StatCard value="90%+" label="Speed Optimized" />
      </div>

      {/* Email Modal */}
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
        email={email} 
      />
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 flex flex-col gap-0.5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group cursor-default">
      <span className="text-white text-[20px] md:text-[22px] font-bold font-Inter tracking-tight group-hover:text-emerald-400 transition-colors">
        {value}
      </span>
      <span className="text-white/40 text-[11px] font-medium font-Inter tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const isExternal = href.startsWith('http');
  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[13px] font-medium font-Inter transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}