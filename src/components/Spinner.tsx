

import { dotSpinner } from 'ldrs'

dotSpinner.register()

// Default values shown


export const Spinner = () => {
  return (
    <div className='absolute top-0 h-lvh w-lvw flex justify-center items-center bg-gray-100/20'>
        <l-dot-spinner
            size="40"
            speed="0.9" 
            color="black" 
        ></l-dot-spinner>
    </div>
  )
}
