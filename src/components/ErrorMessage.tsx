
export default function ErrorMessage({children , className} : {children: React.ReactNode , className? : string}) {
    return (
      <div className={`flex flex-col items-center mt-1 text-[#F73B3B] font-bold text-sm font-lato ${className} `}>
          {children}
      </div>
    )
  }
  