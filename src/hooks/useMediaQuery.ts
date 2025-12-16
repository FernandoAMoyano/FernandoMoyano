'use client';

import { useState, useEffect } from 'react';

/**
 * Hook para detectar media queries de forma responsive
 * @param query - Media query string (ej: '(max-width: 768px)')
 * @returns boolean - true si el media query coincide
 */
export function useMediaQuery(query: string): boolean {
  // Inicializar con una función para evitar problemas de SSR
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);

    // Listener para cambios
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Suscribirse a cambios en el media query
    media.addEventListener('change', listener);
    
    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
