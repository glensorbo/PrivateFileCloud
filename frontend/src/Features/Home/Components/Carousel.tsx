interface Props {
  sources: string[];
}

export const Carousel: React.FC<Props> = ({ sources }) => {
  return (
    <ul className='flex overflow-x-scroll  snap-always  h-[588px] bg-red-200'>
      {sources.map((source) => (
        <li className='min-w-full overflow-hidden snap-center' key={source}>
          <img src={source} alt='' className='w-full h-full object-cover' />
        </li>
      ))}
    </ul>
  );
};
