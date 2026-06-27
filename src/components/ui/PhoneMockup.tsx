"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  screenshots: string[];
  alt: string;
  className?: string;
}

export function PhoneMockup({
  screenshots,
  alt,
  className,
}: PhoneMockupProps) {
  const prefersReducedMotion = useReducedMotion();
  const primaryScreenshot = screenshots[0] ?? "/app-screenshots/home.png";

  return (
    <motion.div
      className={cn("relative mx-auto", className)}
      role="img"
      aria-label={`${alt} mobile app screenshot`}
      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <div className="relative w-[260px] md:w-[280px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/25 to-indigo-500/15 blur-3xl rounded-full scale-110" />
        <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-b from-cyan-500/20 via-transparent to-indigo-500/20 opacity-60" />

        <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-2xl shadow-black/50 border border-white/10">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
          <div className="relative rounded-[2rem] overflow-hidden bg-zinc-950 aspect-[9/19.5]">
            <Image
              src={primaryScreenshot}
              alt={`${alt} app screenshot`}
              fill
              className="object-cover object-top"
              sizes="280px"
              priority
            />
          </div>
        </div>

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 backdrop-blur-sm">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
            Live App UI
          </span>
        </div>
      </div>
    </motion.div>
  );
}
