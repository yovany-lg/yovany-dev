import type { Resumen } from "../../../content/sistema-de-clientes/verticales";

/**
 * The structured prospect summary the owner receives — the product's "oro".
 * Styled like a WhatsApp notification. Shared by vertical pages and the demo.
 */
export function ResumenCard({ resumen }: { resumen: Resumen }) {
  return (
    <div className="sc-resumen card">
      <p className="sc-resumen-head">🔔 Nuevo prospecto</p>
      <dl className="sc-resumen-list">
        <div className="sc-resumen-row">
          <dt>Servicio</dt>
          <dd>{resumen.servicio}</dd>
        </div>
        {resumen.lineas.map((l) => (
          <div className="sc-resumen-row" key={l.label}>
            <dt>{l.label}</dt>
            <dd>{l.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
