interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Button: React.FC<Props> = ({ children, onClick, style }) => (
  <button
    className='w-full font-semibold text-lg tracking-wide py-2 mt-10 rounded-md bg-light-primary text-white dark:bg-dark-primary dark:text-dark-text-onPrimary'
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);
