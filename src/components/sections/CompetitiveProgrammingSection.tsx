"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import { competitiveProgramming } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CompetitiveProgrammingSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="competitive"
      className="section-padding"
      aria-labelledby="competitive-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Problem Solving"
          title="Competitive Programming"
          description="Structured algorithmic practice at elite competitive programming tiers."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {competitiveProgramming.platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl p-6 glass-card gradient-border hover:bg-white/[0.04] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex items-center justify-between mb-4">
                <Trophy
                  className="w-5 h-5 text-amber-400"
                  aria-hidden="true"
                />
                <ExternalLink
                  className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors"
                  aria-hidden="true"
                />
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                {platform.name}
              </p>
              <p className="text-2xl font-bold text-white mb-1">
                {platform.badge}{" "}
                <span className="text-lg font-medium text-accent">
                  {platform.rating}
                </span>
              </p>
              <p className="text-sm text-zinc-400">{platform.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
