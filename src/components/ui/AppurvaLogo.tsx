import { cn, withBasePath } from "@/lib/utils";

interface AppurvaLogoProps {
  height?: number;
  className?: string;
}

export function AppurvaLogo({ height = 48, className }: AppurvaLogoProps) {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1.5",
        "border border-white/10 shadow-sm shadow-black/20",
        className
      )}
      style={{ height }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath("/appurva-logo.png")}
        alt="Appurva Pharmacy logo"
        className="h-full w-auto object-contain"
        width={Math.round(height * 3.2)}
        height={height}
      />
    </div>
  );
}
