'use client';
import styles from './Gallery.module.css';
import Image from 'next/image';
import { userPhotos } from '@/photos';
import { GRID } from '@/utils/constants';
import Post from '../Post';

type GalleryProps = {
  layout: 'grid' | 'list';
};

const Gallery = (props: GalleryProps) => {
  const { layout } = props;
  return (
    <>
      {layout === GRID ? (
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
      ) : (
        <div className={styles.list}>
          {userPhotos.map((post) => {
            const {
              urls,
              description,
              alt_description,
              blur_hash,
              id,
              links,
              likes,
              liked_by_user,
              user,
            } = post;
            return (
              <Post
                key={id}
                urls={urls}
                description={description}
                alt_description={alt_description}
                blur_hash={blur_hash}
                id={id}
                links={links}
                likes={likes}
                liked_by_user={liked_by_user}
                user={user}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Gallery;
