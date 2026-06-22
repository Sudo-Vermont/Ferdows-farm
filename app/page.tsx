import Link from "next/link";
import { ShieldCheck, Leaf, HeartHandshake, MapPin, ArrowRight, Phone } from "lucide-react";
import { BarnDoorHero } from "@/components/barn-door-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/utils";
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

export default function HomePage() {
  return (
    <>
      <BarnDoorHero />

      {/* TRUST BAND */}
      <section className="bg-forest text-sand">
        <div className="container grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <span className="rounded-xl bg-sand/10 p-3 text-amber-soft ring-1 ring-amber-glow/30">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold text-sand">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-sand/75">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WELCOME / STORY */}
      <section className="bg-sand">
        <div className="container grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-barn">
              Welcome to the farm
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-iron sm:text-5xl text-balance">
              Livestock you can trust, raised the way it should be.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-iron/75">
              At Ferdows Farm, the doors are always open. We raise Halal-certified
              sheep, goats, and cattle on honest pasture in Huntley, Illinois —
              cared for daily, processed with respect, and ready for your family.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-iron/75">
              No middlemen, no mystery. Just good animals, clean barns, and
              people who genuinely care about what reaches your table.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>

          {/* decorative stat / promise card */}
          <div className="relative">
            <div className="absolute -inset-3 -rotate-2 rounded-2xl border-2 border-dashed border-barn/30" />
            <div className="relative rounded-2xl bg-iron p-8 text-sand shadow-barn sm:p-10">
              <p className="font-display text-2xl font-semibold text-amber-soft">
                Our promise to you
              </p>
              <ul className="mt-6 space-y-5">
                {[
                  ["100%", "Halal-certified processing"],
                  ["0", "Added growth hormones"],
                  ["Daily", "Hands-on animal care"],
                ].map(([stat, label]) => (
                  <li key={label} className="flex items-baseline gap-4">
                    <span className="font-display text-4xl font-semibold text-sand">
                      {stat}
                    </span>
                    <span className="text-sand/75">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LIVESTOCK PREVIEW */}
      <section className="bg-sand-dark/50">
        <div className="container py-20">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-barn">
              What we raise
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-iron sm:text-5xl">
              From our pasture to your table
            </h2>
          </div>

          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2">
            {LIVESTOCK.map((a) => (
              <Link
                key={a.slug}
                href="/livestock"
                className="group relative overflow-hidden rounded-2xl border border-iron/10 bg-sand p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-barn/30 hover:shadow-barn active:scale-[0.98] active:duration-75"
              >
                <div className="absolute -right-6 -top-6 text-8xl opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20">
                  {a.emoji}
                </div>
                <span className="text-5xl">{a.emoji}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-iron">
                  {a.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-forest">
                  {a.tagline}
                </p>
                <p className="mt-3 text-iron/70">{a.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-barn">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-barn text-sand">
        <div className="container flex flex-col items-center gap-6 py-20 text-center">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl text-balance">
            Ready to place an order or pay us a visit?
          </h2>
          <p className="max-w-xl text-lg text-sand/85">
            Call ahead and we&apos;ll have your selection ready. Walk-ins are
            always welcome — the barn doors are open.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="amber" size="lg">
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-sand/60 bg-transparent text-sand hover:bg-sand hover:text-barn"
            >
              <Link href="/contact">
                Order Inquiry <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
