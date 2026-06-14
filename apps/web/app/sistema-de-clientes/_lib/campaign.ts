"use client";

import { useEffect, useState } from "react";

/**
 * Reads the campaign source from the URL (`?utm_source=...`, or `?ref=...`)
 * so every link dropped in a Facebook group is attributable. Returns "" on
 * the server and until mount (avoids hydration mismatch), then the real value.
 *
 * Used to (a) tag PostHog events and (b) carry the source into the pre-filled
 * WhatsApp message ("Vengo de: grupo-x"), so you learn which group converts.
 */
export function useCampaign(): string {
  const [source, setSource] = useState("");

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      const s = (p.get("utm_source") || p.get("ref") || "").trim();
      if (s) setSource(s.slice(0, 64));
    } catch {
      /* no-op */
    }
  }, []);

  return source;
}

/** Append the campaign source to a WhatsApp message when present. */
export function withSource(message: string, source: string): string {
  return source ? `${message} (Vengo de: ${source})` : message;
}
