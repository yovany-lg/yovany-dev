"use client";

import { useEffect } from "react";

/**
 * Env-gated PostHog loader. Renders its children untouched and does nothing
 * unless NEXT_PUBLIC_POSTHOG_KEY is set, so local/dev and unconfigured builds
 * stay clean. Exposes `window.posthog` for the `track()` helper in
 * lib/analytics. Pageviews are captured automatically by PostHog.
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;
    const host =
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

    let cancelled = false;
    void import("posthog-js").then(({ default: posthog }) => {
      if (cancelled) return;
      posthog.init(key, {
        api_host: host,
        capture_pageview: true,
        capture_pageleave: true,
        person_profiles: "identified_only",
      });
      // Tag every event with the app so Sendero and yovany.dev stay separable
      // inside a single shared PostHog project. yovany.dev events lack this
      // property, which itself distinguishes them.
      posthog.register({ app: "sendero" });
      (window as unknown as { posthog: unknown }).posthog = posthog;
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return <>{children}</>;
}
