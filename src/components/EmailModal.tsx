"use client";

import { useState } from 'react';
import { X, Copy, Check, Mail, ExternalLink } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function EmailModal({ isOpen, onClose, email }: EmailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emailOptions = [
    {
      name: 'Gmail',
      icon: '/images/icons/gmail.png', // I'll use text/icon if image not found, but I should probably just use colors/lucide
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      color: 'hover:bg-red-500/10 hover:border-red-500/20'
    },
    {
      name: 'Outlook',
      href: `https://outlook.office.com/mail/deeplink/compose?to=${email}`,
      color: 'hover:bg-blue-500/10 hover:border-blue-500/20'
    },
    {
      name: 'Default App',
      href: `mailto:${email}`,
      color: 'hover:bg-white/10 hover:border-white/20'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-[380px] sm:max-w-[410px] overflow-hidden shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3.5 border-b border-white/5">
          <h3 className="text-white text-sm font-semibold flex items-center gap-2">
            <Mail size={16} className="text-emerald-500" />
            Contact via Email
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
          {/* Email Display & Copy */}
          <div className="space-y-1.5">
            <p className="text-white/40 text-[10px] uppercase tracking-wider font-medium">Email Address</p>
            <div className="flex items-center justify-between gap-2 p-3 bg-white/[0.03] border border-white/10 rounded-xl group">
              <span className="text-white/90 text-[13px] sm:text-[14px] font-Inter select-all">{email}</span>
              <button 
                onClick={copyToClipboard}
                className="p-1.5 hover:bg-white/5 rounded-lg transition-all text-white/40 hover:text-emerald-500 flex-shrink-0"
                title="Copy to clipboard"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <p className="text-white/40 text-[12px] uppercase tracking-wider font-medium">Open in</p>
            <div className="grid gap-2">
              {emailOptions.map((opt) => (
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
            Choose your preferred mail client to continue.
          </p>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
