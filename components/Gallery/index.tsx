'use client';
import styles from './Gallery.module.css';
import Image from 'next/image';
import { userPhotos } from '@/photos';

type GalleryProps = {
  layout: 'grid' | 'list';
};

const Gallery = (props: GalleryProps) => {
  const { layout } = props;
  return (
    <div className={styles.gallery}>
      {userPhotos.map((photo) => {
        const { urls, alt_description } = photo;
        return (
          <div className={styles.imageContainer} key={photo.id}>
            <Image
              className={styles.image}
              src={urls.regular}
              alt={alt_description}
              fill
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
