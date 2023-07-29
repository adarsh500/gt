'use client';
import Dropdown from '../Dropdown';
import ChevronDown from '@/assets/icons/ChevronDown';
import styles from './Social.module.css';

const Social = (props: any) => {
  const { instagram_username, twitter_username, portfolio_url } = props;

  return (
    <Dropdown
      trigger={
        <p>
          <ChevronDown className={styles.icon} height={10} width={10} />
          Socials
        </p>
      }
    >
      <div className={styles.socials}>
        {instagram_username && (
          <a
            href={`https://instagram.com/${instagram_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        )}
        {twitter_username && (
          <a
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        )}
        {portfolio_url && (
          <a href={portfolio_url} target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        )}
      </div>
    </Dropdown>
  );
};
export default Social;
