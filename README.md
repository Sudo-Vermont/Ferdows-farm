# Ferdows Farm

Marketing site for **Ferdows Farm** — Halal-certified sheep, goats, and cattle in Huntley, IL.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **shadcn-style** components.

## The "Barn Door" hero

The homepage hero is the signature feature: two heavy, plank-textured barn doors
with iron strap-hinges and ring handles that **swing wide open** on load (3D
`rotateY`), revealing a warm, Edison-lit barn interior — beams, glowing bulbs,
and straw — where the headline and calls-to-action live. It's built entirely in
CSS (no image assets), so it loads fast and stays sharp on every screen.

## Pages

| Route        | Purpose                                                        |
| ------------ | -------------------------------------------------------------- |
| `/`          | Homepage — barn-door hero, trust band, story, livestock preview |
| `/livestock` | Livestock breakdown (sheep / goats / cattle) + Halal standards |
| `/contact`   | Map, click-to-call, and an order inquiry form                  |

## Design system

- **Type:** Fraunces (display) + Bitter (body) — warm, rustic, editorial.
- **Palette:** Barn Red `#7C2D23`, Forest Green `#2C4A3B`, Sandy Beige `#F2E8D5`,
  Weathered Iron `#1E1A16`, Edison Amber `#E8A84C`.
- Mobile-first navigation with a prominent click-to-call button.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Notes

- Business details (phone, address, map query) live in `lib/utils.ts` (`SITE`).
- Livestock + Halal copy lives in `lib/data.ts`.
- The order form (`components/order-form.tsx`) currently confirms client-side
  and has no backend wired up — connect it to an email service or API route
  (e.g. a Next.js Route Handler) before going live.
