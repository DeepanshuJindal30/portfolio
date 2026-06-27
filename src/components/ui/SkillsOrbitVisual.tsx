"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SkillOrbitCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillsOrbitVisualProps {
  categories: SkillOrbitCategory[];
  activeId: string;
  className?: string;
}

export function SkillsOrbitVisual({
  categories,
  activeId,
  className,
}: SkillsOrbitVisualProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative w-full aspect-square max-w-[320px] mx-auto",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/15 via-transparent to-accent-secondary/10 blur-2xl" />

      <motion.div
        className="absolute inset-[12%] rounded-full border border-accent/20"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[22%] rounded-full border border-white/10 border-dashed"
        animate={prefersReducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-secondary shadow-glow-sm flex items-center justify-center">
          <span className="text-[10px] font-mono font-bold text-white">DEV</span>
        </div>
      </div>

      {categories.map((cat, i) => {
        const angle = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 42;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        const active = activeId === cat.id;

        return (
          <motion.div
            key={cat.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={
              prefersReducedMotion
                ? undefined
                : { y: active ? [-2, 2, -2] : [0, -4, 0] }
            }
            transition={{
              duration: active ? 2 : 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className={cn(
                "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-[9px] font-bold uppercase tracking-wide border transition-all duration-300",
                active
                  ? "scale-110 shadow-lg border-white/30 text-white"
                  : "scale-100 border-white/10 text-zinc-400"
              )}
              style={{
                background: active
                  ? `linear-gradient(135deg, ${cat.color}44, ${cat.emissive}22)`
                  : "rgba(255,255,255,0.04)",
                boxShadow: active ? `0 0 20px ${cat.color}55` : undefined,
              }}
            >
              {cat.label.slice(0, 3)}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
