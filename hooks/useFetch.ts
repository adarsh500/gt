import { customFetch } from '@/utils/customFetch';
import { useEffect, useState } from 'react';

export const useInifiteFetch = (options) => {
  const { enabled } = options;
  const [data, setData] = useState<unknown>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
 

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await customFetch(options);
        if (!result.length) {
          return;
        } else {
          setData((prev) => {
            return prev?.length ? [...prev, ...result] : result;
          });
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [options]);

  return { data, error, isLoading };
};
