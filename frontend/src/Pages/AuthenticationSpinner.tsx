import { FC, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { useStateDispatch, useStateSelector } from '../Hooks';
import { authServices } from '../Features/Auth/Services/auth.services';
import { authActions } from '../Store/State';
import { Spinner } from '../Components/UI';

const googleState = process.env.REACT_APP_GOOGLE_STATE;

export const AuthenticationSpinner: FC = () => {
  const location = useLocation();

  const { isAuthenticated } = useStateSelector((state) => state.auth);
  const dispatch = useStateDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const stateFromQuery = params.get('state');
    const code = params.get('code');

    if (googleState === stateFromQuery && code) {
      console.log('[AuthenticateSpinner] CODE: ', code);
      dispatch(authServices.authenticate(code));
    }
  }, [location, dispatch]);

  useEffect(() => {
    let timer: any;
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    let id;
    if (user) {
      const parsedUser = JSON.parse(user);
      id = parsedUser.id;
    }
    if (token && user) {
      dispatch(authServices.login(id));
    } else {
      timer = setTimeout(() => {
        dispatch(authActions.setLoading(false));
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  if (isAuthenticated) {
    return <Navigate replace to='/' />;
  }

  return (
    <div className='h-screen w-screen bg-white dark:bg-dark-bg-primary'>
      <Spinner className='h-20 w-20 border-t-4' />
    </div>
  );
};
