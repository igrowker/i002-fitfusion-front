import { useEffect, useState } from "react";
import CaloriesCalculator from "./CaloriesCalculator";
import { PayedClasses } from "../types/classesTypes";
import { getLocalSUserInfo } from "../services/handleLocalStorage";
import { apiCall } from "../services/apiCall";
import { ClasesLayout, Spinner } from ".";
import Chart from "./Chart";
import { APP_STATUS, AppStatusType } from "../types/generalTypes";

const CaloriesProfile = () => {
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.LOADING);
  const [payedClasses, setPayedClasses] = useState<PayedClasses[]>();

  const [totalCalories, settotalCalories] = useState(0);

  useEffect(() => {
    const { userId } = getLocalSUserInfo();

    apiCall({ url: `/payments/${userId}`, method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // guardar datos del clases en redux?
        const notCompletedClasses = data.filter((singleClass: PayedClasses) => {
          return singleClass.ClassCompleted !== false;
        });
        setPayedClasses(notCompletedClasses);

        const orderSubTotal = () =>
          notCompletedClasses?.reduce(
            (total: number, item: PayedClasses) => total + item.Class.Calories,
            0
          );

        settotalCalories(orderSubTotal);
        setAppStatus(APP_STATUS.READY_USAGE);
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);

  return (
    <article className="max-w-full flex flex-col items-center mx-6 my-8">
      {appStatus === APP_STATUS.LOADING && <Spinner />}
      {payedClasses === undefined ? null : (
        <>
          <div className=" flex flex-col items-center">
            <p className=" font-lato font-bold text-heading-xl text-black">
              {totalCalories}
            </p>
            <p className=" font-lato font-bold text-heading-sm text-gray-500">
              Kcal Totales
            </p>
          </div>

          {payedClasses.length > 1 ? (
            <div className="  flex flex-col  items-center">
              <div className="flex items-center justify-center max-w-[85vw]">
                <Chart payedClasses={payedClasses} />
              </div>
              <p className=" -mt-6 font-lato text-heading text-gray-300 font-bold px-6">
                Progreso de las últimas clases
              </p>
            </div>
          ) : (
            <p className=" text-center mt-6 font-lato text-heading text-gray-300 font-bold ">
              Completa al menos dos clases y verás aquí tu progreso
            </p>
          )}

          <CaloriesCalculator
            totalCalories={totalCalories}
            payedClasses={payedClasses}
            setPayedClasses={setPayedClasses}
            settotalCalories={settotalCalories}
          />
          <div className="pt-2 mt-4 border-t-2 border-gray-100">
            <ClasesLayout payedClasses={payedClasses} />
          </div>
        </>
      )}
    </article>
  );
};

export default CaloriesProfile;
