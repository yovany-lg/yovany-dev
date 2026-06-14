import type { Bloque } from "../../../content/sistema-de-clientes/blog";

/** Renders typed article blocks. Keeps articles CMS-free and Lighthouse-light. */
export function ArticleBody({ body }: { body: Bloque[] }) {
  return (
    <div className="sc-article-body">
      {body.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i}>{b.text}</h2>;
          case "p":
            return <p key={i}>{b.text}</p>;
          case "quote":
            return <blockquote key={i}>{b.text}</blockquote>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
