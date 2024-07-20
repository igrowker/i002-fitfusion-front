import { useState } from "react";
import { ClassTeacherCard, HeaderProfile, Spinner } from "../../components";
import { CornerCirclesSVG } from "../../icons";

import Calendar from "react-calendar";
import "./LocalCalendar.css";
import { useNavigate } from "react-router-dom";
import PayPage from "../../components/PayPage";
import { apiCall } from "../../services/apiCall";
import { adaptScheludedClasses } from "../../services/adaptScheludedClasses";
import { ScheduledClasses } from "../../types/scheduledClassesTypes";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";
import ErrorMessage from "../../components/ErrorMessage";

const stripePromise = loadStripe(
  "pk_test_51Pc5b0RxyXHtmyBjqqsLa8piRs7leNoso0DM22BAK9v1bbp6roVYcNkvAO5xsG8EjzzEjYQ7DF1NGdxK3C6E5x3500MlfeMrtq"
);

export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarComponent = () => {
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.IDLE);
  const [value, onChange] = useState<Value>(new Date());
  const [classList, setClassList] = useState<ScheduledClasses[] | undefined>();
  const [item, setItem] = useState<ScheduledClasses | undefined>();

  const navigate = useNavigate();

  const handleClick = () => {
    // cuando value cambie deberiamos llamar a una api que nos traiga
    // las clases que hay en esa fecha
    setAppStatus(APP_STATUS.LOADING);
    const fecha = new Date(value as any);

    const body = { weekdayId: fecha.getDay() };

    apiCall({ url: `/classes/getClassesByDate`, method: "POST", body })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const adaptedClasses = adaptScheludedClasses(data);

        setClassList(adaptedClasses);
        setAppStatus(APP_STATUS.READY_USAGE);
      })
      .catch((error) => {
        console.log(error);
        setClassList(undefined);
        setAppStatus(APP_STATUS.ERROR);
      });
  };

  const filterItem = (id: number) => {
    const newItem = classList?.find((newVal) => newVal.id === id);

    newItem !== undefined && setItem(newItem);
  };

  return (
    <div
      className={`bg-lima-100/60 bg-pattern bg-no-repeat ${
        classList === undefined || classList.length === 0
          ? "md:h-[100vh] h-screen"
          : classList.length !== 0 && "h-screen md:h-[100%]"
      } bg-cover flex flex-col items-center`}
    >
      <HeaderProfile
        closeButton={false}
        text={"Calendario de clases"}
        showConfig={false}
        handleClick={() => navigate(-1)}
      />
      <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
      {appStatus === APP_STATUS.LOADING && <Spinner />}
      <div className="flex flex-col items-center flex-1 ">
        <div className="calendarContainer my-11 flex flex-col items-center">
          <Calendar
            onChange={onChange}
            value={value}
            className={"calendar"}
            minDate={new Date()}
          />
          <button
            className="bg-lima-500/80 text-black font-lato text-heading font-bold rounded-xl w-72 py-2 max-w-4xl mt-5 disabled:bg-lima-500/40"
            onClick={handleClick}
            disabled={appStatus === APP_STATUS.LOADING}
          >
            {" "}
            Buscar clases en esta fecha
          </button>
        </div>
        <div className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 min-[566px]:mb-6">
          <div className="w-full my-6">
            <p className="font-DMsans font-bold text-heading text-left mb-4">
              {" "}
              Clases disponibles{" "}
            </p>
            {classList === undefined ? (
              appStatus === APP_STATUS.ERROR ? (
                <ErrorMessage>
                  Ocurrió un error al traer las clases
                </ErrorMessage>
              ) : null
            ) : classList.length === 0 ? (
              <ErrorMessage>
                No hay clases en la fecha seleccionada
              </ErrorMessage>
            ) : (
              <ul className="flex flex-col items-center gap-3 cursor-pointer">
                {classList.map((singleClass) => (
                  <li
                    onClick={() => filterItem(singleClass.id)}
                    key={singleClass.id}
                    id={singleClass.title}
                  >
                    <ClassTeacherCard
                      img={singleClass.image}
                      name={singleClass.title}
                      descOrLength={singleClass.length}
                      calories={singleClass.calories}
                      hour={singleClass.hour}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <nav
        className={`${
          item === undefined ? "w-0" : "w-[100vw]"
        }  fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-[60] overflow-x-hidden origin-left duration-500 `}
      >
        {item !== undefined ? (
          <Elements stripe={stripePromise}>
            <PayPage item={item} setItem={setItem} selectedDate={value} />
          </Elements>
        ) : null}
      </nav>
    </div>
  );
};
