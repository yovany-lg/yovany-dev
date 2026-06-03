"use client";

import { useEffect, useState } from "react";
import { BookCallButton } from "./BookCallButton";

const LINKS = [
  { href: "#proof", label: "Results" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container-x nav-inner">
        <a href="#top" className="nav-brand" aria-label="Yovany Luis — home">
          <span className="nav-dot" aria-hidden />
          Yovany&nbsp;Luis
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className={`nav-cta ${scrolled ? "nav-cta-show" : ""}`}>
          <BookCallButton label="Book a call" location="nav" size="sm" />
        </div>
      </div>
    </header>
  );
}
