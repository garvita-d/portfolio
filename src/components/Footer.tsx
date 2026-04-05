import styles from './Footer.module.css';
import { data } from '../data';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cta}>
          <h2 className={styles.heading}>Let's build something together.</h2>
          <a href={`mailto:${data.email}`} className={styles.email}>
            {data.email}
          </a>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© {new Date().getFullYear()} Garvita Dalmia</span>
          <div className={styles.links}>
            <a href={data.github} target="_blank" rel="noreferrer" className={styles.link}>
              GitHub
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
              LinkedIn
            </a>
            <a href={`mailto:${data.email}`} className={styles.link}>
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
