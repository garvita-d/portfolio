import styles from './GitHubStats.module.css';
import { data } from '../data';

export default function GitHubStats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>GitHub Activity</h2>
        <p className={styles.sub}>
          {data.githubStats.username} · {' '}
          <a href={data.github} target="_blank" rel="noreferrer" className={styles.profileLink}>
            View profile →
          </a>
        </p>
        <div className={styles.cards}>
          <div className={styles.imgCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.githubStats.streakUrl}
              alt="GitHub streak stats"
              className={styles.statImg}
            />
          </div>
          <div className={styles.imgCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.githubStats.statsUrl}
              alt="GitHub stats"
              className={styles.statImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
