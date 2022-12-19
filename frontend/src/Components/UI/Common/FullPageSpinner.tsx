import { Spinner } from './Spinner';

export const FullPageSpinner = () => (
  <div className='h-screen w-screen bg-white dark:bg-dark-bg-primary'>
    <Spinner className='h-20 w-20 border-t-4' />
  </div>
);
