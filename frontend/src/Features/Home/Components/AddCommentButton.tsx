interface Props {
  image: {
    src: string;
    alt?: string;
  };
  firstName: string;
  lastName: string;
}

export const AddCommentButton: React.FC<Props> = ({
  image,
  firstName,
  lastName,
}) => {
  return (
    <button className='flex items-center w-full py-2 text-left text-sm text-gray-400'>
      <img
        src={image.src}
        alt={image.alt ?? `${firstName} ${lastName}`}
        className='h-8 w-8 rounded-full mr-2'
      />
      Legg til en kommentar...
    </button>
  );
};
