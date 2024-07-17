import { useEffect, useRef, useState } from "react";
import { useUser } from "../hooks/useUser";
import { FireSVG } from "../icons/FireSVG";
import ClassCard from "./ClassCard";
import { Classes } from "../types/classesTypes";
import { apiCall } from "../services/apiCall";
import { adaptClassesformat } from "../services/adaptClassesFormat";
import { useNavigate } from "react-router-dom";

export const TeacherBanner = () => {
  const { dataClass } = useUser();

  const [item, setItem] = useState(dataClass);

  const filterItem = (id: number) => {
    const newItem = dataClass.filter((newVal) => newVal.id === id);
    setItem(newItem);
  };

  const [classes, setclasses] = useState<Classes[] | []>([]);

  const originalClasses = useRef<Classes[] | []>([]);

  useEffect(() => {
    apiCall({ url: "/classes/getAllClasses", method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // guardar datos del clases en redux?

        // console.log('data' , data );

        const adaptedClasses = adaptClassesformat(data);

        setclasses(adaptedClasses);
        originalClasses.current = adaptedClasses;
      })
      .catch((error) => console.log(error));
  }, []);

  const classesSlice = classes.slice(0, 3);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/classes");
  };

  return (
    <>
      {classesSlice.map((user) => (
        <article
          onClick={() => filterItem(user.id)}
          key={user.id}
          className={` cursor-pointer flex flex-row gap-4 p-2 rounded-full justify-between items-center w-80 ${
            user.id % 2 !== 0 ? " bg-lima-200" : " bg-black-bg"
          }`}
        >
          <div className=" flex flex-row gap-4 items-center">
            <img
              src={`${user.image}`}
              className={`rounded-full bg-cover w-14 h-14 bg-center ]`}
            />
            <div className=" flex flex-col justify-start">
              <p className=" text-heading-sm text-white font-medium">
                {user.instructor.name}
              </p>
              <p className=" text-heading-sm text-gray-100">{user.title}</p>
            </div>
          </div>

          <div className=" flex flex-row gap-2 mr-4">
            <FireSVG className="text-white" />

            <p className=" font-medium text-white text-heading-sm ">
              {user.kcal} Kcal
            </p>
          </div>
        </article>
      ))}

      <nav
        className={`${
          item.length === 0 ? "w-0" : "w-[100vw]"
        }  fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-[60] overflow-x-hidden origin-left duration-500 `}
      >
        <ClassCard item={item} setItem={setItem} />
      </nav>

      <button
        className="w-full font-lato font-bold text-heading bg-lima-100 min-[566px]:bg-gray-100 min-w-40 rounded-md p-2 min-[566px]:w-48 hover:bg-lima-100 duration-300 hover:scale-110"
        onClick={handleClick}
      >
        Ver todas las clases
      </button>
    </>
  );
};

export default TeacherBanner;
