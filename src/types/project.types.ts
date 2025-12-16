/**
 * Tecnología con icono SVG o clase de devicon
 */
export interface Technology {
  /** Nombre de la tecnología */
  name: string;
  /** Clase de devicon (opcional) */
  icon?: string;
  /** SVG personalizado (opcional) */
  svg?: string;
  /** Clase CSS personalizada */
  class: string;
}

/**
 * Proyecto del portfolio
 */
export interface Project {
  /** ID único del proyecto */
  id: number;
  /** Título del proyecto */
  title: string;
  /** Descripción detallada */
  description: string;
  /* Descripcion resumida del proyecto */
  summary: string;
  /** Tecnologías usadas (string separado por comas) */
  tech: string;
  /** Array de tecnologías con iconos */
  technologies: Technology[];
  /** URL del proyecto desplegado */
  deployed: string;
  /** URL del repositorio de código */
  repo: string;
}
