import React from 'react';
import styles from './User.module.css';

const layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default layout;
