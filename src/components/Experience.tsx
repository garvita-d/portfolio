import styles from "./Experience.module.css";
import { data } from "../data";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Experience</h2>

        <div className={styles.timeline}>
          {data.experience.map((job, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
                <span className={styles.location}>{job.location}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <span className={styles.company}>{job.company}</span>
                </div>
                <ul className={styles.highlights}>
                  {job.highlights.map((h, j) => (
                    <li key={j} className={styles.highlight}>
                      <span className={styles.dot} aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.education}>
          <div className={styles.eduMeta}>
            <span className={styles.period}>{data.education.period}</span>
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3 className={styles.role}>{data.education.degree}</h3>
              <span className={styles.company}>
                {data.education.institution}, {data.education.location}
              </span>
            </div>
            <p className={styles.cgpa}>CGPA: {data.education.cgpa}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
