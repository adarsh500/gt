import { customFetch } from '@utils/customFetch';
import { useEffect, useState } from 'react';

export const useFetch = (options) => {
  const [data, setData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!options.enabled) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await customFetch(options);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [options.enabled]);

  return { data, error, isLoading };
};
