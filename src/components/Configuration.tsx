import { CloseButtonProfileSVG, RightArrowSVG } from "../icons";
import { AddCoachSVG } from "../icons/AddCoachSVG";
import { NotificationSVG } from "../icons/NotificationSVG";
import { PrivacySVG } from "../icons/PrivacySVG";
import { SoundSVG } from "../icons/SoundSVG";
import { UbicationSVG } from "../icons/UbicationSVG";

type ConfigurationProps = {
  toggleMenu: () => void;
};

export const Configuration = ({ toggleMenu }: ConfigurationProps) => {
  return (
    <>
      <div className=" flex flex-row justify-between items-center pt-14 px-6 ">
        <p className=" font-bold text-base text-black font-lato">
          Configuracion
        </p>
        <button
          className="min-h-14 min-w-14 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <CloseButtonProfileSVG />
        </button>
      </div>

      <div className="pb-8 pt-10">
        <p className=" font-lato font-black text-heading px-6">Cuenta</p>
        <div className=" flex px-6 items-center mt-5 justify-between">
          <div className="flex gap-3 items-center">
            <img className=" rounded-full bg-cover w-14 h-14 bg-[url('/profile.jfif')] bg-center" />
            <div>
              <p className=" font-lato font-bold text-heading">
                Nombre usuario
              </p>
              <p className=" font-lato font-bold text-heading-sm">Pro</p>
            </div>
          </div>

          <RightArrowSVG />
        </div>
      </div>

      <ul className=" flex flex-col gap-8 px-6">
        <li className=" flex flex-row justify-between">
          <div className=" flex flex-row items-center gap-6">
            <div className=" bg-gray-100 rounded-full p-2 flex flex-col items-center justify-center ">
              <UbicationSVG />
            </div>
            <p className=" font-lato font-bold text-heading">Ubicacion</p>
          </div>
          <RightArrowSVG />
        </li>

        <li className=" flex flex-row justify-between">
          <div className=" flex flex-row items-center gap-6">
            <div className=" bg-gray-100 rounded-full p-2 flex flex-col items-center justify-center ">
              <NotificationSVG />
            </div>
            <p className=" font-lato font-bold text-heading">Notificaciones</p>
          </div>
          <RightArrowSVG />
        </li>

        <li className=" flex flex-row justify-between">
          <div className=" flex flex-row items-center gap-6">
            <div className=" bg-gray-100 rounded-full p-2 flex flex-col items-center justify-center ">
              <AddCoachSVG />
            </div>
            <p className=" font-lato font-bold text-heading">
              Agregar entrenador
            </p>
          </div>
          <RightArrowSVG />
        </li>

        <li className=" flex flex-row justify-between">
          <div className=" flex flex-row items-center gap-6">
            <div className=" bg-gray-100 rounded-full p-2 flex flex-col items-center justify-center ">
              <SoundSVG />
            </div>
            <p className=" font-lato font-bold text-heading">Sonidos</p>
          </div>
          <RightArrowSVG />
        </li>

        <li className=" flex flex-row justify-between">
          <div className=" flex flex-row items-center gap-6">
            <div className=" bg-gray-100 rounded-full p-2 flex flex-col items-center justify-center ">
              <PrivacySVG />
            </div>
            <p className=" font-lato font-bold text-heading">Privacidad</p>
          </div>
          <RightArrowSVG />
        </li>
      </ul>
    </>
  );
};

export default Configuration;
