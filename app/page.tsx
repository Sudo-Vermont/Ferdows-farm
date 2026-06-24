import Link from "next/link";
import {
  ShieldCheck,
  Leaf,
  HeartHandshake,
  MapPin,
  ArrowRight,
  Phone,
  Sun,
  Wheat,
} from "lucide-react";
import { HillsHero } from "@/components/hills-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SITE, asset } from "@/lib/utils";
import { LIVESTOCK } from "@/lib/data";

const TRUST = [
  {
    icon: ShieldCheck,
    title: "Halal Certified",
    body: "Processed under strict Islamic guidelines, every single time.",
  },
  {
    icon: Leaf,
    title: "Pasture Raised",
    body: "Open fields, clean feed, and no added growth hormones.",
  },
  {
    icon: HeartHandshake,
    title: "Honest Care",
    body: "Hand-raised animals treated humanely from day one.",
  },
  {
    icon: MapPin,
    title: "Local in Huntley",
    body: "Come visit the farm and see exactly how it's done.",
  },
];

const MARQUEE = [
  "Grass-fed",
  "Halal Certified",
  "Pasture Raised",
  "Family Owned",
  "No Hormones",
  "Farm Fresh",
  "Ethically Raised",
];

export default function HomePage() {
  return (
    <>
      <HillsHero />

      {/* ── MARQUEE STRIP ── */}
      <div className="relative overflow-hidden border-y border-meadow-dark/10 bg-meadow-deep py-4 text-cream">
        <div className="marquee-track gap-8">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display text-lg font-bold tracking-tight sm:text-2xl">
                {word}
              </span>
              <Sun className="h-4 w-4 animate-spin-slow text-wheat-soft" />
            </span>
          ))}
        </div>
      </div>

      {/* ── TRUST BAND ── */}
      <section className="relative bg-bone">
        <div className="container grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-meadow-dark/10 bg-cream p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-meadow/12 text-meadow-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-meadow-deep">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="relative overflow-hidden bg-bone-dark/40">
        <div className="container grid items-center gap-14 py-24 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-clay">
              Welcome to the farm
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-meadow-deep sm:text-5xl text-balance">
              Livestock you can trust, raised the way it should be.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              At Ferdows Farm, the days start at sunrise. We raise
              Halal-certified sheep, goats, and cattle on honest pasture in
              Huntley, Illinois — cared for daily, processed with respect, and
              ready for your family.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              No middlemen, no mystery. Just good animals, clean fields, and
              people who genuinely care about what reaches your table.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/livestock">
                  Explore Our Livestock <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SITE.phoneHref}>
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </Button>
            </div>
          </Reveal>

          {/* organic promise card */}
          <Reveal delay={140}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 -rotate-3 rounded-[2.5rem] bg-wheat/20" />
              <div className="absolute -inset-2 rotate-2 rounded-[2.5rem] bg-meadow/15" />
              {/* floating sun sticker */}
              <span className="sticker absolute -right-4 -top-5 z-20 grid h-20 w-20 -rotate-6 animate-float place-items-center rounded-full bg-wheat text-center font-display text-[0.62rem] font-extrabold uppercase leading-tight text-meadow-deep">
                Family
                <br />
                Owned
              </span>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-meadow-deep p-9 text-cream shadow-lift">
                <Wheat className="h-12 w-12 text-wheat-soft" />
                <p className="mt-4 font-display text-2xl font-bold text-wheat-soft">
                  Our promise to you
                </p>
                <ul className="mt-6 space-y-5">
                  {[
                    ["100%", "Halal-certified processing"],
                    ["0", "Added growth hormones"],
                    ["Daily", "Hands-on animal care"],
                  ].map(([stat, label]) => (
                    <li key={label} className="flex items-baseline gap-4">
                      <span className="font-display text-4xl font-extrabold text-cream">
                        {stat}
                      </span>
                      <span className="text-cream/70">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LIVESTOCK PREVIEW ── */}
      <section className="relative bg-bone">
        <div className="container py-24">
          <Reveal className="flex flex-col items-center text-center">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-clay">
              What we raise
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-meadow-deep sm:text-5xl">
              From our pasture to your table
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {LIVESTOCK.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 2) * 110}>
                <Link
                  href="/livestock"
                  className="group relative flex h-full items-center gap-6 overflow-hidden rounded-[2rem] border border-meadow-dark/10 bg-cream p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift active:scale-[0.99] sm:p-7"
                >
                  <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.5rem] ring-1 ring-meadow-dark/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(a.image)}
                      alt={a.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-clay">
                      {a.tagline}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-meadow-deep">
                      {a.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-soft">
                      {a.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-meadow-dark">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="relative overflow-hidden bg-meadow-deep text-cream">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-wheat/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-meadow-light/15 blur-3xl" />
        <div className="container relative flex flex-col items-center gap-6 py-24 text-center">
          <Reveal className="flex flex-col items-center gap-6">
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-cream/10 text-wheat-soft">
              <span className="absolute inset-0 animate-sun-glow rounded-full bg-wheat/40 blur-md" />
              <Sun className="relative h-8 w-8 animate-spin-slow" />
            </span>
            <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl text-balance">
              Ready to place an order or pay us a visit?
            </h2>
            <p className="max-w-xl text-lg text-cream/80">
              Call ahead and we&apos;ll have your selection ready. Walk-ins are
              always welcome — the gates are open from sunrise to sundown.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="wheat" size="lg">
                <a href={SITE.phoneHref}>
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-cream/10 text-cream hover:bg-cream hover:text-meadow-deep"
              >
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
