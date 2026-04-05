import styles from './Projects.module.css';
import { data } from '../data';

export default function Projects() {
  const featured = data.projects.find((p) => p.featured);
  const rest = data.projects.filter((p) => !p.featured);

  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Projects</h2>

        {/* Featured / Case Study */}
        {featured && (
          <article className={styles.featured}>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredLabel}>Featured project</span>
                <span className={styles.period}>{featured.period}</span>
              </div>
              <h3 className={styles.featuredName}>{featured.name}</h3>

              {featured.caseStudy && (
                <div className={styles.caseStudy}>
                  <div className={styles.caseBlock}>
                    <span className={styles.caseLabel}>Problem</span>
                    <p className={styles.caseText}>{featured.caseStudy.problem}</p>
                  </div>
                  <div className={styles.caseBlock}>
                    <span className={styles.caseLabel}>Solution</span>
                    <p className={styles.caseText}>{featured.caseStudy.solution}</p>
                  </div>
                  <div className={styles.caseBlock}>
                    <span className={styles.caseLabel}>Result</span>
                    <p className={styles.caseText}>{featured.caseStudy.result}</p>
                  </div>
                </div>
              )}

              <div className={styles.stack}>
                {featured.stack.map((s, i) => (
                  <span key={i} className={styles.tag}>{s}</span>
                ))}
              </div>

              <div className={styles.links}>
                {featured.live && (
                  <a href={featured.live} target="_blank" rel="noreferrer" className={styles.liveBtn}>
                    View Live →
                  </a>
                )}
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noreferrer" className={styles.ghBtn}>
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className={styles.featuredImage}>
              <div className={styles.browserChrome}>
                <div className={styles.dots}>
                  <span /><span /><span />
                </div>
                <span className={styles.url}>{featured.live?.replace('https://', '')}</span>
              </div>
              <div className={styles.screenshotWrap}>
                <img
                  src={featured.image}
                  alt={featured.name}
                  className={styles.screenshot}
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="${styles.noScreenshot}">Add screenshot to<br/>/public/screenshots/inflow.png</div>`;
                  }}
                />
              </div>
            </div>
          </article>
        )}

        {/* Other projects */}
        <div className={styles.grid}>
          {rest.map((p, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.name}>{p.name}</h3>
                  <span className={styles.period}>{p.period}</span>
                </div>
                <div className={styles.iconLinks}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="GitHub">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="Live site">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <ul className={styles.highlights}>
                {p.highlights.map((h, j) => (
                  <li key={j} className={styles.highlight}>
                    <span className={styles.dot} aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>

              <div className={styles.stack}>
                {p.stack.map((s, j) => (
                  <span key={j} className={styles.tag}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
