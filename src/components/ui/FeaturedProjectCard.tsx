"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ProductionProject } from "@/data/projects";
import { BrandLogoBadge, type BrandId } from "@/components/ui/BrandLogo";
import { AgenticArchitectureFlow } from "@/components/ui/AgenticArchitectureFlow";
import { SkillBadge } from "./SkillBadge";
import { GlowCard } from "./GlowCard";

interface FeaturedProjectCardProps {
  project: ProductionProject;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isAgentic = project.id === "agentic-ai-perf";

  return (
    <motion.div
      id="featured-project"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
    >
      <GlowCard className="glass-card gradient-border overflow-hidden">
        <div className="relative p-4 sm:p-5 md:p-6">
          <div className="relative space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 mb-2.5">
                  {project.logo && (
                    <BrandLogoBadge
                      brand={project.logo as BrandId}
                      size={22}
                      className="shadow-none"
                    />
                  )}
                  <Sparkles className="w-3 h-3 text-accent" aria-hidden="true" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-accent-muted">
                    Flagship Enterprise
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 md:line-clamp-3 max-w-3xl">
                  {isAgentic
                    ? "Agentic platform that turns Jira / Splunk API feeds into Bruno collections, VuGen C scripts, and LoadRunner scenarios — with live validation, constrained LLM actions, and checkpoint resume."
                    : project.description}
                </p>
              </div>
            </div>

            {project.impact && (
              <div className="flex flex-wrap gap-2">
                {(isAgentic ? project.impact.slice(0, 2) : project.impact.slice(0, 3)).map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-[11px] text-emerald-300/95 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1"
                    >
                      <span aria-hidden="true">✓</span>
                      <span className="line-clamp-1">{item}</span>
                    </span>
                  )
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, isAgentic ? 5 : 6).map((tech) => (
                <SkillBadge key={tech} label={tech} variant="accent" />
              ))}
            </div>

            {isAgentic ? (
              <AgenticArchitectureFlow />
            ) : (
              project.architecture && (
                <div className="flex flex-wrap items-center gap-2">
                  {project.architecture.steps.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-300 px-2 py-1 rounded-md bg-white/5 border border-white/8">
                        {step}
                      </span>
                      {i < project.architecture!.steps.length - 1 && (
                        <span className="text-zinc-600 text-xs" aria-hidden="true">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
