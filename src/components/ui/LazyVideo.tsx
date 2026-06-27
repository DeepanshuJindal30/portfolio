"use client";

import { useEffect, useRef } from "react";
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

export function LazyVideo({
  src,
  poster,
  className,
  ariaLabel,
  autoPlayWhenVisible = true,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: containerRef, inView } = useInViewport<HTMLDivElement>({
    rootMargin: "80px",
    once: false,
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView && autoPlayWhenVisible && !prefersReducedMotion) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [inView, autoPlayWhenVisible, prefersReducedMotion]);

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", className)}>
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover object-top bg-zinc-900"
        controls
        playsInline
        muted
        loop
        preload="metadata"
        poster={poster}
        aria-label={ariaLabel}
      />
    </div>
  );
}
