import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { Article } from '../../../app/types';
import { useArticlesQuery } from './useArticlesQuery';

// TODO: refactor api access structure?
export const usePagination = () => {
  const query = useAppSelector((state) => state.search.query);
  const sortBy = useAppSelector((state) => state.search.sortBy);

  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);

  const { data } = useArticlesQuery({
    q: query,
    page: page.toString(),
    sortBy: sortBy,
  });

  const clearArticles = useCallback(() => {
    setArticles([]);
    setPage(1);
  }, [setArticles]);

  useEffect(() => {
    if (data?.articles) {
      setArticles((articles) => [...articles, ...data?.articles]);
    }
  }, [data?.articles]);

  useEffect(() => {
    clearArticles();
  }, [query, sortBy]);

  return { articles, setPage, clearArticles };
};
