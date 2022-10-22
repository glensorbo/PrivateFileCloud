import {
  Button,
  PageContainer,
  PageTitle,
  SectionContainer,
} from '../Components/UI';

import { fullGoogleAuthUrl } from '../Lib/GoogleApi';

export const Login = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <PageTitle>Private Image Cloud</PageTitle>
        <Button
          color='primary'
          variant='contained'
          onClick={() => window.location.replace(`${fullGoogleAuthUrl}`)}
        >
          Logg inn med Google
        </Button>
      </SectionContainer>
    </PageContainer>
  );
};
