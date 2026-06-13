# Sistema de Clientes — Paquete, verticales objetivo y spec para yovany.dev

> **Propósito de este documento:** Definir el paquete "Sistema de Clientes" (sitio web + agente de WhatsApp + Google Business Profile para negocios locales), el orden de verticales a atacar, y especificar las páginas que deben agregarse a yovany.dev. Pensado para ser ejecutado por Claude Code sobre el codebase existente de yovany.dev (Next.js 15 + Tailwind + Cal.com + Resend + PostHog).

---

## 1. Contexto del negocio

- **Quién vende:** Yovany (yovany.dev), ingeniero de software senior con 8+ años de experiencia y sistemas de IA en producción.
- **A quién se vende:** Negocios de servicios de ticket alto en Guadalajara y Zona Metropolitana (ver sección 2: verticales).
- **Problema que resuelve:** Estos negocios pierden clientes porque no contestan WhatsApp a tiempo, no aparecen bien en Google Maps, y no tienen presencia digital profesional. El 78% de los clientes le compra al primero que responde.
- **Promesa central (mensaje rector en todo el copy):** "No te vendo una página web ni un chatbot. Te vendo el sistema completo que convierte búsquedas de Google en cotizaciones en tu WhatsApp — automáticamente, 24/7."
- **Justificación de precio:** Un solo trabajo/tratamiento ($15,000–$120,000 MXN según vertical) paga el sistema. Las agencias en México cobran $14,000–$30,000 MXN solo por el sitio, y $8,000–$28,000 + $2,000–$5,000/mes solo por el chatbot. Este paquete entrega ambos, integrados.

---

## 2. Verticales objetivo y orden de ataque (EXPLÍCITO)

Criterios de priorización: ticket promedio del trabajo, urgencia del cliente final (justifica 24/7), gasto actual en marketing digital (disposición a pagar validada), y fit del agente de WhatsApp con su proceso de venta.

### Tier 1 — Verticales principales (mensualidad objetivo: $4,000–$8,000 MXN/mes)

| #   | Vertical                                     | Ticket del trabajo                                     | Por qué pagan más                                                                                           | Hook del agente                                                                     |
| --- | -------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 1   | **Energía solar (residencial/comercial)**    | $23,000–$120,000+ MXN por instalación                  | Mercado en auge en GDL, 160+ instaladores compitiendo, ya invierten en ads                                  | Pide foto del recibo CFE por WhatsApp → pre-dimensiona el sistema → lead calificado |
| 2   | **Clínicas dentales (implantes/ortodoncia)** | $1,300–$3,000 USD por implante; All-on-X $21k–$33k USD | Turismo dental US/Canadá, ya pagan agencias, agendar citas es media operación                               | Califica tratamiento, agenda valoración, responde en inglés/español                 |
| 3   | **Despachos de abogados**                    | Honorarios altos por caso                              | Pagan los CPC más caros de Google ($30–$130+ MXN/clic): un lead calificado vale cientos de pesos para ellos | Filtra materia (laboral/penal/familiar), etapa del caso, urgencia — 24/7            |
| 4   | **Remodelaciones y cocinas integrales**      | Hasta $80,000+ MXN (premium mucho más)                 | Ticket alto, decisión por cotización, leads piden presupuesto con fotos                                     | Pide medidas, fotos del espacio, presupuesto objetivo → medio levantamiento hecho   |

### Tier 2 — Verticales de entrada y casos de estudio (mensualidad objetivo: $2,500–$4,000 MXN/mes)

| #   | Vertical                                      | Notas                                                                                                                                  |
| --- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | **Impermeabilización**                        | 3,500+ solicitudes en GDL solo en Habitissimo; VENDER EN JUNIO (inicio del temporal de lluvias = se saturan de leads que no contestan) |
| 6   | **Portones eléctricos / canceles / aluminio** | Ticket $20k–$80k; primeros clientes vía red de Condominio Abelan (acceso caliente, sin prospección fría)                               |
| 7   | **Aires acondicionados (minisplits)**         | Instalación + contratos de mantenimiento recurrente; urgencia estacional                                                               |
| 8   | **Clínicas estéticas**                        | Lógica idéntica a dental                                                                                                               |

### Estrategia de secuencia

1. **Semanas 1–3:** Cerrar 1–2 clientes de Tier 2 (impermeabilización y/o portones) vía red de Abelan. Objetivo: casos de estudio rápidos con métricas reales ("le generé X leads en el primer mes").
2. **Semanas 4–8:** Con casos documentados, atacar Tier 1 en este orden: **solar → dental → abogados → remodelaciones**. Precio Tier 1 desde el primer pitch.
3. **Regla de especialización:** El agente de un vertical se reutiliza para todos los clientes de ese vertical con cambios mínimos. Profundizar en un vertical antes de abrir el siguiente.
4. **Exclusividad como palanca de venta (opcional):** Ofrecer "solo trabajo con N empresas de [vertical] por zona" para justificar precio premium.

