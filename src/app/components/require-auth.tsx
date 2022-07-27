import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../configs';
import { useAppSelector } from '../hooks';

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
