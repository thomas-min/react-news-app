import { CSSProperties, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../app/components/container';
import SearchBar from '../app/components/search-bar';
import Title from '../app/components/title';
import { ROUTES } from '../app/configs';
import { useAppDispatch } from '../app/hooks';
import { setQuery } from '../features/search/search.slice';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handelSubmit = useCallback(() => {
    navigate(ROUTES.SEARCH);
  }, [navigate]);

  useEffect(() => {
    dispatch(setQuery(''));
  }, [dispatch, setQuery]);

  return (
    <Container center>
      <Title>News App</Title>
      <SearchBar onSubmit={handelSubmit} />
    </Container>
  );
};

export default HomePage;
