export type Animal = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  emoji: string;
  /** Photo in /public/images used on cards and detail tiles. */
  image: string;
  /** Whether on-site Halal slaughtering can be booked for this product. */
  bookable: boolean;
};

export const LIVESTOCK: Animal[] = [
  {
    slug: "sheep",
    name: "Sheep & Lambs",
    tagline: "Tender, grass-fed, pasture-raised",
    description:
      "Grass-fed lambs and mature sheep raised on open pasture. Ideal for Aqiqah, Eid celebrations, and everyday family meals.",
    details: ["Grass-fed on open pasture", "No added growth hormones"],
    emoji: "🐑",
    image: "/images/sheep.jpg",
    bookable: true,
  },
  {
    slug: "goats",
    name: "Goats",
    tagline: "Lean, flavorful, free-range",
    description:
      "Healthy free-range goats of various sizes. A favorite for traditional dishes, celebrations, and Halal home cooking.",
    details: ["Grass-fed on open pasture", "No added growth hormones"],
    emoji: "🐐",
    image: "/images/goat.jpg",
    bookable: true,
  },
  {
    slug: "cattle",
    name: "Cows & Cattle",
    tagline: "Robust, grass-fed beef cattle",
    description:
      "Well-cared-for cattle for whole, half, or share purchases. Perfect for families, gatherings, and Qurbani.",
    details: ["Grass-fed on open pasture", "No added growth hormones"],
    emoji: "🐄",
    image: "/images/cow.jpg",
    bookable: true,
  },
  {
    slug: "eggs",
    name: "Farm-Fresh Chicken Eggs",
    tagline: "Free-range, collected daily",
    description:
      "Free-range chicken eggs gathered fresh each morning from hens that roam clean, open pasture. Rich golden yolks you can taste the difference in.",
    details: ["Free-range, pasture-raised hens", "No added hormones"],
    emoji: "🥚",
    image: "/images/hen.jpg",
    bookable: false,
  },
];

export const HALAL_STANDARDS = [
  {
    title: "Traditional Halal Process",
    body: "Every animal is processed in strict accordance with Islamic Halal guidelines by trained, knowledgeable hands — start to finish.",
  },
  {
    title: "Ethical, Humane Care",
    body: "Animals live on open pasture with clean water, room to roam, and genuine daily care. Stress-free living means healthier livestock.",
  },
  {
    title: "No Hormones or Additives",
    body: "We raise our stock the honest way — no added growth hormones, no shortcuts. Just good feed, clean barns, and time.",
  },
  {
    title: "Full Transparency",
    body: "Visit the farm, meet the animals, and see exactly how they're raised. Trust is something we believe you should be able to see.",
  },
];
