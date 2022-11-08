import { OutlinedIcon, SolidIcon } from '../../../Components/UI';

interface Props {
  liked: boolean;
}

export const PostControls: React.FC<Props> = ({ liked }) => {
  return (
    <div className='flex items-center pt-4 pb-1 px-4'>
      <button>
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
