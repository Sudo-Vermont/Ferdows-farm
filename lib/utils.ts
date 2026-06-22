import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Ferdows Farm",
  phone: "(702) 354-7434",
  phoneHref: "tel:+17023547434",
  address: "16414 Harmony Rd, Huntley, IL",
  mapsQuery: "16414+Harmony+Rd,+Huntley,+IL",
} as const;
