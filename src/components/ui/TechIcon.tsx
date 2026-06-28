"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techIconMap } from "@/data/skills";
import { cn } from "@/lib/utils";

interface TechIconProps {
  skill: string;
  size?: number;
  className?: string;
  showLabel?: boolean;
  active?: boolean;
}

function FallbackIcon({
  label,
  size,
  className,
}: {
  label: string;
  size: number;
  className?: string;
}) {
  const abbr = label
    .split(/[\s./]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-secondary/15 border border-white/15 font-mono font-bold text-white",
        className
      )}
      style={{ width: size, height: size, fontSize: Math.max(10, size * 0.28) }}
      aria-hidden="true"
    >
      {abbr}
    </div>
  );
}

export function TechIcon({
  skill,
  size = 44,
  className,
  showLabel = false,
  active = false,
}: TechIconProps) {
  const meta = techIconMap[skill];
  const prefersReducedMotion = useReducedMotion();

  const icon = meta ? (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`https://cdn.simpleicons.org/${meta.slug}/${meta.color}`}
      alt={meta.label}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={cn(
        "rounded-xl bg-zinc-900/80 p-1.5 object-contain border border-white/10 transition-transform duration-300",
        active && "scale-110 border-accent/40 shadow-glow-sm",
        className
      )}
    />
  ) : (
    <FallbackIcon label={skill} size={size} className={className} />
  );

  if (!showLabel) return icon;

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {icon}
      <span className="text-[10px] font-mono text-zinc-500 text-center max-w-[72px] truncate">
        {meta?.label ?? skill}
      </span>
    </motion.div>
  );
}

interface SkillIconGridProps {
  skills: string[];
  activeColor?: string;
}

export function SkillIconGrid({ skills, activeColor }: SkillIconGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-5">
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: i * 0.05, duration: 0.35, type: "spring" }}
          className="flex justify-center"
          style={{ perspective: 600 }}
        >
          <TechIcon skill={skill} size={48} showLabel active={!!activeColor} />
        </motion.div>
      ))}
    </div>
  );
}
