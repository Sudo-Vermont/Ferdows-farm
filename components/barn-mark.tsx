export function BarnMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* rising sun */}
      <circle cx="24" cy="20" r="8" fill="currentColor" fillOpacity="0.9" />
      {/* sun rays */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7">
        <path d="M24 6v3" />
        <path d="M38 20h-3" />
        <path d="M13 20h-3" />
        <path d="M33.9 10.1l-2.1 2.1" />
        <path d="M14.1 10.1l2.1 2.1" />
      </g>
      {/* rolling hills */}
      <path
        d="M2 34c6-6 11-6 16 0s11 6 16 0 8-4 12 0v10H2V34Z"
        fill="currentColor"
        fillOpacity="0.28"
      />
      <path
        d="M2 39c5-4 9-4 14 0s11 4 16-1 9-2 14 1v5H2v-5Z"
        fill="currentColor"
      />
      {/* sprout */}
      <path
        d="M24 33v-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 30c-1.6 0-3-1.4-3-3 1.6 0 3 1.4 3 3Zm0 0c1.6 0 3-1.4 3-3-1.6 0-3 1.4-3 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
