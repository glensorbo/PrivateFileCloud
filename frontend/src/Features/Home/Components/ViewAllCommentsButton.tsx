interface Props {
  numberOfComments?: number;
}

export const ViewAllCommentsButton: React.FC<Props> = ({
  numberOfComments = 0,
}) => (
  <button className='w-full text-left py-2 text-sm font-semibold text-gray-400 hover:text-gray-50'>
    {numberOfComments > 0 && `Se alle ${numberOfComments} kommentarer`}
    {numberOfComments < 1 && 'Ingen kommentarer'}
  </button>
);
