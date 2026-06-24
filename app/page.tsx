import Link from "next/link";
import {
  Leaf,
  Moon,
  ArrowRight,
  Phone,
  Quote,
  Check,
  ShieldCheck,
} from "lucide-react";
import { HillsHero } from "@/components/hills-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SITE, asset } from "@/lib/utils";
import { LIVESTOCK, HALAL_STANDARDS } from "@/lib/data";
import { Cleaver, WaxStamp } from "@/components/meat-sketches";

const FEATURES = [
  { Comp: Leaf, label: "Grass-Fed, No Hormones" },
  { Comp: Moon, label: "Done the Halal Way" },
  { Comp: Cleaver, label: "Professional Halal Cutting" },
];

const MARQUEE = [
  "Grass-Fed",
  "100% Halal",
  "Pasture Raised",
  "Hand-Cut",
  "No Hormones",
  "Family Owned",
  "Cut to Order",
];

const CARE = [
  "Ethical pasture care, every day",
  "Vet-checked, healthy animals",
  "No added growth hormones",
];

export default function HomePage() {
  return (
    <>
      <HillsHero />

      {/* ── RED FEATURE BAND ── */}
      <section className="relative z-10 bg-blood">
        <div className="container grid grid-cols-1 gap-px sm:grid-cols-3">
          {FEATURES.map(({ Comp, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 px-4 py-10 text-center transition-colors duration-300 hover:bg-blood-deep"
            >
              <Comp className="h-9 w-9 text-bone transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-bone/90">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden border-b border-coal-line bg-coal-soft py-4">
        <div className="marquee-track gap-10">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-xl font-semibold uppercase tracking-[0.16em] text-bone/70 sm:text-2xl">
                {word}
              </span>
              <span className="h-2 w-2 rounded-full bg-blood" />
            </span>
          ))}
        </div>
      </div>

      {/* ── FRESH SHOWCASE ── */}
      <section className="bg-coal-soft">
        <div className="container grid items-stretch gap-6 py-6 lg:grid-cols-2">
          {/* photo with script overlay */}
          <Reveal className="relative">
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/sheep.jpg")}
                alt="Pasture-raised flock at Ferdows Farm"
                className="h-full w-full animate-kenburns object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-coal/85 via-coal/30 to-transparent" />
              <div className="absolute bottom-7 left-7">
                <p className="font-script text-5xl text-bone drop-shadow-lg sm:text-6xl">
                  only fresh
                </p>
                <p className="-mt-2 font-display text-4xl font-bold uppercase tracking-tight text-blood-soft sm:text-5xl">
                  &amp; halal
                </p>
              </div>
            </div>
          </Reveal>

          {/* copy + stat + highlight */}
          <Reveal delay={120} className="grid gap-6">
            <div className="rounded-lg border border-coal-line bg-coal-card p-9">
              <p className="font-script text-3xl text-blood-soft">special prepared</p>
              <h3 className="mt-1 font-display text-3xl font-bold uppercase text-bone">
                Farm meat, done right
              </h3>
              <p className="mt-3 leading-relaxed text-bone-muted">
                Grass-fed and finished with honest feed, our sheep, goats, and
                cattle are hand-selected for weight and health — then cut and
                packaged exactly how you ask.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col justify-center rounded-lg bg-blood p-8 text-bone">
                <span className="font-poster text-6xl leading-none">100%</span>
                <span className="mt-3 text-sm leading-relaxed text-bone/85">
                  Slaughtered the traditional Halal way — strict standards, no
                  shortcuts, every single time.
                </span>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/images/cow.jpg")}
                  alt="Grass-fed beef cattle"
                  className="h-full min-h-[180px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/90 to-transparent" />
                <p className="absolute bottom-4 left-5 font-display text-xl font-bold uppercase text-bone">
                  Grass-Fed <span className="text-blood-soft">Beef</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── QUALITY + STAMP ── */}
      <section className="relative overflow-hidden bg-coal">
        <div className="container grid items-center gap-14 py-24 lg:grid-cols-2">
          <Reveal>
            <p className="font-script text-3xl text-blood-soft">our promise</p>
            <h2 className="mt-1 font-display text-4xl font-bold uppercase tracking-tight text-bone sm:text-5xl">
              Production quality, <span className="text-blood-soft">monitored</span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-bone-muted">
              From open pasture to the final cut, we keep a close eye on every
              step. Healthy animals, humane handling, and clean processing are the
              standard here — not the exception.
            </p>
            <ul className="mt-7 space-y-3">
              {CARE.map((c) => (
                <li key={c} className="flex items-center gap-3 text-bone-soft">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-sm bg-blood/15 text-blood-soft">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <Button asChild variant="gold" size="lg" className="mt-9">
              <Link href="/livestock">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={140} className="flex justify-center">
            <div className="relative grid place-items-center">
              <div className="absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(184,42,56,0.25),transparent_70%)] blur-2xl" />
              <WaxStamp className="relative h-72 w-72 animate-spin-slow text-gold sm:h-80 sm:w-80" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIAL + 100% ── */}
      <section className="bg-coal-soft">
        <div className="container grid items-stretch gap-6 py-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="flex flex-col justify-center rounded-lg border border-coal-line bg-coal-card p-10">
            <Quote className="h-10 w-10 text-blood-soft" />
            <p className="mt-5 font-display text-2xl font-light leading-snug text-bone sm:text-3xl">
              &ldquo;The cleanest, most honest meat we&apos;ve found. You can taste
              the difference real pasture makes — and knowing it&apos;s genuinely
              Halal gives us complete peace of mind.&rdquo;
            </p>
            <div className="mt-7 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-blood font-display font-bold text-bone">
                A
              </span>
              <span>
                <span className="block font-display font-semibold uppercase tracking-wide text-bone">
                  A. Rahman
                </span>
                <span className="text-sm text-bone-muted">Huntley, IL</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative overflow-hidden rounded-lg bg-blood p-10 text-bone">
            <div className="absolute -right-6 -top-8 font-poster text-[12rem] leading-none text-bone/10">
              %
            </div>
            <span className="font-poster text-7xl leading-none">100</span>
            <p className="mt-4 font-display text-xl font-semibold uppercase tracking-wide">
              Prime Quality
            </p>
            <p className="mt-2 text-bone/85">
              Halal-guaranteed, hand-selected, and raised the honest way — start
              to finish.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LIVESTOCK GRID ── */}
      <section className="bg-coal">
        <div className="container py-24">
          <Reveal className="text-center">
            <p className="font-script text-3xl text-blood-soft">what we raise</p>
            <h2 className="mt-1 font-display text-4xl font-bold uppercase tracking-tight text-bone sm:text-5xl">
              From Our Farm
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LIVESTOCK.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 4) * 80}>
                <Link
                  href="/livestock"
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-coal-line bg-coal-card transition-all duration-300 hover:-translate-y-1.5 hover:border-blood/40 hover:shadow-card active:scale-[0.99]"
                >
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(a.image)}
                      alt={a.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coal-card to-transparent" />
                    <span className="absolute right-3 top-3 rounded-sm bg-blood px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-bone">
                      {a.bookable ? "Bookable" : "Call to buy"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="eyebrow text-[0.6rem] text-gold">{a.tagline}</p>
                    <h3 className="mt-2 font-display text-xl font-bold uppercase text-bone">
                      {a.name}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-blood-soft">
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

      {/* ── HALAL PROMISE (article-style) ── */}
      <section className="bg-coal-soft">
        <div className="container py-24">
          <Reveal className="text-center">
            <p className="font-script text-3xl text-blood-soft">good to know</p>
            <h2 className="mt-1 font-display text-4xl font-bold uppercase tracking-tight text-bone sm:text-5xl">
              Our Halal Promise
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {HALAL_STANDARDS.slice(0, 3).map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group h-full rounded-lg border border-coal-line bg-coal-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blood/40">
                  <span className="grid h-12 w-12 place-items-center rounded-sm bg-blood/15 text-blood-soft transition-colors group-hover:bg-blood group-hover:text-bone">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bone-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RED CTA BAND ── */}
      <section className="bg-blood">
        <div className="container flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <div>
            <p className="font-script text-3xl text-bone/80">ready when you are</p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-bone sm:text-4xl">
              Book a slaughtering or place an order
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="bone" size="lg">
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-coal text-bone hover:bg-coal-deep"
            >
              <Link href="/contact">
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
