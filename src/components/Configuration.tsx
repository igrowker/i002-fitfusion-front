import { CloseButtonProfileSVG } from "../icons";

type ConfigurationProps = {
  toggleMenu: () => void;
};

function Configuration({ toggleMenu }: ConfigurationProps) {
  return (
    <>
      <header className=" flex flex-row justify-between items-center pt-14 px-6 bg-white">
        <p className=" font-bold text-base text-black font-lato">Mi perfil</p>
        <button
          className=" rounded-full p-6 border-2 border-gray-300 flex justify-center items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <CloseButtonProfileSVG />
        </button>
      </header>

      <nav className=" bg-white w-full h-full">
        <p className=" uppercase text-center font-bold mt-5 pt-3">
          esto es la nav de configuraciones
        </p>
      </nav>
    </>
  );
}

export default Configuration;
