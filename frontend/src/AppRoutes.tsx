import { Routes, Route } from 'react-router-dom';

import { App } from './App';
import { RequireAuth } from './Features/Auth';
import { Home, Login, AuthenticationSpinner, Register } from './Pages';

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
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='auth' element={<AuthenticationSpinner />} />
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
