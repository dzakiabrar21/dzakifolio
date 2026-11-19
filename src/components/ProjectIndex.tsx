"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

/**
 * Numbered list of projects. On devices with a mouse, hovering a row shows
 * its cover image floating next to the cursor.
 */
export default function ProjectIndex({ items, startAt = 1 }: { items: ProjectItem[]; startAt?: number }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 260, damping: 28, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <div onMouseMove={onMove} onMouseLeave={() => setHovered(null)} className="relative">
      <ul className="border-t border-white/10">
        {items.map((p, i) => (
          <li key={p.slug} onMouseEnter={() => setHovered(i)}>
            <Link
              href={`/projects/${p.slug}`}
              className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1.3fr_1fr_auto] items-baseline gap-3 md:gap-6 py-5 md:py-6 border-b border-white/10"
            >
              <span className="font-mono text-[11px] text-white/30 group-hover:text-[#d6a56a] transition-colors">
                ({String(startAt + i).padStart(2, "0")})
              </span>
              <span className="font-serif text-white text-[24px] md:text-[34px] leading-tight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                {p.title}
              </span>
              <span className="hidden md:block text-[13px] text-white/45">{p.category}</span>
              <ArrowUpRight
                size={18}
                className="self-center text-white/30 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Cursor-following preview, mouse devices only */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden [@media(hover:hover)_and_(pointer:fine)]:block"
        style={{ x: sx, y: sy }}
      >
        <AnimatePresence>
          {hovered !== null && items[hovered]?.images[0] && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="ml-6 -mt-[90px] w-[260px] aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={items[hovered].images[0]} alt="" className="h-full w-full object-cover" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
