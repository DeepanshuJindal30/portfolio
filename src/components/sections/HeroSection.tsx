"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";

const ArchitectureDiagram = dynamic(
  () =>
    import("@/components/three/ArchitectureDiagram").then(
      (mod) => mod.ArchitectureDiagram
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] md:h-[480px] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    ),
  }
);

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-400 mb-4">
                AI Product Engineering Command Center
              </p>
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="text-gradient">{siteConfig.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-4 max-w-xl">
                {siteConfig.subheadline}
              </p>
              <p className="text-sm font-mono text-zinc-500 mb-8 leading-relaxed max-w-xl">
                {siteConfig.badge}
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              <Button href="#projects" variant="primary">
                View Projects
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button href={withBasePath(siteConfig.resume)} variant="outline">
                <Download className="w-4 h-4" aria-hidden="true" />
                Download Resume
              </Button>
              <Button
                href={siteConfig.github}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                GitHub
              </Button>
              <Button
                href={siteConfig.linkedin}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                LinkedIn
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="ghost">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Email Me
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl glass-card gradient-border overflow-hidden">
              <div className="p-4 border-b border-white/5 flex items-center gap-2">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs font-mono text-zinc-500 ml-2">
                  system-architecture.diagram
                </span>
              </div>
              <ArchitectureDiagram />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
