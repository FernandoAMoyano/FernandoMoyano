'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from '@/types';
import styles from './Projects.module.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.section}>
      <h2>Proyectos</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}
