"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { ShowcaseProject } from "@/data/projects";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface DemoShowcaseCardProps {
  project: ShowcaseProject;
  index?: number;
  reversed?: boolean;
}

export function DemoShowcaseCard({
  project,
  index = 0,
  reversed = false,
}: DemoShowcaseCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="rounded-2xl glass-card gradient-border overflow-hidden"
    >
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-0",
          reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
        )}
      >
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-secondary mb-3">
            {project.category}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 mb-5 max-w-md">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <SkillBadge key={tech} label={tech} variant="accent" />
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.links.live && (
              <Button
                href={project.links.live}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Deployed Link
              </Button>
            )}
            {project.links.github && (
              <Button
                href={project.links.github}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                GitHub
              </Button>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 flex items-center justify-center bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 min-h-[280px]">
          {project.layout === "phone" ? (
            <PhoneMockup
              screenshots={project.screenshots ?? ["/app-screenshots/home.svg"]}
              alt={project.title}
              videoSrc={project.demoVideo}
            />
          ) : (
            <BrowserMockup
              videoSrc={project.demoVideo}
              alt={project.title}
              poster={project.poster}
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}
