'use client';
import Error from '@/components/Error';
import Loader from '@/components/Loader';
import PostList from '@/components/PostList';
import PostSkeleton from '@/components/Skeleton/PostSkeleton';
import { useCallback, useEffect, useState } from 'react';
import styles from './page.module.css';

/**
TODO
1. cache api response
3. add search
4. loaidng, error states
5. responsive
6. hyperlinks
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
      <div className={styles.container}>
        {error ? <Error /> : null}
        {!data.length && isLoading && <PostSkeleton />}
        <PostList posts={data} fetchNextPage={fetchNextPage} />
        {data.length && isLoading && <Loader />}
      </div>
    </main>
  );
}
