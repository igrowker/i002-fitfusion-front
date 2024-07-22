import {
  CornerCirclesSVG,
  DumbbellSVG,
  HeartSVG,
  LightingSVG,
} from "../../icons";
import { UserSVG } from "../../icons/UserSVG";
import { HeaderProfile, Spinner } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { apiCall } from "../../services/apiCall";
import { Instructor } from "../../types/classesTypes";
import { adaptInstructorFormat } from "../../services/adaptInstructorFormat";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";

export const TrainerProfilePage = () => {
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.LOADING);
  const navigate = useNavigate();
  const { id } = useParams();

  const [instructor, setInstructor] = useState<Instructor>()

  useEffect(() => {
    apiCall({ url: `/teacher/${id}`, method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const adaptedInstructor = adaptInstructorFormat(data)
      setInstructor(adaptedInstructor)
      setAppStatus(APP_STATUS.READY_USAGE)
      
    })
    .catch((error) => {
      setAppStatus(APP_STATUS.ERROR)
      console.log(error)
    });
  }, [])
  
  const handleClick = () => {
    navigate("/calendar");
  };

  const handleBack = () => {
    navigate("/classes");
  };

  return (
    <div className="bg-pattern bg-no-repeat bg-lima-100/60 bg-cover flex flex-col  items-center h-screen">
    {appStatus === APP_STATUS.LOADING ? <Spinner /> :(
      <>
        <HeaderProfile
          handleClick={handleBack}
          closeButton={false}
          text={instructor?.name || 'Profesor'}
          showConfig={false}
        />
        <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
          <div className="flex flex-col items-center flex-1 min-[566px]:pb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden mt-7 mb-16">
              <img
                className="w-full h-full object-cover"
                src={instructor?.image || '/avatarnone.png'}
                alt="Imagen del profesor"
              />
            </div>
            <div className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 md:max-h-96">
              <div className="absolute -top-8 flex justify-center items-center w-16 h-16 rounded-full bg-lima-100  shadow-custom">
                <UserSVG fill="white" />
              </div>
              <div className="w-full flex justify-evenly pt-16">
                <div className="w-full flex justify-evenly">
                  <div className="flex flex-col items-center justify-center">
                    <HeartSVG className="w-6 h-6" />
                    <p className="max-w-4 min-h-10 flex flex-col justify-center items-center text-center text-heading-sm font-bold font-DMsans">
                      {instructor?.class_type}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <DumbbellSVG />
                    <p className="max-w-4 min-h-10 flex flex-col justify-center items-center text-center text-heading-sm font-bold font-DMsans">
                      {instructor?.professional_title}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <LightingSVG />
                    <p className="max-w-4 min-h-10 flex flex-col justify-center items-center text-center text-heading-sm font-bold font-DMsans">{`${instructor?.years_experience} años de experiencia`}</p>
                  </div>
                </div>
              </div>
              <button
                className="bg-lima-100 text-black font-lato text-heading font-bold rounded-xl w-full py-2 max-w-4xl mt-5"
                onClick={handleClick}
              >
                Ver calendario
              </button>
              <div className="w-full my-6">
                <h3 className="text-heading-md font-DMsans font-bold">
                  {" "}
                  Información{" "}
                </h3>
                <p className="font-DMsans font-normal text-heading-sm text-gray-500 mt-3 min-w-80">
                    {instructor?.bio}

                </p>
              </div>
            </div>
          </div>
      </>
      )}
    </div>
  );
};

export default TrainerProfilePage;
