"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, class "visible" is added to it
 * and all its children that have the class "reveal".
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal the container itself if it has the class
          el.classList.add("visible");
          // Reveal all children with the "reveal" class inside this container
          el.querySelectorAll<HTMLElement>(".reveal").forEach((child, i) => {
            setTimeout(() => child.classList.add("visible"), i * 80);
          });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
