"use client";

import { useState, useEffect, useCallback } from "react";
import { projects } from "@/data/projects";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (index: number) => {
    setSelectedProject(index);
    setCurrentSlide(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentSlide(0);
  };

  const nextSlide = useCallback(() => {
    if (selectedProject !== null) {
      const total = projects[selectedProject].images.length;
      setCurrentSlide((prev) => (prev + 1) % total);
    }
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    if (selectedProject !== null) {
      const total = projects[selectedProject].images.length;
      setCurrentSlide((prev) => (prev - 1 + total) % total);
    }
  }, [selectedProject]);

  // Auto-slide every 4 seconds & handle Keyboard navigation
  useEffect(() => {
    if (selectedProject === null) return;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, currentSlide, nextSlide, prevSlide]);

  return (
    <section id="projects" className="py-16 md:py-24 space-y-8 md:space-y-12">
      {/* Judul Seksi */}
      <h2 className="text-white text-3xl md:text-[40px] font-bold leading-tight font-Inter tracking-tight">
        Projects
      </h2>

      {/* Container Slider */}
      <div className="flex flex-row gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* ===== POPUP MODAL ===== */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-0"
          onClick={closeModal}
        >
          <div
            className="relative bg-[#18181B] rounded-2xl overflow-hidden border border-white/10 w-[100vw] md:w-[90vw] max-w-[1100px] max-h-[90vh] md:max-h-[85vh] shadow-2xl animate-fadeIn flex flex-col md:flex-row overflow-y-auto md:overflow-y-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center border border-white/10 transition-all"
            >
              <X size={18} className="text-white" />
            </button>

            {/* LEFT SIDE — Image Slider */}
            <div className="relative w-full md:w-[60%] h-[250px] md:h-auto bg-zinc-900 overflow-hidden flex-shrink-0">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects[selectedProject].images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${projects[selectedProject].title} - Slide ${i + 1}`}
                    className="min-w-full h-full object-contain flex-shrink-0"
                  />
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center border border-white/10 transition-all"
              >
                <ChevronLeft size={22} className="text-white" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center border border-white/10 transition-all"
              >
                <ChevronRight size={22} className="text-white" />
              </button>

              {/* Slide Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {projects[selectedProject].images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentSlide
                        ? "bg-white scale-110"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT SIDE — Project Details */}
            <div className="w-full md:w-[40%] p-6 md:p-8 space-y-4 md:space-y-5 md:overflow-y-auto flex-shrink-0">
              {/* Title */}
              <h3 className="text-white text-[22px] md:text-[26px] font-bold leading-tight font-Inter">
                {projects[selectedProject].title}
              </h3>

              {/* Category Badge */}
              <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-[12px] font-semibold px-4 py-1.5 rounded-full">
                {projects[selectedProject].category}
              </span>

              {/* Description Label + Text */}
              <div className="space-y-3">
                <h4 className="text-white text-[15px] font-semibold font-Inter">
                  Project Overview
                </h4>
                <p className="text-white/60 text-[14px] leading-relaxed font-Inter">
                  {projects[selectedProject].popupDesc}
                </p>
                {(projects[selectedProject] as any).link && (
                  <a
                    href={(projects[selectedProject] as any).link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-[14px] font-medium font-Inter transition-colors w-fit border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 rounded-lg mt-2"
                  >
                    {(projects[selectedProject] as any).link.includes("roblox.com") 
                      ? "Play Game on Roblox" 
                      : "Visit Website"}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {projects[selectedProject].tags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-white/5 rounded-full px-3 py-1 border border-white/10"
                  >
                    <span className="text-white/50 text-[12px] font-medium font-JetBrainsMono uppercase tracking-wider">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: any; onClick: () => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative min-w-[320px] md:min-w-[450px] lg:min-w-[500px] snap-center bg-[#18181B] rounded-[20px] overflow-hidden border border-white/10 flex flex-col transition-all duration-500 hover:border-emerald-500/40 group cursor-pointer"
    >
      {/* Spotlight Hover Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.12), transparent 40%)`,
          }}
        />
      )}

      {/* Project Image Section */}
      <div className="relative w-full bg-zinc-900 overflow-hidden" style={{ aspectRatio: '1440/1024' }}>
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 space-y-5 relative z-20">
        <div className="space-y-2">
          <h3 className="text-white text-[24px] font-bold leading-tight font-Inter uppercase group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-[16px] font-normal leading-relaxed font-Inter line-clamp-2">
            {project.popupDesc}
          </p>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag: string) => (
            <div
              key={tag}
              className="bg-white/5 rounded-full px-3 py-1 border border-white/5"
            >
              <span className="text-white/40 text-[12px] font-medium font-JetBrainsMono uppercase tracking-wider">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}