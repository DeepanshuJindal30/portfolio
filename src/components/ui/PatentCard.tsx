"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Lightbulb } from "lucide-react";
import type { Patent } from "@/data/research";
import { SkillBadge } from "./SkillBadge";
import { cn } from "@/lib/utils";

interface PatentCardProps {
  patent: Patent;
  index?: number;
}

export function PatentCard({ patent, index = 0 }: PatentCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const inner = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <Lightbulb className="w-4 h-4 text-amber-400" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300">
            {patent.type} patent
          </span>
          {patent.url && (
            <ExternalLink
              className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 transition-colors"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      <h3 className="text-base md:text-lg font-medium text-white leading-snug mb-3 group-hover:text-amber-200 transition-colors">
        {patent.title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {patent.topics.map((topic) => (
          <SkillBadge key={topic} label={topic} variant="subtle" />
        ))}
      </div>
    </>
  );

  const className = cn(
    "group rounded-2xl p-5 md:p-6 h-full",
    "glass-card gradient-border",
    "hover:bg-white/[0.04] transition-colors duration-300",
    patent.url && "cursor-pointer"
  );

  if (patent.url) {
    return (
      <motion.a
        href={patent.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
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
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={className}
    >
      {inner}
    </motion.article>
  );
}
