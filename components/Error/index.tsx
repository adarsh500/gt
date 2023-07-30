import Caution from '@/assets/icons/Caution';
import React from 'react';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.error}>
      <Caution className={styles.icon} />
      <p>Something Went Wrong</p>
    </div>
  );
};

export default Error;
