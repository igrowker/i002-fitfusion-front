import { useState } from "react";
import logo from "../assets/logo.png";
import { CloseSVG, MenuSVG } from "../icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black-bg w-full h-full flex  justify-between items-center px-4 relative">
      <img src={logo} alt="Logo image" width={64} className="m-auto" />
      <MenuSVG
        onClick={toggleMenu}
        className="text-white cursor-pointer float-end absolute right-3 md:right-28"
      />
      <nav
        className={`${
          !isOpen ? "hidden" : ""
        } fixed top-0 left-0 w-full h-screen justify-center items-center pb-6 bg-black-bg z-50 overflow-hidden `}
      >
        <ul className="flex flex-col w-full gap-6  items-center h-full">
          <li className="self-end m-4">
            <CloseSVG
              className="text-white cursor-pointer float-end absolute right-3 md:right-28"
              onClick={toggleMenu}
            />
          </li>
          <li onClick={toggleMenu}>
            <Link to="/" className="text-white">
              INICIO
            </Link>
          </li>

          <li onClick={toggleMenu}>
            <Link to="/about-us" className="text-white">
              SOBRE NOSOTROS
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/contact" className="text-white">
              CONTACTO
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/privacy-policy" className="text-white">
              PRIVACIDAD
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/auth/" className=" md:z-30">
              <button className="bg-lima-100 text-black rounded-2xl px-12 py-2 font-semibold md:z-30 md:text-heading-md">
                Empieza gratis
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
