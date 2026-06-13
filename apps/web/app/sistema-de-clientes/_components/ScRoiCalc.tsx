"use client";

import { useId, useMemo, useState } from "react";
import { track } from "../../../lib/analytics";
import { SC } from "../../../lib/site";

const peso = (n: number) =>
  n.toLocaleString("es-MX", { maximumFractionDigits: 0 });

/**
 * "La cuenta sale sola" — simple, backend-free ROI calculator.
 * Input: average job ticket. Output: how many jobs/year pay back the system
 * (setup + 12 months). Defaults to the vertical's low-end ticket.
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

  const annualCost = SC.setupDesde + SC.mensualidadDesde * 12;
  const trabajos = useMemo(() => {
    if (!ticket || ticket <= 0) return null;
    return Math.max(1, Math.ceil(annualCost / ticket));
  }, [ticket, annualCost]);

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
            placeholder="20,000"
          />
          <span className="sc-roi-mxn">MXN</span>
        </div>
      </div>

      <div className="sc-roi-out" role="status" aria-live="polite">
        {trabajos === null ? (
          <p className="sc-roi-hint">Escribe tu ticket promedio para ver la cuenta.</p>
        ) : trabajos <= 1 ? (
          <p className="sc-roi-result">
            <strong>Un solo trabajo</strong> paga el sistema de todo el año.
          </p>
        ) : (
          <p className="sc-roi-result">
            Te bastan <strong>{trabajos} trabajos</strong> en el año para recuperar
            la inversión completa del sistema.
          </p>
        )}
        <p className="sc-roi-base">
          Inversión del primer año: ${peso(annualCost)} MXN (instalación + 12 meses).
        </p>
      </div>
    </div>
  );
}
