"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ProductionProject } from "@/data/projects";
import { SkillBadge } from "./SkillBadge";
import { GlowCard } from "./GlowCard";

interface FeaturedProjectCardProps {
  project: ProductionProject;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      id="featured-project"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <GlowCard className="glass-card gradient-border overflow-hidden">
        <div className="relative p-6 md:p-10 lg:p-12">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-muted">
                  {project.category === "enterprise"
                    ? "Flagship Enterprise System"
                    : "Flagship Project"}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h3>

              <p className="text-base text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {project.impact && (
                <ul className="space-y-2 mb-6" role="list">
                  {project.impact.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-emerald-400/90"
                    >
                      <span className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech) => (
                  <SkillBadge key={tech} label={tech} variant="accent" />
                ))}
              </div>
            </div>

            {project.architecture && (
              <div className="flex flex-col justify-center">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                  Architecture Pipeline
                </p>
                <div className="space-y-3">
                  {project.architecture.steps.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 border border-accent/25 text-xs font-mono text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-2.5">
                        <p className="text-sm font-mono text-zinc-300">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
