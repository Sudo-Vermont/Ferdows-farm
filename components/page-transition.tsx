"use client";

import { usePathname } from "next/navigation";

/**
 * Re-keys its subtree on every route change so the page-in animation replays,
 * giving a smooth fade-and-rise transition on navigation/redirects.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="animate-page-in">
      {children}
    </div>
  );
}
