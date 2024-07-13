import { useEffect, useState } from "react";
import { ClassTeacherCard, HeaderProfile } from "../../components";
import { CornerCirclesSVG } from "../../icons";

import Calendar from "react-calendar";
import "./LocalCalendar.css";
import { useNavigate } from "react-router-dom";
import PayPage from "../../components/PayPage";
import { apiCall } from "../../services/apiCall";
import { adaptScheludedClasses } from "../../services/adaptScheludedClasses";
import { ScheduledClasses } from "../../types/scheduledClassesTypes";

export const CalendarComponent = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());
  const [classList, setClassList] = useState<ScheduledClasses[] | undefined >();
  const [item, setItem] = useState<ScheduledClasses[] | undefined >([]);

  const navigate = useNavigate();

 const handleClick = () => {
    // cuando value cambie deberiamos llamar a una api que nos traiga
    // las clases que hay en esa fecha
    const fecha = new Date(value as any);
    console.log(value , fecha.getDay());

    const body = {weekdayId : fecha.getDay()}

    apiCall({ url: `/classes/getClassesByDate`, method: "POST", body })
    .then((res) => {
      return res.json();
    })
    .then((data) => {

      const adaptedClasses = adaptScheludedClasses(data);

      console.log('adaptedClass' , adaptedClasses);
      
      setClassList(adaptedClasses)

    })
    .catch((error) => console.log(error));
    
  };



  const filterItem = (id: number) => {
    const newItem = classList?.filter((newVal) => newVal.id === id);
    newItem !== undefined && setItem(newItem);
  };

  console.log('item' , item )
  return (
    <div className="bg-lima-100/60 bg-cover bg-center h-lvh flex flex-col items-center">
      <HeaderProfile
        closeButton={false}
        text={"Calendario de clases"}
        showConfig={false}
        handleClick={() => navigate(-1)}
      />
      <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
      <div className="flex flex-col items-center flex-1 ">
        <div className="flex flex-col items-center calendarContainer my-11">
          <Calendar
            onChange={onChange}
            value={value}
            className={"calendar"}
            minDate={new Date()}
          />
          <button
            className="bg-lima-500/80 text-black font-lato text-heading font-bold rounded-xl w-72 py-2 max-w-4xl mt-5"
            onClick={handleClick}
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
            {classList === undefined 
              ? null 
              : classList.length === 0 
                ? <h2>No hay clases en la fecha seleccionada</h2>
                : (
                  <ul className="flex flex-col items-center gap-3 cursor-pointer">
                    {classList?.map((singleClass) => (
                      <li onClick={() => filterItem(singleClass.id)} key={singleClass.id} id={singleClass.title}>
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
                ) 
            } 
          </div>
        </div>
      </div>
      {
        item !== undefined ? (
          <nav
            className={`${
              item.length === 0 ? "w-0" : "w-[100vw]"
            }  fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-[60] overflow-x-hidden origin-left duration-500 `}
          >
            <PayPage item={item} setItem={setItem} />
          </nav>
        ) : null 
      }

    </div>
  );
};
