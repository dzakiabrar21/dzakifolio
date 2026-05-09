"use client";

import { useState } from 'react';
import { X, Copy, Check, Phone, MessageCircle, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
}

export default function ContactModal({ isOpen, onClose, phoneNumber }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const formattedNumber = phoneNumber.replace(/\s+/g, ''); // Remove spaces for links

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactOptions = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/${formattedNumber.startsWith('0') ? '62' + formattedNumber.slice(1) : formattedNumber}`,
      color: 'hover:bg-emerald-500/10 hover:border-emerald-500/20'
    },
    {
      name: 'Default Phone App',
      href: `tel:${formattedNumber}`,
      color: 'hover:bg-white/10 hover:border-white/20'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-[320px] overflow-hidden shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-white/5">
          <h3 className="text-white text-sm font-semibold flex items-center gap-2">
            <Phone size={16} className="text-emerald-500" />
            Contact Info
          </h3>
          <button 
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors p-1"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Phone Display & Copy */}
          <div className="space-y-1.5">
            <p className="text-white/40 text-[10px] uppercase tracking-wider font-medium">Phone Number</p>
            <div className="flex items-center gap-2 p-2.5 bg-white/[0.03] border border-white/10 rounded-xl group">
              <span className="text-white/80 text-[13px] truncate flex-1 font-mono">{phoneNumber}</span>
              <button 
                onClick={copyToClipboard}
                className="p-1.5 hover:bg-white/5 rounded-lg transition-all text-white/40 hover:text-emerald-500"
                title="Copy to clipboard"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <p className="text-white/40 text-[10px] uppercase tracking-wider font-medium">Contact via</p>
            <div className="grid gap-2">
              {contactOptions.map((opt) => (
                <a
                  key={opt.name}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] text-white/70 hover:text-white transition-all ${opt.color} group`}
                >
                  <span className="text-sm font-medium">{opt.name}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-white/[0.02] border-t border-white/5">
          <p className="text-center text-white/30 text-[11px]">
            Reach out via your preferred method.
          </p>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
