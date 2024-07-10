import { useState } from "react";
import { Configuration } from "./";
import {
  CloseButtonProfileSVG,
  ColonSVG,
  ConfigurationToolSVG,
  LeftArrowSVG,
} from "../icons";
import { User } from "../types";

type HeaderProfilePropsTypes = {
  closeButton: boolean;
  text: string;
  showConfig: boolean;
  handleClick: () => void;
};

export const HeaderProfile = ({
  closeButton,
  text = "Mi perfil",
  showConfig,
  handleClick,
}: HeaderProfilePropsTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const user : User = {
    id: 1,
    name: "Jordi Garcia Ferre",
    residence: "Argentina",
    email: "jordi@gmail.com",
    password: "JordiGarcia1",
    age: 20,
    weight: 80,
    height: 180,
    activity: "Activo",
    image:
      "https://s3-alpha-sig.figma.com/img/f34f/65b4/b3c50915a47f15a0bd202d640e90bc46?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n43l8YUanl7MjsXWhEaBoBoCEXfsKd~K-xXlXiv3tGlgzemO-CVLaGxSEESZ0c3PtUWjru02lfnLmrcvKZCx7DIYAd4zSXBw~kTU5lUSixLk8qefvqzaORveTdkeOLAlhaOnWYiC7XrXvcL2dKBMuUMp0Vka~yGdXDgN0VqMtogsEfz3h48qvc4j2DFPHOTEsQI~ksITL9GL-PFd8Z-sXxogmYu5rz~gacjgZS~yAcZaR2VIt0aIWJcWHm8n3mBdA7Avs4whXiF8HyeDlxFjN13lf4~NmNh7ruKqOgnAc8gDyuIA-8DMigZq0uanMaOCf1xN6I5AgrOHKFuyL8EPdw__",
    kcal: 0,
    new_password: "",
    current_password: "",
    auth: false,
  };

  /*

  FUNCION PARA ENCONTRAR AL LOGUEADO

  const { dataUser } = useUser();

  const user = dataUser.find((user) => user.auth === true);

  */

  return (
    <header className="relative z-10 flex flex-row w-full justify-between items-center pt-14 px-6 min-[566px]:max-w-xl">
      <button
        onClick={() => handleClick()}
        className=" min-h-14 min-w-14 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer"
      >
        {closeButton ? <CloseButtonProfileSVG /> : <LeftArrowSVG />}
      </button>

      <p className="font-bold text-base text-black font-lato">{text}</p>

      <button
        className="min-h-14 min-w-14 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer"
        onClick={toggleMenu}
      >
        {showConfig ? (
          <ConfigurationToolSVG />
        ) : (
          <ColonSVG className="text-black" />
        )}
      </button>

      <nav
        className={`${
          !isOpen ? "h-0" : "h-[100%]"
        } fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-50 overflow-x-hidden origin-top duration-500 w-[100vw] `}
      >
        <Configuration user={user} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default HeaderProfile;
