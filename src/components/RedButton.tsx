type RedButtonProps = {
    text: string
}

export const RedButton = ({text}: RedButtonProps) => {
  return (
    <button className=" bg-[#F73B3B] rounded-xl m-6 w-[327px] h-[64px] font-lato text-heading font-bold text-white">{text}</button>
  )
}

export default RedButton