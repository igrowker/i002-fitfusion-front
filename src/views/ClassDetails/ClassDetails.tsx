import { useState } from "react";
import { useEffect } from "react";
import { HeaderProfile, Spinner } from "../../components";
import { Classes } from "../../types/classesTypes";
import {
  CornerCirclesSVG,
  DumbbellSVG,
  HeartSVG,
  LightingSVG,
  RightArrowSVG,
} from "../../icons";
import { UserSVG } from "../../icons/UserSVG";
import { useNavigate, useParams } from "react-router-dom";
import { apiCall } from "../../services/apiCall";
import { adaptClassformat } from "../../services/adaptClassesFormat";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";
import ErrorMessage from "../../components/ErrorMessage";
import RedButton from "../../components/RedButton";

export const ClassDetails = () => {
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.LOADING);
  const navigate = useNavigate();
  const { id } = useParams();

  const [classInfo, setClassInfo] = useState<Classes>();

  // esto creo que lo podriamos evitar trayendo la info de redux
  useEffect(() => {
    apiCall({ url: `/classes/${id}`, method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const adaptedClass = adaptClassformat(data);

        setClassInfo(adaptedClass);
        setAppStatus(APP_STATUS.READY_USAGE);
      })
      .catch((error) => {
        console.log(error);
        setAppStatus(APP_STATUS.ERROR);
      });
  }, []);

  const handleClick = (to: string) => {
    navigate(`${to}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="bg-pattern bg-no-repeat bg-lima-100/60 bg-cover flex flex-col justify-center items-center h-screen">
        {appStatus === APP_STATUS.LOADING && <Spinner />}
        {appStatus === APP_STATUS.ERROR && (
          <div className="px-6 pt-6 text-center ">
            <ErrorMessage>
              Ocurrió un error al querer obtener el detalle de la clase
              <RedButton onClick={handleBack} text="Volver" size="medium" />
            </ErrorMessage>
          </div>
        )}

        {classInfo !== undefined ? (
          <>
            <HeaderProfile
              handleClick={handleBack}
              closeButton={false}
              text={classInfo.title}
              showConfig={false}
            />
            <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
            <div className="flex flex-col items-center flex-1  min-[566px]:pb-6 ">
              <div className="w-40 h-40 rounded-full overflow-hidden mt-7 mb-16">
                <img
                  className="w-full h-full object-cover"
                  src={classInfo.image || '/avatarnone.png'}
                  alt="Imagen de la clase"
                />
              </div>
              <div
                id="prueba"
                className=" w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 md:max-h-96"
              >
                <div className="absolute -top-8 flex justify-center items-center w-16 h-16 rounded-full bg-lima-100  shadow-custom">
                  <UserSVG fill="white" />
                </div>
                <div className="w-full flex justify-evenly pt-16">
                  <div className=" flex flex-col items-center justify-between">
                    <HeartSVG width={24} height={24} />
                    <p className=" max-w-4 min-h-10 flex flex-col justify-center items-center text-center text-heading-sm font-bold font-DMsans">
                      {classInfo.title}
                    </p>
                  </div>
                  <div className=" flex flex-col items-center justify-between">
                    <DumbbellSVG width={24} height={24} />
                    <p className=" max-w-4 min-h-10 flex flex-col  items-center text-center text-heading-sm font-bold font-DMsans">
                      {classInfo.type}
                    </p>
                  </div>
                  <div className=" flex flex-col items-center justify-between">
                    <LightingSVG width={24} height={24} />
                    <p className=" max-w-4 min-h-10 flex flex-col justify-center items-center text-center text-heading-sm font-bold font-DMsans">
                      {classInfo.level}
                    </p>
                  </div>
                </div>
                <button
                  className="bg-lima-100 text-black font-lato text-heading font-bold rounded-xl w-full py-2 max-w-4xl mt-5"
                  onClick={() => handleClick("/calendar")}
                >
                  {" "}
                  Ver calendario
                </button>
                <div className="w-full my-6">
                  <h3 className="text-heading-md font-DMsans font-bold">
                    {" "}
                    Información{" "}
                  </h3>
                  <p className="font-DMsans font-normal text-heading-sm text-gray-500 mt-3">
                    {classInfo.description}
                  </p>

                  {/* Pendiente de definir estilos */}
                  <div
                    className="flex items-center flex-row justify-between pt-6 cursor-pointer"
                    onClick={() =>
                      handleClick(`/trainer-profile/${classInfo.instructor.id}`)
                    }
                  >
                    <p className=" font-lato text-heading">
                      Conoce al Entrenador:{" "}
                      <span className="font-bold text-[18px] ">
                        {" "}
                        {classInfo.instructor.name}
                      </span>
                    </p>
                    <RightArrowSVG width={36} height={36} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
