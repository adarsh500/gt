import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './GridImage.module.css';
import Heart from '@/assets/icons/Heart';
import millify from 'millify';

const GridImage = (props) => {
  const {
    openDetailedView,
    fetchNextPage,
    isLast,
    urls,
    alt_description,
    photo,
  } = props;
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        fetchNextPage();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [fetchNextPage, isLast]);

  return (
    <div
      className={styles.imageContainer}
      key={photo.id}
      onClick={openDetailedView}
      ref={cardRef}
    >
      <Image
        className={styles.image}
        src={urls.regular}
        alt={alt_description}
        fill
        loading="lazy"
      />
      <div className={styles.overlay}>
        <Heart className={styles.likes} />
        <p>{millify(photo?.likes)}</p>
      </div>
    </div>
  );
};

export default GridImage;
