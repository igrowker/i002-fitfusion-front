import { useEffect, useRef, useState } from "react";
import { WeightLiftingSVG, HeartSVG, LocationSVG } from "../../icons";
import { Classes } from "../../types/classesTypes";
import {
  ClassesFilter,
  Header,
  HeaderProfile,
  Spinner,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../../services/apiCall";
import { adaptClassesformat } from "../../services/adaptClassesFormat";
import ErrorMessage from "../../components/ErrorMessage";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";

export const ClassesList = () => {
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.LOADING);

  const navigate = useNavigate();

  const [filters, setfilters] = useState({
    type: "Tipo",
    level: "Nivel",
    status: "Estado",
  });
  const [classes, setclasses] = useState<Classes[] | []>([]);

  const originalClasses = useRef<Classes[] | []>([]);

  useEffect(() => {
    apiCall({ url: "/classes/getAllClasses", method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const adaptedClasses = adaptClassesformat(data);

        setclasses(adaptedClasses);
        originalClasses.current = adaptedClasses;
        setAppStatus(APP_STATUS.READY_USAGE);
      })
      .catch((error) => {
        console.log(error);

        setAppStatus(APP_STATUS.ERROR);
      });
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const className = e.target.name as keyof Classes;

    setfilters((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    const filteredClases = classes.filter((clas: Classes) => {
      return clas[className] === e.target.value;
    });

    setclasses(filteredClases);
  };

  const resetClasses = () => {
    setclasses(originalClasses.current);
    setfilters({
      type: "Tipo",
      level: "Nivel",
      status: "Estado",
    });
  };

  const handleClick = (classId: number) => {
    navigate(`/class-detail/${classId}`);
  };

  const handle = () => {
    navigate("");
  };

  return (
    <div className="min-[566px]:relative">
      <div className=" hidden  min-[566px]:flex min-[566px]:z-30 min-[566px]:w-full min-[566px]:bg-black-bg min-[566px]:sticky min-[566px]:bottom-0  ">
        <Header />
      </div>
      <div className="bg-white flex flex-col items-center pb-6 min-[566px]:h-screen">
        {appStatus === APP_STATUS.LOADING && <Spinner />}
        <HeaderProfile
          handleClick={handle}
          closeButton={true}
          text="Clases"
          showConfig={false}
        />

        <ClassesFilter
          filters={filters}
          handleSelectChange={handleSelectChange}
          resetClasses={resetClasses}
        />

        {appStatus !== APP_STATUS.LOADING && classes.length === 0 ? (
          <div className="px-6 pt-6 text-center">
            <ErrorMessage>
              {appStatus === APP_STATUS.ERROR
                ? "Ocurrio un error al querer obtener las clases"
                : "No existen clases para la combinacion de filtros seleccionada"}
            </ErrorMessage>
          </div>
        ) : (
          <ul className=" min-[566px]:mb-6 cursor-pointer flex flex-col justify-around items-center gap-4 max-h-full mt-7 md:flex-row flex-wrap min-[566px]:px-6 min-[566px]:flex-row min-[566px]:justify-center min-[566px]:flex-wrap min-[566px]:gap-6">
            {classes.map((fitClass: Classes) => {
              return (
                <li
                  key={fitClass.id}
                  className=" flex justify-between items-center  px-6 gap-4"
                  onClick={() => handleClick(fitClass.id)}
                >
                  <img
                    src={fitClass.image || '/avatarnone.png'}
                    className="w-36 h-36 rounded-large object-cover"
                  />
                  <div className="flex flex-col items-start justify-start gap-1 hover:cursor-pointer ">
                    <div className=" flex ">
                      <h3 className="font-DMsans font-bold text-heading max-w-28">
                        {" "}
                        {fitClass.title}{" "}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <LocationSVG />
                      <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                        {" "}
                        {fitClass.type}{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <WeightLiftingSVG
                        height="12px"
                        width="12px"
                        fill="#86BA43"
                      />
                      <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                        {" "}
                        {fitClass.instructor.name}{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <div>
                        <HeartSVG />
                      </div>
                      <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                        {" "}
                        {fitClass.level}{" "}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ClassesList;
