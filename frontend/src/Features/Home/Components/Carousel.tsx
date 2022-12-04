import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import { SolidIcon } from '../../../Components/UI';
import { useStateDispatch, useStateSelector } from '../../../Hooks';
import { IPost } from '../../../Interfaces';
import { postServices } from '../../../Services';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  post: IPost;
  liked: boolean;
}

export const Carousel: React.FC<Props> = ({ post, liked }) => {
  const { user, isDemoUser } = useStateSelector((state) => state.auth);
  const { showLikedHeart } = useStateSelector((state) => state.ui);
  const dispatch = useStateDispatch();

  const onDoubleClickHandler = () => {
    if (user) {
      dispatch(
        postServices.likePostToggle(post.id, user.id, liked, isDemoUser)
      );
    }
  };

  return (
    <ReactCarousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      swipeScrollTolerance={50}
      preventMovementUntilSwipeScrollTolerance={true}
    >
      {post.images.map((image) => (
        <div
          key={image.id}
          className='relative'
          onDoubleClick={onDoubleClickHandler}
        >
          {showLikedHeart && liked && (
            <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center z-50'>
              <SolidIcon
                icon='HeartIcon'
                className='h-28 text-red-700 animate-bounce'
              />
            </div>
          )}
          <img src={image.url} alt={image.id} />
        </div>
      ))}
    </ReactCarousel>
  );
};
