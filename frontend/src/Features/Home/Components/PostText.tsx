interface Props {
  firstName: string;
  lastName: string;
  text: string;
}

export const PostText: React.FC<Props> = ({ firstName, lastName, text }) => {
  return (
    <div className='font-semibold text-sm  pb-1 dark:text-dark-primary'>
      {`${firstName} ${lastName} - `}
      <p className='text-sm pb-2 inline dark:text-dark-text-primary'>{text}</p>
    </div>
  );
};
