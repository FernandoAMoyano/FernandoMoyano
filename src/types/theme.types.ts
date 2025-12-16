/**
 * Tipo de tema disponible en la aplicación
 */
export type Theme = "light" | "dark";

/**
 * Interface para el contexto de tema
 */
export interface ThemeContextType {
  /** Tema actual activo */
  theme: Theme;
  /** Función para alternar entre temas */
  toggleTheme: () => void;
}
