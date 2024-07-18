export default function ErrorMessage({children} : {children: React.ReactNode}) {
    return (
      <div className="flex flex-col items-center mt-1 text-[#F73B3B] font-bold text-sm font-lato">
          {children}
      </div>
    )
  }
  