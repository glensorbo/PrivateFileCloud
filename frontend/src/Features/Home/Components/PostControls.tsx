import { OutlinedIcon, SolidIcon } from '../../../Components/UI';
import { useStateDispatch } from '../../../Hooks';
import { demoServices } from '../../../Services';

interface Props {
  liked: boolean;
  postId: string;
  userId: string;
}

export const PostControls: React.FC<Props> = ({ liked, postId, userId }) => {
  const dispatch = useStateDispatch();

  const onLikePostHandler = () => {
    dispatch(demoServices.likePostToggle(postId, userId, liked));
  };

  return (
    <div className='flex items-center pt-4 pb-1 px-4'>
      <button onClick={onLikePostHandler}>
        {liked && (
          <SolidIcon icon='HeartIcon' className='h-8 w-8 text-red-700' />
        )}
        {!liked && <OutlinedIcon icon='HeartIcon' className='h-8 w-8' />}
      </button>
      <button>
        <OutlinedIcon
          icon='ChatBubbleBottomCenterTextIcon'
          className='h-8 w-8 ml-2'
        />
      </button>
    </div>
  );
};
