'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Search',
    path: '/search',
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <p>SNAP</p>
        <div className={styles.links}>
          {routes.map(({ name, path }) => (
            <Link
              href={path}
              className={`${styles.link} ${
                path === pathname ? styles.active : ''
              }`}
              key={path}
            >
              {name}
            </Link>
          ))}
        </div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
