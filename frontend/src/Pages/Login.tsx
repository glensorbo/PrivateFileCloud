import { Navigate } from 'react-router-dom';
import { Button, Section } from '../Components/UI';
import { useStateSelector } from '../Hooks';
import { fullGoogleAuthUrl } from '../Lib/GoogleApi';

export const Login = () => {
  const { isAuthenticated } = useStateSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return (
    <Section>
      <h1 className='text-center text-4xl font-bold text-light-primary dark:text-white py-10'>
        Private File Cloud
      </h1>
      <h2>Du må ha en konto før du kan logge inn.</h2>
      <p>For å kunne opprette en konto må du være invitert først.</p>
      <Button onClick={() => window.location.replace(`${fullGoogleAuthUrl}`)}>
        Logg inn med Google
      </Button>
    </Section>
  );
};
