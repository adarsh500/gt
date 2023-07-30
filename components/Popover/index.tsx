'use client';
import React, { useCallback, useState } from 'react';
import styles from './Popover.module.css';

const Popover = ({ content, children }) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsPopoverVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPopoverVisible(false);
  }, []);

  const handleClick = useCallback(() => {
    setIsPopoverVisible((prev) => !prev);
  }, []);

  return (
    <div
      className={styles.popoverContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      {/* {isPopoverVisible && ( */}
      <div className={isPopoverVisible? styles.popoverContent: styles.hidden}>{content}</div>
      {/* )} */}
    </div>
  );
};

export default Popover;
