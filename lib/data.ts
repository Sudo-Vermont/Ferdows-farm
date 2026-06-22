export type Animal = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  emoji: string;
};

export const LIVESTOCK: Animal[] = [
  {
    slug: "sheep",
    name: "Sheep & Lambs",
    tagline: "Tender, pasture-raised, milk-fed",
    description:
      "Grass-fed lambs and mature sheep raised on open pasture. Ideal for Aqiqah, Eid celebrations, and everyday family meals.",
    details: [
      "Spring & milk-fed lambs available",
      "Hand-selected for weight & health",
      "Raised without growth hormones",
    ],
    emoji: "🐑",
  },
  {
    slug: "goats",
    name: "Goats",
    tagline: "Lean, flavorful, free-range",
    description:
      "Healthy free-range goats of various sizes. A favorite for traditional dishes, celebrations, and Halal home cooking.",
    details: [
      "Young to full-grown sizes",
      "Open-range, grain-finished",
      "Selected the morning of pickup",
    ],
    emoji: "🐐",
  },
  {
    slug: "cattle",
    name: "Cows & Cattle",
    tagline: "Robust, grass-fed beef cattle",
    description:
      "Well-cared-for cattle for whole, half, or share purchases. Perfect for families, gatherings, and Qurbani.",
    details: [
      "Whole, half & quarter shares",
      "Grass-fed, pasture-raised",
      "Custom cut to your request",
    ],
    emoji: "🐄",
  },
];

export const HALAL_STANDARDS = [
  {
    title: "Certified Halal Process",
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
