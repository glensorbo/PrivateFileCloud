import { IAuthenticationResponse } from '../Interfaces';
import { API } from '../Lib';
import { AppDispatch } from '../Store';
import { authActions } from '../Store/State';
import { sleep } from '../Utils';

export const authServices = {
  authenticate(code: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const { data }: { data: IAuthenticationResponse } = await API.post(
          'auth',
          { code }
        );
        console.log(data);
        dispatch(authActions.login(data));
      } catch (error) {
        console.log(error);
      }
    };
  },
  login(id: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const { data }: { data: IAuthenticationResponse } = await API.post(
          'auth/login',
          { id }
        );

        await sleep(3000);
        dispatch(authActions.login(data));
      } catch (error) {
        console.log(error);
      }
    };
  },
};
