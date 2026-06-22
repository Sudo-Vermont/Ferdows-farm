"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Send,
  CalendarDays,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LIVESTOCK } from "@/lib/data";
import { SITE } from "@/lib/utils";

const fieldClass =
  "w-full rounded-lg border-2 border-iron/15 bg-sand px-4 py-2.5 text-iron placeholder:text-iron/40 outline-none transition-all duration-200 focus:border-barn focus:ring-4 focus:ring-barn/15 focus:-translate-y-px";
const labelClass = "mb-1.5 block text-sm font-semibold text-iron";

// Only animals flagged bookable can be reserved for on-site Halal slaughtering.
const BOOKING_OPTIONS = LIVESTOCK.filter((a) => a.bookable);

export function OrderForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // No backend wired up yet — simulate a submission and confirm to the user.
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="animate-pop flex flex-col items-center gap-4 rounded-2xl border-2 border-forest/30 bg-forest/5 p-10 text-center shadow-sm">
        <span className="animate-pop flex h-16 w-16 items-center justify-center rounded-full bg-forest/10">
          <CheckCircle2 className="h-10 w-10 text-forest" />
        </span>
        <h3 className="font-display text-2xl font-semibold text-iron">
          Your booking request is in!
        </h3>
        <p className="max-w-md text-iron/75">
          We&apos;ll call to confirm your slaughtering date, walk through the
          Halal process, and finalize every detail. Need an answer right now?
          Give us a call and we&apos;ll take care of you.
        </p>
        <div className="mt-1 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="forest">
            <a href={SITE.phoneHref}>
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </Button>
          <Button onClick={() => setStatus("idle")} variant="outline">
            Submit another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-iron/10 bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-barn sm:p-8"
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-barn/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-barn">
        <CalendarDays className="h-3.5 w-3.5" /> On-Site Halal Booking
      </span>
      <h3 className="mt-4 font-display text-2xl font-semibold text-iron">
        Book your on-site slaughtering
      </h3>
      <p className="mt-1.5 text-sm text-iron/65">
        Reserve a date and we&apos;ll handle the rest under strict Halal
        standards. To simply buy meat or eggs, just{" "}
        <a href={SITE.phoneHref} className="font-semibold text-barn underline-offset-2 hover:underline">
          give us a call
        </a>
        .
      </p>

      {/* CONTACT */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={fieldClass}
            placeholder="(000) 000-0000"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className={labelClass}>
          Email <span className="font-normal text-iron/50">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>

      {/* BOOKING DETAILS */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="animal" className={labelClass}>
            Animal
          </label>
          <select
            id="animal"
            name="animal"
            required
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            {BOOKING_OPTIONS.map((a) => (
              <option key={a.slug} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="head" className={labelClass}>
            Number of animals
          </label>
          <input
            id="head"
            name="head"
            type="number"
            min={1}
            defaultValue={1}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClass}>
            Preferred date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="time" className={labelClass}>
            Preferred time
          </label>
          <select id="time" name="time" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Morning (8 AM – 11 AM)</option>
            <option>Midday (11 AM – 2 PM)</option>
            <option>Afternoon (2 PM – 6 PM)</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="booking-message" className={labelClass}>
          Cut &amp; processing preferences
        </label>
        <textarea
          id="booking-message"
          name="message"
          rows={3}
          className={fieldClass}
          placeholder="How would you like it cut, packaged, and prepared?"
        />
      </div>

      {/* Mandatory Halal Safety & Standards disclosure */}
      <div className="mt-5 overflow-hidden rounded-xl border-2 border-forest/25 bg-forest/5">
        <p className="flex items-center gap-2 border-b border-forest/15 bg-forest/10 px-4 py-3 font-display text-base font-semibold text-forest">
          <ShieldCheck className="h-5 w-5" /> Halal Safety &amp; Standards
        </p>
        <div className="p-4">
          <p className="text-sm leading-relaxed text-iron/75">
            All on-site slaughtering is performed under strict Islamic Halal
            guidelines by trained hands, following safe, humane, and sanitary
            practices. By booking, you acknowledge our Halal process and
            farm-safety standards.
          </p>
          <label className="group mt-3 flex cursor-pointer items-start gap-2.5 rounded-lg p-2 text-sm font-medium text-iron transition-colors hover:bg-forest/5">
            <input
              type="checkbox"
              name="halalAck"
              required
              className="mt-0.5 h-4 w-4 accent-forest transition-transform group-active:scale-90"
            />
            I have read and agree to the Halal Safety &amp; Standards above.
            <span className="text-barn">*</span>
          </label>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Request Booking
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-iron/50">
        Prefer to talk? Call us — we answer during farm hours.
      </p>
    </form>
  );
}
