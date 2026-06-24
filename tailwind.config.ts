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
        // ── Golden Harvest palette ─────────────────────────────
        // Warm sunset: cream paper, honey + amber, terracotta, roasted brown.
        bone: { DEFAULT: "#FFF7EA", dark: "#FBEAD0", deep: "#F4DAB0" },
        cream: "#FFFCF6",
        // Amber → roasted-brown ramp (primary actions, dark surfaces, headings)
        meadow: {
          DEFAULT: "#E8932E", // amber — primary
          mid: "#CE7A1C", // hover
          dark: "#A85410", // accent text / links
          deep: "#4A2410", // roasted brown — dark sections + headings
          light: "#F6B65E",
          mist: "#FBE7C7", // light tint background
        },
        wheat: { DEFAULT: "#F2B441", soft: "#F8CE70", deep: "#D99A24" }, // honey / sun
        clay: { DEFAULT: "#C75D3A", light: "#DD8460", deep: "#A8462A" }, // terracotta
        ink: { DEFAULT: "#3A2317", soft: "#6E5747", muted: "#9C8973" }, // warm brown text
        sky: { DEFAULT: "#FCE7C4", light: "#FFF4E2", warm: "#FBD9A6" }, // warm peach

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
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 6px)",
        sm: "calc(var(--radius) - 10px)",
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },
      boxShadow: {
        soft: "0 12px 30px -12px rgba(74,36,16,0.22)",
        lift: "0 28px 55px -18px rgba(74,36,16,0.32)",
        glow: "0 0 50px 6px rgba(242,180,65,0.6)",
        ring: "0 0 0 1px rgba(74,36,16,0.08)",
        // chunky "sticker" drop for badges/stamps
        sticker:
          "0 5px 0 0 rgba(74,36,16,0.16), 0 16px 30px -10px rgba(74,36,16,0.38)",
      },
      keyframes: {
        "rise-sun": {
          "0%": { transform: "translateY(60%) scale(0.85)", opacity: "0" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        "sun-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.07)" },
        },
        drift: {
          "0%": { transform: "translateX(-12%)" },
          "100%": { transform: "translateX(112%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-3.5deg)" },
          "50%": { transform: "rotate(3.5deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.92)" },
          "60%": { opacity: "1", transform: "translateY(-6px) scale(1.02)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
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
        "sun-glow": "sun-glow 7s ease-in-out infinite",
        "drift-slow": "drift 38s linear infinite",
        "drift-med": "drift 26s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        sway: "sway 5.5s ease-in-out infinite",
        bob: "bob 4.5s ease-in-out infinite",
        wiggle: "wiggle 0.6s ease-in-out",
        "bounce-in": "bounce-in 0.9s cubic-bezier(0.34,1.56,0.64,1) both",
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
