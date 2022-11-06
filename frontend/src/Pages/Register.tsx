import { Navigate, useLocation } from 'react-router-dom';
import { Button, Section } from '../Components/UI';

import { fullGoogleAuthUrl } from '../Lib/GoogleApi';

export const Register = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const token = params.get('token');

  if (!token) {
    return <Navigate to='/login' replace />;
  }

  if (token) {
    console.log('[Register] Token: ', token);
  }

  return (
    <Section>
      <h1 className='text-center text-4xl font-bold text-light-primary dark:text-white py-10'>
        Private File Cloud
      </h1>
      <h2>Du har blitt invitert og kan registrere deg</h2>
      <Button onClick={() => window.location.replace(`${fullGoogleAuthUrl}`)}>
        Registrer bruker med Google
      </Button>
    </Section>
  );
};
