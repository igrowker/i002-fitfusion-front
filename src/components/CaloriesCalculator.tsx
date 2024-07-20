import { useEffect, useState } from "react";
import { ColonSVG, FireSVG, LightingSVG } from "../icons";
import { HeartBigSVG } from "../icons/HeartBigSVG";
import { PayedClasses } from "../types/classesTypes";

type CaloriesCalculatorProps = {
  totalCalories: number;
  payedClasses: PayedClasses[] | undefined;
  setPayedClasses: React.Dispatch<
    React.SetStateAction<PayedClasses[] | undefined>
  >;
  settotalCalories: React.Dispatch<React.SetStateAction<number>>;
};

export const CaloriesCalculator = ({
  payedClasses,
  totalCalories,
  setPayedClasses,
  settotalCalories,
}: CaloriesCalculatorProps) => {
  const [last, setlast] = useState<number | undefined>(0);
  const [lastthree, setlastthree] = useState<number | undefined>(0);
  const [lastFive, setlastFive] = useState<number | undefined>(0);

  useEffect(() => {
    const getLast = payedClasses?.slice(payedClasses.length - 1);

    const getLastClass = () =>
      getLast?.reduce(
        (total: number, item: PayedClasses) => total + item.Class.Calories,
        0
      );
    setlast(getLastClass);

    const getLast3 = payedClasses?.slice(payedClasses.length - 3);

    if (payedClasses !== undefined && payedClasses.length < 3) {
      setlastthree(totalCalories);
    } else {
      const getLast3Class = () =>
        getLast3?.reduce(
          (total: number, item: PayedClasses) => total + item.Class.Calories,
          0
        );
      setlastthree(getLast3Class);
    }

    const getLast5 = payedClasses?.slice(payedClasses.length - 5);

    if (payedClasses !== undefined && payedClasses.length < 5) {
      setlastFive(totalCalories);
    } else {
      const getLast5Class = () =>
        getLast5?.reduce(
          (total: number, item: PayedClasses) => total + item.Class.Calories,
          0
        );
      setlastFive(getLast5Class);
    }
  }, [payedClasses]);

  const handleReset = () => {
    setPayedClasses([]);
    settotalCalories(0);
  };

  return (
    <>
      <div className=" flex flex-row w-full justify-between items-center mt-14 min-[566px]:max-w-sm">
        <p className=" font-bold text-heading font-lato">
          Ver calorías consumidas
        </p>
        <div className=" flex flex-row text-center">
          <ColonSVG className="text-gray-500" />
        </div>
      </div>

      <div className=" flex flex-row mt-12 w-[100%] justify-between min-[566px]:max-w-sm">
        <div className=" flex flex-col items-center gap-2">
          <HeartBigSVG />
          <p className=" font-bold text-heading font-lato">{lastFive} Kcal</p>
          <p className=" font-bold text-heading-sm font-lato text-gray-300">
            Últimas 5 clases
          </p>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <FireSVG />
          <p className=" font-bold text-heading font-lato">{lastthree} Kcal</p>
          <p className=" font-bold text-heading-sm font-lato text-gray-300">
            Últimas 3 clases
          </p>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <LightingSVG />
          <p className=" font-bold text-heading font-lato">{last} Kcal</p>
          <p className=" font-bold text-heading-sm font-lato text-gray-300">
            Última clase
          </p>
        </div>
      </div>
      <button
        className="mt-4 w-full font-lato font-bold text-heading bg-lima-100 min-[566px]:bg-gray-100 min-w-40 rounded-md p-2 min-[566px]:w-48 hover:bg-lima-100 duration-300 hover:scale-110"
        onClick={handleReset}
      >
        Resetear el contador
      </button>
    </>
  );
};

export default CaloriesCalculator;
