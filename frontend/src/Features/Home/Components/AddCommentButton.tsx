import { useStateSelector } from '../../../Hooks';
import { initialsUrl } from '../../../Utils';

export const AddCommentButton: React.FC = () => {
  const { user } = useStateSelector((state) => state.auth);

  return (
    <button className='flex items-center w-full py-2 text-left text-sm text-gray-400'>
      <img
        src={user?.webpProfileImage}
        alt={`${initialsUrl}/${user?.firstName} ${user?.lastName}.svg`}
        className='h-8 w-8 rounded-full mr-2'
      />
      Legg til en kommentar...
    </button>
  );
};
