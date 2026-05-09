"use client";

import { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Phone } from 'lucide-react';
import EmailModal from './EmailModal';
import ContactModal from './ContactModal';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const email = "muhammaddzakiabrar21@gmail.com";
  const phoneNumber = "085321227498";

  return (
    <section id="contact" className="py-6 md:py-8 mt-4">
      {/* Minimalist Frame Highlight */}
      <ScrollReveal className="relative p-6 md:p-8 rounded-[32px] border border-white/[0.05] bg-white/[0.01] overflow-hidden group">
        {/* Subtle Gradient Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex flex-col gap-4 relative z-10">
          <h2 className="reveal text-white text-[26px] md:text-[32px] font-bold leading-tight font-Inter tracking-tight">
            Get In Touch
          </h2>
          <p className="reveal text-white/60 text-[14px] md:text-[15px] font-normal leading-relaxed font-Inter max-w-[550px]">
            I'm currently open to new opportunities. Whether you have a question or just want to connect, feel free to reach out through any of these platforms!
          </p>
          
          <div className="reveal flex flex-wrap gap-3 mt-2">
            <button 
              onClick={() => setIsEmailModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all font-Inter text-[13px] font-medium"
            >
              <Mail size={16} />
              <span>Email</span>
            </button>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all font-Inter text-[13px] font-medium"
            >
              <Phone size={16} />
              <span>Contact</span>
            </button>
            <ContactLink 
              icon={<Github size={16} />} 
              label="GitHub" 
              href="https://github.com/dzakiabrar21" 
            />
            <ContactLink 
              icon={<Linkedin size={16} />} 
              label="LinkedIn" 
              href="https://www.linkedin.com/in/muhammad-dzaki-abrar" 
            />
            <ContactLink 
              icon={<Instagram size={16} />} 
              label="Instagram" 
              href="https://www.instagram.com/dzaki.abrarr" 
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Modals */}
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
        email={email} 
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        phoneNumber={phoneNumber} 
      />
    </section>
  );
}

function ContactLink({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  const isExternal = href.startsWith('http');
  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all font-Inter text-[13px] font-medium"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}