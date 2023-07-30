import Location from '@/assets/icons/Location';
import Verified from '@/assets/icons/Verified';
import LayoutSwitcher from '@/components/LayoutSwitcher';
import Social from '@/components/Social';
import millify from 'millify';
import { Metadata } from 'next';
import Image from 'next/image';
import styles from './User.module.css';

const fetchUserDetails = async (username: string) => {
  const response = await fetch(`https://api.unsplash.com/users/${username}`, {
    headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
    },
  });
  return await response.json();
};

const Profile = async (props: any) => {
  const { params } = props;
  const { user } = params;

  const data = await fetchUserDetails(user);
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
    badge,
    tags,
    followers_count,
    following_count,
    downloads,
  } = data;

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
            {!!badge ? <Verified className={styles.icon} /> : null}
          </b>

          <p className={styles.bio}>{bio}</p>
          <div className={styles.statistics}>
            <p>
              <b>{millify(downloads)}</b>{' '}
              {downloads > 1 ? 'downloads' : 'download'}
            </p>
            <p>
              <b>{millify(followers_count)}</b>{' '}
              {followers_count > 1 ? 'followers' : 'follower'}
            </p>
            <p>
              <b>{millify(following_count)}</b> following
            </p>
          </div>
          <div className={styles.meta}>
            {!!location ? (
              <p className={styles.metaInfo}>
                <Location className={styles.icon} />
                {location}
              </p>
            ) : null}
            {!!instagram_username || !!twitter_username || !!portfolio_url ? (
              <Social
                instagram={instagram_username}
                twitter={twitter_username}
                portfolio={portfolio_url}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.photos}>
        <LayoutSwitcher />
      </div>
    </main>
  );
};

export default Profile;

export async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  const username = params.user.toUpperCase();

  return {
    title: username || 'Profile',
    description: username || 'Profile',
  };
}
