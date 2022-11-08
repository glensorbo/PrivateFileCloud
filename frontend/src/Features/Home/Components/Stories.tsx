import { AddStoryIcon } from './AddStoryIcon';
import { Story } from './Story';

export const Stories = () => {
  return (
    <div className='h-28 dark:bg-dark-bg-elevated flex items-center px-3 relative overflow-scroll border-b dark:border-b-gray-800 scrollbar scrollbar-none'>
      <AddStoryIcon
        image={{
          src: 'https://avatars.dicebear.com/api/avataaars/sdfsdfsdfsdf.svg',
          alt: 'Profile Pic',
        }}
      />

      <div className='flex absolute left-24'>
        <Story
          seen={false}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/wjktw.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={false}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/dfbfjt.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={false}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/xfgjsdfg.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={false}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/dsfghjhadfg.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={false}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/fgdhfshaeadfh.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={true}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/dfhasrthd.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={true}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/asdfghathdf.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={true}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/dafheah.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={true}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/adfhaerh.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={true}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/adfgae.svg',
            alt: 'Profile Pic',
          }}
        />
        <Story
          seen={true}
          image={{
            src: 'https://avatars.dicebear.com/api/avataaars/adfga.svg',
            alt: 'Profile Pic',
          }}
        />
      </div>
    </div>
  );
};
