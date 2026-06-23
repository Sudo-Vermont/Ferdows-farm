import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/utils";
import { LIVESTOCK, HALAL_STANDARDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Livestock & Halal Standards",
  description:
    "Halal-certified sheep, goats, and cattle raised ethically on pasture in Huntley, IL. See our strict Halal process and animal-care standards.",
};

const TILE_BG = ["bg-meadow/12", "bg-wheat/15", "bg-clay/12", "bg-meadow-light/20"];

function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-bone pt-12">
      <div className="absolute -right-10 top-6 h-56 w-56 rounded-full bg-wheat/15 blur-3xl" />
      <div className="container relative py-16 sm:py-20">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-clay">
            Our Livestock
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] text-meadow-deep sm:text-6xl text-balance">
            Healthy animals, raised with honest care.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Choose from pasture-raised sheep, goats, and cattle — plus
            free-range farm-fresh eggs. Every animal is Halal-certified and
            treated the way livestock deserves to be treated.
          </p>
        </Reveal>
      </div>
      {/* hill divider */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-10 w-full text-meadow-mist/40 sm:h-14"
        aria-hidden="true"
      >
        <path d="M0,40 C360,5 720,75 1080,40 C1260,22 1360,52 1440,40 L1440,80 L0,80 Z" fill="currentColor" />
      </svg>
    </section>
  );
}

export default function LivestockPage() {
  return (
    <>
      <PageHeader />

      {/* LIVESTOCK DETAIL */}
      <section className="bg-bone">
        <div className="container space-y-8 py-16">
          {LIVESTOCK.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 80}>
              <div
                id={a.slug}
                className="grid scroll-mt-28 items-center gap-8 rounded-[2rem] border border-meadow-dark/10 bg-cream p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-10 md:grid-cols-[auto_1fr]"
              >
                <div
                  className={`grid h-32 w-32 place-items-center rounded-[1.75rem] text-7xl ${
                    TILE_BG[i % TILE_BG.length]
                  }`}
                >
                  {a.emoji}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">
                    {a.tagline}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-extrabold text-meadow-deep">
                    {a.name}
                  </h2>
                  <p className="mt-3 max-w-2xl text-ink-soft">{a.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                    {a.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-ink-soft"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-meadow/15 text-meadow-dark">
                          <Check className="h-3 w-3" />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HALAL STANDARDS */}
      <section className="relative overflow-hidden bg-meadow-deep text-cream">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-meadow-light/15 blur-3xl" />
        <div className="container relative py-24">
          <Reveal className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-wheat/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-wheat-soft">
              <ShieldCheck className="h-4 w-4" /> Our Standards
            </span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold sm:text-5xl text-balance">
              Strict Halal certification, no exceptions.
            </h2>
            <p className="mt-4 max-w-2xl text-cream/75">
              Halal is more than a label to us — it&apos;s a responsibility we
              take seriously at every step, from pasture to processing.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {HALAL_STANDARDS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 110}>
                <div className="h-full rounded-[1.75rem] border border-cream/10 bg-cream/5 p-7 backdrop-blur-sm transition-colors hover:bg-cream/10">
                  <span className="font-display text-4xl font-extrabold text-wheat-soft/50">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-cream/75">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone">
        <div className="container flex flex-col items-center gap-6 py-24 text-center">
          <Reveal className="flex flex-col items-center gap-6">
            <h2 className="max-w-2xl font-display text-4xl font-extrabold text-meadow-deep sm:text-5xl text-balance">
              Found what you&apos;re looking for?
            </h2>
            <p className="max-w-xl text-lg text-ink-soft">
              Call to check current availability and pricing, or book an on-site
              Halal slaughtering and we&apos;ll handle the rest.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="wheat">
                <a href={SITE.phoneHref}>
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
              </Button>
              <Button asChild variant="default" size="lg">
                <Link href="/contact">
                  Book a Slaughtering <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
