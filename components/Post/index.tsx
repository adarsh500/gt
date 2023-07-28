import Image from 'next/image';
import styles from './Post.module.css';

const Post = (props: {
  urls: any;
  description: any;
  alt_description: any;
  blur_hash: any;
  id: any;
  links: any;
  likes: any;
  liked_by_user: any;
  user: any;
}) => {
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
  } = props;
  return (
    <div className={styles.postContainer}>
      <div className={styles.userContainer}></div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          placeholder="blur"
          blurDataURL={blur_hash}
          src={urls.regular}
          alt={alt_description}
          fill
          loading="lazy"
        />
      </div>
      <p className={styles.caption}>{description}</p>
    </div>
  );
};

export default Post;
