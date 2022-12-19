import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useStateDispatch } from '../Hooks';
import { authServices } from '../Services';

const googleState = process.env.REACT_APP_GOOGLE_STATE;

export const Auth: React.FC = () => {
  const location = useLocation();
  const dispatch = useStateDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const stateFromQuery = params.get('state');
    const code = params.get('code');

    if (googleState === stateFromQuery && code) {
      dispatch(
        authServices.authenticate(code, () => {
          navigate('/');
        })
      );
    }
  }, [location, dispatch, navigate]);

  return <></>;
};
