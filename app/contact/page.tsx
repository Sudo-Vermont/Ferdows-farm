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
      <section className="grain relative overflow-hidden bg-gradient-to-b from-maroon-deep to-coal pt-12">
        <div className="absolute right-0 top-[-10%] h-72 w-72 rounded-full bg-blood/20 blur-3xl" />
        <div className="container relative py-20 sm:py-24">
          <Reveal>
            <p className="font-script text-3xl text-blood-soft">contact &amp; booking</p>
            <h1 className="mt-1 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-bone sm:text-6xl">
              Visit us, or book your <span className="text-blood-soft">slaughtering</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-bone-muted">
              The gates are open daily. To buy meat, products, or eggs, just give us
              a call — or book an on-site Halal slaughtering below.
            </p>
            <div className="mt-8">
              <Button asChild variant="gold" size="lg">
                <a href={SITE.phoneHref}>
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="bg-coal">
        <div className="container grid gap-10 pb-24 pt-12 lg:grid-cols-2">
          {/* left: details + map */}
          <Reveal className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={SITE.phoneHref}
                className="flex flex-col gap-2 rounded-lg border border-coal-line bg-coal-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blood/40 active:scale-[0.98]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-sm bg-blood/15 text-blood-soft">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="eyebrow text-[0.6rem] text-gold">Call us</span>
                <span className="font-display font-semibold text-bone">{SITE.phone}</span>
              </a>
              <div className="flex flex-col gap-2 rounded-lg border border-coal-line bg-coal-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-sm bg-blood/15 text-blood-soft">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="eyebrow text-[0.6rem] text-gold">Visit</span>
                <span className="font-display font-semibold leading-snug text-bone">
                  {SITE.address}
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-lg border border-coal-line bg-coal-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-sm bg-blood/15 text-blood-soft">
                  <Clock className="h-5 w-5" />
                </span>
                <span className="eyebrow text-[0.6rem] text-gold">Hours</span>
                <span className="font-display font-semibold leading-snug text-bone">
                  Daily · 8 AM – 6 PM
                </span>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-lg border border-coal-line">
              <iframe
                title="Ferdows Farm location map"
                src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale"
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
