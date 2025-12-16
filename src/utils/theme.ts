import type { Theme } from "@/types";

/**
 * Obtiene el tema inicial desde localStorage
 * Si no existe, retorna 'light' por defecto
 */
export const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "light";
  }
  return "light";
};

/**
 * Guarda el tema en localStorage
 */
export const saveTheme = (theme: Theme): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme);
  }
};

/**
 * Aplica el tema al body del documento
 */
export const applyTheme = (theme: Theme): void => {
  if (typeof window !== "undefined") {
    document.body.classList.toggle("dark-mode", theme === "dark");
  }
};
