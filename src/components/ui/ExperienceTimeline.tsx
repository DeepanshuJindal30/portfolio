"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  BookOpen,
  Brain,
  Cloud,
  ExternalLink,
  Gauge,
  MapPin,
  Rocket,
  Server,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type {
  ExperienceItem,
  ExperienceMetricIcon,
} from "@/data/experience";
import { BrandLogoBadge, type BrandId } from "@/components/ui/BrandLogo";
import { SkillBadge } from "./SkillBadge";
import { cn } from "@/lib/utils";

const metricIcons: Record<ExperienceMetricIcon, LucideIcon> = {
  server: Server,
  brain: Brain,
  zap: Zap,
  gauge: Gauge,
  users: Users,
  cloud: Cloud,
  book: BookOpen,
  award: Award,
  rocket: Rocket,
};

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

function MetricChip({
  icon,
  value,
  label,
  index,
}: {
  icon: ExperienceMetricIcon;
  value: string;
  label: string;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = metricIcons[icon];

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.03 }}
      className="rounded-xl p-3 sm:p-4 bg-white/[0.03] border border-white/8 hover:border-accent/25 transition-colors text-center min-w-[88px] flex-1"
    >
      <div className="inline-flex p-2 rounded-lg bg-accent/10 border border-accent/20 mb-2">
        <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
      </div>
      <p className="text-base sm:text-lg font-bold text-white leading-none mb-1">
        {value}
      </p>
      <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
        {label}
      </p>
    </motion.div>
  );
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative" role="list">
      <div
        className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block"
        aria-hidden="true"
      />
      <div className="space-y-6 md:space-y-8">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            role="listitem"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            className={cn(
              "relative md:pl-14",
              "rounded-2xl p-5 sm:p-6 md:p-7 glass-card gradient-border transition-shadow hover:shadow-glow-sm"
            )}
          >
            <motion.div
              className="hidden md:flex absolute left-3 top-8 w-3 h-3 rounded-full bg-accent border-2 border-background ring-4 ring-accent/20"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }
              }
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                {item.logo ? (
                  <BrandLogoBadge brand={item.logo as BrandId} size={44} />
                ) : (
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                    <span className="text-accent text-sm font-bold" aria-hidden="true">
                      {item.company.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-accent font-medium text-sm">{item.company}</p>
                </div>
              </div>
              <span
                className={cn(
                  "text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full shrink-0",
                  item.type === "full-time"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : item.type === "internship"
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      : "bg-accent/10 text-accent border border-accent/20"
                )}
              >
                {item.period}
              </span>
            </div>

            {item.location && (
              <p className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                {item.location}
              </p>
            )}

            <p className="text-sm text-zinc-400 mb-4 max-w-2xl">{item.tagline}</p>

            {item.metrics && item.metrics.length > 0 && (
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                {item.metrics.map((metric, i) => (
                  <MetricChip key={metric.label} {...metric} index={i} />
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 items-center">
              {item.technologies.slice(0, 8).map((tech) => (
                <SkillBadge key={tech} label={tech} variant="subtle" />
              ))}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-muted ml-1 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  View Certificate
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
