"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/utils";

/** A single heavy plank door with iron strap-hinges, cross-brace and ring handle. */
function Door({ side, open }: { side: "left" | "right"; open: boolean }) {
  const isLeft = side === "left";
  return (
    <div
      className="motion-door pointer-events-none absolute top-0 z-30 h-full w-1/2 will-change-transform"
      style={{
        [isLeft ? "left" : "right"]: 0,
        transformOrigin: isLeft ? "left center" : "right center",
        transform: open
          ? `rotateY(${isLeft ? "-112deg" : "112deg"})`
          : "rotateY(0deg)",
        transition: "transform 2.1s cubic-bezier(0.16,1,0.3,1) 0.4s",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="wood-planks relative h-full w-full overflow-hidden border-y-4 border-wood-dark shadow-barn">
        {/* iron strap hinges */}
        <div
          className={`iron-strap absolute top-[14%] h-7 w-3/4 ${
            isLeft ? "left-0" : "right-0"
          }`}
        />
        <div
          className={`iron-strap absolute bottom-[14%] h-7 w-3/4 ${
            isLeft ? "left-0" : "right-0"
          }`}
        />
        {/* diagonal cross-brace */}
        <div
          className="absolute inset-6 origin-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.22))",
            clipPath: isLeft
              ? "polygon(0 0, 14% 0, 100% 86%, 100% 100%, 86% 100%, 0 14%)"
              : "polygon(86% 0, 100% 0, 100% 14%, 14% 100%, 0 100%, 0 86%)",
          }}
        />
        {/* ring handle on the inner edge */}
        <div
          className={`absolute top-1/2 ${
            isLeft ? "right-4" : "left-4"
          } -translate-y-1/2`}
        >
          <div className="h-9 w-9 rounded-full border-4 border-iron/90 bg-transparent shadow-[0_2px_6px_rgba(0,0,0,0.5)]" />
        </div>
        {/* soft inner shadow toward the seam */}
        <div
          className="absolute inset-0"
          style={{
            background: isLeft
              ? "linear-gradient(90deg, transparent 70%, rgba(0,0,0,0.45))"
              : "linear-gradient(270deg, transparent 70%, rgba(0,0,0,0.45))",
          }}
        />
      </div>
    </div>
  );
}

export function BarnDoorHero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setOpen(true);
      return;
    }
    // setTimeout (not requestAnimationFrame) so the doors still open when the
    // page first loads in a background/unfocused tab, where rAF is paused.
    const t = setTimeout(() => setOpen(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-iron">
      {/* gable roof silhouette */}
      <div className="relative mx-auto max-w-6xl px-3 pt-8 sm:pt-12">
        <div className="relative">
          {/* roof gable */}
          <div
            className="mx-auto h-16 w-full bg-barn sm:h-24"
            style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
          />
          {/* doorway frame + stage */}
          <div className="relative -mt-px border-x-8 border-b-8 border-wood-dark bg-iron">
            {/* header beam */}
            <div className="h-5 w-full bg-gradient-to-b from-wood-light to-wood-dark sm:h-6" />

            {/* THE STAGE: lit interior + doors */}
            <div
              className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[2/1]"
              style={{ perspective: "1700px" }}
            >
              {/* ---- lit barn interior (revealed) ---- */}
              <div className="barn-interior absolute inset-0 overflow-hidden">
                {/* ceiling beams */}
                <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-[8%] opacity-40">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-full w-2 bg-gradient-to-b from-wood-dark to-transparent"
                    />
                  ))}
                </div>

                {/* string of edison bulbs */}
                <div className="pointer-events-none absolute left-0 right-0 top-[8%] flex items-start justify-center gap-[6%] px-6">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="h-4 w-px bg-iron-light/70" />
                      <div
                        className="h-3 w-3 rounded-full bg-amber-soft shadow-glow animate-flicker sm:h-4 sm:w-4"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                    </div>
                  ))}
                </div>

                {/* straw / hay floor */}
                <div className="straw-floor pointer-events-none absolute inset-x-0 bottom-0 h-[18%]" />

                {/* ---- hero copy ---- */}
                <div
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center transition-all duration-1000"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: "1.5s",
                  }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-glow/50 bg-iron/40 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-soft backdrop-blur-sm sm:text-xs">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Halal Certified · Huntley, IL
                  </span>
                  <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-sand drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-6xl lg:text-7xl">
                    Step inside.
                    <span className="block text-amber-soft">
                      The barn is open.
                    </span>
                  </h1>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-sand/85 drop-shadow sm:text-lg">
                    Ethically raised, Halal-certified sheep, goats, and cattle —
                    cared for the honest way, ready for your family&apos;s table.
                  </p>
                  <div className="pointer-events-auto mt-8 flex flex-col items-center gap-3 sm:flex-row">
                    <Button asChild variant="amber" size="lg">
                      <a href={SITE.phoneHref}>
                        <Phone className="h-4 w-4" />
                        Call {SITE.phone}
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="border-2 border-sand/50 bg-transparent text-sand hover:bg-sand hover:text-iron"
                    >
                      <Link href="/livestock">
                        View Our Livestock
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* ---- the two heavy doors ---- */}
              <Door side="left" open={open} />
              <Door side="right" open={open} />

              {/* center seam shadow while closed */}
              <div
                className="pointer-events-none absolute inset-y-0 left-1/2 z-40 w-2 -translate-x-1/2 bg-black/50 transition-opacity duration-700"
                style={{ opacity: open ? 0 : 1 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ground line */}
      <div className="straw-floor h-6 w-full opacity-80" />
    </section>
  );
}
