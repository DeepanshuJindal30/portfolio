"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn, withBasePath } from "@/lib/utils";

const workTabs = [
  { href: "/work/adp", label: "ADP Enterprise" },
  { href: "/work/research", label: "Research & Patents" },
] as const;

export function WorkTabs({ className }: { className?: string }) {
  const pathname = usePathname() || "";
  const normalized = pathname.replace(/\/$/, "") || "/";

  return (
    <div className={cn("mb-8 md:mb-10", className)}>
      <Link
        href={withBasePath("/")}
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Back to portfolio
      </Link>

      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Professional work"
      >
        {workTabs.map((tab) => {
          const href = withBasePath(tab.href);
          const tabPath = tab.href.replace(/\/$/, "");
          const isActive =
            normalized === tabPath ||
            normalized.endsWith(tabPath) ||
            normalized.includes(tabPath);
          return (
            <Link
              key={tab.href}
              href={href}
              role="tab"
              aria-selected={isActive}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isActive
                  ? "bg-accent text-white border-accent shadow-glow-sm"
                  : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-accent/30 hover:text-white"
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
