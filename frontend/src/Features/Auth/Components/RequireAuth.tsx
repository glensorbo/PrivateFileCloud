import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStateDispatch, useStateSelector } from '../../../Hooks';
import { Login, Register, AuthenticateSpinner } from '../../../Pages';
import { authActions } from '../../../Store/State';

// import { UserService } from '../../../services';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loading } = useStateSelector((state) => state.auth);

  const location = useLocation();

  const dispatch = useStateDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      // dispatch(UserService.getUser());
      dispatch(authActions.setLoading(false));
    }
    const timer = setTimeout(() => {
      console.log('login');
      dispatch(authActions.userLogin);
      dispatch(authActions.setLoading(false));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  if (loading) {
    return <AuthenticateSpinner />;
  }

  if (!isAuthenticated && location.pathname === '/register') {
    return <Register />;
  }

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
