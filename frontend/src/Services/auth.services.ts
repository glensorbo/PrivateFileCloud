import { IAuthenticationResponse } from '../Interfaces';
import { API } from '../Lib';
import { AppDispatch } from '../Store';
import { authActions } from '../Store/State';
import { sleep } from '../Utils';

export const authServices = {
  authenticate(code: string, callback: () => void) {
    return async (dispatch: AppDispatch) => {
      try {
        const { data }: { data: IAuthenticationResponse } = await API.post(
          'auth',
          { code }
        );
        dispatch(authActions.login(data));
        callback();
      } catch (error: any) {
        console.log(error.response.status);
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

        await sleep(2000);
        dispatch(authActions.login(data));
      } catch (error: any) {
        console.log(error);
      }
    };
  },
};
