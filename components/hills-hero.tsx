"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Sprout } from "lucide-react";
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
      <div ref={bgRef} className="absolute inset-0 -z-20 will-change-transform">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/hero.jpg")}
          alt="Sheep grazing on a sunlit green pasture at Ferdows Farm"
          className="h-[112%] w-full -translate-y-[6%] animate-kenburns object-cover"
        />
      </div>

      {/* legibility scrims */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-meadow-deep/55 via-meadow-deep/20 to-meadow-deep/85" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(75%_60%_at_50%_28%,transparent,rgba(46,70,49,0.4))]" />

      {/* hero content */}
      <div
        ref={contentRef}
        className="container relative z-10 flex flex-1 flex-col items-center justify-center py-32 text-center"
      >
        <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-cream/30 bg-meadow-deep/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-sm [animation-delay:0.1s]">
          <Sprout className="h-3.5 w-3.5" /> Halal Certified · Huntley, Illinois
        </span>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] text-cream drop-shadow-[0_2px_18px_rgba(20,30,20,0.5)] sm:text-7xl lg:text-[5.5rem]">
          <span className="block animate-fade-up [animation-delay:0.18s]">
            Honest livestock,
          </span>
          <span className="block animate-fade-up text-sunrise [animation-delay:0.3s]">
            raised under the sun.
          </span>
        </h1>

        <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-cream/90 drop-shadow [animation-delay:0.42s] sm:text-xl">
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
          <Button
            asChild
            size="lg"
            className="bg-cream/15 text-cream backdrop-blur-sm hover:bg-cream hover:text-meadow-deep"
          >
            <Link href="/livestock">
              <Sprout className="h-4 w-4" /> Meet Our Livestock
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
