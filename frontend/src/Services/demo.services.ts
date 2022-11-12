import { authActions } from './../Store/State/auth.state';
import { AppDispatch } from '../Store';
import { IAuthenticationResponse } from '../Interfaces';

import { adventurerUrl } from '../Utils';

const demoUser: IAuthenticationResponse = {
  id: 'demo',
  email: 'demo@glensorbo.com',
  firstName: 'demo',
  lastName: 'user',
  isLoggingIn: true,
  isRegistering: false,
  originalProfileImage: `${adventurerUrl}/DemoUser.svg`,
  webpProfileImage: `${adventurerUrl}/DemoUser.svg`,
  status: 'demo',
  token: 'demo',
  roles: [
    {
      id: 'demo',
      name: 'Demo',
    },
  ],
};

export const demoServices = {
  setIsDemoUser() {
    return async (dispatch: AppDispatch) => {
      dispatch(authActions.login(demoUser));
    };
  },
};
