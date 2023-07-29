import Image from 'next/image';
import styles from './Post.module.css';
import Heart from '@/assets/icons/Heart';
import Link from 'next/link';
import Share from '@/assets/icons/Share';
import { memo } from 'react';

// TODO
// 1. add social media links
// 2. add for hire badge
// 3. add profile hover state
// 4. add timestamp
// 5. user liked state
// 6. share on socials modal
// 7. PAID SPONSOR https://www.instagram.com/reel/Ct7XOWiRyUQ/?utm_source=ig_embed&ig_rid=2e197fed-490a-4541-afd8-b32e331cb28a

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

  const profileLink = `/users/${user.username}`;

  return (
    <div className={styles.postContainer}>
      <div className={styles.profileContainer}>
        <Link href={profileLink} className={styles.profileImageContainer}>
          <Image
            src={user.profile_image.medium}
            fill
            loading="lazy"
            className={styles.profileImage}
            alt={user.name}
          />
        </Link>
        <div className={styles.profileInfo}>
          <Link href={profileLink} className={styles.username}>
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
            <Link href={profileLink} className={styles.username}>
              {user.username}
            </Link>{' '}
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(Post);
