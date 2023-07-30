'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import Dark from '@/assets/icons/Dark';
import Light from '@/assets/icons/Light';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
];

const Navbar = () => {
  const pathname = usePathname();
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
          {theme === 'light' ? (
            <Light onClick={() => setTheme('dark')} className={styles.icon} />
          ) : (
            <Dark onClick={() => setTheme('light')} className={styles.icon} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
