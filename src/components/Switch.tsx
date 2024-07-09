import { useState } from "react";
import { ClasesProfile, CaloriesProfile } from "../components";

export const Switch = () => {
  const [show, setShow] = useState(false);

  const handleSwitch = () => {
    setShow(!show);
  };

  return (
    <>
      <div className=" flex flex-row bg-gray-300 p-[2px] rounded-3xl mt-8">
        <button
          onClick={() => handleSwitch()}
          className={`w-28 h-8 font-lato rounded-2xl font-bold text-heading-sm duration-500 ${
            !show ? "pointer-events-none bg-white" : " bg-gray-300"
          }`}
        >
          Clases
        </button>
        <button
          onClick={() => handleSwitch()}
          className={`w-28 h-8 font-lato rounded-2xl font-bold text-heading-sm duration-500 ${
            show ? "pointer-events-none bg-white" : " bg-gray-300"
          }`}
        >
          Logros
        </button>
      </div>

      {!show ? <ClasesProfile /> :  <CaloriesProfile />}
    </>
  );
};

export default Switch;
