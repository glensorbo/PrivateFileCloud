import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStateDispatch, useStateSelector } from '../../../Hooks';
import { Login } from '../../../Pages';
import { AuthenticateSpinner } from '../../../Pages/AuthenticateSpinner';

// import { UserService } from '../../../services';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useStateSelector((state) => state.auth);

  const location = useLocation();

  const dispatch = useStateDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      // dispatch(UserService.getUser());
    }
  }, [dispatch]);

  if (!isAuthenticated && location.pathname === '/login') {
    return <Login />;
  }

  if (!isAuthenticated && location.pathname === '/auth') {
    return <AuthenticateSpinner />;
  }

  if (isAuthenticated && location.pathname === '/login') {
    return <Navigate to='/' replace />;
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};
