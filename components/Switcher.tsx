'use client';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import useDarkMode from '@/hooks/useDarkMode';

export default function Switcher() {
  const { colorTheme, setTheme } = useDarkMode();
  const [dark, setDark] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDark(checked);
  };

  return <DarkModeSwitch checked={dark} onChange={toggleDarkMode} size={30} />;
}
