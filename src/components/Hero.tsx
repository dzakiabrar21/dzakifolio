import { Github, Linkedin, Instagram, Mail, Monitor, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="introduction" className="pb-10">
      {/* Name */}
      <h1 className="text-white text-3xl md:text-[42px] font-bold leading-tight md:leading-[50px] font-Inter tracking-tight mb-3">
        Muhammad Dzaki Abrar
      </h1>

      {/* Role */}
      <p className="text-white/50 text-base md:text-[18px] font-normal font-Inter mb-5">
        Informatics Student · AI Enthusiast
      </p>

      {/* Social Links Row */}
      <div className="flex items-center gap-4 flex-wrap mb-8">
        <SocialLink href="https://github.com/dzakiabrar21" icon={<Github size={15} />} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/muhammad-dzaki-abrar" icon={<Linkedin size={15} />} label="LinkedIn" />
        <SocialLink href="https://www.instagram.com/dzaki.abrarr" icon={<Instagram size={15} />} label="Instagram" />
        <SocialLink href="mailto:muhammaddzakiabrar21@gmail.com" icon={<Mail size={15} />} label="Email" />
      </div>

      {/* Bio Description */}
      <p className="text-white text-[14px] md:text-[15px] font-normal leading-relaxed md:leading-[26px] font-Inter max-w-[650px]">
        Informatics student at President University specializing in Artificial Intelligence. 
        I am passionate about building high-performance web applications and intelligent systems, 
        focusing on bridging the gap between complex algorithms and seamless user experiences.
      </p>
    </section>
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