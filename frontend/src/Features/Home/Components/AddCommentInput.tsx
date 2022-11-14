import { useEffect, useState } from 'react';
import { useStateDispatch, useStateSelector } from '../../../Hooks';
import { IComment, IPost } from '../../../Interfaces';
import { demoServices } from '../../../Services';
import { emojiButtons, initialsUrl } from '../../../Utils';
import { EmojiButton } from './EmojiButton';

interface Props {
  post: IPost;
  toggleShowCommentInput: any;
}

export const AddCommentInput: React.FC<Props> = ({
  post,
  toggleShowCommentInput,
}) => {
  const [comment, setComment] = useState('');
  const [inputHeight, setInputHeight] = useState(40);

  const { user } = useStateSelector((state) => state.auth);

  const dispatch = useStateDispatch();

  const typeCommentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const insertEmojiHandler = (e: any) => {
    setComment((comment) => comment + e.target.value);
  };

  const addCommentHandler = () => {
    if (user) {
      const newComment: IComment = {
        text: comment,
        creator: user.id,
        likes: [],
        replies: [],
        created: new Date().toLocaleDateString('no'),
      };
      toggleShowCommentInput();
      dispatch(demoServices.addComment(newComment, post.id, user.id));
    }
  };

  useEffect(() => {
    if (comment.length < 25) {
      setInputHeight(40);
    }
    if (comment.length > 25 && comment.length < 50) {
      setInputHeight(60);
    }
    if (comment.length > 50 && comment.length < 75) {
      setInputHeight(80);
    }
    if (comment.length > 75 && comment.length < 90) {
      setInputHeight(100);
    }
  }, [comment]);

  return (
    <>
      <div
        className='fixed top-0 left-0 w-screen h-screen dark:bg-transparent'
        onClick={toggleShowCommentInput}
      ></div>
      <div className='dark:bg-dark-bg-elevated w-screen min-h-[112px] fixed bottom-0 left-0 border-t dark:border-t-gray-800 pb-2 z-50'>
        <div className='h-12 max-w-sm flex justify-between'>
          {emojiButtons.map((emoji) => (
            <EmojiButton
              insertEmojiHandler={insertEmojiHandler}
              value={emoji}
              key={emoji}
            />
          ))}
        </div>
        <div className='flex px-3 mt-2'>
          <img
            src={user?.webpProfileImage}
            alt={`${initialsUrl}/${user?.firstName} ${user?.lastName}.svg`}
            className='h-10 w-10 rounded-full mr-3 mt-auto mb-3'
          />
          <textarea
            autoFocus
            value={comment}
            onChange={typeCommentHandler}
            placeholder='Skriv kommentar her'
            className='bg-transparent border-b dark:border-b-gray-800 focus:outline-none w-full px-2'
            style={{ resize: 'none', height: `${inputHeight}px` }}
          />
          <button
            className='w-10 h-10 dark:text-dark-primary mx-4 mt-auto mb-3'
            onClick={addCommentHandler}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};
