import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        // ── Fresh Pasture palette ──────────────────────────────
        bone: { DEFAULT: "#FBF7EF", dark: "#F1E9D8", deep: "#E7DCC4" },
        cream: "#FFFDF8",
        meadow: {
          DEFAULT: "#6B8F5E",
          mid: "#557049",
          dark: "#3D5A40",
          deep: "#2E4631",
          light: "#8FB07E",
          mist: "#C9D8BE",
        },
        wheat: { DEFAULT: "#E0A23B", soft: "#F2C879", deep: "#C9852A" },
        clay: { DEFAULT: "#C96A3F", light: "#DB8B63", deep: "#A8522D" },
        ink: { DEFAULT: "#2A2E27", soft: "#4A4F44", muted: "#6B7163" },
        sky: { DEFAULT: "#FCEAC9", light: "#FFF6E6", warm: "#FBD9A6" },

        // ── shadcn tokens ──────────────────────────────────────
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
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(46,70,49,0.22)",
        lift: "0 26px 50px -18px rgba(46,70,49,0.34)",
        glow: "0 0 60px 10px rgba(242,200,121,0.55)",
        ring: "0 0 0 1px rgba(46,70,49,0.08)",
      },
      keyframes: {
        "rise-sun": {
          "0%": { transform: "translateY(60%) scale(0.85)", opacity: "0" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        drift: {
          "0%": { transform: "translateX(-12%)" },
          "100%": { transform: "translateX(112%)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-3.5deg)" },
          "50%": { transform: "rotate(3.5deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "grow-y": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "rise-sun": "rise-sun 1.8s cubic-bezier(0.16,1,0.3,1) both",
        "drift-slow": "drift 38s linear infinite",
        "drift-med": "drift 26s linear infinite",
        sway: "sway 5.5s ease-in-out infinite",
        bob: "bob 4.5s ease-in-out infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 1.2s ease-out both",
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin-slow 28s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
