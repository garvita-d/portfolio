import styles from "./Certifications.module.css";
import { data } from "../data";

export default function Certifications() {
  return (
    <section className={styles.section} id="certifications">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Certifications</h2>
        <div className={styles.list}>
          {data.certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              <div className={styles.cardLeft}>
                <span className={styles.icon}>🎓</span>
                <div>
                  <p className={styles.name}>{cert.name}</p>
                  <p className={styles.issuer}>
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
