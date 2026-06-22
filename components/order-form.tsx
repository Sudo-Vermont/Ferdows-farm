"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LIVESTOCK } from "@/lib/data";

const fieldClass =
  "w-full rounded-md border-2 border-iron/15 bg-sand px-4 py-2.5 text-iron placeholder:text-iron/40 outline-none transition-colors focus:border-barn focus:ring-2 focus:ring-barn/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-iron";

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
      <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-forest/30 bg-forest/5 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-forest" />
        <h3 className="font-display text-2xl font-semibold text-iron">
          Thank you — your inquiry is in!
        </h3>
        <p className="max-w-md text-iron/75">
          We&apos;ll reach out shortly to confirm availability and pricing. Need
          an answer right now? Give us a call and we&apos;ll take care of you.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-iron/10 bg-card p-7 shadow-sm sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold text-iron">
        Order Inquiry
      </h3>
      <p className="mt-1 text-sm text-iron/65">
        Tell us what you need and we&apos;ll get right back to you.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
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

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="animal" className={labelClass}>
            Livestock
          </label>
          <select id="animal" name="animal" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {LIVESTOCK.map((a) => (
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

      <div className="mt-4">
        <label htmlFor="message" className={labelClass}>
          Details (cut preferences, pickup date, questions)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Let us know how we can help…"
        />
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
            <Send className="h-4 w-4" /> Send Inquiry
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-iron/50">
        Prefer to talk? Call us — we answer during farm hours.
      </p>
    </form>
  );
}
