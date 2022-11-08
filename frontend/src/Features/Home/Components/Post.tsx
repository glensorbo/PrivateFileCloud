import { PostHeader } from './PostHeader';
import { PostControls } from './PostControls';
import { Carousel } from './Carousel';
import { PostBody } from './PostBody';

import Baby from '../Assets/baby.jpg';
import Baby2 from '../Assets/baby2.jpg';

const postText =
  'Herlig bilde av lille gullet 👶. Her skal jeg teste litt lang text og emoji 📷. Håper dette er lang nok tekst for å teste.';

export const Post = () => {
  return (
    <article className='w-screen pb-3'>
      <PostHeader
        image={{
          src: 'https://avatars.dicebear.com/api/avataaars/glensorbo.svg',
        }}
        firstName='Glen'
        lastName='Sørbø'
      />
      <Carousel sources={[Baby, Baby2]} />
      <PostControls liked={false} />
      <PostBody
        firstName='Glen'
        lastName='Sørbø'
        numberOfComments={10}
        numberOfLikes={23}
        postText={postText}
        profileImage={{
          src: 'https://avatars.dicebear.com/api/avataaars/loggedInUser.svg',
        }}
      />
    </article>
  );
};
