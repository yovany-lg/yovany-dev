# Imágenes hero del blog

Genera cada imagen (ChatGPT / DALL·E) en **16:9** y guárdala aquí con el nombre
exacto. En cuanto el archivo existe, aparece sola en el artículo y en la tarjeta
del índice (sin tocar código). Mientras no exista, se muestra un degradado.

Formato recomendado: `.webp` (o `.png`/`.jpg`), ~1600×900, < 300 KB.

| Artículo | Archivo |
| --- | --- |
| Por qué pierdes clientes en WhatsApp… | `pierdes-clientes-whatsapp-temporada-lluvias.webp` |
| ¿Cuánto cuesta un chatbot de WhatsApp…? | `cuanto-cuesta-chatbot-whatsapp-mexico.webp` |
| Le escribí a 5 impermeabilizadores… | `experimento-escribi-impermeabilizadores-10pm.webp` |

Los prompts sugeridos viven en el campo `heroPrompt` de cada artículo en
`content/sistema-de-clientes/blog.ts`.
