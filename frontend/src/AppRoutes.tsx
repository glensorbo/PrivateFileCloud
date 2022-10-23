import { Routes, Route } from 'react-router-dom';

import { App } from './App';
import { RequireAuth } from './Features/Auth';
import { Dashboard, Login, AuthenticateSpinner, Register } from './Pages';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth>
            <App />
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='auth' element={<AuthenticateSpinner />} />
        <Route path='register' element={<Register />} />
        {/* <Route path='admin'>
          <Route path='users' element={<UserList />}>
            <Route path='active' element={<ActiveUserlist />}>
              <Route path=':userId' element={<ActiveUserlist />} />
            </Route>
          </Route>
        </Route> */}
        <Route path='*' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
