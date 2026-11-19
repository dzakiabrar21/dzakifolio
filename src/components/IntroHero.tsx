"use client";

import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** One line of the headline, sliding up from behind a clipping mask. */
function MaskLine({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Local time in Jakarta, ticking each second. Empty until mounted to avoid a hydration mismatch. */
function JakartaClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time || "--:--:--"}</span>;
}

const meta = [
  { label: "Role", value: "Fullstack Developer & AI" },
  { label: "Currently", value: "Intern @ PT Century Batteries" },
  { label: "Studying", value: "Informatics, President University" },
];

export default function IntroHero() {
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="hero"
        className="relative max-w-[1150px] mx-auto px-6 md:px-12 pt-10 md:pt-28 pb-14 md:pb-20 min-h-[78svh] md:min-h-[92svh] flex flex-col"
      >
        {/* Top meta row */}
        <motion.div
          {...fade(0.1)}
          className="flex items-center justify-between gap-4 whitespace-nowrap font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-white/45"
        >
          <span>Portfolio — {new Date().getFullYear()}</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#d6a56a] opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#d6a56a]" />
            </span>
            <span className="hidden sm:inline">Indonesia ·</span> <JakartaClock /> WIB
          </span>
        </motion.div>

        {/* Name */}
        <h1 className="mt-auto pt-16 font-serif font-normal text-white leading-[0.9] tracking-[-0.02em] text-[19vw] sm:text-[15vw] md:text-[min(13.5vw,168px)]">
          <MaskLine delay={0.25}>Muhammad</MaskLine>
          <MaskLine delay={0.37} className="italic text-white/85 md:pl-[0.9em]">
            Dzaki Abrar
          </MaskLine>
        </h1>

        {/* Bottom meta row */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
          {meta.map((m, i) => (
            <motion.div key={m.label} {...fade(0.7 + i * 0.08)} className="space-y-1.5">
              <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-white/35">{m.label}</p>
              <p className="text-white/85 text-[14px] md:text-[15px]">{m.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          {...fade(1)}
          href="#introduction"
          className="hidden md:inline-flex absolute bottom-6 right-12 items-center gap-2 font-mono text-[10.5px] tracking-[0.2em] uppercase text-white/35 hover:text-white/70 transition-colors"
        >
          Scroll <ArrowDown size={12} />
        </motion.a>
      </section>
    </MotionConfig>
  );
}