---

## 3. Definición del paquete base: "Sistema de Clientes"

**Precio: $18,000–$25,000 MXN setup + mensualidad según tier del vertical (ver sección 2)**

### Qué incluye (setup)

1. **Sitio web profesional (3–4 páginas)**
   - Inicio con propuesta de valor clara y botón de WhatsApp prominente (sticky en móvil)
   - Página de servicios con precios orientativos o "desde $X"
   - Galería de trabajos (antes/después) o casos/testimonios según vertical
   - Zona de cobertura (colonias/municipios) — clave para SEO local
   - Mobile-first; dominio propio + email profesional

2. **Agente de WhatsApp con IA (24/7)**
   - Responde al instante, califica al lead con preguntas específicas del vertical (ver "Hook del agente" en sección 2)
   - Entrega al dueño un resumen del lead listo para cotizar
   - Escala a humano cuando el cliente lo pide o el caso es complejo
   - Stack: WhatsApp Business API vía Kapso (BSP), agente IA self-hosted en VPS (Hostinger + Docker Compose)

3. **Google Business Profile optimizado**
   - Creación o rescate del perfil, categorías correctas, zona de servicio, fotos, vinculación con sitio y WhatsApp

### Qué incluye (mensualidad)

- Hosting, dominio y mantenimiento del sitio
- Operación y ajustes del agente (precios, servicios, horarios)
- Publicaciones mensuales en Google Business Profile
- Reporte mensual: leads recibidos, origen, qué preguntaron
- Soporte por WhatsApp

### Add-ons (mencionar como "disponibles" en la landing, sin precios)

- Motor de reseñas de Google automatizado
- Campañas de reactivación a clientes pasados (mantenimientos recurrentes)
- Cotizador automático con rangos de precio
- Google Ads local administrado
- Mini CRM / dashboard de leads

---

## 4. Arquitectura de páginas en yovany.dev

### 4.1 Decisión: páginas por vertical SÍ, pero con template + datos (no 8 páginas a mano)

- **Hub:** `/sistema-de-clientes` — landing genérica del servicio (spec en sección 5)
- **Verticales:** `/sistema-de-clientes/[vertical]` — ruta dinámica que renderiza el MISMO template con contenido por vertical desde un archivo de datos (TS/JSON/MDX). Agregar un vertical nuevo = agregar un objeto de datos, no una página.
- **Lanzamiento escalonado:** generar inicialmente SOLO los verticales activos:
  - `/sistema-de-clientes/impermeabilizacion`
  - `/sistema-de-clientes/portones-electricos`
  - `/sistema-de-clientes/paneles-solares`
  - Los demás (dental, abogados, remodelaciones, aires, estetica) quedan definidos en el archivo de datos pero con flag `published: false` hasta activarse.

### 4.2 Contenido por vertical (campos del archivo de datos)

Cada vertical define: slug, nombre del giro, H1 propio ("Tu negocio de paneles solares contestando WhatsApp 24/7"), 3 dolores específicos del giro, ejemplo de conversación del agente adaptado (las preguntas de calificación reales del vertical), rango de ticket del trabajo para la sección de ROI, keywords SEO locales ("sistema de clientes para empresas de paneles solares Guadalajara", "página web + WhatsApp para dentistas Guadalajara"), FAQ con 1–2 preguntas propias del giro, y mensaje de WhatsApp precargado con el vertical incluido.

### 4.3 Mini blog (SÍ, pero fase 2 — ver prioridades)

- **Ruta:** `/sistema-de-clientes/blog` (mantenerlo dentro del subtree: el público es dueños de negocios locales en español, distinto al público AI/SaaS del resto de yovany.dev)
- **Estrategia de contenido:** artículos que el DUEÑO del negocio busca, no el cliente final. Ejemplos:
  - "Cómo conseguir más clientes para tu empresa de paneles solares en Guadalajara"
  - "Por qué tu negocio pierde clientes en WhatsApp (y cómo evitarlo)"
  - "Google Maps para negocios de servicios: la guía para aparecer primero"
  - "¿Cuánto cuesta un chatbot de WhatsApp en México? Precios reales"
- **Cadencia mínima viable:** 2 artículos por vertical activo al lanzar, 1–2/mes después. MDX en el repo, sin CMS.
- **Expectativa honesta:** el SEO del blog tarda 3–6 meses en traer tráfico. NO es canal de ventas de corto plazo; es activo de mediano plazo. Las ventas de los primeros 60 días vienen de prospección directa por WhatsApp usando las páginas de vertical como material.
- Cada artículo termina con CTA al vertical correspondiente.

### 4.4 Prioridad de construcción (para Claude Code)

1. Hub `/sistema-de-clientes` + template de vertical + datos de los 3 verticales activos ← **esta semana**
2. JSON-LD, sitemap, OG images, eventos PostHog
3. Blog (estructura MDX + 2 artículos seed) ← **solo después de tener el primer cliente cerrado**

---

## 5. Spec de la landing hub `/sistema-de-clientes`

