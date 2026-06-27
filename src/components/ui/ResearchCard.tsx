"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, FileText, Github } from "lucide-react";
import type { ResearchPaper } from "@/data/research";
import { SkillBadge } from "./SkillBadge";
import { cn } from "@/lib/utils";

interface ResearchCardProps {
  paper: ResearchPaper;
  index?: number;
}

export function ResearchCard({ paper, index = 0 }: ResearchCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const primaryUrl = paper.url ?? paper.github;

  const inner = (
    <>
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
          <FileText className="w-4 h-4 text-accent" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          {paper.year && (
            <span className="text-xs font-mono text-zinc-500">{paper.year}</span>
          )}
          {paper.venue && (
            <p className="text-[10px] font-mono uppercase tracking-wider text-violet-400 mt-0.5">
              {paper.venue}
            </p>
          )}
        </div>
        {primaryUrl && (
          <ExternalLink
            className="w-4 h-4 text-zinc-600 group-hover:text-accent shrink-0 transition-colors"
            aria-hidden="true"
          />
        )}
      </div>
      <h3 className="text-base md:text-lg font-medium text-white leading-snug mb-4 group-hover:text-accent-muted transition-colors">
        {paper.title}
      </h3>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {paper.topics.map((topic) => (
          <SkillBadge key={topic} label={topic} variant="subtle" />
        ))}
      </div>
      {(paper.url || paper.github) && (
        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
          {paper.url && (
            <span className="inline-flex items-center gap-1 text-xs text-accent">
              <FileText className="w-3 h-3" aria-hidden="true" />
              Read Paper
            </span>
          )}
          {paper.github && (
            <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
              <Github className="w-3 h-3" aria-hidden="true" />
              Code
            </span>
          )}
        </div>
      )}
    </>
  );

  const className = cn(
    "group rounded-2xl p-5 md:p-6 h-full",
    "glass-card gradient-border",
    "hover:bg-white/[0.04] transition-colors duration-300",
    primaryUrl && "cursor-pointer"
  );

  if (primaryUrl) {
    return (
      <motion.a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className={className}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={className}
    >
      {inner}
    </motion.article>
  );
}
