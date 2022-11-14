interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const Spinner: React.FC<Props> = ({ className, style }) => {
  if (!className) className = 'h-5 w-5 border-t-2';

  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div
        className={
          'animate-spin rounded-full border-light-primary dark:border-dark-primary ' +
          className
        }
        style={style}
      ></div>
    </div>
  );
};
