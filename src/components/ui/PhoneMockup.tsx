"use client";

import Image from "next/image";
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
  const primaryScreenshot = screenshots[0] ?? "/app-screenshots/home.svg";

  return (
    <div
      className={cn("relative mx-auto", className)}
      role="img"
      aria-label={`${alt} mobile app screenshot`}
    >
      <div className="relative w-[260px] md:w-[280px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-cyan-500/10 blur-3xl rounded-full scale-110" />
        <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-2xl shadow-black/50 border border-white/10">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
          <div className="relative rounded-[2rem] overflow-hidden bg-zinc-950 aspect-[9/19.5]">
            <Image
              src={primaryScreenshot}
              alt={`${alt} app screenshot`}
              fill
              className="object-cover"
              sizes="280px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
