import { useEffect, useState } from "react";
import { ColonSVG } from "../icons";
import { ClasesLayout, TeacherBanner } from "./";
import { apiCall } from "../services/apiCall";
import { getLocalSUserInfo } from "../services/handleLocalStorage";
import { PayedClasses } from "../types/classesTypes";

export const ClasesProfile = () => {
  const [payedClasses, setPayedClasses] = useState<PayedClasses[]>();
  const [getClasses, setGetClasses] = useState<Boolean>(false);

  useEffect(() => {
    const { userId } = getLocalSUserInfo();

    apiCall({ url: `/payments/${userId}`, method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // guardar datos del clases en redux?
        const notCompletedClasses = data.filter((singleClass: PayedClasses) => {
          return singleClass.ClassCompleted === false;
        });
        notCompletedClasses.sort((a: PayedClasses, b: PayedClasses) =>
          a.ClassDate.localeCompare(b.ClassDate)
        );
        setPayedClasses(notCompletedClasses);
        setGetClasses(false);
      })
      .catch((error) => console.log(error));
    return () => {};
  }, [getClasses]);

  const handleCompletedClick = (id: number, completed: boolean) => {
    if (!completed) {
      const body = { paimentId: id };

      apiCall({ url: `/classes/complete`, method: "PATCH", body })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log({ data });
          setGetClasses(true);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <article className=" flex flex-col items-center mx-6 mb-8">
      <ClasesLayout
        payedClasses={payedClasses}
        handleCompletedClick={handleCompletedClick}
      />
      <div className=" flex flex-row w-full justify-between items-center pt-2 px-6 min-[566px]:max-w-xl ">
        <p className=" font-bold text-heading font-lato">
          Comienza a entrenar hoy
        </p>
        <ColonSVG className="text-gray-500" />
      </div>
      <div className=" flex flex-col items-center px-6 mt-8 gap-4">
        <TeacherBanner />
      </div>
    </article>
  );
};

export default ClasesProfile;
