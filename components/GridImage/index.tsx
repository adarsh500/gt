import Heart from '@/assets/icons/Heart';
import millify from 'millify';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import useNextBlurhash from 'use-next-blurhash';
import styles from './GridImage.module.css';

const GridImage = (props) => {
  const {
    openDetailedView,
    fetchNextPage,
    isLast,
    urls,
    alt_description,
    photo,
    blurHash,
  } = props;
  const cardRef = useRef(null);
  const [blurDataUrl] = useNextBlurhash(blurHash);

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
        blurDataURL={blurDataUrl}
        placeholder="blur"
      />
      <div className={styles.overlay}>
        <Heart className={styles.likes} />
        <p>{millify(photo?.likes)}</p>
      </div>
    </div>
  );
};

export default GridImage;
