"use client";

import { useState } from "react";
import { track } from "../../../lib/analytics";
import { useCampaign } from "../_lib/campaign";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Fallback capture form (nombre, giro, WhatsApp) for visitors who'd rather
 * not open WhatsApp directly. Posts to /api/sistema-de-clientes, which emails
 * Yovany. Hidden `company` honeypot, same pattern as the English lead form.
 */
export function ScLeadForm({ vertical }: { vertical: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const source = useCampaign();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nombre: String(data.get("nombre") ?? "").trim(),
      giro: String(data.get("giro") ?? "").trim(),
      whatsapp: String(data.get("whatsapp") ?? "").trim(),
      company: String(data.get("company") ?? ""), // honeypot
      vertical,
      source,
    };

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/sistema-de-clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Algo salió mal. Inténtalo de nuevo.");
      }
      setStatus("success");
      setMessage("¡Listo! Te escribo por WhatsApp muy pronto.");
      track("sc_lead_submit", { vertical, source });
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Inténtalo de nuevo.");
      track("sc_lead_error", { vertical });
    }
  }

  if (status === "success") {
    return (
      <div className="sc-lead" role="status" aria-live="polite">
        <p className="sc-lead-success">{message}</p>
      </div>
    );
  }

  return (
    <form className="sc-lead" onSubmit={onSubmit} noValidate>
      <div className="sc-lead-fields">
        <input
          name="nombre"
          type="text"
          autoComplete="name"
          required
          placeholder="Tu nombre"
          className="sc-lead-input"
          aria-label="Tu nombre"
          disabled={status === "loading"}
        />
        <input
          name="giro"
          type="text"
          required
          placeholder="¿A qué se dedica tu negocio?"
          className="sc-lead-input"
          aria-label="Giro de tu negocio"
          disabled={status === "loading"}
        />
        <input
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          placeholder="Tu WhatsApp (10 dígitos)"
          className="sc-lead-input"
          aria-label="Tu número de WhatsApp"
          disabled={status === "loading"}
        />
        {/* Honeypot — hidden from humans, catches bots. */}
        <div className="hp-field" aria-hidden>
          <label htmlFor="sc-company">Empresa</label>
          <input id="sc-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Enviando…" : "Quiero más información"}
        </button>
      </div>
      {status === "error" ? (
        <p className="sc-lead-error" role="alert">
          {message}
        </p>
      ) : null}
      <p className="sc-lead-privacy">Sin spam. Solo te contacto sobre tu negocio.</p>
    </form>
  );
}
