type RedButtonProps = {
  text: string;
  onClick : () => void
  size? : 'large' | 'medium' | 'small'
};

export const RedButton = ({ text , onClick, size = 'large' }: RedButtonProps) => {
  return (
    <button 
      className={` 
        ${size === 'large' && 'w-[327px] h-[64px]'}
        ${size === 'medium' && 'w-[155px] h-[36px]'}
        ${size === 'small' && 'w-[100px] h-[32px]'}
        bg-[#F73B3B] rounded-xl m-6 font-lato text-heading font-bold text-white min-[566px]:mx-auto`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RedButton;
