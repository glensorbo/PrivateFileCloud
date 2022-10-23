import { FC, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { useStateDispatch, useStateSelector } from '../Hooks';
import { PageContainer } from '../Components/UI';

const googleState = process.env.REACT_APP_GOOGLE_STATE;

export const AuthenticateSpinner: FC = () => {
  const location = useLocation();

  const { isAuthenticated, isRegistering } = useStateSelector(
    (state) => state.auth
  );
  const dispatch = useStateDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const stateFromQuery = params.get('state');
    const code = params.get('code');

    if (googleState === stateFromQuery && code) {
      console.log(code);
      // dispatch(googleAuthServices.authenticate(code));
    }
  }, [location, dispatch]);

  if (isAuthenticated) {
    return <Navigate replace to='/' />;
  }

  if (isRegistering) {
    return <Navigate replace to='/personal-info-google' />;
  }

  return (
    <PageContainer>
      <CircularProgress color='primary' size={80} />
    </PageContainer>
  );
};
