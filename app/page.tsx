import styles from './page.module.css';
import data from '../data';
import Post from '@/components/Post';

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
              <Post
                urls={urls}
                description={description}
                alt_description={alt_description}
                blur_hash={blur_hash}
                id={id}
                links={links}
                likes={likes}
                liked_by_user={liked_by_user}
                user={user}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
