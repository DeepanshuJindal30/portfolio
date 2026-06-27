"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Monitor,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import type { Pillar } from "@/data/pillars";
import { SkillBadge } from "./SkillBadge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  server: Server,
  brain: Brain,
  smartphone: Smartphone,
};

interface PillarCardProps {
  pillar: Pillar;
  index?: number;
}

export function PillarCard({ pillar, index = 0 }: PillarCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[pillar.icon] ?? Monitor;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-2xl p-6 md:p-8 h-full",
        "glass-card gradient-border",
        "hover:bg-white/[0.04] transition-all duration-300"
      )}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 border border-white/10">
          <Icon className="w-6 h-6 text-indigo-300" aria-hidden="true" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {pillar.title}
        </h3>
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed mb-6">
        {pillar.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {pillar.technologies.map((tech) => (
          <SkillBadge key={tech} label={tech} variant="subtle" />
        ))}
      </div>
    </motion.article>
  );
}
