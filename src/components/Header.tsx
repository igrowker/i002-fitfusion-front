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
    <header className="bg-black w-full h-full flex justify-between items-center px-4">
      <div></div>
      <img src={logo} alt="Logo image" width={64} />
      <MenuSVG
        onClick={toggleMenu}
        className="text-white cursor-pointer float-end"
      />
      <nav
        className={`${
          !isOpen ? "hidden" : ""
        } fixed top-0 left-0 w-full justify-center items-center pb-6 bg-black-bg z-50 rounded-b-2xl shadow-lg shadow-lima-100/35`}
      >
        <ul className="flex flex-col w-full gap-6  items-center h-full">
          <li className="self-end m-4">
            <CloseSVG
              className="text-white cursor-pointer"
              onClick={toggleMenu}
            />
          </li>
          <li>
            <Link to="/" className="text-white">
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/classes" className="text-white">
              SERVICIOS
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white">
              ENTRENADORES
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white">
              PLANES
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="text-white">
              SOBRE NOSOTROS
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
