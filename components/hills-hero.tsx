"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SheepArt, GoatArt, CowArt } from "@/components/animals";
import { SITE } from "@/lib/utils";

/** A single swaying wheat stalk. */
function Wheat({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg
      viewBox="0 0 24 80"
      className={`blade ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
      fill="none"
      aria-hidden="true"
    >
      <path d="M12 80V26" stroke="#3D5A40" strokeWidth="2.2" strokeLinecap="round" />
      {[26, 34, 42, 50].map((y) => (
        <g key={y} stroke="#C9852A" strokeWidth="2.2" strokeLinecap="round">
          <path d={`M12 ${y}c-6 -1 -9 -5 -9 -5`} />
          <path d={`M12 ${y}c6 -1 9 -5 9 -5`} />
        </g>
      ))}
      <path d="M12 24c-3 -4 -1 -10 0 -12 1 2 3 8 0 12Z" fill="#E0A23B" />
    </svg>
  );
}

/** A soft drifting cloud. */
function Cloud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 50" className={className} fill="#FFFDF8" aria-hidden="true">
      <ellipse cx="35" cy="32" rx="28" ry="16" />
      <ellipse cx="62" cy="24" rx="26" ry="18" />
      <ellipse cx="88" cy="33" rx="24" ry="14" />
      <rect x="18" y="30" width="78" height="16" rx="8" />
    </svg>
  );
}

export function HillsHero() {
  const sunRef = useRef<HTMLDivElement>(null);
  const farRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Lightweight scroll parallax (rAF-throttled, ref-driven — no re-renders).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (sunRef.current)
          sunRef.current.style.transform = `translateY(${y * -0.18}px)`;
        if (farRef.current)
          farRef.current.style.transform = `translateY(${y * 0.06}px)`;
        if (midRef.current)
          midRef.current.style.transform = `translateY(${y * 0.12}px)`;
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${y * 0.25}px)`;
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 520));
        }
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[92vh] flex-col overflow-hidden">
      {/* sky */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-warm via-sky-light to-bone" />

      {/* sun */}
      <div
        ref={sunRef}
        className="pointer-events-none absolute left-1/2 top-[20%] -z-10 -translate-x-1/2 animate-rise-sun"
      >
        <div className="relative">
          <div className="absolute -inset-24 rounded-full bg-wheat-soft/40 blur-3xl" />
          <div className="absolute -inset-10 rounded-full bg-wheat-soft/50 blur-2xl" />
          <div className="h-44 w-44 rounded-full bg-gradient-to-b from-[#FFE6B0] to-wheat shadow-glow sm:h-56 sm:w-56" />
        </div>
      </div>

      {/* clouds */}
      <Cloud className="pointer-events-none absolute left-0 top-[14%] -z-10 w-40 animate-drift-slow opacity-90 sm:w-56" />
      <Cloud className="pointer-events-none absolute left-0 top-[30%] -z-10 w-28 animate-drift-med opacity-70 [animation-delay:-12s] sm:w-40" />
      <Cloud className="pointer-events-none absolute left-0 top-[8%] -z-10 w-24 animate-drift-slow opacity-60 [animation-delay:-24s] sm:w-32" />

      {/* floating farm friends */}
      <div className="pointer-events-none absolute left-[7%] top-[32%] hidden animate-bob drop-shadow-md md:block">
        <SheepArt className="h-20 w-20" />
      </div>
      <div className="pointer-events-none absolute right-[8%] top-[26%] hidden animate-bob drop-shadow-md [animation-delay:-2s] md:block">
        <GoatArt className="h-20 w-20" />
      </div>
      <div className="pointer-events-none absolute right-[15%] top-[46%] hidden animate-bob drop-shadow-md [animation-delay:-3.5s] lg:block">
        <CowArt className="h-16 w-16" />
      </div>

      {/* ── hero content ── */}
      <div
        ref={contentRef}
        className="container relative z-10 flex flex-1 flex-col items-center justify-center pb-40 pt-28 text-center"
      >
        <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-meadow-dark/20 bg-cream/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-meadow-dark backdrop-blur-sm [animation-delay:0.1s]">
          <Sprout className="h-3.5 w-3.5" /> Halal Certified · Huntley, Illinois
        </span>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] text-meadow-deep sm:text-7xl lg:text-[5.5rem]">
          <span className="block animate-fade-up [animation-delay:0.18s]">
            Honest livestock,
          </span>
          <span className="block animate-fade-up text-sunrise [animation-delay:0.3s]">
            raised under the sun.
          </span>
        </h1>

        <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-ink-soft [animation-delay:0.42s] sm:text-xl">
          Ethically raised, Halal-certified sheep, goats, and cattle — grazed on
          open pasture and cared for the honest way, ready for your family&apos;s
          table.
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-center gap-3 [animation-delay:0.54s] sm:flex-row">
          <Button asChild size="lg" variant="wheat">
            <a href={SITE.phoneHref}>
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </Button>
          <Button asChild size="lg">
            <Link href="/livestock">
              <Sprout className="h-4 w-4" /> Meet Our Livestock
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* ── layered rolling hills ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[52vh]">
        {/* far hill */}
        <div ref={farRef} className="absolute inset-x-0 bottom-0 h-full will-change-transform">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute bottom-0 h-[88%] w-full"
          >
            <path
              d="M0,180 C260,90 520,250 760,180 C1000,110 1220,230 1440,150 L1440,320 L0,320 Z"
              fill="#C9D8BE"
            />
          </svg>
        </div>
        {/* mid hill */}
        <div ref={midRef} className="absolute inset-x-0 bottom-0 h-full will-change-transform">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute bottom-0 h-[70%] w-full"
          >
            <path
              d="M0,210 C300,150 560,280 820,210 C1080,150 1240,250 1440,200 L1440,320 L0,320 Z"
              fill="#8FB07E"
            />
          </svg>
        </div>
        {/* near hill */}
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-[52%] w-full"
        >
          <path
            d="M0,250 C320,200 600,300 900,240 C1140,195 1280,270 1440,250 L1440,320 L0,320 Z"
            fill="#6B8F5E"
          />
        </svg>
        {/* foreground band with fence + wheat */}
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-[28%] w-full"
        >
          <path
            d="M0,90 C360,50 720,120 1080,80 C1260,60 1360,90 1440,80 L1440,200 L0,200 Z"
            fill="#3D5A40"
          />
        </svg>

        {/* swaying wheat along the foreground */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-[3%] pb-1">
          {Array.from({ length: 14 }).map((_, i) => (
            <Wheat
              key={i}
              delay={(i % 5) * 0.4}
              className="h-16 w-5 opacity-90 sm:h-24 sm:w-7"
            />
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 animate-bob text-cream/90">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-cream/80 p-1">
          <span className="h-2 w-1 rounded-full bg-cream" />
        </div>
      </div>
    </section>
  );
}
