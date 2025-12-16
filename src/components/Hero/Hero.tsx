'use client';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Fernando Moyano</h1>
        <h3>Software Developer</h3>
        <div className={styles.statusBtn}>
          <span className={styles.statusDot}></span>
          Disponible
        </div>
      </div>
    </section>
  );
}
