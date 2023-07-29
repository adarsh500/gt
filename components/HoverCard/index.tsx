// HoverCard.js
import React from 'react';
import styles from './HoverCard.module.css';

const HoverCard = ({ children, trigger }) => {
  return (
    <div className={styles.hoverCard}>
      {trigger}
      {children && <div className={styles.cardItems}>{children}</div>}
    </div>
  );
};

export default HoverCard;
