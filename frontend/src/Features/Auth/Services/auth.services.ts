import { IAuthenticationResponse } from './../../../Interfaces';
import { authActions } from './../../../Store/State/auth.state';
import { API } from '../../../Lib';
import { AppDispatch } from './../../../Store/index';
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

        setTimeout(() => {
          dispatch(authActions.login(data));
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    };
  },
};
