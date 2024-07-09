import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { FireSVG } from "../icons/FireSVG";
import ClassCard from "./ClassCard";


export const TeacherBanner = () => {
  const { dataClass } = useUser();

  const [item, setItem] = useState(dataClass);

  const filterItem = (id: number) => {
    const newItem = dataClass.filter((newVal) => newVal.id === id);
    setItem(newItem);
  };

  return (
    <>
      {dataClass?.map((user) => (
        <article
          onClick={() => filterItem(user.id)}
          key={user.id}
          className={`flex flex-row gap-4 p-2 rounded-full justify-between items-center w-80 ${
            user.id % 2 !== 0 ? " bg-lima-200" : " bg-black-bg"
          }`}
        >
          <div className=" flex flex-row gap-4 items-center">
            <img
              className={`rounded-full bg-cover w-14 h-14 bg-center bg-[url(${user.image})]`}
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
    </>
  );
};

export default TeacherBanner;
