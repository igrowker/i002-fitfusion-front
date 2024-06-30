import { useState } from "react";
import { Configuration } from "./";
import { CloseButtonProfileSVG, ConfigurationToolSVG } from "../icons";

export const HeaderProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" flex flex-row w-full justify-between items-center pt-14 px-6">
      <button className=" rounded-full p-6 border-2 border-gray-300 flex justify-center items-center cursor-pointer">
        <CloseButtonProfileSVG />
      </button>

      <p className="font-bold text-base text-black font-lato">Mi perfil</p>
      <button
        className="rounded-full p-6 border-2 border-gray-300 flex justify-center items-center cursor-pointer"
        onClick={toggleMenu}
      >
        <ConfigurationToolSVG />
      </button>

      <nav
        className={`${
          !isOpen ? "h-0" : "h-[100%]"
        } fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-50 overflow-hidden origin-top duration-700 w-[100vw]`}
      >
        <Configuration toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default HeaderProfile;
