"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SkillOrbitCategory } from "@/data/skills";
import { techIconMap } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillsOrbitVisualProps {
  categories: SkillOrbitCategory[];
  activeId: string;
  activeSkills: string[];
  className?: string;
}

export function SkillsOrbitVisual({
  categories,
  activeId,
  activeSkills,
  className,
}: SkillsOrbitVisualProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative w-full aspect-square max-w-[340px] mx-auto",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/15 blur-2xl" />

      {[12, 22, 32].map((inset, i) => (
        <motion.div
          key={inset}
          className="absolute rounded-full border border-accent/15"
          style={{ inset: `${inset}%` }}
          animate={prefersReducedMotion ? undefined : { rotate: i % 2 ? -360 : 360 }}
          transition={{
            duration: 40 + i * 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary shadow-glow flex items-center justify-center"
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-mono font-bold text-white">DEV</span>
        </motion.div>
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
                : { y: active ? [-3, 3, -3] : [0, -5, 0] }
            }
            transition={{
              duration: active ? 2 : 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className={cn(
                "w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300",
                active
                  ? "scale-110 border-white/30 shadow-lg"
                  : "scale-100 border-white/10 opacity-70"
              )}
              style={{
                background: active
                  ? `linear-gradient(135deg, ${cat.color}55, ${cat.emissive}33)`
                  : "rgba(255,255,255,0.05)",
                boxShadow: active ? `0 0 24px ${cat.color}66` : undefined,
              }}
            >
              <span className="text-[9px] font-bold uppercase text-white">
                {cat.label.slice(0, 2)}
              </span>
            </div>
          </motion.div>
        );
      })}

      {activeSkills.slice(0, 4).map((skill, i) => {
        const angle =
          (i / 4) * Math.PI * 2 + Math.PI / 4 + (prefersReducedMotion ? 0 : 0);
        const radius = 28;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        const meta = techIconMap[skill];

        return (
          <motion.div
            key={skill}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {meta ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={`https://cdn.simpleicons.org/${meta.slug}/${meta.color}`}
                alt=""
                className="w-full h-full rounded-lg bg-zinc-900/80 p-0.5 border border-white/10 object-contain"
              />
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}
