import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
        {label}
      </p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
}
