"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProfileImage } from "@/components/ui/ProfileImage";

const SectionSkyDecor = dynamic(
  () =>
    import("@/components/three/SectionSkyDecor").then(
      (mod) => mod.SectionSkyDecor
    ),
  { ssr: false }
);

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {!prefersReducedMotion && (
        <SectionSkyDecor className="opacity-40 max-h-[320px] top-auto bottom-0 right-0 left-auto w-[min(100%,420px)]" />
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader label="Profile" title="About Me" />
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto lg:mx-0"
          >
            <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-2xl overflow-hidden glass-card gradient-border">
              <ProfileImage
                src={siteConfig.avatar}
                alt="Portrait of Deepanshu Jindal"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center lg:text-left text-sm text-zinc-500">
              {siteConfig.location}
            </p>
          </motion.div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="prose prose-invert max-w-none">
              {siteConfig.about.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base md:text-lg text-zinc-400 leading-relaxed mb-5 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
