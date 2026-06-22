"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Send,
  ShoppingBasket,
  CalendarDays,
  ShieldCheck,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LIVESTOCK } from "@/lib/data";

type Mode = "purchase" | "booking";

const fieldClass =
  "w-full rounded-md border-2 border-iron/15 bg-sand px-4 py-2.5 text-iron placeholder:text-iron/40 outline-none transition-colors focus:border-barn focus:ring-2 focus:ring-barn/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-iron";

// Products available for slaughter bookings (Option B) vs. all products (Option A).
const PURCHASE_OPTIONS = LIVESTOCK;
const BOOKING_OPTIONS = LIVESTOCK.filter((a) => a.bookable);

export function OrderForm() {
  const [mode, setMode] = useState<Mode>("purchase");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // No backend wired up yet — simulate a submission and confirm to the user.
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-forest/30 bg-forest/5 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-forest" />
        <h3 className="font-display text-2xl font-semibold text-iron">
          {mode === "booking"
            ? "Thank you — your booking request is in!"
            : "Thank you — your inquiry is in!"}
        </h3>
        <p className="max-w-md text-iron/75">
          {mode === "booking"
            ? "We'll call to confirm your slaughtering date, walk through the Halal process, and finalize the details. "
            : "We'll reach out by phone or email shortly to confirm availability and pricing. "}
          Need an answer right now? Give us a call and we&apos;ll take care of
          you.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Submit another inquiry
        </Button>
      </div>
    );
  }

  const tabBase =
    "flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-iron/10 bg-card p-7 shadow-sm sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold text-iron">
        How can we help?
      </h3>
      <p className="mt-1 text-sm text-iron/65">
        Choose what you need below — the form adjusts to match.
      </p>

      {/* MODE TOGGLE */}
      <div
        role="tablist"
        aria-label="Inquiry type"
        className="mt-5 grid grid-cols-1 gap-2 rounded-xl border border-iron/10 bg-sand-dark/40 p-1.5 sm:grid-cols-2"
      >
        <button
          type="button"
          role="tab"
          aria-selected={mode === "purchase"}
          onClick={() => setMode("purchase")}
          className={`${tabBase} ${
            mode === "purchase"
              ? "bg-barn text-sand shadow-sm"
              : "text-iron/70 hover:text-iron"
          }`}
        >
          <ShoppingBasket className="h-4 w-4" /> Purchase Meat / Products
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "booking"}
          onClick={() => setMode("booking")}
          className={`${tabBase} ${
            mode === "booking"
              ? "bg-barn text-sand shadow-sm"
              : "text-iron/70 hover:text-iron"
          }`}
        >
          <CalendarDays className="h-4 w-4" /> Book On-Site Slaughtering
        </button>
      </div>

      {/* CONTACT (shared) */}
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
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>

      {/* ───────── OPTION A: PURCHASE ───────── */}
      {mode === "purchase" && (
        <>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="product" className={labelClass}>
                Product
              </label>
              <select
                id="product"
                name="product"
                className={fieldClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select…
                </option>
                {PURCHASE_OPTIONS.map((a) => (
                  <option key={a.slug} value={a.name}>
                    {a.name}
                  </option>
                ))}
                <option value="Not sure">Not sure / need guidance</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className={labelClass}>
                Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min={1}
                defaultValue={1}
                className={fieldClass}
              />
            </div>
          </div>

          <fieldset className="mt-4">
            <legend className={labelClass}>Pickup or delivery?</legend>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {["Farm pickup", "Local delivery"].map((opt, i) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center gap-2 rounded-md border-2 border-iron/15 bg-sand px-4 py-2.5 text-iron transition-colors has-[:checked]:border-barn has-[:checked]:bg-barn/5"
                >
                  <input
                    type="radio"
                    name="fulfillment"
                    value={opt}
                    defaultChecked={i === 0}
                    className="accent-barn"
                  />
                  <span className="text-sm font-medium">{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-4">
            <label htmlFor="message" className={labelClass}>
              Details (cut preferences, pickup window, questions)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={fieldClass}
              placeholder="Let us know how we can help…"
            />
          </div>

          <p className="mt-4 flex items-start gap-2 rounded-md bg-forest/5 p-3 text-sm text-iron/75">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
            No booking needed for product purchases. Availability and pricing are
            confirmed via phone or email.
          </p>
        </>
      )}

      {/* ───────── OPTION B: BOOK SLAUGHTERING ───────── */}
      {mode === "booking" && (
        <>
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
              <select
                id="time"
                name="time"
                className={fieldClass}
                defaultValue=""
              >
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
              Cut & processing preferences
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
          <div className="mt-5 rounded-xl border-2 border-forest/25 bg-forest/5 p-4">
            <p className="flex items-center gap-2 font-display text-base font-semibold text-forest">
              <ShieldCheck className="h-5 w-5" /> Halal Safety &amp; Standards
            </p>
            <p className="mt-2 text-sm leading-relaxed text-iron/75">
              All on-site slaughtering is performed under strict Islamic Halal
              guidelines by trained hands, following safe, humane, and sanitary
              practices. By booking, you acknowledge our Halal process and
              farm-safety standards.
            </p>
            <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-sm font-medium text-iron">
              <input
                type="checkbox"
                name="halalAck"
                required
                className="mt-0.5 h-4 w-4 accent-forest"
              />
              I have read and agree to the Halal Safety &amp; Standards above.
              <span className="text-barn">*</span>
            </label>
          </div>
        </>
      )}

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
            <Send className="h-4 w-4" />
            {mode === "booking" ? "Request Booking" : "Send Inquiry"}
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-iron/50">
        Prefer to talk? Call us — we answer during farm hours.
      </p>
    </form>
  );
}
