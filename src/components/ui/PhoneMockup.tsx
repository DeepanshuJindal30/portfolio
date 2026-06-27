"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn, withBasePath } from "@/lib/utils";
import { LazyVideo } from "@/components/ui/LazyVideo";

interface PhoneMockupProps {
  screenshots: string[];
  alt: string;
  className?: string;
  videoSrc?: string;
}

export function PhoneMockup({
  screenshots,
  alt,
  className,
  videoSrc,
}: PhoneMockupProps) {
  const prefersReducedMotion = useReducedMotion();
  const primaryScreenshot = withBasePath(
    screenshots[0] ?? "/app-screenshots/home.jpg"
  );
  const videoUrl = videoSrc
    ? `${withBasePath(videoSrc)}#t=0.1`
    : undefined;

  return (
    <motion.div
      className={cn("relative mx-auto", className)}
      role={videoUrl ? "group" : "img"}
      aria-label={
        videoUrl
          ? `${alt} app demo video`
          : `${alt} mobile app screenshot`
      }
      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <div className="relative w-[260px] md:w-[280px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-secondary/25 to-accent/15 blur-3xl rounded-full scale-110" />
        <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-b from-accent-secondary/20 via-transparent to-accent/20 opacity-60" />

        <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-2xl shadow-black/50 border border-white/10">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
          <div className="relative rounded-[2rem] overflow-hidden bg-zinc-950 aspect-[9/19.5]">
            {videoUrl ? (
              <LazyVideo
                src={videoUrl}
                poster={primaryScreenshot}
                ariaLabel={`${alt} demo video`}
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={primaryScreenshot}
                alt={`${alt} app screenshot`}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            )}
          </div>
        </div>

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent-secondary/15 border border-accent-secondary/30 backdrop-blur-sm">
          <span className="text-[10px] font-mono text-accent-secondary uppercase tracking-wider">
            {videoUrl ? "App Demo Video" : "Live App UI"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
