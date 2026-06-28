"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { BrandLogo, type BrandId } from "@/components/ui/BrandLogo";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { useVisualPerformance } from "@/hooks/useVisualPerformance";
import { HeroCharacterPreloader } from "@/components/three/HeroCharacterPreloader";

const HeroDeveloperCharacter = dynamic(
  () =>
    import("@/components/three/HeroDeveloperCharacter").then(
      (mod) => mod.HeroDeveloperCharacter
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[340px] sm:min-h-[420px] items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
      </div>
    ),
  }
);

const techBadges: {
  brand?: BrandId;
  label?: string;
  color: string;
  x: string;
  y: string;
  delay: number;
}[] = [
  { brand: "react", color: "from-sky-400/20 to-sky-600/20", x: "6%", y: "10%", delay: 0 },
  { label: "TS", color: "from-blue-400 to-blue-600", x: "84%", y: "8%", delay: 0.2 },
  { label: "AI", color: "from-amber-400 to-orange-500", x: "88%", y: "34%", delay: 0.4 },
  { brand: "expo", color: "from-cyan-400/20 to-teal-500/20", x: "4%", y: "46%", delay: 0.3 },
  { label: ".NET", color: "from-violet-400 to-purple-600", x: "8%", y: "78%", delay: 0.5 },
];

function HeroPortrait({
  avatar,
  name,
  onClick,
  interactive,
}: {
  avatar: string;
  name: string;
  onClick?: () => void;
  interactive?: boolean;
}) {
  const frame = (
    <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 shrink-0">
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-secondary opacity-30 blur-2xl scale-110"
        aria-hidden="true"
      />
      <div className="relative h-full w-full rounded-full p-1.5 bg-gradient-to-br from-accent via-accent-light to-accent-secondary shadow-glow">
        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-surface bg-surface">
          <ProfileImage
            src={avatar}
            alt={`${name} portrait`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );

  if (!interactive || !onClick) {
    return frame;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Show 3D developer avatar"
    >
      {frame}
      <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-[10px] font-mono text-accent-muted uppercase tracking-wider whitespace-nowrap opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        Tap for 3D dev
      </span>
    </button>
  );
}

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
  onViewChange?: (showCharacter: boolean) => void;
}

export function HeroIllustration({
  avatar,
  name,
  className,
  onViewChange,
}: HeroIllustrationProps) {
  const prefersReducedMotion = useReducedMotion();
  const { enableHero3D } = useVisualPerformance();
  const [showCharacter, setShowCharacter] = useState(false);
  const [characterReady, setCharacterReady] = useState(false);
  const avatarSrc = avatar;

  useEffect(() => {
    setShowCharacter(enableHero3D);
    if (!enableHero3D) onViewChange?.(false);
  }, [enableHero3D, onViewChange]);

  const toggleView = () => {
    setShowCharacter((prev) => {
      const next = !prev;
      if (next) setCharacterReady(false);
      onViewChange?.(next);
      return next;
    });
  };

  const handleLoadError = () => {
    setShowCharacter(false);
    setCharacterReady(false);
    onViewChange?.(false);
  };

  const handleCharacterReady = () => {
    setCharacterReady(true);
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto min-h-[360px] sm:min-h-[440px] lg:min-h-[540px] px-2",
        className
      )}
    >
      <HeroCharacterPreloader />
      <LightningBolt className="absolute -left-2 sm:-left-8 top-8 w-16 sm:w-24 h-28 sm:h-40 text-accent rotate-12 opacity-80 pointer-events-none z-0" />
      <LightningBolt className="absolute -right-1 sm:-right-4 bottom-24 w-14 sm:w-20 h-24 sm:h-32 text-accent -rotate-12 scale-x-[-1] opacity-80 pointer-events-none z-0" />

      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/10 rounded-3xl blur-3xl pointer-events-none" />

      <div className="relative z-10 h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[540px]">
        <AnimatePresence mode="wait">
          {showCharacter && enableHero3D && !prefersReducedMotion ? (
            <motion.div
              key="character"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              {!characterReady && (
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <HeroPortrait avatar={avatarSrc} name={name} />
                </div>
              )}
              <HeroDeveloperCharacter
                onToggle={toggleView}
                onLoadError={handleLoadError}
                onReady={handleCharacterReady}
              />
            </motion.div>
          ) : (
            <motion.div
              key="photo"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Tilt3D
                intensity={16}
                className="flex h-full w-full items-center justify-center"
                innerClassName="flex items-center justify-center"
              >
                <motion.div
                  animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <HeroPortrait
                    avatar={avatarSrc}
                    name={name}
                    onClick={toggleView}
                    interactive={!prefersReducedMotion}
                  />
                </motion.div>
              </Tilt3D>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {techBadges.map((badge) => (
        <motion.div
          key={badge.brand ?? badge.label}
          className={cn(
            "absolute z-[5] w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl",
            "flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-lg",
            "border border-white/20 ring-2 ring-accent/20 pointer-events-none",
            badge.brand ? "bg-surface/90 p-0" : cn("bg-gradient-to-br", badge.color),
            showCharacter && "opacity-80 scale-90"
          )}
          style={{ left: badge.x, top: badge.y, transformStyle: "preserve-3d" }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -6, 0],
                  rotate: [0, 2, 0],
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
            <BrandLogo
              brand={badge.brand}
              size={36}
              className="w-full h-full rounded-xl sm:rounded-2xl border-0"
            />
          ) : (
            badge.label
          )}
        </motion.div>
      ))}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm whitespace-nowrap flex items-center gap-2 z-[6] pointer-events-none">
        <BrandLogo brand="adp" size={22} className="rounded-md border-0" />
        <span className="text-[10px] sm:text-xs font-mono text-accent-muted uppercase tracking-wider">
          SDE-I @ ADP
        </span>
      </div>
    </div>
  );
}
