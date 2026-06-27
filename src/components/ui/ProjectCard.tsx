"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { ProductionProject } from "@/data/projects";
import { SkillBadge } from "./SkillBadge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProductionProject;
  index?: number;
  variant?: "case-study" | "compact" | "nested";
}

export function ProjectCard({
  project,
  index = 0,
  variant = "case-study",
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        variant !== "nested" && "glass-card gradient-border",
        variant === "case-study" || variant === "nested" ? "p-6 md:p-8" : "p-5"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">
            {project.category === "production"
              ? "Production System"
              : project.category === "ai-ml"
                ? "AI / ML Project"
                : "Mobile App"}
          </span>
          <h3 className="text-xl md:text-2xl font-semibold text-white mt-2 mb-3 group-hover:text-indigo-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.impact && project.impact.length > 0 && (
          <div className="mb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
              Impact
            </h4>
            <ul className="space-y-1.5" role="list">
              {project.impact.map((item) => (
                <li
                  key={item}
                  className="text-sm text-emerald-400/90 flex items-start gap-2"
                >
                  <span className="text-emerald-500 mt-1" aria-hidden="true">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.architecture && (
          <div className="mb-5 p-4 rounded-xl bg-black/30 border border-white/5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
              Architecture
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.architecture.steps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="text-xs text-zinc-300 font-mono px-2 py-1 rounded bg-white/5">
                    {step}
                  </span>
                  {i < project.architecture!.steps.length - 1 && (
                    <ArrowRight
                      className="w-3 h-3 text-zinc-600 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          {project.technologies.map((tech) => (
            <SkillBadge key={tech} label={tech} variant="accent" />
          ))}
        </div>

        {project.links && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                GitHub
              </a>
            )}
            {project.links.caseStudy && (
              <a
                href={project.links.caseStudy}
                className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
              >
                Case Study
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
