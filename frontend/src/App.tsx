import { Outlet } from 'react-router-dom';

import Moment from 'react-moment';

export const App = () => {
  Moment.globalLocale = 'no';
  Moment.globalFormat = 'DD.MM.YYYY';

  return (
    <main className='container'>
      <Outlet />
    </main>
  );
};
