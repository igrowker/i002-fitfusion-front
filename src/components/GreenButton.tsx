type GreenButtonProps = {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => string

};

export const GreenButton = ({ text, handleClick }: GreenButtonProps) => {
  return (
    <button className=" bg-[#C1FF72] rounded-xl m-6 w-[327px] h-[64px] font-lato text-heading font-bold min-[566px]:w-full" onClick={handleClick}>
      {text}
    </button>
  );
};

export default GreenButton;
