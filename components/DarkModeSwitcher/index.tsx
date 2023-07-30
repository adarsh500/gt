import React, { useState, useEffect } from 'react';
import styles from './DarkModeSwitcher.module.css';

const DarkModeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // useEffect to handle the initial state (dark mode based on user's preference)
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setDarkMode(prefersDarkMode);
  }, []);

  // useEffect to apply dark mode styles when the state changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(styles.darkMode);
    } else {
      document.body.classList.remove(styles.darkMode);
    }
  }, [darkMode]);

  return (
    <div className={styles.darkModeSwitcher}>
      <label className={styles.switch}>
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className={`${styles.slider} ${styles.sliderRound}`}></span>
      </label>
      <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default DarkModeSwitcher;
