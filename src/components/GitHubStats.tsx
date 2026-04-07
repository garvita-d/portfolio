"use client";

import { useEffect, useState } from "react";
import styles from "./GitHubStats.module.css";
import { data } from "../data";

export default function GitHubStats() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>GitHub Activity</h2>
        <p className={styles.sub}>
          {data.githubStats.username} ·{" "}
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className={styles.profileLink}
          >
            View profile →
          </a>
        </p>
        <div className={styles.cards}>
          <div className={styles.imgCard}>
            <img
              src={data.githubStats.streakUrl}
              alt="GitHub streak stats"
              className={styles.statImg}
            />
          </div>
          <div className={styles.statNumbers}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>25</span>
              <span className={styles.statLabel}>Repositories</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>375</span>
              <span className={styles.statLabel}>Contributions</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>9</span>
              <span className={styles.statLabel}>Longest streak</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>Achievements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
