import { AddCommentButton } from './AddCommentButton';
import { PostText } from './PostText';
import { ViewAllCommentsButton } from './ViewAllCommentsButton';

interface Props {
  title: string;
  firstName: string;
  lastName: string;
  numberOfComments: number;
  numberOfLikes: number;
}

export const PostBody: React.FC<Props> = ({
  title,
  firstName,
  lastName,
  numberOfComments = 0,
  numberOfLikes = 0,
}) => {
  return (
    <div className='min-h-[2.5rem] px-4'>
      <p className='font-semibold text-sm py-2'>{`${numberOfLikes} liker`}</p>
      <PostText firstName={firstName} lastName={lastName} text={title} />
      <ViewAllCommentsButton numberOfComments={numberOfComments} />
      <AddCommentButton />
    </div>
  );
};
