import { OutlinedIcon, SolidIcon } from '../../../Components/UI';
import { Carousel } from './Carousel';

import Profile from '../Assets/profile_image.png';
import Baby from '../Assets/baby.jpg';
import Baby2 from '../Assets/baby2.jpg';

const postText =
  'Herlig bilde av lille gullet 👶. Her skal jeg teste litt lang text og emoji 📷. Håper dette er lang nok tekst for å teste.';

export const Post = () => {
  return (
    <article className='w-screen pb-3'>
      <div className='flex items-center px-4 h-16'>
        <img src={Profile} alt='' className='h-10 w-10 rounded-full' />
        <p className='pl-3 dark:text-dark-text-primary font-semibold tracking-wide'>
          Glen Sørbø
        </p>
      </div>
      <Carousel sources={[Baby, Baby2]} />
      <div className='flex items-center pt-4 pb-1 px-4'>
        <button>
          <SolidIcon icon='HeartIcon' className='h-8 w-8 text-red-700' />
        </button>
        <button>
          <OutlinedIcon
            icon='ChatBubbleBottomCenterTextIcon'
            className='h-8 w-8 ml-2'
          />
        </button>
      </div>
      <div className='min-h-[2.5rem] px-4'>
        <p className='font-semibold text-sm pb-2'>23 liker</p>
        <p className='font-semibold text-sm whitespace-nowrap pb-1 dark:text-dark-primary'>
          Glen Sørbø
        </p>
        <p className='text-sm pb-2'>{postText}</p>
        <button className='w-full text-left py-2 text-sm font-semibold text-gray-400'>
          Se alle 11 kommentarer
        </button>
        <button className='flex items-center w-full py-2 text-left text-sm text-gray-400'>
          <img src={Profile} alt='' className='h-10 w-10 rounded-full mr-2' />
          Legg til en kommentar...
        </button>
      </div>
    </article>
  );
};
