import { useState } from "react";
import logo from "../assets/logo.png";
import { CloseSVG, MenuSVG } from "../icons";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full h-full flex justify-between items-center px-4">
      <div></div>
      <img src={logo} alt="Logo image" width={64} />
      <MenuSVG
        onClick={toggleMenu}
        className="text-white cursor-pointer float-end"
      />
      <nav
        className={`${
          !isOpen ? "hidden" : ""
        } fixed top-0 left-0 bottom-0 w-full justify-center items-center bg-black-bg z-50`}
      >
        <ul className="flex flex-col w-full gap-16  items-center h-full">
          <li className="self-end m-4">
            <CloseSVG
              className="text-white cursor-pointer"
              onClick={toggleMenu}
            />
          </li>
          <li>
            <a href="/" className="text-white">
              INICIO
            </a>
          </li>
          <li>
            <a href="/about" className="text-white">
              SERVICIOS
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white">
              ENTRENADORES
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white">
              PLANES
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white">
              SOBRE NOSOTROS
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white">
              CONTACTO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
