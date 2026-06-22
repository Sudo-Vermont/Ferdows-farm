import Link from "next/link";
import { Phone, MapPin, Clock, Wheat } from "lucide-react";
import { SITE } from "@/lib/utils";
import { BarnMark } from "@/components/barn-mark";

export function Footer() {
  return (
    <footer className="relative mt-auto bg-iron text-sand/85">
      {/* decorative top edge — fence pickets */}
      <div
        className="h-3 w-full bg-barn"
        style={{
          maskImage:
            "repeating-linear-gradient(90deg, #000 0 18px, transparent 18px 26px)",
          WebkitMaskImage:
            "repeating-linear-gradient(90deg, #000 0 18px, transparent 18px 26px)",
        }}
      />
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <BarnMark className="h-10 w-10 text-amber-glow" />
            <span className="font-display text-2xl font-semibold text-sand">
              Ferdows Farm
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/70">
            Halal-certified, ethically raised sheep, goats, and cattle. Honest
            farm-to-table livestock, cared for the way it should be.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-glow/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-soft">
            <Wheat className="h-3.5 w-3.5" /> Hand-raised since day one
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-sand">
            Visit & Order
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
              <a href={SITE.phoneHref} className="hover:text-amber-soft">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
              <span>Open daily · 8:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-sand">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-soft">
                Home
              </Link>
            </li>
            <li>
              <Link href="/livestock" className="hover:text-amber-soft">
                Livestock & Halal Standards
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-soft">
                Contact & Order Inquiry
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-sand/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Ferdows Farm. All rights reserved.</p>
          <p>Huntley, Illinois · Halal Certified</p>
        </div>
      </div>
    </footer>
  );
}
