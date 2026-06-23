import Link from "next/link";
import { Phone, MapPin, Clock, Wheat } from "lucide-react";
import { SITE } from "@/lib/utils";
import { BarnMark } from "@/components/barn-mark";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-meadow-deep text-cream/85">
      {/* rolling hill top edge */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-12 w-full text-meadow-deep sm:h-16"
        aria-hidden="true"
      >
        <path
          d="M0,60 C320,10 620,110 920,60 C1160,20 1300,80 1440,50 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      <div className="container grid gap-10 pb-14 pt-2 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-wheat-soft">
              <BarnMark className="h-7 w-7" />
            </span>
            <span className="font-display text-2xl font-extrabold text-cream">
              Ferdows Farm
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
            Halal-certified, ethically raised sheep, goats, and cattle. Honest
            farm-to-table livestock, cared for the way it should be.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-wheat/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-wheat-soft">
            <Wheat className="h-3.5 w-3.5" /> Hand-raised since day one
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-cream">
            Visit &amp; Book
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-wheat-soft" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-wheat-soft" />
              <a href={SITE.phoneHref} className="transition-colors hover:text-wheat-soft">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-wheat-soft" />
              <span>Open daily · 8:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-cream">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/" className="transition-colors hover:text-wheat-soft">
                Home
              </Link>
            </li>
            <li>
              <Link href="/livestock" className="transition-colors hover:text-wheat-soft">
                Livestock &amp; Halal Standards
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-wheat-soft">
                Contact &amp; Booking
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Ferdows Farm. All rights reserved.</p>
          <p>Huntley, Illinois · Halal Certified</p>
        </div>
      </div>
    </footer>
  );
}
