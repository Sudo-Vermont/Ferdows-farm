"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Sun, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, asset } from "@/lib/utils";

export function HillsHero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Lightweight scroll parallax (rAF-throttled, ref-driven — no re-renders).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current)
          bgRef.current.style.transform = `translateY(${y * 0.22}px)`;
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${y * 0.3}px)`;
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 560));
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
      {/* real pasture photo */}
      <div ref={bgRef} className="absolute inset-0 -z-30 will-change-transform">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/hero.jpg")}
          alt="Sheep grazing on a sunlit pasture at Ferdows Farm"
          className="h-[112%] w-full -translate-y-[6%] animate-kenburns object-cover"
        />
      </div>

      {/* warm golden-hour scrims */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-meadow-deep/55 via-clay/15 to-meadow-deep/85" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(70%_55%_at_50%_24%,transparent,rgba(74,36,16,0.45))]" />

      {/* glowing sun */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[14%] -z-10 h-72 w-72 -translate-x-1/2 animate-sun-glow rounded-full bg-[radial-gradient(circle,rgba(248,206,112,0.95),rgba(242,180,65,0.45)_45%,transparent_70%)] blur-xl sm:h-96 sm:w-96"
      />

      {/* floating sticker stamps */}
      <span className="sticker absolute left-6 top-28 hidden -rotate-6 animate-float items-center gap-1.5 rounded-full bg-cream px-3.5 py-2 text-xs font-extrabold uppercase tracking-wide text-meadow-deep lg:flex">
        <ShieldCheck className="h-4 w-4 text-clay" /> 100% Halal
      </span>
      <span className="sticker absolute right-8 top-40 hidden rotate-6 animate-float-slow items-center gap-1.5 rounded-full bg-wheat px-3.5 py-2 text-xs font-extrabold uppercase tracking-wide text-meadow-deep lg:flex">
        <Sun className="h-4 w-4" /> Pasture Raised
      </span>
      <span className="sticker absolute bottom-36 right-16 hidden -rotate-3 animate-float items-center gap-1.5 rounded-full bg-clay px-3.5 py-2 text-xs font-extrabold uppercase tracking-wide text-cream xl:flex">
        No Hormones
      </span>

      {/* hero content */}
      <div
        ref={contentRef}
        className="container relative z-10 flex flex-1 flex-col items-center justify-center py-32 text-center"
      >
        <span className="inline-flex animate-bounce-in items-center gap-2 rounded-full border border-cream/30 bg-meadow-deep/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cream backdrop-blur-sm">
          <Sun className="h-3.5 w-3.5 text-wheat-soft" /> Halal Certified · Huntley, Illinois
        </span>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] text-cream drop-shadow-[0_2px_18px_rgba(40,20,8,0.55)] sm:text-7xl lg:text-[5.75rem]">
          <span className="block animate-bounce-in [animation-delay:0.12s]">
            Farm-fresh &amp;
          </span>
          <span className="block animate-bounce-in text-sunrise [animation-delay:0.24s]">
            raised with love.
          </span>
        </h1>

        <p className="mt-7 max-w-xl animate-bounce-in text-lg leading-relaxed text-cream/90 drop-shadow [animation-delay:0.36s] sm:text-xl">
          Ethically raised, Halal-certified sheep, goats, and cattle — grazed on
          open pasture under the Illinois sun and ready for your family&apos;s
          table.
        </p>

        <div className="mt-9 flex animate-bounce-in flex-col items-center gap-3 [animation-delay:0.48s] sm:flex-row">
          <Button asChild size="lg" variant="wheat">
            <a href={SITE.phoneHref}>
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-cream/15 text-cream backdrop-blur-sm hover:bg-cream hover:text-meadow-deep"
          >
            <Link href="/livestock">
              <Sun className="h-4 w-4" /> Meet Our Livestock
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-28 bg-gradient-to-b from-transparent to-bone" />

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bob text-cream/90">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-cream/80 p-1">
          <span className="h-2 w-1 rounded-full bg-cream" />
        </div>
      </div>
    </section>
  );
}
