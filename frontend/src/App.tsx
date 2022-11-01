import { Outlet } from 'react-router-dom';

import Moment from 'react-moment';

export const App = () => {
  Moment.globalLocale = 'no';
  Moment.globalFormat = 'DD.MM.YYYY';

  console.log('App Rendered');

  return (
    <main className='min-h-screen min-w-full bg-white dark:bg-dark-bg-primary dark:text-dark-text-primary'>
      <Outlet />
    </main>
  );
};
