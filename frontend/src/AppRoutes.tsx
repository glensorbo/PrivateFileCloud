import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { RequireAuth } from './Features/Auth';

import { Home, Login, Auth, Register, PageLayout } from './Pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<PageLayout />}
      errorElement={<div>ErrorElement...</div>}
    >
      <Route
        index
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='*' element={<Login />} />
    </Route>
  )
);
