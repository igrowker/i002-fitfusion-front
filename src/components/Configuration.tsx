import { useState } from "react";
import {
  CloseButtonProfileSVG,
  DinnerSVG,
  DumbbellSVG,
  FisioSVG,
  FollowersSVG,
  RightArrowSVG,
} from "../icons";
import GreenButton from "./GreenButton";
import { Link, useNavigate } from "react-router-dom";
import { getLocalSUserInfo, localStorageUserData } from "../services/handleLocalStorage";
import { APP_STATUS, AppStatusType } from "../types/generalTypes.ts";
import { Spinner } from "./Spinner.tsx";
import Cookies from 'js-cookie';

// importamos de forma dinámica el componente 
// const ConfigurationFormProfile = lazy(() => import('./ConfigurationFormProfile.tsx'))


type ConfigurationProps = {
  toggleMenu: () => void;

};

export const Configuration = ({ toggleMenu }: ConfigurationProps) => {
  const [appStatus , setAppStatus] = useState<AppStatusType>(APP_STATUS.IDLE)
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const editing = () => {
    setIsEditing(!isEditing);
    navigate('/editProfile')
  };


  const handleClick = () => {
    setAppStatus(APP_STATUS.LOADING)
    Cookies.remove('authToken');
    localStorage.clear()
    navigate("/auth");
  };

  const userData : localStorageUserData = getLocalSUserInfo()

  return (
    <div className="flex flex-col min-[566px]:max-w-xl m-auto justify-between min-[566px]:pt-[50px]">
      {appStatus === APP_STATUS.LOADING && <Spinner /> }
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
        <div className=" flex px-6 items-center mt-5 justify-between cursor-pointer">
          <div className="flex gap-3 items-center">
            {/* <img 
              src={userData?. || "/avatarnone.png"}
              className=" rounded-full bg-cover w-14 h-14 bg-[url('/profile.jfif')] bg-center" 
            /> */}
            <div>
              <p className=" font-lato font-bold text-heading">
                {userData.name}
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

      {/* <nav
        className={`${
          !isEditing ? "w-0" : "w-[100vw]"
        }  fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-[60] overflow-x-hidden origin-left duration-500 `}
      >
      <Suspense fallback={<div></div>}>
        {isEditing && <ConfigurationFormProfile editing={editing} />}
      </Suspense>
        
      </nav> */}
    </div>
  );
};

export default Configuration;
