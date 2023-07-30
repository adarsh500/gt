'use client';
import PostList from '@/components/PostList';
import styles from './page.module.css';
import { useCallback, useEffect, useState } from 'react';

/**
TODO
1. cache api response
3. add search
4. loaidng, error states
5. responsive
6. hyperlinks
7. handle rate limiting
8. add vitualisation
 */

export default function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.unsplash.com/photos?page=${page}`,
        {
          headers: {
            // Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH}`,
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
          },
        }
      );
      const results = await response.json();
      setData((prev) => (!prev ? results : [...prev, ...results]));
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, [page]);

  const fetchNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages, page]);

  return (
    <main className={styles.main}>
      {isLoading && <p>Loading...</p>}
      {!!error && <p>Something went wrong...</p>}
      <PostList posts={data} fetchNextPage={fetchNextPage} />
    </main>
  );
}
