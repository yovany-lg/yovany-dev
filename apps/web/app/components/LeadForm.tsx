"use client";

import { useState } from "react";
import { track, identifyLead } from "../../lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? ""); // honeypot

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, source: "lead-magnet" }),
      });
      const json = (await res.json()) as {
        ok: boolean;
        error?: string;
        downloadUrl?: string;
      };

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setDownloadUrl(json.downloadUrl ?? null);
      setMessage("You're in — your guide is ready:");
      identifyLead(email, { source: "lead-magnet" });
      track("lead_captured", { source: "lead-magnet" });
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Please try again.");
      track("lead_submit_error");
    }
  }

  if (status === "success") {
    return (
      <div className="lead-form" role="status" aria-live="polite">
        <p className="lead-msg lead-msg-success">{message}</p>
        {downloadUrl ? (
          <a
            className="btn btn-ghost btn-sm"
            style={{ marginTop: "1rem" }}
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download the guide now →
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate>
      <div className="lead-field">
        <label htmlFor="lead-email" className="hp-field">
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className="lead-input"
          aria-label="Email address"
          disabled={status === "loading"}
        />
        {/* Honeypot — hidden from humans, catches bots. */}
        <div className="hp-field" aria-hidden>
          <label htmlFor="lead-company">Company</label>
          <input
            id="lead-company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send me the guide"}
        </button>
      </div>
      {status === "error" ? (
        <p className="lead-msg lead-msg-error" role="alert">
          {message}
        </p>
      ) : null}
      <p className="lead-privacy">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
