import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { Article, Article as ArticleInfo } from '../../../app/types';
import { editBookmark, removeBookmark } from '../bookmark.slice';

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
  align-items: center;
`;

const FlexOne = styled.div`
  flex: 1;
`;

const Button = styled.div`
  color: gray;
  background: none;
  border: none;
  font-size: 1.2rem;
  margin-left: 0.5rem;
`;

const Source: React.FC<ArticleInfo> = (props) => {
  const {
    source: { name },
    author,
  } = props;
  return (
    <FlexOne>
      <span>{name}</span>
      <span> | </span>
      <span>{author}</span>
    </FlexOne>
  );
};

const RemoveBtn: React.FC<ArticleInfo> = (props) => {
  const dispatch = useAppDispatch();

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(removeBookmark(props));
  };

  return <Button onClick={handleClick}>Remove</Button>;
};

const EditBtn: React.FC<ArticleInfo> = (props) => {
  const dispatch = useAppDispatch();

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    const description = prompt('Enter new content');

    if (!description) return;

    const newArticle: Article = { ...props, description };

    dispatch(editBookmark(newArticle));
  };

  return <Button onClick={handleClick}>Edit</Button>;
};

const Bookmark: React.FC<ArticleInfo> = (props) => {
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
            <EditBtn {...props} />
            <RemoveBtn {...props} />
          </Flex>
          <h2>{title}</h2>
          <p>{description}</p>
          <time>{date.toDateString()}</time>
        </div>
      </Body>
    </Li>
  );
};

export default Bookmark;
