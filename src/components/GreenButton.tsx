type GreenButtonProps = {
    text: string
}

export const GreenButton = ({text}: GreenButtonProps) => {
  return (
    <button className=" bg-[#C1FF72] rounded-xl m-6 w-[327px] h-[64px] font-lato text-heading font-bold">{text}</button>
  )
}

export default GreenButton