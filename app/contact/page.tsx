import type { Metadata } from "next";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/utils";
import { OrderForm } from "@/components/order-form";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Visit Ferdows Farm at 16414 Harmony Rd, Huntley, IL. Call (702) 354-7434 or book an on-site Halal slaughtering for sheep, goats, and cattle.",
};

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden bg-bone pt-12">
        <div className="absolute -right-12 -top-6 h-64 w-64 rounded-full bg-wheat/15 blur-3xl" />
        <div className="absolute -left-12 top-20 h-56 w-56 rounded-full bg-meadow/12 blur-3xl" />
        <div className="container relative py-16 sm:py-20">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-clay">
              Contact &amp; Booking
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] text-meadow-deep sm:text-6xl text-balance">
              Visit us, or book your slaughtering.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-soft">
              The gates are open daily. To buy meat, products, or eggs, just give
              us a call — or book an on-site Halal slaughtering below.
            </p>
            <div className="mt-8">
              <Button asChild variant="wheat" size="lg">
                <a href={SITE.phoneHref}>
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="bg-bone">
        <div className="container grid gap-10 pb-24 pt-4 lg:grid-cols-2">
          {/* left: details + map */}
          <Reveal className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={SITE.phoneHref}
                className="flex flex-col gap-2 rounded-3xl border border-meadow-dark/10 bg-cream p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift active:scale-[0.98]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-meadow/12 text-meadow-dark">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-ink-muted">
                  Call us
                </span>
                <span className="font-semibold text-meadow-deep">{SITE.phone}</span>
              </a>
              <div className="flex flex-col gap-2 rounded-3xl border border-meadow-dark/10 bg-cream p-5 shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-wheat/15 text-clay">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-ink-muted">
                  Visit
                </span>
                <span className="font-semibold leading-snug text-meadow-deep">
                  {SITE.address}
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-3xl border border-meadow-dark/10 bg-cream p-5 shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-meadow/12 text-meadow-dark">
                  <Clock className="h-5 w-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-ink-muted">
                  Hours
                </span>
                <span className="font-semibold leading-snug text-meadow-deep">
                  Daily · 8 AM – 6 PM
                </span>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-[2rem] border border-meadow-dark/10 shadow-soft">
              <iframe
                title="Ferdows Farm location map"
                src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${SITE.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </Button>
          </Reveal>

          {/* right: form */}
          <Reveal delay={120}>
            <OrderForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
