export function BarnMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* roof */}
      <path
        d="M24 4 4 16v4l20-12 20 12v-4L24 4Z"
        fill="currentColor"
      />
      {/* body */}
      <path
        d="M8 18 24 8l16 10v24H8V18Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* door + cross brace */}
      <path
        d="M19 42V27h10v15M19 27l10 9M29 27l-10 9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
