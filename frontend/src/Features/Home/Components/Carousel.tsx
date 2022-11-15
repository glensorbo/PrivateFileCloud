import { SolidIcon } from '../../../Components/UI';
import { useStateDispatch, useStateSelector } from '../../../Hooks';
import { IPost } from '../../../Interfaces';
import { demoServices } from '../../../Services';
interface Props {
  post: IPost;
  liked: boolean;
}

export const Carousel: React.FC<Props> = ({ post, liked }) => {
  const { user } = useStateSelector((state) => state.auth);
  const { showLikedHeart } = useStateSelector((state) => state.ui);
  const dispatch = useStateDispatch();

  const onDoubleClickHandler = () => {
    if (user) {
      dispatch(demoServices.likePostToggle(post.id, user.id, liked));
    }
  };

  return (
    <ul
      className='flex overflow-x-scroll snap-x snap-center max-h-[588px]'
      onDoubleClick={onDoubleClickHandler}
    >
      {post.images.map((image) => (
        <li
          className='relative min-w-full overflow-hidden snap-center'
          key={image}
        >
          {showLikedHeart && liked && (
            <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center z-50'>
              <SolidIcon
                icon='HeartIcon'
                className='h-28 text-red-700 animate-bounce'
              />
            </div>
          )}
          <img src={image} alt='' className='w-full h-full object-cover' />
        </li>
      ))}
    </ul>
  );
};
