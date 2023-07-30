'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

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
        {/* <DarkModeSwitcher /> */}
      </div>
    </nav>
  );
};

export default Navbar;
