import styles from './page.module.css';
import data from '../data';
import Post from '@/components/Post';
import PostList from '@/components/PostList';

/**
TODO
1. cache api response
2. add infinite scroll
3. add search
4. loaidng, error states
5. responsive
6. hyperlinks
7. handle rate limiting
8. add vitualisation
 */

export default function Home() {
  return (
    <main className={styles.main}>
      <PostList posts={data} />
    </main>
  );
}
