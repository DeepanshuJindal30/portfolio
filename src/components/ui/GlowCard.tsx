"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
    const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const glowStyle = prefersReducedMotion
    ? undefined
    : {
        background: isHovered
          ? `radial-gradient(600px circle at ${position.x}% ${position.y}%, rgba(249, 115, 22, 0.14), transparent 40%)`
          : undefined,
      };

  const classes = cn(
    "group relative rounded-2xl transition-all duration-300 [transform-style:preserve-3d]",
    "hover:shadow-xl hover:shadow-accent/10",
    className
  );

  const tiltStyle = prefersReducedMotion
    ? undefined
    : {
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? 1.01 : 1,
      };

  const inner = (
    <>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-accent/20" />
      {children}
    </>
  );

  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ ...glowStyle, ...tiltStyle }}
        className={classes}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ ...glowStyle, ...tiltStyle }}
      className={classes}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {inner}
    </motion.div>
  );
}
