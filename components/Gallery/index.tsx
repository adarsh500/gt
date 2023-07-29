import styles from './Gallery.module.css';
import Image from 'next/image';

type GalleryProps = {
  photos: any[];
  layout: 'grid' | 'list';
};

const Gallery = (props: GalleryProps) => {
  const { photos, layout } = props;
  return (
    <div className={styles.gallery}>
      {photos.map((photo) => {
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
