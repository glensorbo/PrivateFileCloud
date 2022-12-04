import { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { useStateDispatch, useStateSelector } from '../Hooks';
import { authServices } from '../Services';

const googleState = process.env.REACT_APP_GOOGLE_STATE;

export const Auth: React.FC = () => {
  const location = useLocation();

  const { isAuthenticated } = useStateSelector((state) => state.auth);
  const { shouldNavigate } = useStateSelector((state) => state.ui);
  const dispatch = useStateDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const stateFromQuery = params.get('state');
    const code = params.get('code');

    if (googleState === stateFromQuery && code) {
      dispatch(authServices.authenticate(code));
    }
  }, [location, dispatch]);

  if (!isAuthenticated && shouldNavigate) {
    return <Navigate replace to='/login' />;
  }

  if (isAuthenticated) {
    return <Navigate replace to='/' />;
  }

  return <></>;
};
