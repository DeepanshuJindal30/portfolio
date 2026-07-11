"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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

function MetricPill({
  icon,
  value,
  label,
}: {
  icon: ExperienceMetricIcon;
  value: string;
  label: string;
}) {
  const Icon = metricIcons[icon];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[11px] text-accent-muted">
      <Icon className="w-3 h-3 text-accent shrink-0" aria-hidden="true" />
      <span className="font-semibold text-white">{value}</span>
      <span className="text-zinc-500 font-mono uppercase tracking-wide text-[9px]">
        {label}
      </span>
    </span>
  );
}

function PeriodSide({ item }: { item: ExperienceItem }) {
  const [start, end] = item.period.split("—").map((s) => s.trim());

  return (
    <div className="md:text-right md:pr-2">
      <p
        className={cn(
          "inline-flex md:inline-flex flex-col md:items-end gap-0.5",
          "text-[11px] sm:text-xs font-mono uppercase tracking-wider",
          item.type === "full-time"
            ? "text-emerald-400"
            : item.type === "internship"
              ? "text-amber-400"
              : "text-accent"
        )}
      >
        <span className="font-semibold text-sm sm:text-base tracking-wide">
          {start}
        </span>
        {end && (
          <span className="text-zinc-500 normal-case tracking-normal">
            — {end}
          </span>
        )}
      </p>
      {item.location && (
        <p className="hidden md:flex items-center md:justify-end gap-1.5 text-[11px] text-zinc-500 mt-2">
          <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
          <span className="text-right leading-snug">{item.location}</span>
        </p>
      )}
      <span
        className={cn(
          "hidden md:inline-flex mt-2.5 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full",
          item.type === "full-time"
            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            : item.type === "internship"
              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
              : "bg-accent/10 text-accent border border-accent/20"
        )}
      >
        {item.type === "full-time"
          ? "Full-time"
          : item.type === "internship"
            ? "Internship"
            : "Other"}
      </span>
    </div>
  );
}

function DetailsCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      role="listitem"
      initial={prefersReducedMotion ? false : { opacity: 0, x: 36, y: 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
        delay: prefersReducedMotion ? 0 : index * 0.04,
      }}
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-5",
        "hover:border-accent/30 hover:bg-white/[0.05] transition-colors"
      )}
    >
      <div className="flex flex-wrap items-start gap-2.5 mb-2.5">
        {item.logo ? (
          <BrandLogoBadge brand={item.logo as BrandId} size={36} />
        ) : (
          <div className="h-9 w-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">
            {item.company.charAt(0)}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
            {item.role}
          </h3>
          <p className="text-accent text-sm font-medium">{item.company}</p>
        </div>
      </div>

      {/* Mobile-only date + location (desktop shows on left) */}
      <div className="md:hidden mb-2.5 space-y-1">
        <span
          className={cn(
            "inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full",
            item.type === "full-time"
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              : item.type === "internship"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                : "bg-accent/10 text-accent border border-accent/20"
          )}
        >
          {item.period}
        </span>
        {item.location && (
          <p className="flex items-center gap-1.5 text-[11px] text-zinc-500">
            <MapPin className="w-3 h-3" aria-hidden="true" />
            {item.location}
          </p>
        )}
      </div>

      <p className="text-sm text-zinc-400 mb-3 leading-relaxed">{item.tagline}</p>

      {item.metrics && item.metrics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.metrics.map((metric) => (
            <MetricPill key={metric.label} {...metric} />
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 items-center">
        {item.technologies.slice(0, 6).map((tech) => (
          <SkillBadge key={tech} label={tech} variant="subtle" />
        ))}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-accent hover:text-accent-muted ml-0.5 transition-colors"
          >
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
            Certificate
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative" role="list">
      {/* Spine — left on mobile, between date/details on desktop */}
      <div
        className="absolute left-4 md:left-[28%] top-0 bottom-0 w-px -translate-x-1/2 bg-white/8"
        aria-hidden="true"
      />
      <motion.div
        className="absolute left-4 md:left-[28%] top-0 w-px -translate-x-1/2 origin-top"
        style={{
          height: prefersReducedMotion ? "100%" : lineHeight,
          background:
            "linear-gradient(180deg, #f97316 0%, #fb923c 50%, #34d399 100%)",
          boxShadow: "0 0 12px rgba(249,115,22,0.45)",
        }}
        aria-hidden="true"
      />

      <div className="space-y-8 md:space-y-10">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative grid grid-cols-1 md:grid-cols-[28%_1fr] gap-0 md:gap-0"
          >
            {/* Date column (desktop) */}
            <motion.div
              className="hidden md:flex md:justify-end md:items-start md:pt-5 md:pr-8"
              initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <PeriodSide item={item} />
            </motion.div>

            {/* Node on spine */}
            <motion.div
              className="absolute z-10 left-4 md:left-[28%] -translate-x-1/2 top-6 md:top-7 flex items-center justify-center"
              initial={prefersReducedMotion ? false : { scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              aria-hidden="true"
            >
              <span className="relative flex h-4 w-4 items-center justify-center">
                {!prefersReducedMotion && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-accent/40"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                )}
                <span className="relative h-3.5 w-3.5 rounded-full bg-accent border-2 border-background shadow-[0_0_12px_rgba(249,115,22,0.7)]" />
              </span>
            </motion.div>

            {/* Details column */}
            <div className="pl-10 md:pl-8 md:pt-0">
              <DetailsCard item={item} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
