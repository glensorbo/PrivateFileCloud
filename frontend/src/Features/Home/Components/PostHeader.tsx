interface Props {
  image: {
    src: string;
    alt?: string;
  };
  firstName: string;
  lastName: string;
}

export const PostHeader: React.FC<Props> = ({ image, firstName, lastName }) => {
  return (
    <div className='flex items-center px-4 h-16'>
      <img
        src={image.src}
        alt={image.alt ?? `${firstName} ${lastName}`}
        className='h-10 w-10 rounded-full'
      />
      <p className='pl-3 dark:text-dark-text-primary font-semibold tracking-wide'>
        {`${firstName} ${lastName}`}
      </p>
    </div>
  );
};
