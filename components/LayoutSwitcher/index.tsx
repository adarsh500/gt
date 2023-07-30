'use client';
import List from '@/assets/icons/List';
import Squares from '@/assets/icons/Squares';
import { GRID, LIST } from '@/utils/constants';
import { useCallback, useState } from 'react';
import Gallery from '../Gallery';
import styles from './LayoutSwitcher.module.css';

type Layout = 'grid' | 'list';
const tabs = [GRID, LIST];
const iconMap = {
  [GRID]: <Squares className={styles.icon} />,
  [LIST]: <List className={styles.icon} />,
};
//todo: refactor button styles

const LayoutSwitcher = () => {
  const [layout, setLayout] = useState<Layout>(GRID);

  const switchLayout = useCallback((layout: Layout) => {
    setLayout(layout);
  }, []);

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map((item) => (
          <button
            key={item}
            className={item === layout ? styles.active : styles.tab}
            onClick={() => switchLayout(item as Layout)}
          >
            {iconMap[item]}
            {item}
          </button>
        ))}
      </div>
      <Gallery layout={layout} />
    </>
  );
};

export default LayoutSwitcher;
