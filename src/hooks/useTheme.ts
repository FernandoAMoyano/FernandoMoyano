"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import type { ThemeContextType } from "@/types";

/**
 * Hook para acceder al contexto del tema
 * Debe usarse dentro de un ThemeProvider
 *
 * @returns {ThemeContextType} { theme, toggleTheme }
 * @throws {Error} Si se usa fuera del ThemeProvider
 *
 * @example
 * const { theme, toggleTheme } = useTheme();
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
