"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

// Card with a soft glow that follows the cursor.
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group/spotlight relative overflow-hidden rounded-xl border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_8px_30px_-12px_hsl(var(--brand)/0.35)] motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--x) var(--y), hsl(var(--brand) / 0.10), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
