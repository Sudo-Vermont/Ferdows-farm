"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/utils";
import { Herb, Cleaver } from "@/components/meat-sketches";

export function HillsHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  // Subtle scroll parallax + fade on the hero content (rAF-throttled).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${y * 0.22}px)`;
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 620));
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
    <section className="grain relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-maroon via-maroon-deep to-coal">
      {/* dramatic spotlight */}
      <div className="absolute left-1/2 top-[-10%] -z-10 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,42,56,0.35),transparent_68%)] blur-2xl" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_120%,rgba(0,0,0,0.6),transparent)]" />

      {/* giant faint cleaver behind the type */}
      <Cleaver className="absolute left-1/2 top-1/2 -z-10 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] text-bone/[0.05]" />

      {/* flying herb garnish */}
      <Herb className="absolute left-[8%] top-[22%] h-16 w-16 animate-float text-blood-soft/40 sm:h-20 sm:w-20" />
      <Herb className="absolute right-[10%] top-[30%] h-14 w-14 animate-float-slow text-gold/40 [animation-delay:0.6s]" />
      <Herb className="absolute bottom-[16%] left-[16%] hidden h-12 w-12 animate-float text-bone/20 [animation-delay:1.1s] sm:block" />
      <Herb className="absolute bottom-[22%] right-[16%] hidden h-16 w-16 animate-float-slow text-blood-soft/30 [animation-delay:0.3s] lg:block" />

      {/* content */}
      <div
        ref={contentRef}
        className="container relative z-10 flex flex-col items-center py-28 text-center"
      >
        <span className="inline-flex animate-fade-up items-center gap-2 rounded-sm border border-bone/15 bg-coal/40 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-bone-soft backdrop-blur-sm">
          <Award className="h-3.5 w-3.5 text-gold" /> Halal Certified · Pasture-Raised
        </span>

        <h1 className="mt-7 font-poster leading-[0.82] text-bone">
          <span className="block animate-fade-up text-[20vw] [animation-delay:0.1s] sm:text-[15vw] lg:text-[12rem]">
            HALAL
          </span>
          <span className="text-outline-red block animate-fade-up text-[20vw] [animation-delay:0.22s] sm:text-[15vw] lg:text-[12rem]">
            BUTCHERY
          </span>
        </h1>

        <p className="mt-7 max-w-xl animate-fade-up text-base leading-relaxed text-bone-muted [animation-delay:0.34s] sm:text-lg">
          Ethically raised sheep, goats &amp; cattle — pasture-fed, hand-selected,
          and processed to strict Halal standards. From our fields in Huntley,
          Illinois, straight to your family&apos;s table.
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-center gap-3 [animation-delay:0.46s] sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Book a Slaughtering
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={SITE.phoneHref}>
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </Button>
        </div>
      </div>

      {/* fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-b from-transparent to-coal" />
    </section>
  );
}
