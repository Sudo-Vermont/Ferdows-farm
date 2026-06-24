/* Hand-drawn butcher-chart line art. Stroke uses currentColor. */

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 100 100",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Drumstick({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M30 44c-6-14 4-30 20-30 13 0 22 11 20 24-2 11-12 16-21 14l-3 2" />
      <path d="M46 54 71 79" />
      <circle cx="78" cy="74" r="6" />
      <circle cx="73" cy="83" r="6" />
      <path d="M40 36c2-6 8-9 13-8" opacity="0.6" />
    </svg>
  );
}

export function Steak({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M26 36c-9 7-10 24 1 33 13 11 41 12 52 1 8-8 7-25-3-33-14-11-40-12-50-1Z" />
      <path d="M53 41v34" />
      <path d="M53 58H37" />
      <path d="M64 50c4 3 5 9 2 14" opacity="0.55" />
      <path d="M70 46c5 4 6 12 2 19" opacity="0.4" />
    </svg>
  );
}

export function Ribs({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M18 34c22-9 46-9 66 0" />
      <path d="M16 64c24 9 48 9 70 0" />
      <path d="M24 35v30" />
      <path d="M38 31v36" />
      <path d="M52 29v39" />
      <path d="M66 31v36" />
      <path d="M78 35v29" />
    </svg>
  );
}

export function Sausage({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M32 26c20-7 38 5 38 24 0 14-11 22-24 20-11-2-16-12-13-21 2-7 9-11 16-9 5 2 8 7 6 12" />
      <path d="M30 24l-6-6" />
      <path d="M28 30l-8-3" />
    </svg>
  );
}

export function Cleaver({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M18 28h44a5 5 0 0 1 5 5v23a5 5 0 0 1-5 5H18Z" />
      <circle cx="27" cy="37" r="2.5" />
      <path d="M67 41h17a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H67Z" />
    </svg>
  );
}

export function Herb({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M50 92c-1-22-1-40-1-58"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M49 40c-9-3-14-11-12-21 9 2 14 10 12 21Z" />
      <path d="M50 40c9-3 14-11 12-21-9 2-14 10-12 21Z" />
      <path d="M49 56c-9-3-14-11-12-21 9 2 14 10 12 21Z" />
      <path d="M50 56c9-3 14-11 12-21-9 2-14 10-12 21Z" />
      <path d="M49 72c-8-3-12-10-11-19 8 2 13 9 11 19Z" />
      <path d="M50 72c8-3 12-10 11-19-8 2-13 9-11 19Z" />
    </svg>
  );
}

/* Circular wax/quality stamp with curved text. */
export function WaxStamp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <defs>
        <path
          id="stamp-top"
          d="M80 80 m -58,0 a 58,58 0 1,1 116,0"
          fill="none"
        />
        <path
          id="stamp-bottom"
          d="M80 80 m 58,0 a 58,58 0 1,1 -116,0"
          fill="none"
        />
      </defs>
      <circle cx="80" cy="80" r="74" fill="currentColor" opacity="0.12" />
      <circle
        cx="80"
        cy="80"
        r="70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="80"
        cy="80"
        r="52"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 5"
      />
      <text
        fill="currentColor"
        style={{ fontSize: "15px", letterSpacing: "4px", fontWeight: 700 }}
      >
        <textPath href="#stamp-top" startOffset="50%" textAnchor="middle">
          PREMIUM HALAL
        </textPath>
      </text>
      <text
        fill="currentColor"
        style={{ fontSize: "13px", letterSpacing: "4px", fontWeight: 600 }}
      >
        <textPath href="#stamp-bottom" startOffset="50%" textAnchor="middle">
          THE HALAL WAY · FERDOWS
        </textPath>
      </text>
      {/* center mark */}
      <text
        x="80"
        y="74"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontSize: "30px", fontWeight: 800, letterSpacing: "1px" }}
      >
        100%
      </text>
      <text
        x="80"
        y="94"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontSize: "11px", letterSpacing: "3px", fontWeight: 600 }}
      >
        ETHICAL
      </text>
      <path
        d="M62 104h36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
