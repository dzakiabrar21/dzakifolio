"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasSnapped, setHasSnapped] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        // Trigger snap if the element comes into view (between 20% and 80% visible)
        // AND we haven't already snapped it.
        if (
          !hasSnapped && 
          entry.isIntersecting && 
          entry.intersectionRatio > 0.2 && 
          entry.intersectionRatio < 0.8
        ) {
          entry.target.scrollIntoView({ behavior: "smooth", block: "start" });
          setHasSnapped(true); // Lock it so it doesn't loop
          
          // Reset the snap lock after 5 seconds
          setTimeout(() => {
            setHasSnapped(false);
          }, 5000);
        }
      },
      {
        threshold: [0.2, 0.8], 
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasSnapped]);

  return (
    <section ref={sectionRef} id="experience" className="w-full h-auto lg:h-[716px] bg-black flex flex-col lg:flex-row border-t border-white/10 overflow-hidden">
      {/* LEFT: Title (Static/Sticky) */}
      <div className="w-full lg:w-[432px] h-auto border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center items-center py-12 lg:py-0 px-6 lg:px-12 sticky top-0 bg-black z-10 lg:min-h-[716px]">
        <div className="w-full max-w-[338px] space-y-4 text-center lg:text-left">
          <h2 className="text-white text-4xl lg:text-[60px] font-bold leading-tight lg:leading-[60px] font-Inter tracking-tight">
            Experience
          </h2>
          <p className="text-[#99A1AF] text-base lg:text-[18px] font-normal leading-relaxed lg:leading-[28px] font-Inter">
            My professional journey and achievements.
          </p>
        </div>
      </div>

      {/* RIGHT: Content (Scrollable) */}
      <div className="flex-1 h-auto lg:h-[716px] overflow-visible lg:overflow-y-auto scrollbar-hide pt-10 lg:pt-16 pb-20 lg:pb-32 px-6 sm:px-12 md:px-16">
        <div className="max-w-[852px] flex flex-col gap-10 relative">
          
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-12 mb-16">
              {/* Content Container Base */}
              <div className="flex flex-col relative pb-4">
                {/* Experience Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                  <h3 className="text-white text-[28px] md:text-[32px] font-bold leading-[40px] font-Inter tracking-tight">
                    {exp.company}
                  </h3>
                  <span className="text-[#99A1AF] text-[18px] font-normal leading-[28px] font-Inter sm:pt-2 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                {/* Role Info */}
                <p className="text-[#06B6D4] text-[18px] font-medium leading-[28px] font-Inter mb-8">
                  {exp.role}
                </p>

                {/* Work Points (Truncated to max 2) */}
                <ul className="space-y-4 mb-10 pl-2">
                  {exp.points.slice(0, 2).map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/90 text-[16px] md:text-[18px] font-normal leading-[28px] font-Inter">
                      <span className="text-white/90 pt-[10px] flex-shrink-0 text-[8px]">●</span>
                      <span className="max-w-[700px]">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Thumbnail Images */}
                {exp.images && exp.images.length > 0 && (
                  <div className="flex flex-row gap-4 flex-wrap pt-2">
                    {exp.images.map((img, i) => (
                      <div
                        key={i}
                        className="w-[280px] h-[158px] rounded-xl overflow-hidden border border-white/5 group-hover:border-white/20 transition-all flex-shrink-0 shadow-lg"
                      >
                        <img
                          src={img}
                          alt={`${exp.company} - ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}