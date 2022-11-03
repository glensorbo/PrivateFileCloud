import { SolidIcon } from '../../../Components/UI';
import Image from '../Assets/profile_image.png';

export const AddStoryIcon = () => {
  return (
    <div className='relative'>
      <img
        src={Image}
        alt=''
        className='rounded-full overflow-hidden w-20 border border-gray-700'
      />
      <SolidIcon
        icon='PlusCircleIcon'
        className='absolute right-0 bottom-0 h-7 w-7 dark:text-dark-primary font-bold '
      />
      {/* <div className='absolute right-0 bottom-0 rounded-full w-5 h-5 bg-light-primary dark:bg-dark-primary dark:text-dark-text-onPrimary border dark:border-dark-bg-elevated'>
        <span className='h-full w-full flex items-center justify-center font-bold'>
          +
        </span>
      </div> */}
    </div>
  );
};
