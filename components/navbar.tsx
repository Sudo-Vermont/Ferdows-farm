"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-4">
      <nav
        className={cn(
          "container flex h-16 items-center justify-between rounded-full px-4 transition-all duration-300 sm:px-6",
          scrolled
            ? "border border-meadow-dark/10 bg-cream/85 shadow-soft backdrop-blur-md"
            : "border border-transparent bg-cream/40 backdrop-blur-sm"
        )}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-meadow/15 text-meadow-dark transition-transform duration-500 group-hover:rotate-[18deg]">
            <BarnMark className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-extrabold tracking-tight text-meadow-deep">
              Ferdows Farm
            </span>
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-clay">
              Halal · Huntley, IL
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-sm font-semibold tracking-tight transition-all hover:text-meadow-dark active:scale-95",
                "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-wheat after:transition-all after:duration-300",
                pathname === l.href
                  ? "text-meadow-dark after:w-full"
                  : "text-ink-soft after:w-0 hover:after:w-full"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="default" size="sm">
            <a href={SITE.phoneHref}>
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </Button>
        </div>

        {/* mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild size="icon" variant="default" aria-label="Call Ferdows Farm">
            <a href={SITE.phoneHref}>
              <Phone className="h-4 w-4" />
            </a>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-meadow-dark/20 text-meadow-dark transition-colors hover:bg-meadow-mist/50 active:scale-95"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={cn(
          "container mt-2 overflow-hidden rounded-3xl transition-all duration-300 ease-out md:hidden",
          open
            ? "max-h-96 border border-meadow-dark/10 bg-cream/95 shadow-soft backdrop-blur-md"
            : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 p-3">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-2xl px-4 py-3 text-base font-semibold transition-colors",
                pathname === l.href
                  ? "bg-meadow text-cream"
                  : "text-ink hover:bg-meadow-mist/50"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-wheat px-4 py-3 text-base font-semibold text-ink"
          >
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
