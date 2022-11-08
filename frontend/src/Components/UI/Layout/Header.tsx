import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 dark:bg-dark-bg-primary w-screen h-16 flex items-center justify-between px-4 border-b dark:border-b-gray-800 z-50'>
      <h1 className='dark:text-dark-primary font-bold text-lg'>
        Private File Cloud
      </h1>
      <Link to='/profile' className='p-2'>
        <img
          src='https://avatars.dicebear.com/api/avataaars/glensorbo.svg'
          alt='Glen'
          className='h-10 w-10 rounded-full border border-gray-700'
        />
      </Link>
    </header>
  );
};
