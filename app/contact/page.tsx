import type { Metadata } from "next";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/utils";
import { OrderForm } from "@/components/order-form";

export const metadata: Metadata = {
  title: "Contact & Order",
  description:
    "Visit Ferdows Farm at 16414 Harmony Rd, Huntley, IL. Call (702) 354-7434 or send an order inquiry for Halal-certified sheep, goats, and cattle.",
};

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden bg-barn text-sand">
        <div className="container py-20 sm:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-soft">
            Contact & Order
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl text-balance">
            Come on by, or place your order.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-sand/85">
            The barn doors are open daily. Call ahead and we&apos;ll have your
            livestock ready, or send us the details below.
          </p>
          <div className="mt-8">
            <Button asChild variant="amber" size="lg">
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="bg-sand">
        <div className="container grid gap-10 py-20 lg:grid-cols-2">
          {/* left: details + map */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={SITE.phoneHref}
                className="flex flex-col gap-2 rounded-2xl border border-iron/10 bg-card p-5 transition-colors hover:border-barn"
              >
                <Phone className="h-5 w-5 text-barn" />
                <span className="text-xs font-semibold uppercase tracking-wide text-iron/60">
                  Call us
                </span>
                <span className="font-semibold text-iron">{SITE.phone}</span>
              </a>
              <div className="flex flex-col gap-2 rounded-2xl border border-iron/10 bg-card p-5">
                <MapPin className="h-5 w-5 text-barn" />
                <span className="text-xs font-semibold uppercase tracking-wide text-iron/60">
                  Visit
                </span>
                <span className="font-semibold leading-snug text-iron">
                  {SITE.address}
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl border border-iron/10 bg-card p-5">
                <Clock className="h-5 w-5 text-barn" />
                <span className="text-xs font-semibold uppercase tracking-wide text-iron/60">
                  Hours
                </span>
                <span className="font-semibold leading-snug text-iron">
                  Daily · 8 AM – 6 PM
                </span>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-2xl border-4 border-wood-dark shadow-barn">
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
            <Button asChild variant="forest" className="w-full sm:w-auto">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${SITE.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </Button>
          </div>

          {/* right: form */}
          <div>
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
