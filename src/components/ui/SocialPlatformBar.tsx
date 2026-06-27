"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { BrandLogo, type BrandId } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

const platformLinks: { brand: BrandId; href: string; label: string }[] = [
  { brand: "github", href: siteConfig.github, label: "GitHub" },
  { brand: "linkedin", href: siteConfig.linkedin, label: "LinkedIn" },
  { brand: "gmail", href: `mailto:${siteConfig.email}`, label: "Email" },
  { brand: "leetcode", href: siteConfig.leetcode, label: "LeetCode" },
  { brand: "codechef", href: siteConfig.codechef, label: "CodeChef" },
  { brand: "hackerrank", href: siteConfig.links.hackerrank, label: "HackerRank" },
];

export function SocialPlatformBar({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={cn(
        "flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-6",
        className
      )}
      aria-label="Platforms and profiles"
    >
      {platformLinks.map((link, i) => (
        <motion.a
          key={link.brand}
          href={link.href}
          target={link.brand === "gmail" ? undefined : "_blank"}
          rel={link.brand === "gmail" ? undefined : "noopener noreferrer"}
          aria-label={link.label}
          className="group rounded-xl p-0.5 bg-white/[0.03] border border-white/10 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.08, y: -2 }}
          transition={{ delay: i * 0.03 }}
        >
          <BrandLogo brand={link.brand} size={36} className="sm:w-10 sm:h-10 rounded-lg" />
        </motion.a>
      ))}
    </motion.div>
  );
}
