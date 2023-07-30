'use client';
import { GRID, LIST } from '@/utils/constants';
import React, { useCallback, useState } from 'react';
import styles from './LayoutSwitcher.module.css';
import Gallery from '../Gallery';

type Layout = 'grid' | 'list';
const tabs = [GRID, LIST];

const LayoutSwitcher = () => {
  const [layout, setLayout] = useState<Layout>(GRID);

  const switchLayout = useCallback((layout: Layout) => {
    setLayout(layout);
  }, []);

  return (
    <>
      <div className={styles.tabs}>
        {/* {tabs.map((item) => (
          <button
            key={item}
            className={item === layout ? styles.active : styles.tab}
            onClick={() => switchLayout(item as Layout)}
          >
            {item}
          </button>
        ))} */}
      </div>
      <Gallery layout={layout} />
    </>
  );
};

export default LayoutSwitcher;
