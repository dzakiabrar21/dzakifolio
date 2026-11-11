"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects, ProjectItem } from "@/data/projects";

const FEATURED_COUNT = 5;

// Flat, opaque card colors (no gradients / transparency)
const PALETTE = [
  { bg: "#c6e22d", fg: "#111111", muted: "#3a4a00", line: "rgba(0,0,0,0.18)", btnBg: "#111111", btnFg: "#ffffff" },
  { bg: "#e7e7e2", fg: "#111111", muted: "#55554f", line: "rgba(0,0,0,0.15)", btnBg: "#111111", btnFg: "#ffffff" },
  { bg: "#5b30c8", fg: "#ffffff", muted: "#d6ccf5", line: "rgba(255,255,255,0.25)", btnBg: "#ffffff", btnFg: "#111111" },
  { bg: "#ffffff", fg: "#111111", muted: "#5a5a5a", line: "rgba(0,0,0,0.15)", btnBg: "#111111", btnFg: "#ffffff" },
  { bg: "#ff6a2b", fg: "#111111", muted: "#4a1d05", line: "rgba(0,0,0,0.2)", btnBg: "#111111", btnFg: "#ffffff" },
];

function shortName(title: string) {
  return title.split(/\s[–-]\s|\s\(/)[0].trim();
}

export default function FeaturedProjects() {
  const featured = projects.slice(0, FEATURED_COUNT);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Spring-smoothed so cards keep easing for a moment after scrolling stops.
  const scrollYProgress = useSpring(rawProgress, { stiffness: 60, damping: 20, mass: 0.6 });

  return (
    <section id="featured-projects" className="w-full py-16 md:py-24 scroll-mt-8 border-t border-white/[0.08]">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-10 md:mb-14">
          <div className="space-y-2">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/40">Selected work</p>
            <h2 className="text-white text-[32px] md:text-[48px] font-bold leading-none font-Inter tracking-tight">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-white/60 hover:text-white text-[13px] font-medium font-Inter transition-colors group"
          >
            View all projects
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div
          ref={containerRef}
          className="relative flex flex-col gap-[14vh] md:gap-[26vh] [--stack-top:16px] md:[--stack-top:88px]"
        >
          {featured.map((project, i) => (
            <StackCard
              key={project.slug}
              project={project}
              index={i}
              total={featured.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-[14px] font-semibold font-Inter hover:bg-white/90 transition-colors group"
          >
            View all projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StackCard({
  project,
  index,
  total,
  progress,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const c = PALETTE[index % PALETTE.length];
  const isLast = index === total - 1;

  // Earlier cards shrink slightly as later cards slide over them.
  const targetScale = isLast ? 1 : 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  const rows: { label: string; value: string }[] = [
    { label: "CATEGORY", value: project.category },
    { label: "STACK", value: project.tags.slice(0, 4).join(" · ") },
  ];
  if (project.accuracy) rows.push({ label: "TYPE", value: project.accuracy });

  return (
    <div className="sticky" style={{ top: `calc(var(--stack-top) + ${index * 16}px)` }}>
      <motion.div style={{ scale, transformOrigin: "top center" }}>
        <Link
          href={`/projects/${project.slug}`}
          className="group block rounded-[28px] md:rounded-[32px] p-5 md:p-8 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.6)]"
          style={{ background: c.bg, color: c.fg }}
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 md:min-h-[480px]">
            {/* Left: copy */}
            <div className="flex flex-col">
              <h3 className="font-Inter font-medium tracking-[-0.04em] leading-[0.95] text-[38px] sm:text-[56px] md:text-[64px] break-words">
                {shortName(project.title)}
              </h3>
              <p className="mt-3 text-[16px] md:text-[18px] leading-snug max-w-[26ch] font-Inter">
                {project.tagline || project.desc}
              </p>

              <div className="mt-auto pt-3 md:pt-8 space-y-4 md:space-y-5">
                <p className="text-[13px] md:text-[14px] leading-relaxed max-w-[44ch] line-clamp-2 md:line-clamp-3" style={{ color: c.muted }}>
                  {project.desc}
                </p>
                <dl className="hidden md:block border-t" style={{ borderColor: c.line }}>
                  {rows.map((r) => (
                    <div
                      key={r.label}
                      className="grid grid-cols-[88px_1fr] gap-3 py-2.5 border-b text-[12px]"
                      style={{ borderColor: c.line }}
                    >
                      <dt className="font-mono tracking-wider" style={{ color: c.muted }}>
                        {r.label}
                      </dt>
                      <dd>{r.value}</dd>
                    </div>
                  ))}
                </dl>
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-transform group-hover:translate-x-1"
                  style={{ background: c.btnBg, color: c.btnFg }}
                >
                  View case study
                  <ArrowRight size={15} />
                </span>
              </div>
            </div>

            {/* Right: framed screenshot */}
            <div
              className="relative rounded-2xl border overflow-hidden aspect-[16/10] md:aspect-auto"
              style={{ borderColor: c.line }}
            >
              <div className="absolute top-3 left-4 right-4 z-10 flex items-center justify-between font-mono text-[10px] tracking-wider" style={{ color: c.muted }}>
                <span>SCREENSHOT</span>
                <span>({String(index + 1).padStart(2, "0")})</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images[0]}
                alt={project.title}
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain p-5 pt-9 transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
