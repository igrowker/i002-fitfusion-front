import CaloriesCalculator from "./CaloriesCalculator";

export const CaloriesProfile = () => {
  return (
    <article className=" flex flex-col items-center mx-6 my-8">
      <div className=" flex flex-col items-center">
        <p className=" font-lato font-bold text-heading-xl text-black">1200</p>
        <p className=" font-lato font-bold text-heading-sm text-gray-500">
          Kcal
        </p>
      </div>

      <div className=" gap-6 flex flex-col px-6">
        <img src="/Line.png" alt="Linea logros" className=" mt-6" />
        <div className=" flex flex-row justify-between">
          <p className=" font-lato text-heading-sm text-gray-300 font-bold">
            Lun
          </p>
          <p className=" font-lato text-heading-sm text-gray-300 font-bold">
            Mar
          </p>
          <p className=" font-lato text-heading-sm text-gray-300 font-bold">
            Mier
          </p>
          <p className=" font-lato text-heading-sm text-gray-500 font-bold">
            Jue
          </p>
          <p className=" font-lato text-heading-sm text-gray-300 font-bold">
            Vie
          </p>
          <p className=" font-lato text-heading-sm text-gray-300 font-bold">
            Sab
          </p>
          <p className=" font-lato text-heading-sm text-gray-300 font-bold">
            Dom
          </p>
        </div>
      </div>

      <CaloriesCalculator />
    </article>
  );
};

export default CaloriesProfile;
