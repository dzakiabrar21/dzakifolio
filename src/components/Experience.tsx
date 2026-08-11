"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

// Group experiences by category once outside component render
const professional = experiences.filter(e => e.category === "professional");
const leadership = experiences.filter(e => e.category === "leadership");
const coordination = experiences.filter(e => e.category === "coordination");

const sections = [
  { title: "Organization & Work Experience", sectionId: "experience", items: [...professional, ...leadership] },
  { title: "Project Event", sectionId: "project-event", items: coordination },
];

export default function Experience() {
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});

  const toggleAccordion = (key: string) => {
    setOpenKeys((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="w-full py-8 md:py-12">
      <div className="flex flex-col gap-12">
        {sections.map((section) => (
          <ScrollReveal key={section.title} className="flex flex-col gap-0 scroll-mt-8" threshold={0.1}>
            {/* Section Title */}
            <h2 className="reveal text-white text-[26px] md:text-[32px] font-bold leading-tight font-Inter tracking-tight mb-6">
              {section.title}
            </h2>

            {/* Accordion Items */}
            <div className="flex flex-col border-t border-white/[0.08]">
              {section.items.map((exp, idx) => {
                const key = `${exp.company}-${exp.role}-${idx}`;
                const isOpen = !!openKeys[key];

                return (
                  <div key={key} className="reveal">
                    <div 
                      className={`border-b border-white/[0.08] transition-colors ${
                        isOpen ? 'bg-white/[0.02]' : ''
                      }`}
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleAccordion(key)}
                        className="w-full flex items-center justify-between py-5 px-2 md:px-4 cursor-pointer group"
                      >
                        <div className="flex items-center gap-4 md:gap-5 text-left">
                          {/* Organization Logo */}
                          {exp.logo && (
                            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full overflow-hidden bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center">
                              <img 
                                src={exp.logo} 
                                alt={`${exp.company} logo`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = `https://via.placeholder.com/150/1A1A1A/FFFFFF?text=${encodeURIComponent(exp.company.charAt(0))}`;
                                }}
                              />
                            </div>
                          )}

                          {/* Experience Details */}
                          <div className="flex flex-col items-start gap-1">
                            <h3 className="text-white text-[16px] md:text-[18px] font-bold leading-tight font-Inter">
                              {exp.company}
                            </h3>
                            <p className="text-white/80 text-[13px] md:text-[14px] font-normal font-Inter">
                              {exp.role} • {exp.period}
                            </p>
                          </div>
                        </div>

                        <ChevronDown 
                          size={20} 
                          className={`text-white/40 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Accordion Content */}
                      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
                        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        {isOpen && (
                          <div className="px-2 md:px-4 pb-6 pt-1 flex flex-col gap-5">
                            {/* Work Points */}
                            <ul className="space-y-3 pl-1">
                              {exp.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-white text-[13px] md:text-[14px] font-normal leading-relaxed font-Inter">
                                  <span className="text-white/60 pt-[6px] flex-shrink-0 text-[6px]">●</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Thumbnail Images — Only rendered when accordion is expanded */}
                            {exp.images && exp.images.length > 0 && (
                              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2">
                                {exp.images.map((img, i) => (
                                  <div
                                    key={i}
                                    className={`w-full rounded-xl overflow-hidden border border-white/[0.06] ${
                                      exp.isDocument 
                                        ? 'aspect-[1/1.414] bg-white/[0.02] flex items-center justify-center p-2' 
                                        : 'aspect-video'
                                    }`}
                                  >
                                    <img
                                      src={img}
                                      alt={`${exp.company} - ${i + 1}`}
                                      loading="lazy"
                                      decoding="async"
                                      className={`w-full h-full hover:scale-105 transition-transform duration-500 ${
                                        exp.isDocument ? 'object-contain' : 'object-cover'
                                      }`}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}