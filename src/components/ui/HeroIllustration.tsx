"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const techBadges = [
  { label: "React", color: "from-sky-400 to-sky-600", x: "-20%", y: "8%", delay: 0 },
  { label: "TS", color: "from-blue-400 to-blue-600", x: "85%", y: "5%", delay: 0.2 },
  { label: "AI", color: "from-amber-400 to-orange-500", x: "90%", y: "45%", delay: 0.4 },
  { label: "RN", color: "from-cyan-400 to-teal-500", x: "-15%", y: "55%", delay: 0.3 },
  { label: ".NET", color: "from-violet-400 to-purple-600", x: "75%", y: "78%", delay: 0.5 },
];

function LightningBolt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M70 0L20 110h40L35 200l80-120H70L70 0z"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
}

interface HeroIllustrationProps {
  avatar: string;
  name: string;
  className?: string;
}

export function HeroIllustration({
  avatar,
  name,
  className,
}: HeroIllustrationProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn("relative w-full max-w-md mx-auto aspect-square", className)}
    >
      <LightningBolt className="absolute -left-8 top-8 w-24 h-40 text-accent rotate-12" />
      <LightningBolt className="absolute -right-4 bottom-16 w-20 h-32 text-accent -rotate-12 scale-x-[-1]" />

      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/10 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto w-[72%] aspect-square"
        animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-secondary opacity-30 blur-2xl scale-110" />
        <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-br from-accent via-accent-light to-accent-secondary shadow-glow">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-surface border-4 border-surface">
            <Image
              src={avatar}
              alt={`${name} portrait`}
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
          </div>
        </div>
      </motion.div>

      {techBadges.map((badge) => (
        <motion.div
          key={badge.label}
          className={cn(
            "absolute z-20 w-14 h-14 rounded-2xl flex items-center justify-center",
            "text-xs font-bold text-white shadow-lg",
            "bg-gradient-to-br border border-white/20",
            badge.color
          )}
          style={{ left: badge.x, top: badge.y }}
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, -8, 0], rotate: [0, 3, 0] }
          }
          transition={{
            duration: 3 + badge.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: badge.delay,
          }}
        >
          {badge.label}
        </motion.div>
      ))}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
        <span className="text-xs font-mono text-accent-muted uppercase tracking-wider">
          SDE-I @ ADP
        </span>
      </div>
    </div>
  );
}
