'use client';
import Ellipsis from '@/assets/icons/Ellipsis';
import Heart from '@/assets/icons/Heart';
import HeartFilled from '@/assets/icons/HeartFilled';
import Share from '@/assets/icons/Share';
import millify from 'millify';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import useNextBlurhash from 'use-next-blurhash';
import Popover from '../Popover';
import styles from './Post.module.css';

// TODO
// 1. add social media links
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
  isLast: boolean;
  fetchNextPage: () => void;
}) => {
  const {
    urls,
    description,
    alt_description,
    blur_hash,
    links,
    likes,
    liked_by_user,
    user,
    isLast,
    fetchNextPage,
  } = props;

  const [blurDataUrl] = useNextBlurhash(blur_hash);
  const cardRef = useRef(null);
  const [liked, setLiked] = useState<boolean>(liked_by_user);

  const likePhoto = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

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

  const profileLink = `/users/${user.username}`;

  return (
    <div className={styles.postContainer} ref={cardRef}>
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
        <div className={styles.profile}>
          <div className={styles.profileInfo}>
            {/* <Popover content={<h1>hello there</h1>}> */}
            <Link href={profileLink} className={styles.username}>
              {user.username}
            </Link>
            {/* </Popover> */}
            {user.for_hire ? <p className={styles.status}>for hire</p> : null}
          </div>
          <Popover
            content={
              <div className={styles.actions}>
                <Link
                  href={links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Unsplash
                </Link>
                <Link
                  href={urls.raw}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View Full
                </Link>
              </div>
            }
          >
            <Ellipsis className={styles.icon} />
          </Popover>
        </div>
      </div>
      <div className={styles.imageContainer} onDoubleClick={likePhoto}>
        <Image
          className={styles.image}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          src={urls.regular}
          alt={alt_description}
          fill
          loading="lazy"
        />
      </div>
      <div className={styles.statistics}>
        <div className={styles.actionIcons}>
          <span onClick={likePhoto}>{liked ? <HeartFilled /> : <Heart />}</span>
          <Share className={styles.share} />
        </div>
        <div className={styles.statisticsCount}>
          <span className={styles.statisticsItemNumber}>{millify(likes)}</span>{' '}
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
