"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn, withBasePath } from "@/lib/utils";
import { LazyVideo } from "@/components/ui/LazyVideo";

interface BrowserMockupProps {
  videoSrc: string;
  alt: string;
  poster?: string;
  className?: string;
}

export function BrowserMockup({
  videoSrc,
  alt,
  poster,
  className,
}: BrowserMockupProps) {
  const prefersReducedMotion = useReducedMotion();
  const videoUrl = `${withBasePath(videoSrc)}#t=0.1`;
  const posterUrl = poster ? withBasePath(poster) : undefined;

  return (
    <motion.div
      className={cn("relative w-full", className)}
      animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-accent-secondary/10 blur-3xl rounded-2xl scale-95 opacity-60" />
      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950/90 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" aria-hidden="true" />
          <div className="flex-1 mx-2 h-6 rounded-md bg-white/5 border border-white/5 flex items-center px-3">
            <span className="text-[10px] font-mono text-zinc-500 truncate">
              deployed link
            </span>
          </div>
        </div>
        <div className="relative aspect-video bg-zinc-950">
          <LazyVideo
            src={videoUrl}
            poster={posterUrl}
            ariaLabel={`${alt} demo video`}
          />
        </div>
      </div>
    </motion.div>
  );
}
