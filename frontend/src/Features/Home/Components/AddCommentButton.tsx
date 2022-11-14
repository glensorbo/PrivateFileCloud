import { useStateDispatch, useStateSelector } from '../../../Hooks';
import { uiActions } from '../../../Store/State';
import { initialsUrl } from '../../../Utils';

interface Props {
  toggleShowCommentInput: Function;
}

export const AddCommentButton: React.FC<Props> = ({
  toggleShowCommentInput,
}) => {
  const { user } = useStateSelector((state) => state.auth);

  const dispatch = useStateDispatch();

  const toggleShowCommentInputHandler = () => {
    dispatch(uiActions.toggleShowAddPostButton());
    toggleShowCommentInput();
  };

  return (
    <button
      className='flex items-center w-full py-2 text-left text-sm text-gray-400'
      onClick={toggleShowCommentInputHandler}
    >
      <img
        src={user?.webpProfileImage}
        alt={`${initialsUrl}/${user?.firstName} ${user?.lastName}.svg`}
        className='h-8 w-8 rounded-full mr-2'
      />
      Legg til en kommentar...
    </button>
  );
};
