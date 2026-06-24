import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SITE, asset } from "@/lib/utils";
import { LIVESTOCK, HALAL_STANDARDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Livestock & Halal Standards",
  description:
    "Halal sheep, goats, and cattle raised ethically on pasture in Huntley, IL, and slaughtered the traditional Halal way. See our Halal process and animal-care standards.",
};

function PageHeader() {
  return (
    <section className="grain relative overflow-hidden bg-gradient-to-b from-maroon-deep to-coal pt-12">
      <div className="absolute left-1/2 top-[-20%] h-72 w-72 -translate-x-1/2 rounded-full bg-blood/20 blur-3xl" />
      <div className="container relative py-20 sm:py-24">
        <Reveal>
          <p className="font-script text-3xl text-blood-soft">our livestock</p>
          <h1 className="mt-1 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-bone sm:text-6xl">
            Healthy animals,
            <br />
            <span className="text-blood-soft">raised with honest care</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-bone-muted">
            Choose from pasture-raised sheep, goats, and cattle — plus free-range
            farm-fresh eggs. Every animal is raised and slaughtered the Halal way,
            and treated the way livestock deserves.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function LivestockPage() {
  return (
    <>
      <PageHeader />

      {/* LIVESTOCK DETAIL */}
      <section className="bg-coal">
        <div className="container space-y-6 py-20">
          {LIVESTOCK.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 80}>
              <div
                id={a.slug}
                className="grid scroll-mt-28 items-center gap-8 overflow-hidden rounded-lg border border-coal-line bg-coal-card transition-colors duration-300 hover:border-blood/40 md:grid-cols-[18rem_1fr]"
              >
                <div className="relative h-56 w-full overflow-hidden md:h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(a.image)}
                    alt={a.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coal-card/40 md:bg-gradient-to-l" />
                  <span className="absolute left-4 top-4 rounded-sm bg-blood px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-bone">
                    {a.bookable ? "Bookable" : "Call to buy"}
                  </span>
                </div>
                <div className="p-8 sm:p-10">
                  <p className="eyebrow text-[0.65rem] text-gold">{a.tagline}</p>
                  <h2 className="mt-2 font-display text-3xl font-bold uppercase text-bone">
                    {a.name}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-bone-muted">
                    {a.description}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                    {a.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-bone-soft"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-sm bg-blood/15 text-blood-soft">
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
      <section className="relative overflow-hidden border-y border-coal-line bg-coal-soft">
        <div className="container py-24">
          <Reveal className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <ShieldCheck className="h-4 w-4" /> Our Standards
            </span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase tracking-tight text-bone sm:text-5xl">
              The Halal way,{" "}
              <span className="text-blood-soft">no exceptions</span>
            </h2>
            <p className="mt-4 max-w-2xl text-bone-muted">
              Halal is more than a label to us — it&apos;s a responsibility we take
              seriously at every step, from pasture to processing.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {HALAL_STANDARDS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 110}>
                <div className="h-full rounded-lg border border-coal-line bg-coal-card p-8 transition-colors hover:border-blood/40">
                  <span className="font-poster text-5xl text-blood/40">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-bone-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-coal">
        <div className="container flex flex-col items-center gap-6 py-24 text-center">
          <Reveal className="flex flex-col items-center gap-6">
            <h2 className="max-w-2xl font-display text-4xl font-bold uppercase tracking-tight text-bone sm:text-5xl">
              Found what you&apos;re looking for?
            </h2>
            <p className="max-w-xl text-lg text-bone-muted">
              Call to check current availability and pricing, or book an on-site
              Halal slaughtering and we&apos;ll handle the rest.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gold">
                <a href={SITE.phoneHref}>
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
              </Button>
              <Button asChild size="lg">
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
