interface Props {
  insertEmojiHandler: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
}

export const EmojiButton: React.FC<Props> = ({ insertEmojiHandler, value }) => {
  return (
    <button
      className='h-full w-12 text-2xl'
      value={value}
      onClick={insertEmojiHandler}
    >
      {value}
    </button>
  );
};
