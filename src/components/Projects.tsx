"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, ProjectItem } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 space-y-8 md:space-y-12">
      {/* Judul Seksi */}
      <h2 className="text-white text-3xl md:text-[40px] font-bold leading-tight font-Inter tracking-tight">
        Projects
      </h2>

      {/* Container Slider */}
      <div className="flex flex-row gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative min-w-[320px] md:min-w-[450px] lg:min-w-[500px] snap-center bg-[#18181B] rounded-[20px] overflow-hidden border border-white/10 flex flex-col transition-all duration-500 hover:border-white/30 group cursor-pointer"
    >
      {/* Spotlight Hover Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
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
          <h3 className="text-white text-[24px] font-bold leading-tight font-Inter uppercase hover:text-white/80 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-[16px] font-normal leading-relaxed font-Inter line-clamp-2">
            {project.tagline || project.popupDesc || project.desc}
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
    </Link>
  );
}