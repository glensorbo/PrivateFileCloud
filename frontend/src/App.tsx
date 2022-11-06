import { RouterProvider } from 'react-router-dom';

import Moment from 'react-moment';
import { router } from './AppRoutes';

export const App = () => {
  Moment.globalLocale = 'no';
  Moment.globalFormat = 'DD.MM.YYYY';

  return <RouterProvider router={router} />;
};
