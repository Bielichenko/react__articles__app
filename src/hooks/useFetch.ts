import { useState, useEffect } from 'react';
import { IArticleCard } from '../types/IArticleCard';

type Status = {
  isLoading: boolean;
  articlesFromServer: IArticleCard[] | undefined;
  error:unknown;
};

export const useFetch = (url: string) => {
  const [status, setStatus] = useState<Status>({
    isLoading: false,
    articlesFromServer: undefined,
    error: undefined,
  });

  async function fetchNow(fetchUrl: string) {
    setStatus({ ...status, isLoading: true });

    try {
      const res = await fetch(fetchUrl);
      const articlesFromServer = await res.json();

      setStatus({ ...status, isLoading: false, articlesFromServer });
    } catch (error) {
      setStatus({ ...status, error });
    }
  }

  useEffect(() => {
    if (url) {
      fetchNow(url);
    }
  }, []);

  return { ...status, fetchNow };
};
