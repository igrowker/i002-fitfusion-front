import { useEffect, useState } from "react";
import { ClassTeacherCard, HeaderProfile } from "../../components";
import { CornerCirclesSVG } from "../../icons";

import Calendar from "react-calendar";
import "./LocalCalendar.css";
import { DBclasses } from "../../data/db";
import { Classes } from "../../types/classesTypes";
import { useNavigate } from "react-router-dom";
import PayPage from "../../components/PayPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51Pc5b0RxyXHtmyBjqqsLa8piRs7leNoso0DM22BAK9v1bbp6roVYcNkvAO5xsG8EjzzEjYQ7DF1NGdxK3C6E5x3500MlfeMrtq");

export const CalendarComponent = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());
  const classList: Classes[] = DBclasses;
  const navigate = useNavigate();

  useEffect(() => {
    // cuando value cambie deberiamos llamar a una api que nos traiga
    // las clases que hay en esa fecha
  }, [value]);

  const [item, setItem] = useState<Classes[]>([]);

  const filterItem = (id: number) => {
    const newItem = classList.filter((newVal) => newVal.id === id);
    setItem(newItem);
  };

  return (
    <div className="bg-lima-100/60 bg-cover bg-center flex flex-col items-center">
      <HeaderProfile
        closeButton={false}
        text={"Calendario de clases"}
        showConfig={false}
        handleClick={() => navigate(-1)}
      />
      <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
      <div className="flex flex-col items-center flex-1 ">
        <div className="calendarContainer my-11">
          <Calendar
            onChange={onChange}
            value={value}
            className={"calendar"}
            minDate={new Date()}
          />
        </div>
        <div className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 min-[566px]:mb-6">
          <div className="w-full my-6">
            <p className="font-DMsans font-bold text-heading text-left mb-4">
              {" "}
              Clases disponibles{" "}
            </p>
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
          </div>
        </div>
      </div>
      <nav
        className={`${
          item.length === 0 ? "w-0" : "w-[100vw]"
        }  fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-[60] overflow-x-hidden origin-left duration-500 `}
      >
        <Elements stripe={stripePromise}>
          <PayPage item={item} setItem={setItem} />
        </Elements>
      </nav>
    </div>
  );
};
