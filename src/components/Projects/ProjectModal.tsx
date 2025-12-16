"use client";

import { useEffect } from "react";
import type { Project } from "@/types";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.popup} onClick={handleBackdropClick}>
      <div className={styles.popupContent}>
        <span className={styles.popupClose} onClick={onClose}>
          &times;
        </span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <h4>Tecnologías utilizadas:</h4>
        <ul className={styles.techList}>
          {project.technologies.map((tech, index) => (
            <li key={index} className={styles.techItem}>
              <div className={`${styles.techIcon} ${styles[tech.class]}`}>
                {tech.svg ? (
                  <span dangerouslySetInnerHTML={{ __html: tech.svg }} />
                ) : (
                  <i className={tech.icon}></i>
                )}
              </div>
              <span className={styles.techName}>{tech.name}</span>
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <p>
            <strong>Repositorio de código:</strong>{" "}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              id="popup-repo"
            >
              {project.repo}
            </a>
          </p>
          {/*  <p>
            <strong>Deploy:</strong>{' '}
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
              id="popup-deployed"
            >
              {project.deployed}
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}
