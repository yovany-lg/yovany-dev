"use client";

import Link from "next/link";
import { track } from "../../lib/analytics";

/**
 * The single primary CTA, reused everywhere with identical wording.
 * Routes to the on-site `/call` page (keeps the no-pressure blurb + intake
 * in view and lets us fire analytics) and reports its placement.
 */
export function BookCallButton({
  label = "Book a free 20-min fit call",
  location,
  variant = "primary",
  size,
  className = "",
}: {
  label?: string;
  location: string;
  variant?: "primary" | "ghost";
  size?: "sm";
  className?: string;
}) {
  return (
    <Link
      href="/call"
      onClick={() => track("cta_book_call", { location })}
      className={`btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`}
      data-cta="book-call"
    >
      {label}
      <span aria-hidden>→</span>
    </Link>
  );
}
