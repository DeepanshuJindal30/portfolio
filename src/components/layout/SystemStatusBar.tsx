"use client";

import { siteConfig } from "@/data/site";

export function SystemStatusBar() {
  return (
    <div
      className="hidden md:block border-b border-white/5 bg-black/40 backdrop-blur-sm"
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center gap-4 overflow-x-auto">
        <span className="flex items-center gap-1.5 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/90">
            Systems Online
          </span>
        </span>
        <span className="text-zinc-700">|</span>
        {siteConfig.systemStatus.map((item) => (
          <span
            key={item}
            className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
