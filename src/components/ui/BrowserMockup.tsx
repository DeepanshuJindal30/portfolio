"use client";

import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn, withBasePath } from "@/lib/utils";
import { LazyVideo } from "@/components/ui/LazyVideo";

interface BrowserMockupProps {
  videoSrc?: string;
  alt: string;
  poster?: string;
  liveUrl?: string;
  className?: string;
}

export function BrowserMockup({
  videoSrc,
  alt,
  poster,
  liveUrl,
  className,
}: BrowserMockupProps) {
  const prefersReducedMotion = useReducedMotion();
  const videoUrl = videoSrc ? `${withBasePath(videoSrc)}#t=0.1` : undefined;
  const posterUrl = poster ? withBasePath(poster) : undefined;
  const barLabel = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "deployed link";

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
              {barLabel}
            </span>
          </div>
        </div>
        <div className="relative aspect-video bg-zinc-950">
          {videoUrl ? (
            <LazyVideo
              src={videoUrl}
              poster={posterUrl}
              ariaLabel={`${alt} demo video`}
            />
          ) : posterUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={posterUrl}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-emerald-950/80 via-zinc-950 to-accent/10 px-6 text-center">
              <p className="text-sm font-semibold text-white">{alt}</p>
              <p className="text-xs text-zinc-500 max-w-xs">
                Open the live app or GitHub case study for the full walkthrough.
              </p>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-accent border border-accent/30 bg-accent/10 rounded-full px-3 py-1.5 hover:bg-accent/20 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  Open live
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
