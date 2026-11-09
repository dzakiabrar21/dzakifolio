"use client";

import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ProjectItem, projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
  Maximize2,
  PlayCircle,
  X,
} from "lucide-react";

interface ProjectDetailProps {
  project: ProjectItem;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal = {
  initial: { y: 28, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: EASE },
};

function Section({
  num,
  label,
  title,
  children,
}: {
  num: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section {...reveal} className="relative pt-12 md:pt-16 border-t border-white/[0.08]">
      <span
        aria-hidden
        className="absolute -top-1 left-0 text-[88px] md:text-[110px] leading-none font-black text-white/[0.04] select-none pointer-events-none"
      >
        {num}
      </span>
      <div className="relative space-y-6">
        <div className="space-y-2">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
            {num} — {label}
          </p>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">{title}</h2>
        </div>
        {children}
      </div>
    </motion.section>
  );
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = project.images;
  const accent = project.accent || "#22d3ee";

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  // Spread the remaining screenshots (index 1..n) across the sections so
  // documentation sits next to the part of the story it illustrates.
  const slots = useMemo(() => {
    const keys: string[] = [];
    if (project.introduction) keys.push("problem");
    if (project.toolsTechnologies?.length) keys.push("tech");
    if (project.keyFeatures?.length) keys.push("features");
    const rest = images.slice(1).map((_, i) => i + 1);
    const out: Record<string, number[]> = {};
    keys.forEach((k) => (out[k] = []));
    // features get the biggest share; the rest are spread evenly
    const weights = keys.map((k) => (k === "features" ? 2 : 1));
    const total = weights.reduce((a, b) => a + b, 0);
    let cursor = 0;
    keys.forEach((k, i) => {
      const n = i === keys.length - 1 ? rest.length - cursor : Math.round((rest.length * weights[i]) / total);
      out[k] = rest.slice(cursor, cursor + n);
      cursor += n;
    });
    return out;
  }, [images, project]);

  const sectionCount =
    1 +
    (project.introduction ? 1 : 0) +
    (project.toolsTechnologies?.length ? 1 : 0) +
    (project.keyFeatures?.length ? 1 : 0);

  const stepHero = useCallback(
    (dir: 1 | -1) => setActiveImage((i) => (i + dir + images.length) % images.length),
    [images.length]
  );
  const stepLightbox = useCallback(
    (dir: 1 | -1) => setLightbox((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, stepLightbox]);

  const liveLabel = project.link?.includes("roblox.com")
    ? "Play Game"
    : project.link?.includes("landing")
      ? "Landing Page"
      : "Live Project";

  const figure = (ids: number[]) =>
    ids.length === 0 ? null : (
      <motion.div
        {...reveal}
        className={`grid gap-3 ${ids.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}
      >
        {ids.map((i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            aria-label={`Open image ${i + 1} full screen`}
            className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] cursor-zoom-in"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[i]}
              alt={`${project.title} screenshot ${i + 1}`}
              loading="lazy"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.015]"
            />
            <span className="pointer-events-none absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={12} /> Expand
            </span>
          </button>
        ))}
      </motion.div>
    );

  const body = "text-sm md:text-[15px] text-white/60 leading-[1.8] text-pretty";

  return (
    <div className="w-full relative font-sans">
      {/* Sticky project bar */}
      <div className="sticky top-0 md:top-16 z-40 bg-black/75 backdrop-blur-xl border-b border-white/[0.08]">
        <motion.div
          style={{ scaleX: progress, background: accent }}
          className="absolute bottom-0 left-0 right-0 h-[1.5px] origin-left opacity-70"
        />
        <div className="max-w-[860px] mx-auto px-4 md:px-6 h-12 flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            All Projects
          </Link>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-medium transition-colors"
              >
                <Github size={14} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition-colors"
              >
                {liveLabel}
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[860px] mx-auto px-4 md:px-6 pb-24">
        {/* ───────── HERO ───────── */}
        <header className="pt-12 md:pt-20 pb-8 md:pb-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-wrap items-center gap-2 mb-5"
          >
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/[0.06] border border-white/10 text-white/70">
              {project.category}
            </span>
            {project.accuracy && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/[0.06] border border-white/10 text-white/70">
                {project.accuracy}
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.025em] leading-[1.1] break-words text-balance"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            className="mt-4 text-sm md:text-base text-white/55 leading-relaxed max-w-xl text-pretty"
          >
            {project.tagline || project.desc}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-1.5"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-white/55"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {(project.demo || project.link || project.github) && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.26 }}
              className="mt-6 flex flex-wrap items-center gap-2.5"
            >
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-[13px] font-semibold hover:bg-white/90 transition-colors"
                >
                  {liveLabel}
                  <ArrowUpRight size={14} />
                </a>
              )}
              {project.demo &&
                (project.demoDisabled ? (
                  <span
                    title="Demo currently unavailable"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/30 text-[13px] font-medium cursor-not-allowed select-none"
                  >
                    <PlayCircle size={14} className="opacity-50" />
                    Watch Demo
                  </span>
                ) : (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-[13px] font-medium transition-colors"
                  >
                    <PlayCircle size={14} />
                    Watch Demo
                  </a>
                ))}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-[13px] font-medium transition-colors"
                >
                  <Github size={14} />
                  Source Code
                </a>
              )}
            </motion.div>
          )}
        </header>

        {/* ───────── HERO IMAGE ───────── */}
        <motion.section
          initial={{ y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          aria-label="Project screenshots"
          className="space-y-3"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0f] group">
            <AnimatePresence mode="wait">
              <motion.button
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightbox(activeImage)}
                className="block w-full cursor-zoom-in"
                aria-label="Open image full screen"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[activeImage]}
                  alt={`${project.title} screenshot ${activeImage + 1}`}
                  className="w-full h-auto max-h-[65vh] object-contain mx-auto"
                />
              </motion.button>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  onClick={() => stepHero(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 border border-white/10 flex items-center justify-center text-white backdrop-blur-md transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => stepHero(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 border border-white/10 flex items-center justify-center text-white backdrop-blur-md transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/75">
                  {activeImage + 1} / {images.length}
                </span>
              </>
            )}
          </div>
        </motion.section>

        {/* ───────── STATS ───────── */}
        {project.results && project.results.length > 0 && (
          <motion.section
            {...reveal}
            aria-label="Key metrics"
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border border-white/10 bg-white/10"
          >
            {project.results.slice(0, 4).map((m) => (
              <div key={m.label} className="bg-[#0a0a0c] px-4 py-4 space-y-1">
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/35">{m.label}</p>
                <p className="text-base md:text-lg font-bold text-white leading-tight">{m.value}</p>
                {m.desc && <p className="text-[11px] text-white/40 leading-snug">{m.desc}</p>}
              </div>
            ))}
          </motion.section>
        )}

        {/* ───────── CASE STUDY ───────── */}
        <div className="mt-16 md:mt-24 space-y-14 md:space-y-20">
          <Section num="00" label="Overview" title="Overview">
            <p className={body}>{project.overview || project.popupDesc || project.desc}</p>
          </Section>

          {project.introduction && (
            <Section num="01" label="The Problem" title="The Problem">
              <p className={body}>{project.introduction}</p>
              {figure(slots.problem)}
            </Section>
          )}

          {project.toolsTechnologies && project.toolsTechnologies.length > 0 && (
            <Section num="02" label="Tech Stack" title="Tools & Technologies">
              <dl className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {project.toolsTechnologies.map((t) => (
                  <div key={t.name} className="grid sm:grid-cols-[200px_1fr] gap-x-6 gap-y-1 py-3.5">
                    <dt className="text-sm font-semibold text-white">{t.name}</dt>
                    <dd className="text-[13px] text-white/50 leading-relaxed">
                      {t.category && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-white/35 mr-2">
                          {t.category}
                        </span>
                      )}
                      {t.description}
                    </dd>
                  </div>
                ))}
              </dl>
              {figure(slots.tech)}
            </Section>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <Section num="03" label="Key Features" title="Key Features">
              <ol className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {project.keyFeatures.map((f, i) => (
                  <li key={f.title} className="flex gap-4 py-3.5">
                    <span className="font-mono text-[11px] text-white/30 pt-0.5 w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-semibold text-white">{f.title}</h3>
                      <p className="text-[13px] text-white/50 leading-relaxed">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {figure(slots.features)}
            </Section>
          )}

          {images.length > 1 && (
            <Section num={String(sectionCount).padStart(2, "0")} label="Gallery" title="Project Gallery">
              <div className="grid gap-3 sm:grid-cols-2">
                {images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setLightbox(i)}
                    aria-label={`Open gallery image ${i + 1}`}
                    className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] cursor-zoom-in"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${project.title} gallery ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* ───────── NEXT / PREV ───────── */}
        <motion.nav
          {...reveal}
          aria-label="More projects"
          className="mt-20 md:mt-28 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group p-5 rounded-xl bg-white/[0.025] border border-white/10 hover:border-white/25 transition-colors space-y-1.5"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-white/40">
                <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
                Previous
              </div>
              <p className="text-sm font-semibold text-white line-clamp-2">{prevProject.title}</p>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-5 rounded-xl bg-white/[0.025] border border-white/10 hover:border-white/25 transition-colors space-y-1.5 md:text-right"
            >
              <div className="flex items-center md:justify-end gap-2 text-[10px] font-mono uppercase tracking-wider text-white/40">
                Next
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm font-semibold text-white line-clamp-2">{nextProject.title}</p>
            </Link>
          ) : (
            <Link
              href="/projects"
              className="group p-5 rounded-xl bg-white/[0.025] border border-white/10 hover:border-white/25 transition-colors space-y-1.5 md:text-right"
            >
              <div className="flex items-center md:justify-end gap-2 text-[10px] font-mono uppercase tracking-wider text-white/40">
                Back to
                <ArrowRight size={13} />
              </div>
              <p className="text-sm font-semibold text-white">All Projects</p>
            </Link>
          )}
        </motion.nav>
      </div>

      {/* ───────── LIGHTBOX ───────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            {images.length > 1 && (
              <Fragment>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    stepLightbox(-1);
                  }}
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    stepLightbox(1);
                  }}
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </Fragment>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[lightbox]}
              alt={`${project.title} image ${lightbox + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/80">
              {lightbox + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
