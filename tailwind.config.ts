import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Ferdows Farm palette
        barn: {
          DEFAULT: "#7C2D23",
          dark: "#5E2019",
          light: "#9A3A2C",
        },
        forest: {
          DEFAULT: "#2C4A3B",
          dark: "#1E3329",
          light: "#3C6350",
        },
        sand: {
          DEFAULT: "#F2E8D5",
          dark: "#E5D6BB",
          deep: "#D8C49E",
        },
        iron: {
          DEFAULT: "#1E1A16",
          light: "#3A332B",
        },
        amber: {
          glow: "#E8A84C",
          soft: "#F4CB86",
        },
        wood: {
          DEFAULT: "#6B4226",
          dark: "#4A2D18",
          light: "#8A5A33",
        },
        // shadcn tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        barn: "0 30px 60px -15px rgba(20,15,10,0.55)",
        glow: "0 0 40px 8px rgba(232,168,76,0.45)",
      },
      keyframes: {
        "door-left": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(-108deg)" },
        },
        "door-right": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(108deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "45%": { opacity: "0.92", filter: "brightness(1.08)" },
          "55%": { opacity: "0.85", filter: "brightness(0.95)" },
          "70%": { opacity: "1", filter: "brightness(1.05)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        "door-left": "door-left 2.1s cubic-bezier(0.22,1,0.36,1) 0.45s forwards",
        "door-right": "door-right 2.1s cubic-bezier(0.22,1,0.36,1) 0.45s forwards",
        flicker: "flicker 5s ease-in-out infinite",
        "fade-up": "fade-up 0.9s ease-out forwards",
        sway: "sway 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
