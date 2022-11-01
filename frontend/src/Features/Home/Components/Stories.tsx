import { AddStoryIcon } from './AddStoryIcon';
import { Story } from './Story';

export const Stories = () => {
  return (
    <div className='h-24 dark:bg-dark-bg-elevated flex items-center px-3 relative overflow-scroll border-b dark:border-b-gray-800'>
      <AddStoryIcon />

      <div className='flex absolute left-20'>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
};
