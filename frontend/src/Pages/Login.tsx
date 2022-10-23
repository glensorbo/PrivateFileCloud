import {
  BodyText,
  Button,
  PageContainer,
  PageSubtitle,
  PageTitle,
  SectionContainer,
} from '../Components/UI';

import { fullGoogleAuthUrl } from '../Lib/GoogleApi';

export const Login = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <PageTitle>Private Image Cloud</PageTitle>
        <PageSubtitle>Du må ha en konto før du kan logge inn.</PageSubtitle>
        <BodyText style={{ marginTop: '2rem', textAlign: 'center' }}>
          For å kunne opprette en konto må du være invitert først.
        </BodyText>
        <Button
          color='primary'
          variant='contained'
          sx={{ marginTop: '5rem' }}
          onClick={() => window.location.replace(`${fullGoogleAuthUrl}`)}
        >
          Logg inn med Google
        </Button>
      </SectionContainer>
    </PageContainer>
  );
};
