import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill?: string;
  label?: string;
  variant?: "default" | "accent" | "subtle";
  className?: string;
}

export function SkillBadge({
  skill,
  label,
  variant = "default",
  className,
}: SkillBadgeProps) {
  const text = skill ?? label ?? "";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-white/5 text-zinc-300 border border-white/10",
        variant === "subtle" &&
          "bg-white/[0.03] text-zinc-400 border border-white/[0.06]",
        variant === "accent" &&
          "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
        className
      )}
    >
      {text}
    </span>
  );
}
