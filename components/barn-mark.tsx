export function BarnMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* horns */}
      <path d="M12 17C8 12 3 11 3 11c0 4 2 8 6 9" />
      <path d="M36 17c4-5 9-6 9-6 0 4-2 8-6 9" />
      {/* head */}
      <path d="M12 17c0-7 5-11 12-11s12 4 12 11c0 5-2 9-5 12-2 2-4 4-7 4s-5-2-7-4c-3-3-5-7-5-12Z" />
      {/* ears */}
      <path d="M12 18c-3-1-5 0-6 2M36 18c3-1 5 0 6 2" />
      {/* eyes + snout */}
      <path d="M19 22h.01M29 22h.01" />
      <path d="M21 31c2 1.5 4 1.5 6 0" />
      <path d="M20 27h8" opacity="0.5" />
    </svg>
  );
}
