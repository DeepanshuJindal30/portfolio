import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0c0908",
        surface: "#1a1412",
        foreground: "#fafaf9",
        muted: "#a8a29e",
        accent: {
          DEFAULT: "#f97316",
          light: "#fb923c",
          dark: "#ea580c",
          muted: "#fdba74",
        },
        "accent-secondary": "#fbbf24",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(249, 115, 22, 0.25)",
        "glow-sm": "0 0 30px rgba(249, 115, 22, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
