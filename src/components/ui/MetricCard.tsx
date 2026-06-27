"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Code,
  ExternalLink,
  Layers,
  Lightbulb,
  Smartphone,
  Star,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { Achievement } from "@/data/achievements";
import { CountUp } from "./CountUp";
import { GlowCard } from "./GlowCard";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  trophy: Trophy,
  star: Star,
  "book-open": BookOpen,
  lightbulb: Lightbulb,
  code: Code,
  layers: Layers,
  smartphone: Smartphone,
};

interface MetricCardProps {
  achievement: Achievement;
  index?: number;
}

export function MetricCard({ achievement, index = 0 }: MetricCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[achievement.icon] ?? Trophy;

  const content = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
          <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-1.5">
          {achievement.url && (
            <ExternalLink
              className="w-3.5 h-3.5 text-zinc-600 group-hover:text-accent transition-colors"
              aria-hidden="true"
            />
          )}
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            {achievement.label}
          </span>
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-1.5">
        {achievement.countUp ? (
          <CountUp
            end={achievement.countUp.end}
            prefix={achievement.countUp.prefix}
            suffix={achievement.countUp.suffix}
          />
        ) : (
          achievement.value
        )}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed">
        {achievement.description}
      </p>
    </>
  );

  const className = cn(
    "glass-card gradient-border",
    achievement.url && "cursor-pointer focus-within:ring-2 focus-within:ring-accent"
  );

  if (achievement.url) {
    return (
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <GlowCard
          as="a"
          href={achievement.url}
          ariaLabel={`${achievement.value} — ${achievement.description}`}
          className={cn(className, "block p-5 md:p-6")}
        >
          {content}
        </GlowCard>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <GlowCard className={cn(className, "p-5 md:p-6")}>{content}</GlowCard>
    </motion.div>
  );
}
