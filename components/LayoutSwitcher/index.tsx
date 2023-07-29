'use client';
import { GRID, LIST } from '@/utils/constants';
import React, { useState } from 'react';
import styles from './LayoutSwitcher.module.css';
import Gallery from '../Gallery';

type Layout = 'grid' | 'list';

const LayoutSwitcher = () => {
  const [layout, setLayout] = useState<Layout>(GRID);
  return (
    <div className={styles.tabs}>
      {[GRID, LIST].map((item) => (
        <button
          key={item}
          className={styles.tab}
          onClick={() => setLayout(item)}
        >
          {item}
        </button>
      ))}
      <Gallery layout={layout} />
    </div>
  );
};

export default LayoutSwitcher;
