"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { competitiveProgramming } from "@/data/projects";
import { BrandLogo, type BrandId } from "@/components/ui/BrandLogo";
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
          align="center"
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
                {"logo" in platform && platform.logo ? (
                  <BrandLogo brand={platform.logo as BrandId} size={40} />
                ) : (
                  <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                    {platform.name.charAt(0)}
                  </span>
                )}
                <ExternalLink
                  className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors"
                  aria-hidden="true"
                />
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                {platform.name}
              </p>
              <p className="text-2xl font-bold text-white">
                {platform.badge}{" "}
                <span className="text-lg font-medium text-accent">
                  {platform.rating}
                </span>
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
