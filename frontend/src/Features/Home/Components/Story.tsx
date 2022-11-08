interface Props {
  seen: boolean;
  image: {
    src: string;
    alt: string;
  };
}

export const Story: React.FC<Props> = ({ seen, image }) => {
  const border = !seen ? 'dark:border-dark-primary' : 'dark:border-gray-700';

  return (
    <div
      className={`rounded-full overflow-hidden w-20 border-2 dark:bg-dark-bg-elevated p-1 ml-2 ${border}`}
    >
      <img
        src={image.src}
        alt={image.alt ?? 'Profile Image'}
        className='rounded-full'
      />
    </div>
  );
};
