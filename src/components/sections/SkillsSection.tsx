"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { skillOrbitCategories } from "@/data/skills";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { SkillsOrbitVisual } from "@/components/ui/SkillsOrbitVisual";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useVisualPerformance } from "@/hooks/useVisualPerformance";
import { cn } from "@/lib/utils";

const SkillsOrbit3D = dynamic(
  () =>
    import("@/components/three/SkillsOrbit3D").then((mod) => mod.SkillsOrbit3D),
  { ssr: false }
);

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();
  const { enable3D } = useVisualPerformance();
  const [activeId, setActiveId] = useState(skillOrbitCategories[0].id);
  const activeCategory =
    skillOrbitCategories.find((c) => c.id === activeId) ??
    skillOrbitCategories[0];

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader label="Toolkit" title="Skills" align="center" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] flex items-center justify-center">
            <SkillsOrbitVisual
              categories={skillOrbitCategories}
              activeId={activeId}
              className={cn(
                enable3D && "absolute inset-0 opacity-25 pointer-events-none"
              )}
            />
            {enable3D && (
              <SkillsOrbit3D
                categories={skillOrbitCategories}
                activeId={activeId}
                className="absolute inset-0 z-10"
              />
            )}
          </div>

          <div>
            <div
              className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start"
              role="tablist"
              aria-label="Skill categories"
            >
              {skillOrbitCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeId === cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all duration-300",
                    activeId === cat.id
                      ? "border-accent/50 text-white bg-accent/15 shadow-glow-sm"
                      : "border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300"
                  )}
                  style={
                    activeId === cat.id
                      ? { boxShadow: `0 0 16px ${cat.color}33` }
                      : undefined
                  }
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-5 sm:p-6 glass-card gradient-border min-h-[140px]"
                role="tabpanel"
              >
                <div className="flex flex-wrap gap-2">
                  {activeCategory.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }
                      }
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03, duration: 0.2 }}
                    >
                      <SkillBadge
                        label={skill}
                        variant={activeCategory.id === "ai" ? "accent" : "default"}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
