import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 border-t border-white/[0.08] mt-8">
      <div className="flex flex-col gap-6">
        <h2 className="text-white text-[26px] md:text-[32px] font-bold leading-tight font-Inter tracking-tight">
          Get In Touch
        </h2>
        <p className="text-white/60 text-[14px] md:text-[15px] font-normal leading-relaxed font-Inter max-w-[550px]">
          I'm currently open to new opportunities. Whether you have a question or just want to connect, feel free to reach out through any of these platforms!
        </p>
        
        <div className="flex flex-wrap gap-3 mt-2">
          <ContactLink 
            icon={<Mail size={16} />} 
            label="Email" 
            href="mailto:muhammaddzakiabrar21@gmail.com" 
          />
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
      className="flex items-center gap-2 px-4 py-2.5 bg-transparent border border-white/10 rounded-lg text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all font-Inter text-[13px] font-medium"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}