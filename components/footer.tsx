import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/utils";
import { BarnMark } from "@/components/barn-mark";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t-2 border-blood/40 bg-coal-deep text-bone-muted">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-sm border border-blood/40 bg-blood/15 text-blood-soft">
              <BarnMark className="h-7 w-7" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl font-bold uppercase tracking-[0.14em] text-bone">
                Ferdows <span className="text-blood-soft">Farm</span>
              </span>
              <span className="font-script text-xl text-gold">honest halal meat</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Halal-certified, ethically raised sheep, goats, and cattle. Pasture-fed,
            hand-cut, and processed the way it should be — in Huntley, Illinois.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook].map((Icon, i) => (
              <span
                key={i}
                className="grid h-9 w-9 place-items-center rounded-sm border border-bone/15 text-bone-muted transition-colors hover:border-blood hover:bg-blood hover:text-bone"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-xs text-gold">Visit &amp; Book</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blood-soft" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blood-soft" />
              <a href={SITE.phoneHref} className="transition-colors hover:text-bone">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blood-soft" />
              <span>Open daily · 8:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-xs text-gold">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/" className="transition-colors hover:text-bone">
                Home
              </Link>
            </li>
            <li>
              <Link href="/livestock" className="transition-colors hover:text-bone">
                Livestock &amp; Halal Standards
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-bone">
                Contact &amp; Booking
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-bone-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Ferdows Farm. All rights reserved.</p>
          <p className="eyebrow text-[0.65rem] text-gold">
            Huntley, Illinois · Halal Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
