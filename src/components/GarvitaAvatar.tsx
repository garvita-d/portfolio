"use client";
import styles from "./GarvitaAvatar.module.scss";

export default function GarvitaAvatar() {
  return (
    <div className={styles.wrapper}>
      <img
        src="/screenshots/garvita.png"
        alt="Illustrated avatar of Garvita"
        className={styles.avatarImg}
      />

      <div className={`${styles.pill} ${styles.floatLeft}`}>
        <span style={{ color: "#e8734a" }}>const</span>
        <span style={{ color: "#6b9fff" }}> gd</span>
        <br />
        <span style={{ color: "rgba(255,255,255,0.4)" }}>= "dev"</span>
      </div>

      <div className={`${styles.pill} ${styles.floatRight}`}>
        <span style={{ color: "#6b9fff" }}>React</span>
        <br />
        <span style={{ color: "#e8734a" }}>+ TS ✦</span>
      </div>

      <div className={`${styles.pill} ${styles.floatTop} ${styles.pillAccent}`}>
        <span style={{ color: "#e8734a" }}>{"// building"}</span>
      </div>

      <span className={`${styles.sparkle} ${styles.sparkle1}`}>✦</span>
      <span className={`${styles.sparkle} ${styles.sparkle2}`}>✦</span>
      <span className={`${styles.sparkle} ${styles.sparkle3}`}>✦</span>
    </div>
  );
}
