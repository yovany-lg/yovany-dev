# Agente de WhatsApp — Paquete, verticales y spec para yovany.dev

> **Propósito:** Definir el producto (agente de WhatsApp con IA como core; sitio web sencillo y Google Business Profile como add-ons), el orden de verticales a atacar, y especificar las páginas que deben agregarse a yovany.dev. Pensado para ser ejecutado por Claude Code sobre el codebase existente (Next.js 15 + Tailwind + Cal.com + Resend + PostHog).

> **Cambio de modelo (importante):** El producto principal ahora es el AGENTE DE WHATSAPP, vendido en 3 niveles. El sitio web ya NO es el centro: es un add-on sencillo (una landing) para quien quiera que el botón de WhatsApp viva en algún lado y aparecer en Google. Esto simplifica la venta y la entrega.

---

## 1. Contexto del negocio

- **Quién vende:** Yovany (yovany.dev), ingeniero de software senior con 8+ años de experiencia y sistemas de IA en producción.
- **A quién se vende:** Negocios de servicios de ticket alto en Guadalajara y Zona Metropolitana (ver sección 2).
- **Problema que resuelve:** Pierden clientes porque no contestan WhatsApp a tiempo. El 78% de la gente le compra al primero que responde.
- **Promesa central (mensaje rector):** "Tu negocio contestando WhatsApp las 24 horas, aunque tú estés trabajando. Un asistente con inteligencia artificial que atiende, califica al cliente y te lo pasa listo para cotizar."
- **Cómo se vende el agente:** No por costo, por ROI. El precio se justifica con el dinero que recupera (clientes que hoy se van sin respuesta), no con las horas de desarrollo. Con que recupere UN cliente al mes, se paga solo.

---

## 2. Verticales objetivo y orden de ataque

Criterios: ticket del trabajo, urgencia del cliente final (justifica 24/7), gasto actual en marketing digital, y fit del agente con su proceso de venta.

### Tier 1 — Verticales principales (mensualidad objetivo: $3,000–$5,000/mes)

| #   | Vertical                                     | Ticket del trabajo             | Hook del agente                                             |
| --- | -------------------------------------------- | ------------------------------ | ----------------------------------------------------------- |
| 1   | **Energía solar**                            | $23,000–$120,000+ MXN          | Pide foto del recibo CFE → pre-dimensiona → lead calificado |
| 2   | **Clínicas dentales (implantes/ortodoncia)** | $1,300–$3,000 USD por implante | Califica tratamiento, agenda valoración, responde ES/EN     |
| 3   | **Despachos de abogados**                    | Honorarios altos por caso      | Filtra materia, etapa del caso, urgencia — 24/7             |
| 4   | **Remodelaciones / cocinas integrales**      | Hasta $80,000+ MXN             | Pide medidas, fotos del espacio, presupuesto objetivo       |

### Tier 2 — Verticales de entrada y casos de estudio (mensualidad: $2,500–$3,500/mes)

| #   | Vertical                           | Notas                                                        |
| --- | ---------------------------------- | ------------------------------------------------------------ |
| 5   | **Impermeabilización**             | Temporada de lluvias = se saturan de leads. Vender en junio. |
| 6   | **Portones eléctricos / canceles** | Primeros clientes vía red de Condominio Abelan.              |
| 7   | **Aires acondicionados**           | Instalación + mantenimiento recurrente; urgencia estacional. |
| 8   | **Clínicas estéticas**             | Lógica idéntica a dental.                                    |

### Secuencia comercial

1. **Semanas 1–3:** cerrar 1–2 de Tier 2 (impermeabilización/portones) vía red de Abelan → casos de estudio rápidos con métricas.
2. **Semanas 4–8:** con casos documentados, atacar Tier 1: solar → dental → abogados → remodelaciones, a precio lleno.
3. **Especialización:** el agente de un vertical se reutiliza para todos los clientes de ese vertical con cambios mínimos.

---

## 3. Producto: Agente de WhatsApp (3 niveles) + add-ons

