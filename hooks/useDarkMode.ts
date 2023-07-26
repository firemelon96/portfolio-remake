'use client';
import { useState, useEffect } from 'react';

const getTheme =
  typeof window !== 'undefined' ? window.localStorage.theme : false;

export default function useDarkMode() {
  const [theme, setTheme] = useState(getTheme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return { colorTheme, setTheme };
}
