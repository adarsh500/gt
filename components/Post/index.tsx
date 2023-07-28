import Image from 'next/image';
import styles from './post.module.css';

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
      <Image
        className={styles.image}
        placeholder="blur"
        blurDataURL={blur_hash}
        src={urls.regular}
        alt={alt_description}
        fill
        objectFit="cover"
        loading="lazy"
      />
      <p>{description}</p>
    </div>
  );
};

export default Post;
