import styles from './page.module.css';
import data from '../data';
import Post from '@/components/Post';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Images</h1>
      <div className={styles.postsContainer}>
        {data.map((post) => {
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
          } = post;
          return (
            <div key={post.id} className={styles.post}>
              <Post {...post} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
