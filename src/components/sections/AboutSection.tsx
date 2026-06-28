"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { Brain, FileText, Server, Trophy } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { useVisualPerformance } from "@/hooks/useVisualPerformance";

const SectionSkyDecor = dynamic(
  () =>
    import("@/components/three/SectionSkyDecor").then(
      (mod) => mod.SectionSkyDecor
    ),
  { ssr: false }
);

const highlightIcons = {
  server: Server,
  brain: Brain,
  file: FileText,
  trophy: Trophy,
} as const;

type HighlightIconKey = keyof typeof highlightIcons;

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const { enable3D } = useVisualPerformance();

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {enable3D && !prefersReducedMotion && (
        <SectionSkyDecor className="opacity-30 max-h-[280px] top-auto bottom-0 right-0 left-auto w-[min(100%,380px)]" />
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader label="Profile" title="About Me" align="center" />

        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110" aria-hidden="true" />
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full p-1 bg-gradient-to-br from-accent via-accent-light to-accent-secondary shadow-glow">
              <div className="h-full w-full rounded-full overflow-hidden border-2 border-surface">
                <ProfileImage
                  src={siteConfig.avatar}
                  alt="Portrait of Deepanshu Jindal"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-xs font-mono text-zinc-500">
              {siteConfig.location}
            </p>
          </motion.div>

          <p className="text-center text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            SDE-I @ ADP · Full-stack · Agentic AI · Mobile products
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
            {siteConfig.aboutHighlights.map((item, index) => {
              const Icon = highlightIcons[item.icon as HighlightIconKey];
              return (
                <motion.div
                  key={item.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  className="rounded-2xl p-4 sm:p-5 glass-card gradient-border text-center group hover:border-accent/25 transition-colors"
                >
                  <div className="inline-flex p-2.5 rounded-xl bg-accent/10 border border-accent/20 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
