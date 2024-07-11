import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FacebookSVG, InstagramSVG } from "../icons";

export const Footer = () => {
  return (
    <footer className="bg-black-bg bg-cover w-full h-full ">
      <div className="flex justify-start border-solid border-y-2 border-y-lima-100 mx-8 md:px-16 ">
        <div className="py-4 min-[566px]:flex-row min-[566px]:flex min-[566px]:items-center min-[566px]:gap-6">
          <div>
            <img src={logo} alt="Logo image" width={76} />
            <p className="font-lato text-white font-extrabold text-heading-sm">
              FITFUSION
            </p>
          </div>
          <div className="flex justify-evenly content-center pt-4 min-[566px]:flex-row min-[566px]:flex min-[566px]:items-center min-[566px]:gap-6">
            <FacebookSVG className="text-lima-100" />
            <InstagramSVG className="text-lima-100" />
          </div>
        </div>
        <div className="ml-auto flex flex-col justify-evenly text-right min-[566px]:flex-row min-[566px]:flex min-[566px]:items-center min-[566px]:gap-6">
          <Link
            to={"/about-us"}
            className="font-lato text-white font-normal text-heading-sm"
          >
            SOBRE NOSOTROS
          </Link>
          <Link
            to={"/contact"}
            className="font-lato text-white font-normal text-heading-sm"
          >
            CONTACTO
          </Link>
        </div>
      </div>

      <div className="pt-3 flex justify-center text-center pb-3">
        <p className="font-lato text-footer-gray font-light text-heading-xs">
          FITFUSION® 2024 - Todos los derechos reservados | Privacidad y Cookies
        </p>
      </div>
    </footer>
  );
};
