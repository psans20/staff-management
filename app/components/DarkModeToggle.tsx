"use client";
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { MdWbSunny } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  return (
    <div className="flex items-center">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round">
          <MdWbSunny className={`sun-icon ${isDarkMode ? 'hidden' : 'block'}`} />
          <FaMoon className={`moon-icon ${isDarkMode ? 'block' : 'hidden'}`} />
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
