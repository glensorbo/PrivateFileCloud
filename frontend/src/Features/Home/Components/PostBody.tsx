import { IPost } from '../../../Interfaces';
import { AddCommentButton } from './AddCommentButton';
import { PostText } from './PostText';
import { ViewAllCommentsButton } from './ViewAllCommentsButton';

interface Props {
  post: IPost;
  toggleShowCommentInput: React.MouseEventHandler;
}

export const PostBody: React.FC<Props> = ({ post, toggleShowCommentInput }) => {
  return (
    <div className='min-h-[2.5rem] px-4'>
      <p className='font-semibold text-sm py-2'>{`${post.likes.length} liker`}</p>
      <PostText
        firstName={post.creator.firstName}
        lastName={post.creator.lastName}
        text={post.title}
      />
      <ViewAllCommentsButton numberOfComments={post.comments.length} />
      <AddCommentButton toggleShowCommentInput={toggleShowCommentInput} />
    </div>
  );
};
