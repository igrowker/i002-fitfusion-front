import { Suspense, lazy, useState } from "react";
import { Spinner } from "./Spinner.tsx";
// import { ClasesProfile, CaloriesProfile } from "../components";

const LazyClasesProfile = lazy(() => import('./ClasesProfile.tsx'))
const LazyCaloriesProfile = lazy(() => import('./CaloriesProfile.tsx'))

type switchType = 'Clases' | 'Logros'
export const Switch = () => {
  const [show, setShow] = useState<switchType>('Clases');

  const handleSwitch = (switchTo : switchType) => {
    setShow(switchTo);
  };

  
  return (
    <>
      <div className=" flex flex-row bg-gray-300 p-[2px] rounded-3xl mt-8">
        <button
          onClick={() => handleSwitch('Clases')}
          className={`w-28 h-8 font-lato rounded-2xl font-bold text-heading-sm duration-500 ${
            show === 'Clases' ? "pointer-events-none bg-white" : " bg-gray-300"
          }`}
        >
          Clases
        </button>
        <button
          onClick={() => handleSwitch('Logros')}
          className={`w-28 h-8 font-lato rounded-2xl font-bold text-heading-sm duration-500 ${
            show === 'Logros' ? "pointer-events-none bg-white" : " bg-gray-300"
          }`}
        >
          Logros
        </button>
      </div>
      <Suspense fallback={<Spinner/>}>
        {show === 'Clases' ? <LazyClasesProfile />  :  <LazyCaloriesProfile />}
      </Suspense>
    </>
  );
};

export default Switch;
