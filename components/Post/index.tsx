import Image from 'next/image';
import styles from './Post.module.css';
import Heart from '@/assets/icons/Heart';
import Link from 'next/link';
import Share from '@/assets/icons/Share';

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
  // console.log('lin', links);
  return (
    <div className={styles.postContainer}>
      <div className={styles.profileContainer}>
        <Link href={user.links.html} className={styles.profileImageContainer}>
          <Image
            src={user.profile_image.medium}
            fill
            loading="lazy"
            className={styles.profileImage}
            alt={user.name}
          />
        </Link>
        <div className={styles.profileInfo}>
          <Link href={user.links.html} className={styles.profileUsername}>
            {user.username}
          </Link>
        </div>
      </div>
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
      <div className={styles.statistics}>
        <div className={styles.actionIcons}>
          <Heart />
          <Share className={styles.share} />
        </div>
        <div className={styles.statisticsCount}>
          <span className={styles.statisticsItemNumber}>{likes}</span>{' '}
          <span className={styles.statisticsItemLabel}>
            {likes > 1 ? 'likes' : 'like'}
          </span>
        </div>
      </div>
      <div className={styles.captionContainer}>
        {description && (
          <p className={styles.caption}>
            <b>{user.username}</b> {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Post;
