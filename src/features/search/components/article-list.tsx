import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { usePagination } from '../hooks/usePagination';
import Article from './article';

const Ul = styled.ul`
  margin: 1rem 0;
`;

const ArticleList = () => {
  const { articles, setPage } = usePagination();

  const loadMoreRef = useRef(null);

  const handleShowMore = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting) {
        setPage((page) => page + 1);
      }
    },
    [setPage]
  );

  useIntersectionObserver({
    callback: handleShowMore,
    ref: loadMoreRef,
  });

  return (
    <Ul>
      {articles.map((article) => (
        <Article {...article} key={article.url} />
      ))}
      <div ref={loadMoreRef}></div>
    </Ul>
  );
};

export default ArticleList;
