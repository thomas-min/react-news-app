import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Article as ArticleInfo } from '../../../app/types';
import { addBookmark } from '../../bookmark/bookmark.slice';

const Li = styled.li`
  border-top: 1px solid gray;
  padding: 1rem 0;
  cursor: pointer;
`;

const Body = styled.article`
  display: flex;
`;

const Photo = styled.img`
  width: 300px;
  height: 180px;
  min-width: 300px;
  min-height: 180px;
  object-fit: fill;
  margin-right: 1rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  color: blue;
  background: none;
  border: none;
  font-size: 1.2rem;
`;

const Source: React.FC<ArticleInfo> = (props) => {
  const {
    source: { name },
    author,
  } = props;
  return (
    <div>
      <span>{name}</span>
      <span> | </span>
      <span>{author}</span>
    </div>
  );
};

const BookMarkBtn: React.FC<ArticleInfo> = (props) => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();

    if (!user) {
      alert('need login');
      return;
    }
    dispatch(addBookmark(props));
    alert('book mark added');
  };

  return <Button onClick={handleClick}>book mark →</Button>;
};

const Article: React.FC<ArticleInfo> = (props) => {
  const { title, description, url, urlToImage, publishedAt } = props;

  const date = new Date(publishedAt);

  const handleClick = useCallback(() => {
    window.open(url, '_blank');
  }, []);

  return (
    <Li onClick={handleClick}>
      <Body>
        <Photo src={urlToImage} />
        <div style={{ width: '100%' }}>
          <Flex>
            <Source {...props} />
            <BookMarkBtn {...props} />
          </Flex>
          <h2>{title}</h2>
          <p>{description}</p>
          <time>{date.toDateString()}</time>
        </div>
      </Body>
    </Li>
  );
};

export default Article;
