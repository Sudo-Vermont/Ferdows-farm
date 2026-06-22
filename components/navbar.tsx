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
  { href: "/contact", label: "Contact & Order" },
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

  // close the mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-iron/15 bg-sand/95 backdrop-blur supports-[backdrop-filter]:bg-sand/80 shadow-sm"
          : "border-transparent bg-sand"
      )}
    >
      <nav className="container flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <BarnMark className="h-9 w-9 text-barn transition-transform duration-300 group-hover:-rotate-3" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-iron">
              Ferdows Farm
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-forest">
              Halal · Huntley, IL
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-sm font-semibold tracking-wide text-iron/80 transition-all hover:text-barn active:scale-95",
                "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-barn after:transition-all after:duration-300",
                pathname === l.href
                  ? "text-barn after:w-full"
                  : "after:w-0 hover:after:w-full"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-iron/30 text-iron"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-iron/10 bg-sand transition-[max-height] duration-300 ease-out md:hidden",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="container flex flex-col gap-1 py-3">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-md px-3 py-3 text-base font-semibold transition-colors",
                pathname === l.href
                  ? "bg-barn text-sand"
                  : "text-iron hover:bg-sand-dark"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-forest px-3 py-3 text-base font-semibold text-sand"
          >
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
