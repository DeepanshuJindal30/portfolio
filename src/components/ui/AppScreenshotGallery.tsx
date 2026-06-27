"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn, withBasePath } from "@/lib/utils";

export interface AppScreenshot {
  src: string;
  label: string;
}

interface AppScreenshotGalleryProps {
  screenshots: AppScreenshot[];
  className?: string;
}

export function AppScreenshotGallery({
  screenshots,
  className,
}: AppScreenshotGalleryProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",
        className
      )}
      role="list"
      aria-label="App screenshots"
    >
      {screenshots.map((shot, index) => (
        <motion.figure
          key={shot.src}
          role="listitem"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="group"
        >
          <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-[1.03] group-hover:border-accent/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath(shot.src)}
              alt={`${shot.label} screen`}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 text-center text-xs font-medium text-stone-400 group-hover:text-accent-muted transition-colors">
            {shot.label}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
