'use client';
import PostList from '@/components/PostList';
import styles from './page.module.css';
import { useFetch } from '@/hooks/useFetch';
import { useState } from 'react';

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

// const getPhotos = async () => {
//   const res = await fetch('https://api.unsplash.com/photos');
//   return res.json();
// };

export default function Home() {
  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useFetch({
    url: `https://api.unsplash.com/photos?page=${page}`,
    method: 'GET',
    enabled: true,
  });

  console.log('data', data, isLoading, error)
  return (
    <main className={styles.main}>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <PostList posts={data} />
      {/* </Suspense> */}
    </main>
  );
}
