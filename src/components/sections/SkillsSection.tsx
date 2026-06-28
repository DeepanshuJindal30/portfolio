"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { skillOrbitCategories } from "@/data/skills";
import { SkillIconGrid } from "@/components/ui/TechIcon";
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
  const { enableSkills3D } = useVisualPerformance();
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
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] bg-accent-secondary/5 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader label="Toolkit" title="Skills" align="center" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative h-[300px] sm:h-[360px] lg:h-[420px] flex items-center justify-center">
            <SkillsOrbitVisual
              categories={skillOrbitCategories}
              activeId={activeId}
              activeSkills={activeCategory.skills}
              className={cn(
                enableSkills3D && "absolute inset-0 opacity-20 pointer-events-none"
              )}
            />
            {enableSkills3D && (
              <SkillsOrbit3D
                categories={skillOrbitCategories}
                activeId={activeId}
                activeSkills={activeCategory.skills}
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
                  aria-selected={activeId === cat.id ? true : false}
                  onClick={() => setActiveId(cat.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all duration-300",
                    activeId === cat.id
                      ? "border-accent/50 text-white bg-accent/15 shadow-glow-sm scale-105"
                      : "border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-5 sm:p-7 glass-card gradient-border"
                role="tabpanel"
              >
                <SkillIconGrid
                  skills={activeCategory.skills}
                  activeColor={activeCategory.color}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
