"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/utils";

/** A row of forged bolt heads down a strap hinge. */
function Bolts({ count = 4 }: { count?: number }) {
  return (
    <div className="flex h-full items-center justify-around px-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="iron-bolt h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5" />
      ))}
    </div>
  );
}

/** A single heavy batten door: vertical planks, Z-brace, iron straps, ring pull. */
function Door({ side, open }: { side: "left" | "right"; open: boolean }) {
  const isLeft = side === "left";
  return (
    <div
      className="motion-door pointer-events-none absolute top-0 z-30 h-full w-1/2 will-change-transform"
      style={{
        [isLeft ? "left" : "right"]: 0,
        transformOrigin: isLeft ? "left center" : "right center",
        transform: open
          ? `rotateY(${isLeft ? "-115deg" : "115deg"})`
          : "rotateY(0deg)",
        transition: "transform 2.1s cubic-bezier(0.16,1,0.3,1) 0.4s",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="wood-planks wood-grain relative h-full w-full overflow-hidden border-y-[6px] border-wood-dark shadow-barn">
        {/* ---- Z / batten brace frame ---- */}
        {/* diagonal brace (clipped to the door edges) */}
        <div
          className={`wood-board wood-grain absolute left-1/2 top-1/2 h-[13%] w-[180%] -translate-x-1/2 -translate-y-1/2 ${
            isLeft ? "rotate-[33deg]" : "-rotate-[33deg]"
          }`}
        />
        {/* top + bottom rails */}
        <div className="wood-board wood-grain absolute left-[7%] top-[11%] h-[10%] w-[86%]" />
        <div className="wood-board wood-grain absolute bottom-[11%] left-[7%] h-[10%] w-[86%]" />

        {/* ---- iron strap hinges on the outer edge ---- */}
        <div
          className={`iron-strap absolute top-[13%] h-[8.5%] w-[72%] ${
            isLeft ? "left-0 rounded-r-md" : "right-0 rounded-l-md"
          }`}
        >
          <Bolts count={5} />
        </div>
        <div
          className={`iron-strap absolute bottom-[13%] h-[8.5%] w-[72%] ${
            isLeft ? "left-0 rounded-r-md" : "right-0 rounded-l-md"
          }`}
        >
          <Bolts count={5} />
        </div>

        {/* ---- ring pull on the inner edge ---- */}
        <div
          className={`absolute top-1/2 ${
            isLeft ? "right-3 sm:right-5" : "left-3 sm:left-5"
          } -translate-y-1/2`}
        >
          <div className="iron-strap flex h-9 w-9 items-center justify-center rounded-full sm:h-11 sm:w-11">
            <div className="h-6 w-6 rounded-full border-[3px] border-iron-light/80 shadow-[inset_0_2px_3px_rgba(0,0,0,0.6)] sm:h-8 sm:w-8" />
          </div>
        </div>

        {/* edge bevel highlight + inner-seam shadow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: isLeft
              ? "linear-gradient(90deg, rgba(255,220,170,0.10) 0%, transparent 8%, transparent 68%, rgba(0,0,0,0.5) 100%)"
              : "linear-gradient(270deg, rgba(255,220,170,0.10) 0%, transparent 8%, transparent 68%, rgba(0,0,0,0.5) 100%)",
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
      {/* faint sky behind the barn */}
      <div className="absolute inset-0 bg-gradient-to-b from-iron via-iron to-[#241a12]" />

      <div className="relative mx-auto max-w-6xl px-3 pt-8 sm:pt-12">
        <div className="relative">
          {/* ---------- ROOF ---------- */}
          <div className="relative mx-auto w-[104%] -translate-x-[2%]">
            {/* gable */}
            <div
              className="barn-roof wood-grain relative mx-auto h-20 w-full sm:h-28"
              style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
            >
              {/* hayloft window in the gable */}
              <div className="absolute left-1/2 top-[42%] h-9 w-9 -translate-x-1/2 sm:top-[46%] sm:h-12 sm:w-12">
                <div className="relative h-full w-full rounded-md border-[3px] border-wood-dark bg-[#1d130b] shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                  {/* warm glow + muntin cross */}
                  <div className="absolute inset-0 rounded-sm bg-amber-soft/70 shadow-glow animate-flicker" />
                  <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-wood-dark" />
                  <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-wood-dark" />
                </div>
              </div>
            </div>
            {/* ridge cap + eaves trim */}
            <div className="mx-auto -mt-1 h-3 w-full bg-gradient-to-b from-wood-light to-wood-dark shadow-md sm:h-4" />
          </div>

          {/* ---------- DOORWAY ---------- */}
          <div className="relative -mt-px border-x-8 border-wood-dark bg-iron">
            {/* header beam / lintel */}
            <div className="wood-board wood-grain relative h-6 w-full sm:h-8" />

            {/* THE STAGE: lit interior + doors */}
            <div
              className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[2/1]"
              style={{ perspective: "1700px" }}
            >
              {/* ---- lit barn interior (revealed) ---- */}
              <div className="barn-interior absolute inset-0 overflow-hidden">
                {/* receding back wall planks */}
                <div className="barn-backwall pointer-events-none absolute inset-x-[12%] top-[10%] bottom-[16%] opacity-50" />

                {/* ceiling beams */}
                <div className="pointer-events-none absolute inset-x-0 top-0 flex h-1/2 justify-between px-[8%] opacity-50">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2.5 bg-gradient-to-b from-wood-dark to-transparent"
                    />
                  ))}
                </div>

                {/* string of edison bulbs */}
                <div className="pointer-events-none absolute left-0 right-0 top-[7%] flex items-start justify-center gap-[6%] px-6">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="relative flex flex-col items-center">
                      <div className="h-5 w-px bg-iron-light/70" />
                      <div className="relative">
                        <div className="bulb-glow absolute -inset-3" />
                        <div
                          className="relative h-3 w-3 rounded-full bg-amber-soft shadow-glow animate-flicker sm:h-4 sm:w-4"
                          style={{ animationDelay: `${i * 0.4}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* hay bales flanking the floor */}
                <div className="straw-floor pointer-events-none absolute bottom-[15%] left-[6%] hidden h-10 w-20 rounded-sm border border-black/30 opacity-90 shadow-lg sm:block" />
                <div className="straw-floor pointer-events-none absolute bottom-[15%] right-[6%] hidden h-12 w-24 rounded-sm border border-black/30 opacity-90 shadow-lg sm:block" />

                {/* straw / hay floor */}
                <div className="straw-floor pointer-events-none absolute inset-x-0 bottom-0 h-[16%]" />

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

            {/* stone / concrete foundation */}
            <div className="h-4 w-full bg-gradient-to-b from-[#5b524a] to-[#2c2722] shadow-inner sm:h-5" />
          </div>
        </div>
      </div>

      {/* ground line */}
      <div className="straw-floor h-6 w-full opacity-80" />
    </section>
  );
}
