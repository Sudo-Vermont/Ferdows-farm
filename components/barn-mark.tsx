export function BarnMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* sun rays */}
      <g
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.85"
      >
        <path d="M24 3v5" />
        <path d="M24 40v5" />
        <path d="M45 24h-5" />
        <path d="M8 24H3" />
        <path d="M38.9 9.1l-3.5 3.5" />
        <path d="M12.6 35.4l-3.5 3.5" />
        <path d="M38.9 38.9l-3.5-3.5" />
        <path d="M12.6 12.6L9.1 9.1" />
      </g>
      {/* sun disc */}
      <circle cx="24" cy="24" r="9.5" fill="currentColor" fillOpacity="0.92" />
      {/* wheat stalk arcing across the sun */}
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      >
        <path d="M24 31c0-5 1.5-8 4.5-11" />
        <path d="M27 24c-1.6-.4-2.8-1.6-3.2-3.2 1.6.4 2.8 1.6 3.2 3.2Z" />
        <path d="M29 21c-1.6-.4-2.8-1.6-3.2-3.2 1.6.4 2.8 1.6 3.2 3.2Z" />
      </g>
    </svg>
  );
}
