import styles from "./Leadership.module.css";
import { data } from "../data";

export default function Leadership() {
  return (
    <section className={styles.section} id="leadership">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Leadership & Initiatives</h2>

        <div className={styles.grid}>
          {data.leadership.map((item, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.role}>{item.role}</h3>
                  <span className={styles.org}>{item.org}</span>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              <ul className={styles.highlights}>
                {item.highlights.map((h, j) => (
                  <li key={j} className={styles.highlight}>
                    <span className={styles.dot} aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
