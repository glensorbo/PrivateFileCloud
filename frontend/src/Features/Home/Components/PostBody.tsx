import { AddCommentButton } from './AddCommentButton';
import { PostText } from './PostText';
import { ViewAllCommentsButton } from './ViewAllCommentsButton';

interface Props {
  postText: string;
  firstName: string;
  lastName: string;
  profileImage: {
    src: string;
    alt?: string;
  };
  numberOfComments: number;
  numberOfLikes: number;
}

export const PostBody: React.FC<Props> = ({
  postText,
  firstName,
  lastName,
  profileImage,
  numberOfComments = 0,
  numberOfLikes = 0,
}) => {
  return (
    <div className='min-h-[2.5rem] px-4'>
      <p className='font-semibold text-sm py-2'>{`${numberOfLikes} liker`}</p>
      <PostText firstName={firstName} lastName={lastName} text={postText} />
      <ViewAllCommentsButton numberOfComments={numberOfComments} />
      <AddCommentButton
        image={{ src: profileImage.src, alt: profileImage.alt }}
        firstName={firstName}
        lastName={lastName}
      />
    </div>
  );
};
