import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prefix a public asset path with the base path (e.g. /Ferdows-farm on Pages).
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export const SITE = {
  name: "Ferdows Farm",
  phone: "(702) 354-7434",
  phoneHref: "tel:+17023547434",
  address: "16414 Harmony Rd, Huntley, IL",
  mapsQuery: "16414+Harmony+Rd,+Huntley,+IL",
} as const;
