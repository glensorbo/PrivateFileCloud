import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import { SolidIcon } from '../../../Components/UI';
import { useStateDispatch, useStateSelector } from '../../../Hooks';
import { IPost } from '../../../Interfaces';
import { demoServices } from '../../../Services';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
    <ReactCarousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      swipeScrollTolerance={50}
      preventMovementUntilSwipeScrollTolerance={true}
    >
      {post.images.map((image) => (
        <div
          id='lkjef'
          key={image}
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
          <img src={image} alt={image} />
        </div>
      ))}
    </ReactCarousel>
  );
};
