"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ExternalLink, ArrowRight, Github, PlayCircle } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section id="projects" className="w-full pt-8 md:pt-32 pb-20 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[1200px] px-0 flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-tight font-Inter tracking-tight mb-12 text-center">
          Project & Case Studies
        </h2>

        {/* Projects List — 2 column grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="w-full flex flex-col gap-4 group"
            >
              {/* Hero Image / Card Container */}
              <Link
                href={`/projects/${project.slug}`}
                className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0D0D0D] block cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                />
              </Link>

              {/* Content Below Image */}
              <div className="w-full flex flex-col gap-2.5 px-1">
                {/* Title */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="transition-colors"
                >
                  <h2 className="text-white text-lg md:text-xl font-bold leading-snug font-Inter group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h2>
                </Link>

                {/* Description */}
                <p className="text-white/60 text-xs sm:text-sm font-normal leading-relaxed font-Inter line-clamp-2">
                  {project.tagline || project.popupDesc || project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.02] border border-white/[0.05] text-white/30">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-1">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-white/80 group-hover:text-white text-xs sm:text-sm font-semibold font-Inter transition-colors"
                  >
                    <span>Read case study</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-white/50 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-blue-400/70 hover:text-blue-400 transition-colors"
                        title="Watch Demo"
                      >
                        <PlayCircle size={15} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-white/50 hover:text-white transition-colors"
                        title="Live Project"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