### 3.1 Niveles del agente (CORE)

| Nivel        | Setup (MXN)    | Mensual (MXN) | Qué hace                                                                                                                           |
| ------------ | -------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Básico**   | $8,000–12,000  | $2,000–2,500  | Un objetivo: contesta 24/7, responde dudas frecuentes, manda info/catálogo, captura el contacto.                                   |
| **Pro** ⭐   | $15,000–20,000 | $3,000–3,500  | Punto dulce. Califica al lead con preguntas del giro (m², colonia, fotos, urgencia), agenda, y entrega resumen listo para cotizar. |
| **Avanzado** | $22,000–28,000 | $4,000–5,000  | Multi-flujo, cotizador automático con rangos, panel de leads, integraciones.                                                       |

### 3.2 Qué cubre la mensualidad (defensa del recurrente)

A diferencia de un sitio web (casi puro margen), el agente tiene costos vivos: WhatsApp Business API, IA/tokens, VPS (Hostinger), y mantenimiento. La mensualidad cubre operación, ajustes (precios/servicios/horarios), soporte y esos costos de plataforma. **No bajar de ~$2,500/mes**: abajo de eso el margen se adelgaza por COGS (~$300–800/mes reales por cliente, según volumen).

- Objeción "pago único / sin mensualidad" (que usan algunas agencias): responder que el agente tiene costos de operación continuos que un sitio estático no tiene — la mensualidad lo mantiene prendido y mejorando, no es renta.

### 3.3 Add-ons (suben ticket; el sitio web es uno más, no el centro)

- **Sitio web sencillo (1 landing):** +$4,000–6,000 setup, +$300–500/mes. Una página: servicios, fotos, zona de cobertura, botón gigante de WhatsApp. Para que el agente "viva" en algún lado y el negocio aparezca en Google. Deliberadamente simple.
- **Google Business Profile optimizado:** +$2,000–3,000 one-time. Categorías, fotos, zona de servicio, vinculación con el WhatsApp. (Para muchos giros, Maps trae más leads que el sitio.)
- **Motor de reseñas automatizado:** +$500–800/mes. Al cerrar un trabajo, el agente manda la liga de reseña de Google.
- **Campañas de reactivación:** recordatorios a clientes pasados (mantenimientos, renovaciones).
- **Cotizador automático con rangos** (si no viene ya en Avanzado).

### 3.4 Precio de primer cliente (esta semana)

Anclar en Pro ($15k + $3k). Margen para aterrizar el primer cliente en **$10–12k setup + $2,500/mes a cambio de ser caso de estudio** (testimonio + permiso de usar métricas). El descuento se paga con prueba social para cerrar a los siguientes a precio lleno.

---

## 4. Arquitectura de páginas en yovany.dev

### 4.1 Páginas por vertical: template + datos (no a mano)

- **Hub:** `/sistema-de-clientes` — landing genérica del agente (spec en sección 5).
- **Verticales:** `/sistema-de-clientes/[vertical]` — ruta dinámica, mismo template, contenido por vertical desde archivo de datos (`content/sistema-de-clientes/verticales.ts`).
- **Lanzar publicadas solo:** `impermeabilizacion`, `portones-electricos`, `paneles-solares`. Las otras 5 quedan con `published: false`.

### 4.2 Contenido por vertical (campos del archivo de datos)

slug, nombre del giro, H1 propio, 3 dolores del giro, conversación de ejemplo del agente (preguntas reales de calificación del vertical), rango de ticket para la sección de ROI, keywords SEO locales, 1–2 FAQ del giro, mensaje de WhatsApp precargado con el vertical.

### 4.3 Páginas de difusión (NO es un blog de SEO — son activos para compartir)

**Propósito:** páginas educativas que Yovany reparte a mano en grupos de Facebook y WhatsApp para correr la voz de lo que es posible. El SEO es un bonus, no el objetivo. Generan tráfico el día que se comparten, no en 3-6 meses → por eso van en paralelo al lanzamiento, no después.

