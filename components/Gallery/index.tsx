'use client';
import { userPhotos } from '@/photos';
import { GRID } from '@/utils/constants';
import Image from 'next/image';
import styles from './Gallery.module.css';
import Heart from '@/assets/icons/Heart';
import millify from 'millify';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';
const PostList = dynamic(() => import('@/components/PostList'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

type GalleryProps = {
  layout: 'grid' | 'list';
};

const Gallery = (props: GalleryProps) => {
  const { layout } = props;

    const openDetailedView = useCallback(() => {
      
  }, []);

  return (
    <>
      {layout === GRID ? (
        <div className={styles.gallery}>
          {userPhotos.map((photo) => {
            const { urls, alt_description } = photo;
            return (
              <div
                className={styles.imageContainer}
                key={photo.id}
                onClick={openDetailedView}
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
          })}
        </div>
      ) : (
        <PostList posts={userPhotos} className={styles.list} />
      )}
    </>
  );
};

export default Gallery;
