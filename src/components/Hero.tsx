import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full bg-black pt-[120px] md:pt-[140px] pb-[60px] md:pb-[40px] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 min-h-[100svh] md:min-h-[560px] px-6 md:px-0">
      
      {/* Profile Image Container Mobile */}
      <div className="relative w-[240px] h-[260px] sm:w-[280px] sm:h-[300px] rounded-2xl overflow-hidden block md:hidden flex-shrink-0 mt-4 shadow-2xl">
        <img 
          src="/images/image(3).png" // Pastikan file ini ada di public/images/
          alt="Muhammad Dzaki Abrar"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Text Content Container */}
      <div className="flex flex-col gap-6 max-w-[460px] z-10 text-center md:text-left items-center md:items-start">
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Main Name */}
          <h1 className="text-white text-5xl md:text-[52px] font-bold leading-tight md:leading-[64px] font-Inter tracking-tight">
            MUHAMMAD <br className="hidden md:block" /> DZAKI ABRAR
          </h1>
          {/* Headline Tagline */}
          <p className="text-[rgba(255,255,255,0.70)] text-base md:text-[18px] font-normal leading-relaxed md:leading-[30px] font-Inter">
            Engineering Intelligence. Crafting Modern Web.
          </p>
        </div>

        {/* Detailed Description */}
        <p className="text-[rgba(255,255,255,0.60)] text-sm md:text-[15px] font-normal leading-relaxed md:leading-[25px] font-Inter">
          Informatics student at President University specializing in Artificial Intelligence. 
          I am passionate about building high-performance web applications and intelligent systems, 
          focusing on bridging the gap between complex algorithms and seamless user experiences.
        </p>

        {/* Social Icons Container */}
        <div className="flex items-center justify-center md:justify-start gap-3 h-10 w-full md:w-auto">
          {/* GitHub Icon Button */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
            <Github size={20} className="text-white" />
          </a>
          {/* LinkedIn Icon Button */}
          <a href="https://www.linkedin.com/in/muhammad-dzaki-abrar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
            <Linkedin size={20} className="text-white" />
          </a>
          {/* Instagram Icon Button */}
          <a href="https://www.instagram.com/dzaki.abrarr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
            <Instagram size={20} className="text-white" />
          </a>
          {/* Email Icon Button */}
          <a href="mailto:muhammaddzakiabrar21@gmail.com" className="w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
            <Mail size={20} className="text-white" />
          </a>
        </div>
      </div>

      {/* Profile Image Container */}
      <div className="relative w-[380px] h-[420px] rounded-2xl overflow-hidden hidden md:block flex-shrink-0">
        <img 
          src="/images/image(3).png" // Pastikan file ini ada di public/images/
          alt="Muhammad Dzaki Abrar"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
}