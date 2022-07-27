import styled from 'styled-components';
import { useAppSelector } from '../../../app/hooks';
import Bookmark from './bookmark';

const Ul = styled.ul`
  margin: 1rem 0;
`;

const BookmarkList = () => {
  const bookmarks = useAppSelector((state) => state.bookmark.articles);

  return (
    <Ul>
      {bookmarks
        .slice()
        .reverse()
        .map((bookmark) => (
          <Bookmark {...bookmark} key={bookmark.url} />
        ))}
    </Ul>
  );
};

export default BookmarkList;
