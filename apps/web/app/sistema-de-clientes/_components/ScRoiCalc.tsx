"use client";

import { useId, useMemo, useState } from "react";
import { track } from "../../../lib/analytics";
import { SC } from "../../../lib/site";

const peso = (n: number) =>
  n.toLocaleString("es-MX", { maximumFractionDigits: 0 });

/**
 * "La cuenta sale sola" — simple, backend-free ROI calculator.
 * Input: average job ticket. Output: how many months of the agent a single
 * recovered job pays for. Defaults to the vertical's low-end ticket.
 */
export function ScRoiCalc({
  defaultTicket,
  vertical,
}: {
  defaultTicket: number;
  vertical: string;
}) {
  const id = useId();
  const [ticket, setTicket] = useState(defaultTicket);
  const [touched, setTouched] = useState(false);

  const mensual = SC.mensualidadDesde;
  const meses = useMemo(() => {
    if (!ticket || ticket <= 0) return null;
    return Math.max(1, Math.floor(ticket / mensual));
  }, [ticket, mensual]);

  function onChange(value: string) {
    const n = Number(value.replace(/[^\d]/g, ""));
    setTicket(Number.isFinite(n) ? n : 0);
    if (!touched) {
      setTouched(true);
      track("sc_calculator_used", { vertical });
    }
  }

  return (
    <div className="sc-roi card">
      <div className="sc-roi-field">
        <label htmlFor={id} className="sc-roi-label">
          ¿Cuánto cobras, en promedio, por un trabajo?
        </label>
        <div className="sc-roi-input-wrap">
          <span aria-hidden>$</span>
          <input
            id={id}
            inputMode="numeric"
            value={ticket ? peso(ticket) : ""}
            onChange={(e) => onChange(e.target.value)}
            className="sc-roi-input"
            aria-label="Ticket promedio en pesos"
            placeholder="15,000"
          />
          <span className="sc-roi-mxn">MXN</span>
        </div>
      </div>

      <div className="sc-roi-out" role="status" aria-live="polite">
        {meses === null ? (
          <p className="sc-roi-hint">Escribe tu ticket promedio para ver la cuenta.</p>
        ) : (
          <p className="sc-roi-result">
            Un solo trabajo de ${peso(ticket)} paga{" "}
            <strong>
              {meses} {meses === 1 ? "mes" : "meses"}
            </strong>{" "}
            del agente. Recuperar un cliente perdido ya lo pagó.
          </p>
        )}
        <p className="sc-roi-base">
          El agente cuesta ${peso(mensual)}/mes · instalación desde $
          {peso(SC.setupDesde)} (una sola vez).
        </p>
      </div>
    </div>
  );
}
