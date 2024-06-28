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
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.6129 0.209705C1.22061 -0.0953203 0.653377 -0.0675907 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289L0.209705 8.3871C-0.0953203 8.77939 -0.0675907 9.34662 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711L8.3871 9.7903C8.77939 10.0953 9.34662 10.0676 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711L9.7903 1.6129C10.0953 1.22061 10.0676 0.653377 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893L1.6129 0.209705Z"
              fill="#040415"
            />
          </svg>
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
