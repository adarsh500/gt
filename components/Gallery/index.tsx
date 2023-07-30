'use client';
import { GRID } from '@/utils/constants';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Error from '../Error';
import { useCallback, useEffect, useState } from 'react';
import GridImage from '../GridImage';
import styles from './Gallery.module.css';
import Loader from '../Loader';
import PostSkeleton from '../Skeleton/PostSkeleton';
const PostList = dynamic(() => import('@/components/PostList'), {
  ssr: false,
  loading: () => <Loader />,
});

type GalleryProps = {
  layout: 'grid' | 'list';
};

const Gallery = (props: GalleryProps) => {
  const { layout } = props;
  const pathname = usePathname();
  const username = pathname.split('/')[2] || '';
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.unsplash.com/users/${username}/photos?page=${page}&per_page=12&order_by=latest&username=${username}`,
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
  }, [page, username]);

  const fetchNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages, page]);

  const openDetailedView = useCallback(() => {}, []);

  return (
    <div className={styles.container}>
      {!!error ? <Error /> : null}
      {layout === GRID ? (
        <>
          <div className={styles.gallery}>
            {data?.map((photo, index) => {
              const { urls, alt_description, id } = photo;
              return (
                <GridImage
                  key={id}
                  photo={photo}
                  alt_description={alt_description}
                  urls={urls}
                  isLast={index === data.length - 1}
                  openDetailedView={openDetailedView}
                  fetchNextPage={fetchNextPage}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          {!data.length && isLoading && <PostSkeleton />}
          <PostList
            posts={data}
            className={styles.list}
            fetchNextPage={fetchNextPage}
          />
        </>
      )}
      {data.length && isLoading && <Loader />}
    </div>
  );
};

export default Gallery;
