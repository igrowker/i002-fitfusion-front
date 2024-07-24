import { useEffect, useState } from "react";
import { ColonSVG } from "../icons";
import { ClasesLayout, Spinner, TeacherBanner } from "./";
import { apiCall } from "../services/apiCall";
import { getLocalSUserInfo } from "../services/handleLocalStorage";
import { PayedClasses } from "../types/classesTypes";
import { APP_STATUS, AppStatusType } from "../types/generalTypes";
import { createErrorToast, createSuccessToast } from "../services/toastCreation";
import { ToastContainer } from "react-toastify";

 const ClasesProfile = () => {
  const [appStatus , setAppStatus] = useState<AppStatusType>(APP_STATUS.LOADING)  
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
        setAppStatus(APP_STATUS.READY_USAGE)
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
          if (data.ClassCompleted === true) {
            
            setGetClasses(true);
            const notify = createSuccessToast({
              message : 'La clase se marco como completa',
            })
  
            notify()
          }
        })
        .catch((error) => {
          const notify = createErrorToast({
            message : 'Ocurrio un error al marcar la clase como completa',
          })

          notify()
          console.log(error)
        });
    }
  };
  return (
    <article className=" flex flex-col items-center mx-6 mb-8">
      {appStatus === APP_STATUS.LOADING && <Spinner />}
      <ToastContainer />
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
