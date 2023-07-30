import styles from './Skeleton.module.css';

const Skeleton = ({ className = '' }) => {
  return (
    <div className={`${className ?? ''} ${styles.skeletonLoader}`}>
      <div className={styles.shimmer} />
    </div>
  );
};

export default Skeleton;
