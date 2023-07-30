import ChevronDown from '@/assets/icons/ChevronDown';
import styles from './Social.module.css';
import Popover from '../Popover';

type SocialProps = {
  instagram?: string;
  twitter?: string;
  portfolio?: string;
};

//TODO
//1. add instagram, twitter, portfolio icons

const Social = (props: SocialProps) => {
  const { instagram, twitter, portfolio } = props;

  return (
    <Popover
      content={
        <div className={styles.social}>
          {!!instagram && (
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Instagram
            </a>
          )}
          {!!twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Twitter
            </a>
          )}
          {!!portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Portfolio
            </a>
          )}
        </div>
      }
    >
      <p>
        <ChevronDown className={styles.icon} height={20} width={20} />
        Socials{' '}
      </p>
    </Popover>
  );
};
export default Social;
