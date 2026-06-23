/**
 * Flat farm-animal illustrations in the Fresh Pasture palette.
 * Used in place of emoji so artwork is crisp and consistent everywhere.
 * Each accepts a className for sizing (set width/height there).
 */

const WOOL = "#F4EEE1";
const WOOL_SHADE = "#E4D8C0";
const DARK = "#2E3329";
const TAN = "#C9A47A";
const TAN_SHADE = "#A8845C";
const COW = "#FBF7EF";
const SPOT = "#473425";
const SNOUT = "#DB9C84";
const CLAY = "#C96A3F";
const CLAY_SHADE = "#A8522D";
const COMB = "#C0392B";
const WHEAT = "#E0A23B";

export function SheepArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* legs */}
      {[24, 31, 39, 46].map((x) => (
        <rect key={x} x={x} y={42} width={3.6} height={15} rx={1.8} fill={DARK} />
      ))}
      {/* fluffy wool body */}
      <g fill={WOOL}>
        <circle cx={22} cy={32} r={9} />
        <circle cx={31} cy={27} r={9} />
        <circle cx={41} cy={27} r={9} />
        <circle cx={49} cy={33} r={8} />
        <ellipse cx={36} cy={37} rx={20} ry={12} />
      </g>
      <circle cx={31} cy={33} r={5} fill={WOOL_SHADE} opacity={0.6} />
      <circle cx={44} cy={36} r={4} fill={WOOL_SHADE} opacity={0.6} />
      {/* head */}
      <ellipse cx={16} cy={35} rx={7} ry={8} fill={DARK} />
      <ellipse cx={11} cy={29} rx={3} ry={4} fill={DARK} />
      <ellipse cx={15} cy={40} rx={4} ry={3} fill="#454b3e" />
      <circle cx={14} cy={34} r={1.5} fill={WOOL} />
    </svg>
  );
}

export function GoatArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {[25, 31, 39, 45].map((x) => (
        <rect key={x} x={x} y={42} width={3.4} height={15} rx={1.7} fill={TAN_SHADE} />
      ))}
      <ellipse cx={35} cy={36} rx={18} ry={11} fill={TAN} />
      <ellipse cx={42} cy={36} rx={9} ry={7} fill={TAN_SHADE} opacity={0.5} />
      {/* head */}
      <ellipse cx={16} cy={33} rx={7} ry={7} fill={TAN} />
      {/* horns */}
      <path d="M14 27 q-3 -9 3 -11" stroke={TAN_SHADE} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <path d="M18 27 q-1 -8 5 -9" stroke={TAN_SHADE} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      {/* floppy ear */}
      <ellipse cx={11} cy={34} rx={4.5} ry={2.6} fill={TAN_SHADE} transform="rotate(-18 11 34)" />
      {/* beard */}
      <path d="M14 38 l1.5 7 l1.5 -7 z" fill={TAN_SHADE} />
      <circle cx={14} cy={32} r={1.3} fill={DARK} />
    </svg>
  );
}

export function CowArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {[23, 31, 39, 47].map((x) => (
        <rect key={x} x={x} y={42} width={3.8} height={15} rx={1.9} fill={SPOT} />
      ))}
      {/* tail */}
      <path d="M53 30 q7 5 3 18" stroke={SPOT} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <circle cx={56} cy={49} r={2.2} fill={SPOT} />
      {/* body + spots */}
      <ellipse cx={34} cy={35} rx={20} ry={13} fill={COW} />
      <ellipse cx={29} cy={31} rx={6} ry={5} fill={SPOT} />
      <ellipse cx={44} cy={39} rx={5} ry={4} fill={SPOT} />
      <ellipse cx={22} cy={40} rx={3.2} ry={2.6} fill={SPOT} />
      {/* head */}
      <ellipse cx={15} cy={32} rx={7} ry={8} fill={COW} />
      <ellipse cx={9} cy={28} rx={3} ry={2.4} fill={COW} transform="rotate(-20 9 28)" />
      <path d="M12 24 q-2 -4 1 -6" stroke={SPOT} strokeWidth={2} fill="none" strokeLinecap="round" />
      <ellipse cx={13} cy={37} rx={5} ry={3.4} fill={SNOUT} />
      <circle cx={11} cy={37} r={0.9} fill={CLAY_SHADE} />
      <circle cx={15} cy={37} r={0.9} fill={CLAY_SHADE} />
      <circle cx={16} cy={30} r={1.4} fill={DARK} />
    </svg>
  );
}

export function HenArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* egg in the nest */}
      <ellipse cx={50} cy={50} rx={5} ry={6} fill={COW} stroke={WOOL_SHADE} strokeWidth={1.2} />
      {/* legs */}
      <path d="M27 49 v6 M24 55 h6 M35 49 v6 M32 55 h6" stroke={WHEAT} strokeWidth={2} fill="none" strokeLinecap="round" />
      {/* tail feathers */}
      <path d="M44 32 q12 -4 13 -16 q3 11 -5 20 z" fill={CLAY_SHADE} />
      <path d="M43 34 q10 0 14 -9 q0 10 -9 15 z" fill={CLAY} />
      {/* body */}
      <ellipse cx={31} cy={37} rx={15} ry={13} fill={CLAY} />
      {/* wing */}
      <path d="M30 30 q11 1 14 11 q-9 5 -16 -1 q-1 -6 2 -10 z" fill={CLAY_SHADE} />
      {/* head */}
      <circle cx={22} cy={24} r={8} fill={CLAY} />
      {/* comb */}
      <g fill={COMB}>
        <circle cx={19} cy={15} r={2.4} />
        <circle cx={23} cy={14} r={2.6} />
        <circle cx={26} cy={16} r={2.2} />
      </g>
      {/* beak */}
      <path d="M14 23 l-6 2 l6 3 z" fill={WHEAT} />
      {/* wattle */}
      <ellipse cx={15} cy={30} rx={2} ry={3} fill={COMB} />
      <circle cx={21} cy={22} r={1.5} fill={DARK} />
    </svg>
  );
}

export function AnimalArt({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  switch (slug) {
    case "goats":
      return <GoatArt className={className} />;
    case "cattle":
      return <CowArt className={className} />;
    case "eggs":
      return <HenArt className={className} />;
    case "sheep":
    default:
      return <SheepArt className={className} />;
  }
}
