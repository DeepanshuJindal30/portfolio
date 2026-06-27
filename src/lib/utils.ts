import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBasePath(): string {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    const match = path.match(/^\/([^/]+)/);
    if (match && match[1] !== "projects") {
      return `/${match[1]}`;
    }
  }
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export function withBasePath(path: string): string {
  if (path.startsWith("http")) return path;
  const base =
    typeof window !== "undefined"
      ? getBasePath()
      : process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
