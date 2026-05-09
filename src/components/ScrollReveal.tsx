"use client";

import { ReactNode } from "react";
import { useReveal } from "./useReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({ children, className = "", threshold = 0.15 }: ScrollRevealProps) {
  const ref = useReveal(threshold);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
