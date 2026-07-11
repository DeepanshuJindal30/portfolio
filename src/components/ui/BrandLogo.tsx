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
  | "android"
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
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
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
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
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
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
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
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#1a1a1a" />
          <path
            fill="white"
            d="M24 10c-7.2 0-13 5.9-13 13.2 0 5.8 3.7 10.7 8.9 12.4.7.1.9-.3.9-.7v-2.6c-3.6.8-4.4-1.8-4.4-1.8-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3 1.4 3.8 1.1.1-.8.5-1.4.8-1.7-2.9-.3-5.9-1.5-5.9-6.5 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.5.1-3.1 0 0 1.1-.3 3.5 1.3 1-.3 2-.5 3-.5s2 .2 3 .5c2.4-1.6 3.5-1.3 3.5-1.3.7 1.6.2 2.8.1 3.1.8.9 1.3 2.1 1.3 3.5 0 5.1-3 6.2-5.9 6.5.5.4 1 1.2 1 2.4v3.5c0 .4.2.8.9.7 5.1-1.7 8.9-6.6 8.9-12.4C37 15.9 31.2 10 24 10z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#0A66C2" />
          <path
            fill="white"
            d="M14 20h4v16h-4V20zm2-6a2.3 2.3 0 110 4.6A2.3 2.3 0 0116 14zm6 6h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.7 2.6 4.7 6v9.9H30v-8.8c0-2.1 0-4.8-2.9-4.8-2.9 0-3.3 2.3-3.3 4.6V36H22V20z"
          />
        </svg>
      );
    case "leetcode":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#161616" />
          <path
            fill="#FFA116"
            transform="translate(11.5, 11) scale(1.05)"
            d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
          />
        </svg>
      );
    case "codechef":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
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
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
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
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#fff" />
          <path fill="#EA4335" d="M10 16l14 10 14-10v18H10V16z" />
          <path fill="#FBBC05" d="M10 16l7 5-7 5V16z" />
          <path fill="#34A853" d="M38 16l-7 5 7 5V16z" />
          <path fill="#4285F4" d="M24 26L10 16h28L24 26z" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#06121E" />
          <circle cx="24" cy="24" r="4" fill="#61DAFB" />
          <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#61DAFB" strokeWidth="2" fill="none" />
          <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 24 24)" />
        </svg>
      );
    case "expo":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#1a1a1a" />
          <path fill="white" d="M12 32L24 12l12 20H12zm4.5-4h15L24 18l-7.5 10z" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#1C1C1C" />
          <path fill="#3ECF8E" d="M24 10c-2 8-8 12-8 18a8 8 0 1016 0c0-6-6-10-8-18z" />
        </svg>
      );
    case "appurva":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#0B3D2E" />
          <path
            fill="#34D399"
            d="M24 8c-1.2 6.5-6.8 10.2-6.8 16.2a6.8 6.8 0 0013.6 0C30.8 18.2 25.2 14.5 24 8z"
          />
          <path
            fill="#F97316"
            d="M24 18c.4 3.2 2.6 5.2 2.6 8.2a2.6 2.6 0 11-5.2 0c0-3 2.2-5 2.6-8.2z"
            opacity="0.95"
          />
          <circle cx="24" cy="36.5" r="2" fill="#FBBF24" />
        </svg>
      );
    case "android":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#073042" />
          <path
            fill="#3DDC84"
            d="M16.2 20.5c0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8H16.2zm-1.8 2.2h19.2v10.4c0 1.3-1 2.4-2.3 2.4h-.7v4.2a1.5 1.5 0 11-3 0v-4.2H20.4v4.2a1.5 1.5 0 11-3 0v-4.2h-.7c-1.3 0-2.3-1.1-2.3-2.4V22.7zm-3.4 1.6a1.7 1.7 0 011.7 1.7v5.2a1.7 1.7 0 11-3.4 0v-5.2c0-.9.8-1.7 1.7-1.7zm24.4 0c.9 0 1.7.8 1.7 1.7v5.2a1.7 1.7 0 11-3.4 0v-5.2c0-.9.8-1.7 1.7-1.7zM19.4 14.2l-1.4-2.1a.6.6 0 01.2-.8.6.6 0 01.8.2l1.5 2.2a7.6 7.6 0 00-1.1.5zm9.2 0c.3-.2.7-.3 1.1-.5l1.5-2.2a.6.6 0 01.8-.2.6.6 0 01.2.8l-1.4 2.1z"
          />
        </svg>
      );
    case "google-drive":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#fff" />
          <path fill="#4285F4" d="M24 10L38 34H10L24 10z" />
          <path fill="#FBBC05" d="M24 10l8 14H16l8-14z" opacity=".9" />
          <path fill="#34A853" d="M10 34l8-14h20l-8 14H10z" />
        </svg>
      );
    case "patent":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
          <rect width="48" height="48" rx="10" fill="#7C2D12" />
          <circle cx="24" cy="20" r="9" fill="#FDBA74" />
          <circle cx="24" cy="20" r="6.5" fill="none" stroke="#9A3412" strokeWidth="1.4" />
          <path
            fill="#9A3412"
            d="M24 14.5l1.4 2.8 3.1.5-2.2 2.2.5 3.1L24 21.5l-2.8 1.6.5-3.1-2.2-2.2 3.1-.5L24 14.5z"
          />
          <path fill="#F97316" d="M18 28.5l2.2 12L24 37l3.8 3.5 2.2-12H18z" />
          <path fill="#FB923C" d="M20.5 29.5l1.5 8.5L24 36l2 2 1.5-8.5h-7z" />
        </svg>
      );
    case "chandigarh":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
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
