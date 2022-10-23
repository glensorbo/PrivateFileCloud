import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Button,
  PageContainer,
  PageSubtitle,
  PageTitle,
  SectionContainer,
} from '../Components/UI';

import { fullGoogleAuthUrl } from '../Lib/GoogleApi';

export const Register = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const token = params.get('token');

    if (token) {
      console.log(token);
    }

    if (!token) {
      window.location.replace('/login');
    }
  }, [location]);

  return (
    <PageContainer>
      <SectionContainer>
        <PageTitle>Private Image Cloud</PageTitle>
        <PageSubtitle>Du har blitt invitert og kan registrere deg</PageSubtitle>
        <Button
          color='primary'
          variant='contained'
          sx={{ marginTop: '5rem' }}
          onClick={() => window.location.replace(`${fullGoogleAuthUrl}`)}
        >
          Registrer bruker med Google
        </Button>
      </SectionContainer>
    </PageContainer>
  );
};
