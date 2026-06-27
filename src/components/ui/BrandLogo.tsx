import { cn } from "@/lib/utils";

export type BrandId =
  | "adp"
  | "ieee"
  | "internshala"
  | "github"
  | "linkedin"
  | "leetcode"
  | "codechef"
  | "hackerrank"
  | "gmail"
  | "react"
  | "expo"
  | "supabase"
  | "appurva"
  | "google-drive"
  | "patent"
  | "chandigarh";

interface BrandLogoProps {
  brand: BrandId;
  size?: number;
  className?: string;
}

function LogoSvg({ brand }: { brand: BrandId }) {
  switch (brand) {
    case "adp":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#D0271D" />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="800"
            fontFamily="Arial, sans-serif"
          >
            ADP
          </text>
        </svg>
      );
    case "ieee":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#00629B" />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fill="white"
            fontSize="13"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            IEEE
          </text>
        </svg>
      );
    case "internshala":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#00A5EC" />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fill="white"
            fontSize="20"
            fontWeight="800"
            fontFamily="Arial, sans-serif"
          >
            IS
          </text>
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#1a1a1a" />
          <path
            fill="white"
            d="M24 10c-7.2 0-13 5.9-13 13.2 0 5.8 3.7 10.7 8.9 12.4.7.1.9-.3.9-.7v-2.6c-3.6.8-4.4-1.8-4.4-1.8-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3 1.4 3.8 1.1.1-.8.5-1.4.8-1.7-2.9-.3-5.9-1.5-5.9-6.5 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.5.1-3.1 0 0 1.1-.3 3.5 1.3 1-.3 2-.5 3-.5s2 .2 3 .5c2.4-1.6 3.5-1.3 3.5-1.3.7 1.6.2 2.8.1 3.1.8.9 1.3 2.1 1.3 3.5 0 5.1-3 6.2-5.9 6.5.5.4 1 1.2 1 2.4v3.5c0 .4.2.8.9.7 5.1-1.7 8.9-6.6 8.9-12.4C37 15.9 31.2 10 24 10z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#0A66C2" />
          <path
            fill="white"
            d="M14 20h4v16h-4V20zm2-6a2.3 2.3 0 110 4.6A2.3 2.3 0 0116 14zm6 6h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.7 2.6 4.7 6v9.9H30v-8.8c0-2.1 0-4.8-2.9-4.8-2.9 0-3.3 2.3-3.3 4.6V36H22V20z"
          />
        </svg>
      );
    case "leetcode":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#1a1a1a" />
          <path
            fill="#FFA116"
            d="M30 12l-6 34-6-34h4l4 24 4-24h4z"
          />
          <path fill="#B3B3B3" d="M18 12h4v34h-4V12z" />
        </svg>
      );
    case "codechef":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#5B3A29" />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fill="#F4C430"
            fontSize="14"
            fontWeight="800"
            fontFamily="Arial, sans-serif"
          >
            CC
          </text>
        </svg>
      );
    case "hackerrank":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#1BA94C" />
          <text
            x="24"
            y="31"
            textAnchor="middle"
            fill="white"
            fontSize="22"
            fontWeight="800"
            fontFamily="Arial, sans-serif"
          >
            H
          </text>
        </svg>
      );
    case "gmail":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#fff" />
          <path fill="#EA4335" d="M10 16l14 10 14-10v18H10V16z" />
          <path fill="#FBBC05" d="M10 16l7 5-7 5V16z" />
          <path fill="#34A853" d="M38 16l-7 5 7 5V16z" />
          <path fill="#4285F4" d="M24 26L10 16h28L24 26z" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#06121E" />
          <circle cx="24" cy="24" r="4" fill="#61DAFB" />
          <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#61DAFB" strokeWidth="2" fill="none" />
          <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 24 24)" />
        </svg>
      );
    case "expo":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#1a1a1a" />
          <path fill="white" d="M12 32L24 12l12 20H12zm4.5-4h15L24 18l-7.5 10z" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#1C1C1C" />
          <path fill="#3ECF8E" d="M24 10c-2 8-8 12-8 18a8 8 0 1016 0c0-6-6-10-8-18z" />
        </svg>
      );
    case "appurva":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#0F766E" />
          <text x="13" y="30" fill="#F97316" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif">A</text>
          <text x="26" y="30" fill="white" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif">P</text>
        </svg>
      );
    case "google-drive":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#fff" />
          <path fill="#4285F4" d="M24 10L38 34H10L24 10z" />
          <path fill="#FBBC05" d="M24 10l8 14H16l8-14z" opacity=".9" />
          <path fill="#34A853" d="M10 34l8-14h20l-8 14H10z" />
        </svg>
      );
    case "patent":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#F97316" />
          <path fill="white" d="M16 12h16v4H16v-4zm0 8h16v2H16v-2zm0 6h10v2H16v-2zm0 6h14v2H16v-2zm0 6h12v2H16v-2z" />
        </svg>
      );
    case "chandigarh":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#7C2D12" />
          <text x="24" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">CU</text>
        </svg>
      );
    default:
      return null;
  }
}

export function BrandLogo({ brand, size = 40, className }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-sm",
        className
      )}
      style={{ width: size, height: size }}
    >
      <LogoSvg brand={brand} />
    </span>
  );
}

interface BrandLogoBadgeProps {
  brand: BrandId;
  size?: number;
  className?: string;
}

/** Logo with orange-themed glow ring for cards */
export function BrandLogoBadge({ brand, size = 44, className }: BrandLogoBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl p-0.5",
        "bg-accent/10 border border-accent/25 shadow-glow-sm",
        className
      )}
    >
      <BrandLogo brand={brand} size={size} />
    </div>
  );
}
