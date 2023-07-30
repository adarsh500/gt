import React from 'react';
import Skeleton from '..';
import styles from './PostSkeleton.module.css';

const PostSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <Skeleton className={styles.header} />
      <Skeleton className={styles.skeleton} />
      <div className={styles.skeletonFooter}>
        <Skeleton className={styles.footer} />
        <Skeleton className={styles.footer} />
      </div>
    </div>
  );
};

export default PostSkeleton;
