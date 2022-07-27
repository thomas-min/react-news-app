import { useMemo } from 'react';
import Container from '../app/components/container';
import Main from '../app/components/main';
import Title from '../app/components/title';
import TopNav from '../app/components/top-nav';
import { useAppSelector } from '../app/hooks';
import BookmarkList from '../features/bookmark/components/bookmark-list';
import EmptyList from '../features/bookmark/components/empty-list';

const BookmarkPage = () => {
  const bookMark = useAppSelector((state) => state.bookmark.articles);
  const isEmpty = useMemo(() => {
    return bookMark.length === 0;
  }, [bookMark]);

  return (
    <Container>
      <TopNav />
      <Title>Bookmarked articles</Title>
      <Main>{isEmpty ? <EmptyList /> : <BookmarkList />}</Main>
    </Container>
  );
};

export default BookmarkPage;
