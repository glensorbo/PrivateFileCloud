import { FC, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { useStateDispatch, useStateSelector } from '../Hooks';
import { PageContainer } from '../Components/UI';

const googleState = process.env.REACT_APP_GOOGLE_STATE;

export const AuthenticateSpinner: FC = () => {
  const location = useLocation();

  const { isAuthenticated, isRegistering, emailIsValid } = useStateSelector(
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

  useEffect(() => {
    location.state = 'Have loaded';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthenticated) {
    return <Navigate replace to='/' />;
  }

  if (isRegistering) {
    return <Navigate replace to='/personal-info-google' />;
  }

  if (!emailIsValid && location.state === 'Have Loaded') {
    location.state = null;
    return <Navigate replace to='/email-confirmation' />;
  }

  return (
    <PageContainer>
      <CircularProgress color='primary' size={80} />
    </PageContainer>
  );
};
