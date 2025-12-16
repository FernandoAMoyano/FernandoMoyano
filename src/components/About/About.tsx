import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2>Sobre mí</h2>
      <p>
        Desarrollador de software apasionado por crear soluciones innovadoras
        y eficientes. Especializado en desarrollo Full Stack con experiencia
        en Python, Node.js y tecnologías modernas.
      </p>
      <p>
        Me enfoco en escribir código limpio, mantenible y escalable, 
        aplicando patrones de diseño y mejores prácticas en cada proyecto.
      </p>
    </section>
  );
}
