import { PostHeader } from './PostHeader';
import { PostControls } from './PostControls';
import { Carousel } from './Carousel';
import { PostBody } from './PostBody';

import { useStateSelector } from '../../../Hooks';
import { adventurerUrl, avatarUrl, initialsUrl } from '../../../Utils';

const postText =
  'Herlig bilde av lille gullet 👶. Her skal jeg teste litt lang text og emoji 📷. Håper dette er lang nok tekst for å teste.';

export const Post = () => {
  const { user } = useStateSelector((state) => state.auth);

  return (
    <article className='w-screen pb-3'>
      <PostHeader
        image={{
          src: 'https://avatars.dicebear.com/api/avataaars/glensorbo.svg',
          alt: 'Profile Image',
        }}
        firstName='Post '
        lastName='Creator'
      />
      <Carousel
        sources={[`${adventurerUrl}/image1.svg`, `${avatarUrl}/image2.svg`]}
      />
      <PostControls liked={false} />
      <PostBody
        firstName={user?.firstName!}
        lastName={user?.lastName!}
        numberOfComments={10}
        numberOfLikes={23}
        postText={postText}
        profileImage={{
          src: user?.webpProfileImage
            ? user?.webpProfileImage
            : `${initialsUrl}/${user?.firstName} ${user?.lastName}.svg`,
        }}
      />
    </article>
  );
};
