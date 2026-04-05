import styles from './Testimonials.module.css';
import { data } from '../data';

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>What people say</h2>
        <div className={styles.grid}>
          {data.testimonials.map((t, i) => (
            <figure key={i} className={styles.card}>
              <blockquote className={styles.quote}>
                <span className={styles.openQuote}>"</span>
                {t.quote}
              </blockquote>
              <figcaption className={styles.author}>
                <div className={styles.avatar}>
                  {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className={styles.note}>
          💡 Ask your manager at Analytics Quad4 or What Next Studio for a short quote — even one line makes a big impression.
        </p>
      </div>
    </section>
  );
}
