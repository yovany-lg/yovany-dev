"use client";

import { useEffect } from "react";

/**
 * Env-gated PostHog loader. Renders nothing and does nothing unless
 * NEXT_PUBLIC_POSTHOG_KEY is set, so local/dev and unconfigured builds
 * stay clean. Exposes `window.posthog` for the `track()` helper.
 */
export function Analytics() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

    let cancelled = false;
    void import("posthog-js").then(({ default: posthog }) => {
      if (cancelled) return;
      posthog.init(key, {
        api_host: host,
        capture_pageview: true,
        capture_pageleave: true,
        person_profiles: "identified_only",
      });
      (window as unknown as { posthog: unknown }).posthog = posthog;
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
