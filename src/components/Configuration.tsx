import { useState } from "react";
import {
  CloseButtonProfileSVG,
  DinnerSVG,
  DumbbellSVG,
  FisioSVG,
  FollowersSVG,
  RightArrowSVG,
} from "../icons";
import { User } from "../types";
import GreenButton from "./GreenButton";
import ConfigurationFormProfile from "./ConfigurationFormProfile";
import { Link, useNavigate } from "react-router-dom";

type ConfigurationProps = {
  toggleMenu: () => void;
  data: User;
};

export const Configuration = ({ toggleMenu, data }: ConfigurationProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const editing = () => {
    setIsEditing(!isEditing);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <div className="flex flex-col min-[566px]:max-w-xl m-auto justify-between">
      <div className=" flex flex-row justify-between items-center pt-14 px-6 ">
        <p className=" font-bold text-base text-black font-lato"></p>
        <button
          className="min-h-14 min-w-14 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <CloseButtonProfileSVG />
        </button>
      </div>

      <div className="pb-8 pt-10 ">
        <p className=" font-lato font-black text-heading px-6">Accesos</p>

        <Link
          to="/profile"
          className=" flex px-6 items-center mt-5 justify-between"
        >
          <div className="flex gap-3 items-center">
            <div className=" flex h-12 w-12 justify-center items-center bg-gray-100 rounded-full">
              <FollowersSVG />
            </div>

            <div>
              <p className=" font-lato font-bold text-heading">Mi Perfil</p>
            </div>
          </div>

          <RightArrowSVG />
        </Link>

        <Link
          to="/classes"
          className=" flex px-6 items-center mt-5 justify-between"
        >
          <div className="flex gap-3 items-center">
            <div className=" flex h-12 w-12 justify-center items-center bg-gray-100 rounded-full">
              <DumbbellSVG />
            </div>

            <div>
              <p className=" font-lato font-bold text-heading">Buscar Clases</p>
            </div>
          </div>

          <RightArrowSVG />
        </Link>

        <Link
          to="/nutrition"
          className=" flex px-6 items-center mt-5 justify-between"
        >
          <div className="flex gap-3 items-center">
            <div className=" flex h-12 w-12 justify-center items-center bg-gray-100 rounded-full">
              <DinnerSVG />
            </div>

            <div>
              <p className=" font-lato font-bold text-heading">
                Conoce nuestros Nutricionistas
              </p>
            </div>
          </div>

          <RightArrowSVG />
        </Link>

        <Link
          to="/physiotherapist"
          className=" flex px-6 items-center mt-5 justify-between"
        >
          <div className="flex gap-3 items-center">
            <div className=" flex h-12 w-12 justify-center items-center bg-gray-100 rounded-full">
              <FisioSVG />
            </div>

            <div>
              <p className=" font-lato font-bold text-heading">
                Conoce nuestros Fisioterapeutas
              </p>
            </div>
          </div>

          <RightArrowSVG />
        </Link>
      </div>

      <div className="pb-8 pt-5" onClick={editing}>
        <p className=" font-lato font-black text-heading px-6">Cuenta</p>
        <div className=" flex px-6 items-center mt-5 justify-between">
          <div className="flex gap-3 items-center">
            <img className=" rounded-full bg-cover w-14 h-14 bg-[url('/profile.jfif')] bg-center" />
            <div>
              <p className=" font-lato font-bold text-heading">
                Jordi Garcia Ferre
              </p>
              <p className=" font-lato font-bold text-heading-sm">
                Editar perfil
              </p>
            </div>
          </div>

          <RightArrowSVG />
        </div>
      </div>

      <GreenButton text={"Cerrar Sesion"} handleClick={handleClick} />

      <nav
        className={`${
          !isEditing ? "w-0" : "w-[100vw]"
        }  fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-[60] overflow-x-hidden origin-left duration-500 `}
      >
        <ConfigurationFormProfile data={data} editing={editing} />
      </nav>
    </div>
  );
};

export default Configuration;
