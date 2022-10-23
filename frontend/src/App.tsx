import { Outlet } from 'react-router-dom';

import Moment from 'react-moment';
import { PageContainer } from './Components/UI';

export const App = () => {
  Moment.globalLocale = 'no';
  Moment.globalFormat = 'DD.MM.YYYY';

  console.log('App Rendered');

  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};
