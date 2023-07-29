import React from 'react';
import Image from 'next/image';
import styles from './User.module.css';
import { data } from '@/user';

const Profile = (props: any) => {
  const { params } = props;
  const { user } = params;
  const {
    first_name,
    last_name,
    username,
    bio,
    location,
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
          <p>
            {first_name} {last_name ? last_name : ''}
          </p>
          <p>@{username}</p>
          <p>{location}</p>
          <p>{bio}</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
