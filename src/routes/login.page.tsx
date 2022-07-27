import { Link } from 'react-router-dom';
import { ROUTES } from '../app/configs';
import Container from '../app/components/container';
import LoginForm from '../features/auth/components/login-form';

const HomeLink = () => {
  return <Link to={ROUTES.HOME}>Back to home</Link>;
};

const LoginPage = () => {
  return (
    <Container center>
      <LoginForm />
      <HomeLink />
    </Container>
  );
};

export default LoginPage;
