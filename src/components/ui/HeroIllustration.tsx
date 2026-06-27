"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { BrandLogo, type BrandId } from "@/components/ui/BrandLogo";

const techBadges: {
  brand?: BrandId;
  label?: string;
  color: string;
  x: string;
  y: string;
  delay: number;
}[] = [
  { brand: "react", color: "from-sky-400/20 to-sky-600/20", x: "4%", y: "12%", delay: 0 },
  { label: "TS", color: "from-blue-400 to-blue-600", x: "72%", y: "6%", delay: 0.2 },
  { label: "AI", color: "from-amber-400 to-orange-500", x: "76%", y: "42%", delay: 0.4 },
  { brand: "expo", color: "from-cyan-400/20 to-teal-500/20", x: "2%", y: "52%", delay: 0.3 },
  { label: ".NET", color: "from-violet-400 to-purple-600", x: "68%", y: "72%", delay: 0.5 },
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
      className={cn(
        "relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto aspect-square px-2",
        className
      )}
    >
      <LightningBolt className="absolute -left-2 sm:-left-8 top-8 w-16 sm:w-24 h-28 sm:h-40 text-accent rotate-12 opacity-80" />
      <LightningBolt className="absolute -right-1 sm:-right-4 bottom-16 w-14 sm:w-20 h-24 sm:h-32 text-accent -rotate-12 scale-x-[-1] opacity-80" />

      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/10 rounded-full blur-3xl" />

      <Tilt3D intensity={16} className="h-full">
        <motion.div
          className="relative z-10 mx-auto w-[68%] sm:w-[72%] aspect-square"
          animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-secondary opacity-30 blur-2xl scale-110"
            style={{ transform: "translateZ(-20px)" }}
          />
          <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-br from-accent via-accent-light to-accent-secondary shadow-glow">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-surface border-4 border-surface">
              <Image
                src={avatar}
                alt={`${name} portrait`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 240px, 320px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </Tilt3D>

      {techBadges.map((badge) => (
        <motion.div
          key={badge.brand ?? badge.label}
          className={cn(
            "absolute z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl",
            "flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-lg",
            "border border-white/20 ring-2 ring-accent/20",
            badge.brand ? "bg-surface/90 p-0" : cn("bg-gradient-to-br", badge.color)
          )}
          style={{ left: badge.x, top: badge.y, transformStyle: "preserve-3d" }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                  rotate: [0, 3, 0],
                  rotateY: [0, 12, 0],
                }
          }
          transition={{
            duration: 3 + badge.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: badge.delay,
          }}
        >
          {badge.brand ? (
            <BrandLogo brand={badge.brand} size={40} className="w-full h-full rounded-xl sm:rounded-2xl border-0" />
          ) : (
            badge.label
          )}
        </motion.div>
      ))}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 sm:translate-y-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm whitespace-nowrap flex items-center gap-2">
        <BrandLogo brand="adp" size={22} className="rounded-md border-0" />
        <span className="text-[10px] sm:text-xs font-mono text-accent-muted uppercase tracking-wider">
          SDE-I @ ADP
        </span>
      </div>
    </div>
  );
}
