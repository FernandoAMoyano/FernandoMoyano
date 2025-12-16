import type { Project } from "@/types";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className={styles.projectCard} onClick={onClick}>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      {/*  <div className={styles.techIcons}>
        {project.technologies.map((tech, index) => (
          <div
            key={index}
            className={`${styles.techIcon} ${styles[tech.class]}`}
          >
            {tech.svg ? (
              <span dangerouslySetInnerHTML={{ __html: tech.svg }} />
            ) : (
              <i className={tech.icon}></i>
            )}
          </div>
        ))}
      </div> */}
      <button className={styles.btn}>Ver detalles</button>
    </div>
  );
}
