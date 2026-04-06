"use client";
import styles from "./Projects.module.css";
import { data } from "../data";

function ProjectCard({ p }: { p: (typeof data.projects)[0] }) {
  const url = p.live
    ? p.live.replace("https://", "")
    : p.github
      ? "github.com/garvita-d"
      : "localhost:3000";

  return (
    <article className={styles.card}>
      <div className={styles.cardBrowser}>
        <div className={styles.cardChrome}>
          <div className={styles.miniDots}>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.miniUrl}>{url}</span>
          <div className={styles.iconLinks}>
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className={styles.iconLink}
                aria-label="GitHub"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            )}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className={styles.iconLink}
                aria-label="Live site"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <div className={styles.cardScreenshotWrap}>
          <img
            src={p.image}
            alt={`Screenshot of ${p.name}`}
            className={styles.cardScreenshot}
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const ph = t.nextElementSibling as HTMLElement;
              if (ph) ph.style.display = "flex";
            }}
          />
          <div
            className={styles.cardScreenshotPlaceholder}
            style={{ display: "none" }}
          >
            <span className={styles.cardPlaceholderIcon}>🖥️</span>
            <span className={styles.cardPlaceholderText}>
              Add screenshot to
              <br />
              public/screenshots/
            </span>
          </div>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <div>
            <h3 className={styles.name}>{p.name}</h3>
            <span className={styles.period}>{p.period}</span>
          </div>
        </div>

        {p.caseStudy && (
          <div className={styles.cardCaseStudy}>
            <div className={styles.caseBlock}>
              <span className={styles.cardCaseLabel}>Problem</span>
              <p className={styles.cardCaseText}>{p.caseStudy.problem}</p>
            </div>
            <div className={styles.caseBlock}>
              <span className={styles.cardCaseLabel}>Solution</span>
              <p className={styles.cardCaseText}>{p.caseStudy.solution}</p>
            </div>
            <div className={styles.caseBlock}>
              <span className={styles.cardCaseLabel}>Result</span>
              <p className={styles.cardCaseText}>{p.caseStudy.result}</p>
            </div>
          </div>
        )}

        <div className={styles.stack}>
          {p.stack.map((s, j) => (
            <span key={j} className={styles.tag}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {data.projects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
