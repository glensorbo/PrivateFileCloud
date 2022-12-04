import { useState } from 'react';
import { PostHeader } from './PostHeader';
import { PostControls } from './PostControls';
/* import { Carousel_old } from './Carousel_old'; */
import { PostBody } from './PostBody';

import { IPost } from '../../../Interfaces';
import { useStateSelector } from '../../../Hooks';
import { AddCommentInput } from './AddCommentInput';
import { Carousel } from './Carousel';
interface Props {
  post: IPost;
}

export const Post: React.FC<Props> = ({ post }) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const { user, isDemoUser } = useStateSelector((state) => state.auth);

  const toggleShowCommentInput = () => {
    setShowCommentInput((prev) => !prev);
  };

  return (
    <>
      <article className='w-screen max-w-lg m-auto pb-3 border-b dark:border-b-gray-800'>
        <PostHeader
          image={{
            src: post.creator.webpProfileImage,
            alt: post.creator.firstName,
          }}
          firstName={post.creator.firstName}
          lastName={post.creator.lastName}
        />
        {/*  <Carousel_old
          post={post}
          liked={post.likes.some((id) => id === user?.id)}
        /> */}
        <Carousel post={post} liked={post.likes.some((id) => id === user.id)} />
        <PostControls
          liked={post.likes.some((id) => id === user.id)}
          postId={post.id}
          userId={user.id}
          isDemoUser={isDemoUser}
        />
        <PostBody post={post} toggleShowCommentInput={toggleShowCommentInput} />
      </article>
      {showCommentInput && (
        <AddCommentInput
          post={post}
          toggleShowCommentInput={toggleShowCommentInput}
        />
      )}
    </>
  );
};
