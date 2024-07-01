import { ColonSVG, LightingSVG } from "../icons";

export const CaloriesCalculator = () => {
  return (
    <>
      <div className=" flex flex-row w-full justify-between items-center mt-14">
        <p className=" font-bold text-heading font-lato">Calcular calorias</p>
        <div className=" flex flex-row text-center">
          <p className=" font-bold text-heading font-lato">7 dias</p>
          <ColonSVG className="text-gray-500" />
        </div>
      </div>

      <div className=" flex flex-row mt-12 w-[100%] justify-between">
        <div className=" flex flex-col items-center gap-2">
          <LightingSVG />
          <p className=" font-bold text-heading font-lato">246 Kcal</p>
          <p className=" font-bold text-heading-sm font-lato text-gray-300">
            Ultimos 7 dias
          </p>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <LightingSVG />
          <p className=" font-bold text-heading font-lato">84 Kcal</p>
          <p className=" font-bold text-heading-sm font-lato text-gray-300">
            Ayer
          </p>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <LightingSVG />
          <p className=" font-bold text-heading font-lato">72 Kcal</p>
          <p className=" font-bold text-heading-sm font-lato text-gray-300">
            Hoy
          </p>
        </div>
      </div>
    </>
  );
};

export default CaloriesCalculator;