- **Ruta:** `/recursos/[slug]` (o `/aprende/[slug]`). Cada página es una mini-landing independiente y enfocada en UN tema, NO un feed de blog. MDX, sin CMS.
- **No gated, mobile-first, carga rápida** (se abren desde un teléfono con 4G tras un tap en un grupo).
- **CTA único y repetido: "Obtén una cotización enfocada a tu negocio"** → manda a platicar con el AGENTE DE WHATSAPP real de Yovany (dogfooding: pedir la cotización ES la demo del producto). Botón → wa.me con mensaje precargado ("Hola, vi tu página sobre [tema] y quiero una cotización para mi negocio de \_\_\_\_"). Alternativa secundaria: Cal.com.

**Requisito crítico — tarjeta de previsualización (OG):** lo que decide los clics al pegar el link en un grupo es la tarjeta de preview, no la página. Cada página necesita:

- OG image PROPIA por tema (gancho visual + texto grande legible en miniatura), generada con next/og. No usar la OG genérica del sitio.
- `og:title` y `og:description` con gancho, no descriptivos planos.
- Probar el preview real en Facebook (Sharing Debugger) y WhatsApp antes de difundir.

**Banco de temas inicial (escribir 2-3 para arrancar, no todos):**

- Amplios (grupos generales de negocios): "Ventajas de tener un agente de IA en WhatsApp para tu negocio", "Cómo hacer crecer tu negocio con IA (sin ser experto en tecnología)", "Por qué pierdes clientes en WhatsApp y cómo dejar de perderlos", "5 cosas que un asistente de IA hace por tu negocio mientras duermes", "Cuánto cuesta un agente de WhatsApp en México (precios reales 2026)".
- Verticales (grupos de construcción/remodelación/local): "Cómo los impermeabilizadores dejan de perder clientes en temporada de lluvias".

**Medición de difusión:** cada link compartido lleva UTM (`?utm_source=fb_grupo_x` / `wa_grupo_y`) + evento PostHog `recurso_cta_click` con propiedad de la página y la fuente, para saber qué grupo/canal convierte.

**Etiqueta de grupos (nota para Yovany, no técnica):** muchos grupos de FB banean autopromoción/links repetidos. La página debe ENSEÑAR de verdad; variar grupos; en los estrictos publicar contenido nativo y dejar el link en comentario. Compartir como "hice esta guía", no como anuncio.

### 4.4 Prioridad de construcción

1. Hub + template de vertical + datos del vertical activo (impermeabilización) ← esta semana
2. JSON-LD, sitemap, OG images, eventos PostHog
3. 2-3 páginas de difusión con su OG image y el CTA al agente ← en paralelo, apenas el demo del agente exista

---

## 5. Spec de la landing hub `/sistema-de-clientes`

### 5.1 Generales

- **Idioma:** 100% español mexicano, directo, cero tecnicismos (el visitante es un dueño de negocio, no un CTO). Prohibido: "RAG", "pipeline", "API", "stack". Permitido: "inteligencia artificial", "automático", "asistente".
- **SEO:** title/meta tipo "asistente de WhatsApp para negocios de servicios Guadalajara". JSON-LD `Service` con `areaServed: Guadalajara, Zapopan, Tlaquepaque, Tonalá, Tlajomulco`.
- **No enlazar desde la navegación principal de yovany.dev** (público distinto). Sí en sitemap.

### 5.2 Secciones (hub y template de vertical comparten estructura)

1. **Hero**
   - H1: "Tu negocio contestando WhatsApp las 24 horas. Aunque tú estés trabajando."
   - Subtítulo: "Un asistente con inteligencia artificial que atiende a tus clientes al instante, les hace las preguntas correctas y te los pasa listos para cotizar. Para que ninguno se quede sin respuesta."
   - CTA primario: botón WhatsApp ("Platícame de tu negocio") → wa.me con mensaje precargado.
   - CTA secundario: "Agenda una llamada de 15 min" → Cal.com.

2. **El problema** (3 dolores; el template usa los del vertical).

