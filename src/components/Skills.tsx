import styles from './Skills.module.css';
import { data } from '../data';

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Skills</h2>

        <div className={styles.grid}>
          {Object.entries(data.skills).map(([category, items]) => (
            <div key={category} className={styles.group}>
              <h3 className={styles.category}>{category}</h3>
              <div className={styles.tags}>
                {items.map((item, i) => (
                  <span key={i} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.interests}>
          <span className={styles.interestsLabel}>Beyond code</span>
          <div className={styles.interestTags}>
            {data.interests.map((interest, i) => (
              <span key={i} className={styles.interest}>{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
