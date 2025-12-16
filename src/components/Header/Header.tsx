'use client';

import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import styles from './Header.module.css';

export default function Header() {
  const { toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>FM</div>

        {/* Menu Hamburguesa */}
        <div 
          className={`${styles.menuToggle} ${menuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navegación */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <ul>
            <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
            <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
            <li><a href="#tech-stack" onClick={closeMenu}>Stack</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
          </ul>
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label="Cambiar modo"
          suppressHydrationWarning
        >
          <span className={styles.themeSwitchTrack} suppressHydrationWarning></span>
          <span className={styles.themeSwitchThumb} suppressHydrationWarning></span>
        </button>
      </div>
    </header>
  );
}
