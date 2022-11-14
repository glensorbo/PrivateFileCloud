import { useEffect } from 'react';

import { useStateDispatch, useStateSelector } from '../Hooks';
import { demoServices } from '../Services';

import { Post, Stories } from '../Features/Home';
import { Spinner } from '../Components/UI';

export const Home = () => {
  const { loading, posts } = useStateSelector((state) => state.posts);

  const dispatch = useStateDispatch();

  useEffect(() => {
    dispatch(demoServices.loadDemoPosts());
  }, [dispatch]);

  return (
    <>
      <Stories />
      {loading && (
        <div className='fixed top-0 left-0 h-screen w-screen'>
          <Spinner className='h-16 w-16 border-t-4' />
        </div>
      )}
      {posts.length > 0 &&
        posts.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

// 470 x 588
