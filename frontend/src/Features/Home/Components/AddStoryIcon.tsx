import { SolidIcon } from '../../../Components/UI';
interface Props {
  image: {
    src: string;
    alt: string;
  };
}

export const AddStoryIcon: React.FC<Props> = ({ image }) => {
  return (
    <div className='relative'>
      <img
        src={image.src}
        alt={image.alt ?? 'Profile Image'}
        className='rounded-full overflow-hidden w-20 border border-gray-700'
      />
      <SolidIcon
        icon='PlusCircleIcon'
        className='absolute right-0 bottom-0 h-7 w-7 dark:text-dark-primary font-bold dark:bg-dark-bg-elevated rounded-full'
      />
    </div>
  );
};
