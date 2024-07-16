import { useEffect, useState } from "react";
import CaloriesCalculator from "./CaloriesCalculator";
import { PayedClasses } from "../types/classesTypes";
import { getLocalSUserInfo } from "../services/handleLocalStorage";
import { apiCall } from "../services/apiCall";
import { ClasesLayout } from ".";

export const CaloriesProfile = () => {
  const [payedClasses, setPayedClasses] = useState<PayedClasses[]>()

  useEffect(() => {

    const {userId} = getLocalSUserInfo()
    
    apiCall({ url: `/payments/${2 ||userId}`, method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // guardar datos del clases en redux?
      const notCompletedClasses = data.filter((singleClass: PayedClasses) => {return singleClass.ClassCompleted !== false})
      setPayedClasses(notCompletedClasses)
    })
    .catch((error) => console.log(error));
    return () => {
      
    }
  }, [])
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

      <ClasesLayout
        payedClasses = {payedClasses}
       />
    </article>
  );
};

export default CaloriesProfile;