### 5.1 Decisiones generales

- **Idioma:** 100% español mexicano, tono directo, cero tecnicismos. El visitante es un dueño de negocio, no un CTO. Prohibido: "RAG", "pipeline", "API", "stack". Permitido: "inteligencia artificial", "automático", "sistema".
- **SEO:** title/meta orientados a "sistema de clientes para negocios de servicios Guadalajara". JSON-LD tipo `Service` con `areaServed: Guadalajara, Zapopan, Tlaquepaque, Tonalá, Tlajomulco`.
- **No enlazar desde la navegación principal de yovany.dev** (público distinto). Sí incluir en sitemap. Es landing de destino para prospección directa, tarjetas y Google.

### 5.2 Estructura de secciones (hub y template de vertical comparten esta estructura; el vertical la personaliza con sus datos)

1. **Hero**
   - H1 (hub): "Tu negocio contestando WhatsApp las 24 horas. Aunque tú estés trabajando."
   - Subtítulo: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. El sistema completo para que los clientes te encuentren y te escriban — y ninguno se quede sin respuesta."
   - CTA primario: botón de WhatsApp ("Platícame de tu negocio") → wa.me con mensaje precargado
   - CTA secundario: "Agenda una llamada de 15 min" → Cal.com

2. **El problema** (3 dolores; el template usa los del vertical)

3. **Cómo funciona** (3 pasos: te encuentran → el asistente atiende y califica → tú solo cotizas). En verticales, mostrar la conversación de ejemplo real del giro.

4. **Qué incluye** (paquete base, redactado para cliente final)

5. **La cuenta sale sola** (ROI): "Un solo trabajo paga el sistema del año." Opcional: mini calculadora (input: ticket promedio → output: trabajos/año para recuperar inversión). Componente React simple, sin backend.

6. **Por qué conmigo:** "Soy ingeniero de software con más de 8 años construyendo sistemas que funcionan solos. No soy una agencia que subcontrata: el sistema lo construyo yo y lo mantengo yo."

7. **Precio** (transparente): "Desde $18,000 MXN de instalación + desde $2,500/mes. Sin contratos forzosos, mes a mes." Comparativa: "solo el chatbot cuesta $15,000–$28,000 + mensualidad en otro lado; aquí va todo integrado."

8. **FAQ** (acordeón): número de WhatsApp (¿cambiar o migrar?), escalamiento a humano, tiempo de entrega (2–3 semanas), qué pasa al cancelar (dominio y perfil de Google son del cliente), giros compatibles. + FAQs del vertical.

9. **CTA final** (WhatsApp + Cal.com)

### 5.3 Requisitos técnicos para Claude Code

- [ ] Ruta estática `/sistema-de-clientes` + ruta dinámica `/sistema-de-clientes/[vertical]` (App Router, `generateStaticParams` desde el archivo de datos, solo `published: true`)
- [ ] Archivo de datos de verticales: `content/sistema-de-clientes/verticales.ts` con los 8 verticales de la sección 2 (3 publicados)
- [ ] Reutilizar design system de yovany.dev (Tailwind); esta sección puede ser más cálida/directa que el resto
- [ ] Botón flotante de WhatsApp sticky en móvil
- [ ] Cal.com: event type "Diagnóstico Sistema de Clientes (15 min)"
- [ ] PostHog: `sc_whatsapp_click`, `sc_cal_booking_click`, `sc_calculator_used`, `sc_faq_open` — todos con propiedad `vertical`
- [ ] Formulario fallback (nombre, giro, WhatsApp) → Resend → email a Yovany
- [ ] Metadata por página: title/description en español, OG image con next/og (incluyendo el vertical)
- [ ] JSON-LD `Service` + `areaServed` por página
- [ ] Sitemap: hub + verticales publicados; navegación principal: NO incluir
- [ ] Lighthouse móvil ≥ 90 (público con teléfonos de gama media y 4G)
- [ ] Blog: estructura MDX bajo `/sistema-de-clientes/blog` — IMPLEMENTAR EN FASE 2

### 5.4 Copy guidelines

- Tono: directo, de tú, mexicano, cero corporativo. Frases cortas.
- Cada sección entendible en 5 segundos de scroll en un teléfono.
- Vender resultados, no características: "más cotizaciones, cero leads perdidos".
- Números concretos: "contesta en 2 segundos", "24/7", "un trabajo paga el año".

---

## 6. Fuera de alcance (por ahora)

- Dashboard/CRM de leads (add-on futuro)
- Calculadora de ROI si retrasa el lanzamiento (puede agregarse después)
- Traducción al inglés
- Blog antes del primer cliente cerrado
- Tocar el resto de las páginas de yovany.dev

## 7. Criterio de éxito

Un dueño de negocio que llega desde un mensaje de WhatsApp entiende en menos de 30 segundos qué le vendes, cuánto cuesta, ve su giro reflejado (si entró por página de vertical), y tiene un botón obvio para escribirte.
