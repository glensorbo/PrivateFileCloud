import { PostHeader } from './PostHeader';
import { PostControls } from './PostControls';
import { Carousel } from './Carousel';
import { PostBody } from './PostBody';

import { IPost } from '../../../Interfaces';
import { useStateSelector } from '../../../Hooks';
interface Props {
  post: IPost;
}

export const Post: React.FC<Props> = ({ post }) => {
  const { user } = useStateSelector((state) => state.auth);

  return (
    <article className='w-screen pb-3 border-b dark:border-b-gray-800'>
      <PostHeader
        image={{
          src: post.creator.webpProfileImage,
          alt: post.creator.firstName,
        }}
        firstName={post.creator.firstName}
        lastName={post.creator.lastName}
      />
      <Carousel sources={post.images} />
      <PostControls
        liked={post.likes.some((id) => id === user?.id)}
        postId={post.id}
        userId={user?.id ?? ''}
      />
      <PostBody
        firstName={post.creator.firstName}
        lastName={post.creator.lastName}
        numberOfComments={post.comments.length}
        numberOfLikes={post.likes.length}
        title={post.title}
      />
    </article>
  );
};
