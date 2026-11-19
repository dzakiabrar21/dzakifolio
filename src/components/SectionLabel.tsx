/** Small eyebrow above a section heading, e.g. "— Experience". */
export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-white/40 ${className}`}>
      <span className="h-px w-6 bg-[#d6a56a]/70" />
      {children}
    </p>
  );
}

/** Shared display style for section headings. */
export const headingClass =
  "font-serif font-normal text-white text-[34px] md:text-[46px] leading-[1.02] tracking-[-0.01em]";
