import React from 'react';
import Image from 'next/image';
import styles from './User.module.css';
import { data } from '@/user';
import millify from 'millify';
import Location from '@/assets/icons/Location';
import ChevronDown from '@/assets/icons/ChevronDown';
import HoverCard from '@/components/HoverCard';
import Dropdown from '@/components/Dropdown';

const Profile = (props: any) => {
  const { params } = props;
  const { user } = params;
  const {
    first_name,
    last_name,
    username,
    bio,
    location,
    instagram_username,
    twitter_username,
    portfolio_url,
    profile_image,
    social,
    photos,
    badge,
    tags,
    followers_count,
    following_count,
    downloads,
  } = data;
  console.log(params);

  return (
    <main className={styles.main}>
      <div className={styles.profileContainer}>
        <div className={styles.profileImageContainer}>
          <Image
            src={profile_image.large}
            fill
            loading="lazy"
            className={styles.profileImage}
            alt={first_name}
          />
        </div>
        <div className={styles.profileInfo}>
          <b className={styles.name}>
            {first_name} {last_name ? last_name : ''}
          </b>
          <p className={styles.bio}>{bio}</p>
          <div className={styles.statistics}>
            <p>
              <b>{millify(followers_count)}</b>{' '}
              {followers_count > 1 ? 'followers' : 'follower'}
            </p>
            <p>
              <b>{millify(downloads)}</b>{' '}
              {downloads > 1 ? 'downloads' : 'download'}
            </p>

            <p>
              <b>{millify(following_count)}</b> following
            </p>
          </div>
          <div className={styles.meta}>
            <p className={styles.metaInfo}>
              <Location className={styles.icon} />
              {location}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;

export const metadata = {
  title: `Profile`,
  description: 'Profile',
};
