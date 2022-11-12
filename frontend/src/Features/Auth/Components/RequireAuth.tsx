import { Navigate, useLocation } from 'react-router-dom';
import { useStateSelector } from '../../../Hooks';

interface Props {
  children: JSX.Element;
}

export const RequireAuth: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, isDemoUser } = useStateSelector(
    (state) => state.auth
  );

  const location = useLocation();

  if (!isAuthenticated && !isDemoUser) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};
