type GreenButtonProps = {
  text: string;
  handleClick: () => void
  size? : 'large' | 'medium' | 'small'

};

export const GreenButton = ({ text, handleClick , size = 'large' }: GreenButtonProps) => {
  return (
    <button 
      className={` 
        ${size === 'large' && 'w-[327px] h-[64px]'}
        ${size === 'medium' && 'w-[155px] h-[36px]'}
        ${size === 'small' && 'w-[100px] h-[32px]'}
        bg-[#C1FF72] rounded-xl m-6 font-lato text-heading font-bold min-[566px]:w-full`} 
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default GreenButton;
