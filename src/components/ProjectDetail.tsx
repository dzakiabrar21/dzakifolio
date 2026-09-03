"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectItem, projects } from "@/data/projects";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  PlayCircle, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight
} from "lucide-react";

interface ProjectDetailProps {
  project: ProjectItem;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Find previous and next project for bottom pagination
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const nextSlide = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const sectionAnimation = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="w-full pt-20 md:pt-28 pb-20 max-w-[940px] mx-auto px-4 md:px-6 overflow-hidden">
      {/* Top Bar Navigation & Actions (Slides Down on Load) */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-row items-center justify-between gap-3 pb-6 border-b border-white/10 w-full"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs sm:text-sm font-medium transition-colors group flex-shrink-0"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>All Projects</span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 justify-end ml-auto flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-medium transition-all"
            >
              <Github size={14} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:text-blue-300 text-xs font-medium transition-all"
            >
              <PlayCircle size={14} />
              <span className="hidden sm:inline">Watch Demo</span>
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-all flex-shrink-0"
            >
              <span>{project.link.includes("roblox.com") ? "Play Game" : "Live Project"}</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </motion.div>

      {/* Split Entrance Header & Hero Showcase */}
      <div className="flex flex-col gap-8">
        {/* Project Header (Slides from Left on Load) */}
        <motion.header 
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="pt-8 space-y-4"
        >
          {/* Category & Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-white/5 border border-white/15 text-white/80">
              {project.category}
            </span>
            {project.accuracy && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-white/70">
                {project.accuracy}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18] font-Inter break-words">
            {project.title}
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 font-normal leading-relaxed max-w-2xl font-Inter">
            {project.tagline || project.desc}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-white/60 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Hero Showcase Media (Slides from Right on Load) */}
        <motion.div 
          initial={{ x: 60, scale: 0.95, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full space-y-4 mb-8"
        >
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121214] shadow-2xl flex items-center justify-center aspect-[16/10] md:aspect-[16/9]">
            <img
              src={project.images[activeImageIndex]}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              className="w-full h-full object-contain p-2 md:p-4 transition-all duration-500"
            />

            {project.images.length > 1 && (
              <>
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-md cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-md cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Selector */}
          {project.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 w-20 sm:w-28 aspect-video bg-black/40 ${
                    activeImageIndex === idx
                      ? "border-white ring-2 ring-white/20 opacity-100 scale-105"
                      : "border-white/10 opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Case Study Sections (Scroll Triggered Animation) */}
      <div className="space-y-16 mt-8">
        {/* 01 Overview */}
        <motion.section 
          {...sectionAnimation}
          className="space-y-4 pt-4 border-t border-white/[0.08]"
        >
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">01</span>
            <span className="h-[1px] w-6 bg-cyan-500/30" />
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Overview</h2>
          </div>
          <p className="text-white/70 text-base md:text-lg leading-relaxed font-Inter">
            {project.overview || project.popupDesc || project.desc}
          </p>
        </motion.section>

        {/* 02 Background / Introduction */}
        {project.introduction && (
          <motion.section 
            {...sectionAnimation}
            className="space-y-4 pt-4 border-t border-white/[0.08]"
          >
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">02</span>
              <span className="h-[1px] w-6 bg-cyan-500/30" />
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Introduction & Problem</h2>
            </div>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-Inter">
              {project.introduction}
            </p>
          </motion.section>
        )}

        {/* 03 Tools & Technologies */}
        {project.toolsTechnologies && project.toolsTechnologies.length > 0 && (
          <motion.section 
            {...sectionAnimation}
            className="space-y-6 pt-4 border-t border-white/[0.08]"
          >
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">03</span>
              <span className="h-[1px] w-6 bg-cyan-500/30" />
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Tools & Technologies</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.toolsTechnologies.map((tech) => (
                <div
                  key={tech.name}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/20 transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-base group-hover:text-cyan-300 transition-colors">
                      {tech.name}
                    </span>
                    {tech.category && (
                      <span className="text-[11px] font-mono uppercase text-white/40 bg-white/5 px-2 py-0.5 rounded">
                        {tech.category}
                      </span>
                    )}
                  </div>
                  {tech.description && (
                    <p className="text-white/60 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 04 Key Features & System Highlights */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <motion.section 
            {...sectionAnimation}
            className="space-y-6 pt-4 border-t border-white/[0.08]"
          >
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">04</span>
              <span className="h-[1px] w-6 bg-cyan-500/30" />
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Key Features & Architecture</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, index) => (
                <div
                  key={feat.title}
                  className="p-5 rounded-2xl bg-[#141416] border border-white/10 hover:border-cyan-500/20 transition-all space-y-2.5 relative overflow-hidden group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-white font-semibold text-base group-hover:text-cyan-300 transition-colors">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed pl-11">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 05 Results, Key Metrics & Impact */}
        {project.results && project.results.length > 0 && (
          <motion.section 
            {...sectionAnimation}
            className="space-y-6 pt-4 border-t border-white/[0.08]"
          >
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">05</span>
              <span className="h-[1px] w-6 bg-cyan-500/30" />
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Results & Impact</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((metric) => (
                <div
                  key={metric.label}
                  className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center space-y-2"
                >
                  <p className="text-xs font-mono uppercase tracking-wider text-white/50">{metric.label}</p>
                  <p className="text-2xl md:text-3xl font-extrabold text-white font-Inter">{metric.value}</p>
                  {metric.desc && (
                    <p className="text-xs text-white/50">{metric.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 06 Gallery Grid */}
        {project.images.length > 1 && (
          <motion.section 
            {...sectionAnimation}
            className="space-y-6 pt-4 border-t border-white/[0.08]"
          >
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">06</span>
              <span className="h-[1px] w-6 bg-cyan-500/30" />
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Project Gallery</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121214] aspect-video cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`${project.title} gallery ${idx + 1}`}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                      View in Showcase
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* Bottom Pagination: Previous / Next Project */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all space-y-1.5 group"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase group-hover:text-cyan-400 transition-colors">
              <ArrowLeft size={13} />
              <span>Previous Project</span>
            </div>
            <p className="text-base font-bold text-white group-hover:text-white/90 line-clamp-1">
              {prevProject.title}
            </p>
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all space-y-1.5 text-right sm:ml-auto w-full group"
          >
            <div className="flex items-center justify-end gap-2 text-xs font-mono text-white/40 uppercase group-hover:text-cyan-400 transition-colors">
              <span>Next Project</span>
              <ArrowRight size={13} />
            </div>
            <p className="text-base font-bold text-white group-hover:text-white/90 line-clamp-1">
              {nextProject.title}
            </p>
          </Link>
        ) : <div />}
      </motion.div>
    </div>
  );
}
