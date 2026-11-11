"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertial ("momentum") scrolling: the page keeps gliding for a moment after
 * the wheel stops, like a phone. Touch devices already have native momentum,
 * so only wheel/trackpad input is smoothed.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.07,
      wheelMultiplier: 1,
      smoothWheel: true,
      anchors: true,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
