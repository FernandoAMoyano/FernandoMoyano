'use client';

import { technologies } from '@/data/technologies';
import styles from './TechStack.module.css';

export default function TechStack() {
  // Desktop necesita duplicados para el efecto infinito
  const desktopTechnologies = [...technologies, ...technologies];

  return (
    <section id="tech-stack" className={styles.section}>
      <h2>Stack Tecnológico</h2>
      <div className={styles.techCarouselContainer}>
        <div className={styles.techCarousel}>
          {/* Track para Desktop (con duplicados) */}
          <div className={`${styles.techCarouselTrack} ${styles.desktop}`}>
            {desktopTechnologies.map((tech, index) => (
              <div key={`desktop-${index}`} className={styles.techItem}>
                <div className={`${styles.carouselTechIcon} ${styles[tech.class]}`}>
                  {tech.svg ? (
                    <span dangerouslySetInnerHTML={{ __html: tech.svg }} />
                  ) : (
                    <i className={`${tech.icon} colored`}></i>
                  )}
                </div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Track para Mobile (sin duplicados) */}
          <div className={`${styles.techCarouselTrack} ${styles.mobile}`}>
            {technologies.map((tech, index) => (
              <div key={`mobile-${index}`} className={styles.techItem}>
                <div className={`${styles.carouselTechIcon} ${styles[tech.class]}`}>
                  {tech.svg ? (
                    <span dangerouslySetInnerHTML={{ __html: tech.svg }} />
                  ) : (
                    <i className={`${tech.icon} colored`}></i>
                  )}
                </div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
