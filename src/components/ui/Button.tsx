import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "icon";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-light border border-accent-dark shadow-lg shadow-accent/25",
  secondary:
    "bg-accent/10 text-accent-muted hover:bg-accent/20 border border-accent/30",
  ghost: "bg-transparent text-stone-300 hover:text-white hover:bg-white/5",
  outline:
    "bg-transparent text-stone-300 border border-white/15 hover:border-accent/40 hover:bg-accent/5",
  icon:
    "bg-transparent text-stone-300 border border-white/15 rounded-full w-12 h-12 p-0 hover:border-accent/40 hover:text-accent hover:bg-accent/5",
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps | LinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonProps)}>
      {children}
    </button>
  );
}
