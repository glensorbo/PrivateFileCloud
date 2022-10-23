import { Navigate, useLocation } from 'react-router-dom';
import { useStateSelector } from '../../../Hooks';
import { Login, Register, AuthenticationSpinner } from '../../../Pages';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loading } = useStateSelector((state) => state.auth);

  const location = useLocation();

  if (loading) {
    return <AuthenticationSpinner />;
  }

  if (!isAuthenticated && location.pathname === '/register') {
    return <Register />;
  }

  if (!isAuthenticated && location.pathname === '/login') {
    return <Login />;
  }

  if (!isAuthenticated && location.pathname === '/auth') {
    return <AuthenticationSpinner />;
  }

  if (isAuthenticated && location.pathname === '/login') {
    return <Navigate to='/' replace />;
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};
