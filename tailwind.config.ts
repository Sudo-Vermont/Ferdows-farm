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
        // ── Ferdows Butchery — dark meat-house palette ──────────
        coal: {
          DEFAULT: "#160F0E", // page background (warm near-black)
          deep: "#0F0A09",
          soft: "#1E1614",
          card: "#251B18", // dark cards
          line: "#3A2C28", // hairline borders
        },
        maroon: { DEFAULT: "#46121A", mid: "#5C1A23", deep: "#300B11" },
        blood: {
          DEFAULT: "#B82A38", // primary red accent
          bright: "#CE3340",
          deep: "#8E1F2B",
          soft: "#DB6670",
        },
        bone: { DEFAULT: "#F3ECE2", soft: "#D8CABB", muted: "#A89789" }, // text
        gold: { DEFAULT: "#C9A05A", soft: "#DEC089", deep: "#A87E3C" }, // tan accent

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
        poster: ["var(--font-poster)", "Impact", "sans-serif"], // huge hero word
        display: ["var(--font-display)", "Oswald", "sans-serif"], // headings / nav
        script: ["var(--font-script)", "cursive"], // handwritten accents
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 3px)",
        sm: "calc(var(--radius) - 5px)",
      },
      boxShadow: {
        soft: "0 20px 45px -18px rgba(0,0,0,0.65)",
        lift: "0 32px 65px -22px rgba(0,0,0,0.75)",
        glow: "0 0 55px -8px rgba(184,42,56,0.65)",
        card: "0 18px 40px -18px rgba(0,0,0,0.7)",
        stamp: "0 10px 30px -8px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(6deg)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
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
        "stamp-in": {
          "0%": { opacity: "0", transform: "scale(1.4) rotate(-18deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-12deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 1.2s ease-out both",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        sway: "sway 5.5s ease-in-out infinite",
        bob: "bob 4.5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin-slow 32s linear infinite",
        "stamp-in": "stamp-in 0.8s cubic-bezier(0.34,1.56,0.64,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
