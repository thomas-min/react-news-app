import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { clearCredentials } from '../../features/auth/auth.slice';
import { ROUTES } from '../configs';
import { useAppDispatch, useAppSelector } from '../hooks';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  padding: 1rem 0;
`;

const Button = styled.button`
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const Space = styled.div`
  flex: 1;
`;

const TopNav = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = useCallback(() => {
    dispatch(clearCredentials());
  }, [dispatch]);

  return (
    <Nav>
      <Button onClick={() => navigate(ROUTES.HOME)}>Home</Button>
      <Button onClick={() => navigate(ROUTES.SEARCH)}>Search</Button>
      <Button onClick={() => navigate(ROUTES.BOOKMARK)}>Bookmark</Button>
      <Space />
      {user ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Button onClick={() => navigate(ROUTES.LOGIN)}>Login</Button>
      )}
    </Nav>
  );
};

export default TopNav;
