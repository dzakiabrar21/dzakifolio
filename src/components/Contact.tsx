import { Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-4 pb-12 space-y-12">
      {/* Header Section */}
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Get In Touch</h2>
        <p className="text-white/60 text-lg max-w-2xl font-light leading-relaxed">
          Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Information</h3>
            <p className="text-white/60 text-base font-light">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <ContactCard 
              icon={<Mail className="w-5 h-5" />} 
              label="Email" 
              value="muhammaddzakiabrar21@gmail.com" 
              href="mailto:muhammaddzakiabrar21@gmail.com"
            />
            <ContactCard 
              icon={<Github className="w-5 h-5" />} 
              label="GitHub" 
              value="@dzakiabrar21" 
              href="https://github.com/dzakiabrar21"
            />
            <ContactCard 
              icon={<Linkedin className="w-5 h-5" />} 
              label="LinkedIn" 
              value="Muhammad Dzaki Abrar" 
              href="https://www.linkedin.com/in/muhammad-dzaki-abrar"
            />
            <ContactCard 
              icon={<Instagram className="w-5 h-5" />} 
              label="Instagram" 
              value="@dzaki.abrarr" 
              href="https://www.instagram.com/dzaki.abrarr"
            />
          </div>
        </div>

        {/* Right Side: Simplified Call to Action */}
        <div className="bg-[#18181B] p-8 md:p-12 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center space-y-8 h-full">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Ready to start?</h3>
            <p className="text-white/60 text-base font-light max-w-[280px] mx-auto">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
          </div>

          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammaddzakiabrar21@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
          >
            Send me an Email
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  const isExternal = href.startsWith('http');
  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:border-white/20 transition-all"
    >
      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <p className="text-xs text-white/50 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-white text-base">{value}</p>
      </div>
    </a>
  );
}