"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = ["About", "Experience", "Projects", "Skills"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document
        .getElementById(id.toLowerCase())
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <header
      className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ""}`}
    >
      <nav className={styles.nav}>
        <span
          className={styles.logo}
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          GD
        </span>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className={styles.link}>
                {l}
              </button>
            </li>
          ))}
          <li>
            <a
              href="mailto:garvitadalmia2004@gmail.com"
              className={styles.cta}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`}
          />
          <span
            className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`}
          />
          <span
            className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`}
          />
        </button>
      </nav>
    </header>
  );
}
