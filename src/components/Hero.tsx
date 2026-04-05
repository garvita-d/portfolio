import styles from './Hero.module.css';
import { data } from '../data';

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.inner}>

        <div className={styles.topRow}>
          <div className={styles.left}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              Currently: {data.currentlyWorkingOn}
            </div>

            <h1 className={styles.name}>{data.name}</h1>
            <p className={styles.role}>{data.title}</p>
            <p className={styles.tagline}>{data.tagline}</p>
            <p className={styles.about}>{data.about}</p>

            <div className={styles.actions}>
              <a href={data.resumeUrl} download className={styles.primary}>
                Download Resume ↓
              </a>
              <a href={`mailto:${data.email}`} className={styles.secondary}>
                Get in touch
              </a>
              <a href={data.github} target="_blank" rel="noreferrer" className={styles.ghost}>
                GitHub →
              </a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className={styles.ghost}>
                LinkedIn →
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.photoWrap}>
              <img
                src={data.photo}
                alt={data.name}
                className={styles.photo}
              />
              <div className={styles.initials}>GD</div>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>100</span>
            <span className={styles.statLabel}>PageSpeed Score</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>40%</span>
            <span className={styles.statLabel}>Reporting time saved</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>60%</span>
            <span className={styles.statLabel}>Manual effort cut</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>6+</span>
            <span className={styles.statLabel}>Production features</span>
          </div>
        </div>
      </div>
    </section>
  );
}
