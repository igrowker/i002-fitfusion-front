import { BicicleSVG } from "../icons";

export const ClasesLayout = () => {
  return (
    <article className=" mx-6 my-8 rounded-xl border-2 border-gray-100 p-6">
      <div className=" flex flex-row justify-between gap-2  items-center border-b-2 border-gray-100 pb-2">
        <img className=" rounded-full bg-cover w-14 h-14 bg-[url('/profile.jfif')] bg-center" />
        <div className=" text-center">
          <p className=" font-lato text-heading text-black font-bold">
            Profe Nombre
          </p>
          <p className=" text-heading-sm font-lato font-black text-gray-300">
            Clase de ...
          </p>
          <p className=" text-heading-sm font-lato font-black text-gray-300">
            45'
          </p>
        </div>
        <img className=" rounded-full bg-cover w-14 h-14 bg-[url('/yoga.jfif')] bg-center" />
      </div>

      <div className=" flex pt-2 flex-col items-center  ">
        <p className=" text-heading-sm font-lato font-black text-gray-300">
          Fecha de clase
        </p>
        <div className=" rounded-xl border-2 border-gray-100 p-6 mt-4 flex flex-row justify-between items-center gap-4">
          <div className=" p-3 bg-gray-100 rounded-xl">
            <BicicleSVG />
          </div>

          <div className=" flex flex-col justify-center gap-2">
            <div className=" flex flex-row items-center justify-between">
              <p>Objetivo</p>
              <p>4km</p>
            </div>
            <img src="/Progressbar.png" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ClasesLayout;