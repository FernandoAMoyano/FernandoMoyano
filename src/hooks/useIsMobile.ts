'use client';

import { useMediaQuery } from './useMediaQuery';

/**
 * Hook para detectar si el dispositivo es mobile
 * @returns boolean - true si es mobile (ancho <= 768px)
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)');
}
