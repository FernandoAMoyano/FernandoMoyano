'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';
import type { Theme, ThemeContextType } from '@/types';
import { getInitialTheme, saveTheme, applyTheme } from '@/utils';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Aplicar tema al DOM y guardar en localStorage cuando cambia
  useEffect(() => {
    applyTheme(theme);
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
