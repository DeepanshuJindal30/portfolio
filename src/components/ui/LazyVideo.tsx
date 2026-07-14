"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useInViewport } from "@/hooks/useInViewport";
import { cn } from "@/lib/utils";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel: string;
  autoPlayWhenVisible?: boolean;
}

/** Defers assigning video `src` until near viewport — avoids multi‑MB downloads on first paint. */
export function LazyVideo({
  src,
  poster,
  className,
  ariaLabel,
  autoPlayWhenVisible = true,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: containerRef, inView } = useInViewport<HTMLDivElement>({
    rootMargin: "120px",
    once: false,
  });
  const prefersReducedMotion = useReducedMotion();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (inView) setShouldLoad(true);
  }, [inView]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (inView && autoPlayWhenVisible && !prefersReducedMotion) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [inView, autoPlayWhenVisible, prefersReducedMotion, shouldLoad]);

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", className)}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 w-full h-full object-cover object-top bg-zinc-900"
          controls
          playsInline
          muted
          loop
          preload="none"
          poster={poster}
          aria-label={ariaLabel}
        />
      ) : poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top bg-zinc-900"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className="absolute inset-0 bg-zinc-900 flex items-center justify-center"
          aria-label={ariaLabel}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600">
            Demo loads on scroll
          </span>
        </div>
      )}
    </div>
  );
}
