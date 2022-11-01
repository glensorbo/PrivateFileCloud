import Image from '../Assets/profile_image.png';

export const Story = () => {
  return (
    <div className='rounded-full overflow-hidden w-16 border-2 border-dark-primary bg-dark-bg-elevated p-1 ml-2'>
      <img src={Image} alt='' className='rounded-full' />
    </div>
  );
};
