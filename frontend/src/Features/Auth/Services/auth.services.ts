import { IAuthenticationResponse } from './../../../Interfaces';
import { authActions } from './../../../Store/State/auth.state';
import { API } from '../../../Lib';
import { AppDispatch } from './../../../Store/index';
import { uiActions } from '../../../Store/State';
export const authServices = {
  authenticate(code: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const { data }: { data: IAuthenticationResponse } = await API.post(
          'auth',
          { code }
        );
        dispatch(authActions.login(data));
      } catch (error: any) {
        console.log(error.response.status);
        dispatch(uiActions.setShouldNavigate(true));
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
      } catch (error: any) {
        console.log(error);
      }
    };
  },
};
