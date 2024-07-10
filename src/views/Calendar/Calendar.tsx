import { useEffect, useState } from "react";
import { ClassTeacherCard, HeaderProfile } from "../../components";
import { CornerCirclesSVG } from "../../icons";

import Calendar from "react-calendar";
import "./LocalCalendar.css";
import { DBclasses } from "../../data/db";
import { Classes } from "../../types/classesTypes";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="h-full bg-lima-100 bg-pattern bg-cover bg-center flex flex-col md:bg-none">
      <HeaderProfile
        closeButton={false}
        text={"Calendario de clases"}
        showConfig={false}
        handleClick={() => navigate(-1)}
      />
      <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
      <div className="flex flex-col items-center flex-1">
        <div className="calendarContainer mb-11">
          <Calendar
            onChange={onChange}
            value={value}
            className={"calendar"}
            minDate={new Date()}
          />
        </div>
        <div className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 md:max-h-96">
          <div className="w-full my-6">
            <p className="font-DMsans font-bold text-heading text-left mb-4">
              {" "}
              Clases disponibles{" "}
            </p>
            <ul className="flex flex-col items-center gap-3">
              {classList.map((singleClass) => {
                return (
                  <li
                    key={singleClass.id}
                    className="hover:cursor-pointer min-w-80"
                  >
                    <ClassTeacherCard
                      img={singleClass.image}
                      name={singleClass.title}
                      descOrLength={singleClass.length}
                      calories={singleClass.calories}
                      hour={singleClass.hour}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
