"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, MapPin, Clock } from "lucide-react";
import { cn, SITE } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BarnMark } from "@/components/barn-mark";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/livestock", label: "Livestock & Halal" },
  { href: "/contact", label: "Contact & Booking" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* top utility strip */}
      <div className="hidden border-b border-bone/10 bg-coal-deep/0 bg-maroon-deep/40 md:block">
        <div className="container flex h-9 items-center justify-between text-[0.7rem] font-medium tracking-wide text-bone-muted">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-blood-soft" /> {SITE.address}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-blood-soft" /> Open Daily · 8 AM – 6 PM
            <span className="mx-2 text-bone/20">|</span>
            <span className="eyebrow text-[0.65rem] text-gold">Done the Halal Way</span>
          </span>
        </div>
      </div>

      {/* main bar */}
      <nav
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-coal-line bg-coal/95 shadow-soft backdrop-blur-md"
            : "border-transparent bg-coal/70 backdrop-blur-sm"
        )}
      >
        <div className="container flex h-[4.5rem] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-sm border border-blood/40 bg-blood/15 text-blood-soft transition-all duration-500 group-hover:bg-blood group-hover:text-bone">
              <BarnMark className="h-7 w-7" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold uppercase tracking-[0.14em] text-bone">
                Ferdows <span className="text-blood-soft">Farm</span>
              </span>
              <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-bone-muted">
                Halal Butchery · Huntley
              </span>
            </span>
          </Link>

          {/* desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative font-display text-sm font-semibold uppercase tracking-[0.12em] transition-colors active:scale-95",
                  "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-blood after:transition-all after:duration-300",
                  pathname === l.href
                    ? "text-bone after:w-full"
                    : "text-bone-muted hover:text-bone after:w-0 hover:after:w-full"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link href="/contact">
                <Phone className="h-4 w-4" /> Book Now
              </Link>
            </Button>
          </div>

          {/* mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild size="icon" aria-label="Call Ferdows Farm">
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-sm border border-bone/20 text-bone transition-colors hover:bg-coal-soft active:scale-95"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-b border-coal-line bg-coal/98 backdrop-blur-md transition-all duration-300 ease-out lg:hidden",
          open ? "max-h-96" : "max-h-0 border-b-transparent"
        )}
      >
        <div className="container flex flex-col gap-1 py-3">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-sm px-4 py-3 font-display text-base font-semibold uppercase tracking-wide transition-colors",
                pathname === l.href
                  ? "bg-blood text-bone"
                  : "text-bone-soft hover:bg-coal-soft"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-1 flex items-center justify-center gap-2 rounded-sm bg-gold px-4 py-3 font-display text-base font-semibold uppercase tracking-wide text-coal"
          >
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
