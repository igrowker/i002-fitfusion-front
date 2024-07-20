import { useNavigate } from "react-router-dom";
import Header from "./Header";

export const Error404 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/login");
  };
  return (
    <div className="bg-pattern bg-no-repeat bg-cover bg-black-bg ">
      <Header />
      <section className=" min-[566px]:max-w-xl h-screen flex flex-col items-center justify-center m-auto  text-zinc-900 dark:text-white relative overflow-hidden z-[1]">
        <div className="container px-4 mx-auto">
          <div className="flex w-full px-4 lg:px-12">
            <div className="">
              <h1 className="font-lato font-black text-[55px] md:text-[70px] leading-none text-blue-600 mb-2">
                404
              </h1>
              <h4 className=" font-lato font-black text-[38px] opacity-80 mb-2">
                Página no encontrada...
              </h4>
              <p className="font-lato text-lg opacity-80 mb-6">
                Ha ocurrido algún error, esta página no existe...
              </p>
              <div className="flex">
                <button
                  onClick={handleClick}
                  className="font-lato font-bold bg-lima-100 text-black-bg hover:bg-opacity-90 py-3 px-4 rounded"
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404;
