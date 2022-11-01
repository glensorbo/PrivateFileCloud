import { Stories } from '../Features/Home';

import Profile from '../Features/Home/Assets/profile_image.png';
import Baby from '../Features/Home/Assets/baby.jpg';
import Baby2 from '../Features/Home/Assets/baby2.jpg';
import { OutlinedIcon, SolidIcon } from '../Components/UI';

const postText =
  'Herlig bilde av lille gullet 👶. Her skal jeg teste litt lang text og emoji 📷. Håper dette er lang nok tekst for å teste.';

export const Home = () => {
  return (
    <>
      <Stories />
      <article className='w-screen'>
        <div className='flex items-center px-4 h-16'>
          <img src={Profile} alt='' className='h-10 w-10 rounded-full' />
          <p className='pl-3 dark:text-dark-text-primary font-semibold tracking-wide'>
            Glen Sørbø
          </p>
        </div>
        <Carousel />
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
          <p className='font-semibold text-sm whitespace-nowrap pb-1'>
            Glen Sørbø
          </p>
          <p className='text-sm pb-2'>{postText}</p>
          <button className='text-sm font-semibold text-gray-400'>
            Se alle 11 kommentarer
          </button>
        </div>
      </article>
      <article className='w-screen'>
        <div className='flex items-center px-4 h-16'>
          <img src={Profile} alt='' className='h-10 w-10 rounded-full' />
          <p className='pl-3 dark:text-dark-text-primary font-semibold tracking-wide'>
            Glen Sørbø
          </p>
        </div>
        <Carousel2 />
        <div className='flex items-center h-16 px-4'>
          <button>
            <OutlinedIcon icon='HeartIcon' className='h-8 w-8' />
          </button>
          <button>
            <OutlinedIcon
              icon='ChatBubbleBottomCenterTextIcon'
              className='h-8 w-8 ml-2'
            />
          </button>
        </div>
        <div className='min-h-[2.5rem] px-4'>
          <p className='font-semibold text-sm whitespace-nowrap pb-1'>
            Glen Sørbø
          </p>
          <p className='text-sm pb-2'>{postText}</p>
        </div>
      </article>
    </>
  );
};

// 470 x 588

const Carousel = () => {
  return (
    <ul className='flex overflow-x-scroll scroll-smooth h-[588px] bg-red-200'>
      <li className='min-w-full overflow-hidden'>
        <img src={Baby} alt='' className='w-full h-full object-cover' />
      </li>
      <li className='min-w-full overflow-hidden'>
        <img src={Baby} alt='' className='w-full h-full object-cover' />
      </li>
    </ul>
  );
};

const Carousel2 = () => {
  return (
    <ul className='flex overflow-x-scroll h-[588px] bg-red-200'>
      <li className='min-w-full overflow-hidden'>
        <img src={Baby2} alt='' className='w-full h-full object-cover' />
      </li>
      <li className='min-w-full overflow-hidden'>
        <img src={Baby2} alt='' className='w-full h-full object-cover' />
      </li>
    </ul>
  );
};
