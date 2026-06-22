import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/utils";
import { LIVESTOCK, HALAL_STANDARDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Livestock & Halal Standards",
  description:
    "Halal-certified sheep, goats, and cattle raised ethically on pasture in Huntley, IL. See our strict Halal process and animal-care standards.",
};

function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-iron text-sand">
      <div className="straw-floor absolute inset-x-0 bottom-0 h-10 opacity-70" />
      <div className="container relative py-20 sm:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-soft">
          Our Livestock
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl text-balance">
          Healthy animals, raised with honest care.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-sand/80">
          Choose from pasture-raised sheep, goats, and cattle — every one of them
          Halal-certified and treated the way livestock deserves to be treated.
        </p>
      </div>
    </section>
  );
}

export default function LivestockPage() {
  return (
    <>
      <PageHeader />

      {/* LIVESTOCK DETAIL */}
      <section className="bg-sand">
        <div className="container space-y-8 py-20">
          {LIVESTOCK.map((a, i) => (
            <div
              key={a.slug}
              id={a.slug}
              className="grid items-center gap-8 rounded-2xl border border-iron/10 bg-card p-8 shadow-sm sm:p-10 md:grid-cols-[auto_1fr]"
            >
              <div
                className={`flex h-32 w-32 items-center justify-center rounded-2xl text-7xl shadow-inner ${
                  i % 2 === 0 ? "bg-forest/10" : "bg-barn/10"
                }`}
              >
                {a.emoji}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  {a.tagline}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-iron">
                  {a.name}
                </h2>
                <p className="mt-3 max-w-2xl text-iron/75">{a.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                  {a.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-iron/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-barn" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HALAL STANDARDS */}
      <section className="bg-forest text-sand">
        <div className="container py-20">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-glow/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-soft">
              <ShieldCheck className="h-4 w-4" /> Our Standards
            </span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold sm:text-5xl text-balance">
              Strict Halal certification, no exceptions.
            </h2>
            <p className="mt-4 max-w-2xl text-sand/80">
              Halal is more than a label to us — it&apos;s a responsibility we
              take seriously at every step, from pasture to processing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {HALAL_STANDARDS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-sand/15 bg-iron/30 p-7 backdrop-blur-sm"
              >
                <span className="font-display text-4xl font-semibold text-amber-soft/40">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-sand">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-sand/75">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand">
        <div className="container flex flex-col items-center gap-6 py-20 text-center">
          <h2 className="max-w-2xl font-display text-4xl font-semibold text-iron sm:text-5xl text-balance">
            Found what you&apos;re looking for?
          </h2>
          <p className="max-w-xl text-lg text-iron/75">
            Call to check current availability and pricing, or send an order
            inquiry and we&apos;ll get right back to you.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </Button>
            <Button asChild variant="forest" size="lg">
              <Link href="/contact">
                Send an Order Inquiry <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
