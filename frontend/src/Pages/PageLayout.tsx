import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, SolidIcon, Spinner } from '../Components/UI';
import { useStateDispatch, useStateSelector } from '../Hooks';
import { authServices } from '../Services';
import { authActions } from '../Store/State';

export const PageLayout = () => {
  const { loading, isAuthenticated, isDemoUser } = useStateSelector(
    (state) => state.auth
  );

  const dispatch = useStateDispatch();

  useEffect(() => {
    let timer: any;
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    let id;
    if (user) {
      const parsedUser = JSON.parse(user);
      id = parsedUser.id;
    }
    if (token && user) {
      dispatch(authServices.login(id));
    } else {
      timer = setTimeout(() => {
        dispatch(authActions.setLoading(false));
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <>
      {loading && (
        <div className='h-screen w-screen bg-white dark:bg-dark-bg-primary'>
          <Spinner className='h-20 w-20 border-t-4' />
        </div>
      )}
      {!loading && (
        <>
          {isAuthenticated || isDemoUser ? <Header /> : null}
          <main className='min-h-screen min-w-full bg-white dark:bg-dark-bg-primary dark:text-dark-text-primary'>
            <Outlet />
            {isAuthenticated || isDemoUser ? (
              <button className='fixed bottom-3 right-3 h-20 w-20 rounded-full'>
                <SolidIcon
                  icon='PlusCircleIcon'
                  className='dark:text-dark-primary'
                />
              </button>
            ) : null}
          </main>
        </>
      )}
    </>
  );
};