3. **Cómo funciona** (3 pasos: te escriben → el asistente atiende y califica → tú solo cotizas). En verticales, mostrar la conversación de ejemplo real del giro.

4. **Qué hace el asistente** (capacidades del agente, redactado para cliente final: contesta al instante, pide fotos/medidas, agenda, te manda el resumen, escala a ti cuando hace falta).

5. **La cuenta sale sola** (ROI): "Con que te recupere UN cliente al mes que hoy se te va, ya se pagó." Opcional: mini calculadora (ticket promedio → trabajos/año para recuperar). Componente React, sin backend.

6. **Por qué conmigo:** "Soy ingeniero de software con más de 8 años construyendo sistemas que funcionan solos. No soy una agencia que subcontrata: el asistente lo construyo yo y lo mantengo yo."

7. **Precio** (3 niveles del agente — sección 3.1, redactado para cliente):
   - Básico desde $8,000 + $2,000/mes · Pro desde $15,000 + $3,000/mes (destacado) · Avanzado desde $22,000 + $4,000/mes.
   - Nota add-on: "¿Quieres también una página sencilla para aparecer en Google? Se agrega desde $4,000."
   - "Sin contratos forzosos, mes a mes."

8. **FAQ** (acordeón): ¿cambio mi número de WhatsApp? (migrar o dedicado), ¿y si el asistente no sabe algo? (te lo pasa a ti), ¿en cuánto queda listo? (1–2 semanas), ¿por qué mensualidad? (costos de operación continuos), ¿necesito página web? (no, es opcional), giros compatibles. + FAQ del vertical.

9. **CTA final** (WhatsApp + Cal.com).

### 5.3 Requisitos técnicos para Claude Code

- [ ] Ruta estática `/sistema-de-clientes` + dinámica `/sistema-de-clientes/[vertical]` (App Router, `generateStaticParams` desde datos, solo `published: true`).
- [ ] `content/sistema-de-clientes/verticales.ts` con los 8 verticales (3 publicados).
- [ ] Reutilizar design system de yovany.dev (Tailwind); esta sección puede ser más cálida/directa.
- [ ] Botón flotante de WhatsApp sticky en móvil.
- [ ] Cal.com: event type "Diagnóstico asistente de WhatsApp (15 min)".
- [ ] PostHog: `wa_whatsapp_click`, `wa_cal_booking_click`, `wa_calculator_used`, `wa_faq_open`, `wa_addon_website_click` — todos con propiedad `vertical`.
- [ ] Formulario fallback (nombre, giro, WhatsApp) → Resend → email a Yovany.
- [ ] Metadata por página + OG image con next/og (incluyendo el vertical).
- [ ] JSON-LD `Service` + `areaServed` por página.
- [ ] Sitemap: hub + verticales publicados; navegación principal: NO.
- [ ] Lighthouse móvil ≥ 90.
- [ ] Blog MDX bajo `/sistema-de-clientes/blog` — FASE 2.

### 5.4 Copy guidelines

- Tono directo, de tú, mexicano, cero corporativo. Frases cortas.
- Cada sección entendible en 5 segundos de scroll en un teléfono.
- Vender resultados, no características: "más cotizaciones, cero leads perdidos".
- Números concretos: "contesta en 2 segundos", "24/7", "un cliente paga el año".
- El sitio web se menciona como add-on opcional, nunca como el producto principal.

---

## 6. Fuera de alcance (por ahora)

- Dashboard/CRM de leads (add-on / nivel Avanzado).
- Calculadora de ROI si retrasa el lanzamiento.
- Traducción al inglés.
- Páginas de difusión: arrancar con 2-3, no con diez. No dejar que su construcción desplace el demo + prospección que cierra esta semana.
- Sitio web complejo: el add-on es deliberadamente una sola landing simple.

## 7. Criterio de éxito

Un dueño de negocio que llega desde WhatsApp entiende en menos de 30 segundos qué hace el asistente, cuánto cuesta, ve su giro reflejado (si entró por vertical), y tiene un botón obvio para escribirte.
