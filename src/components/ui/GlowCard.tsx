"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "a";
  href?: string;
  ariaLabel?: string;
}

export function GlowCard({
  children,
  className,
  as = "div",
  href,
  ariaLabel,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const glowStyle = prefersReducedMotion
    ? undefined
    : {
        background: isHovered
          ? `radial-gradient(600px circle at ${position.x}% ${position.y}%, rgba(99, 102, 241, 0.14), transparent 40%)`
          : undefined,
      };

  const classes = cn(
    "group relative rounded-2xl transition-all duration-300",
    "hover:scale-[1.01] hover:shadow-xl hover:shadow-indigo-500/5",
    className
  );

  const inner = (
    <>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-indigo-500/20" />
      {children}
    </>
  );

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={glowStyle}
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={glowStyle}
      className={classes}
    >
      {inner}
    </div>
  );
}
