import { Link } from 'react-router-dom';
import { useStateSelector } from '../../../Hooks';
import { initialsUrl } from '../../../Utils';

export const Header = () => {
  const { user } = useStateSelector((state) => state.auth);
  return (
    <header className='sticky top-0 left-0 dark:bg-dark-bg-primary w-screen h-16 flex items-center justify-between px-4 border-b dark:border-b-gray-800 z-50'>
      <h1 className='dark:text-dark-primary font-bold text-lg'>
        Private File Cloud
      </h1>
      <Link to='/profile' className='p-2'>
        <img
          src={
            user?.webpProfileImage
              ? `${user?.webpProfileImage}`
              : `${initialsUrl}/${user?.firstName} ${user?.lastName}.svg`
          }
          alt={`${user?.firstName} ${user?.lastName}`}
          className='h-10 w-10 rounded-full border border-gray-700'
        />
      </Link>
    </header>
  );
};
