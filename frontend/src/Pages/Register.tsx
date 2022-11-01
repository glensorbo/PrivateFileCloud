import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
    <div>
      <h1>Private File Cloud</h1>
      <h2>Du har blitt invitert og kan registrere deg</h2>
      <button onClick={() => window.location.replace(`${fullGoogleAuthUrl}`)}>
        Registrer bruker med Google
      </button>
    </div>
  );
};
