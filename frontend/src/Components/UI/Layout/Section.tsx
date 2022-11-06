interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Section: React.FC<Props> = ({ children }) => (
  <section className='w-full h-full px-8'>{children}</section>
);
