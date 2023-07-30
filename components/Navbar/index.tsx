'use client';
import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <p>SNAP</p>
        <div className={styles.links}>
          {routes.map(({ name, path }) => (
            <Link
              href="/"
              className={`${styles.link} ${
                path === pathname ? styles.active : ''
              }`}
              key={path}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
