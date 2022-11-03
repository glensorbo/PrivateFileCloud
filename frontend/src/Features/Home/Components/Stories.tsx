import { AddStoryIcon } from './AddStoryIcon';
import { Story } from './Story';

export const Stories = () => {
  return (
    <div className='h-28 dark:bg-dark-bg-elevated flex items-center px-3 relative overflow-scroll border-b dark:border-b-gray-800 scrollbar scrollbar-none'>
      <AddStoryIcon />

      <div className='flex absolute left-24'>
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
