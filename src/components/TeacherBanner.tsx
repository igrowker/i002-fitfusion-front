import { useEffect, useState } from "react";
// import { useUser } from "../hooks/useUser";
import { FireSVG } from "../icons/FireSVG";
// import ClassCard from "./ClassCard";
import { Classes } from "../types/classesTypes";
import { apiCall } from "../services/apiCall";
import { adaptClassesformat } from "../services/adaptClassesFormat";
import { useNavigate } from "react-router-dom";
import { APP_STATUS, AppStatusType } from "../types/generalTypes";
import ErrorMessage from "./ErrorMessage";
// import ClassCard from "./ClassCard";

export const TeacherBanner = () => {
  // const { dataClass } = useUser();
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.LOADING);

  // const [item, setItem] = useState([]);

  const [classes, setclasses] = useState<Classes[] | []>([]);

  useEffect(() => {
    apiCall({ url: "/classes/getAllClasses", method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message === "GetClass Not Found") {
          setAppStatus(APP_STATUS.ERROR);
        } else {
          const adaptedClasses = adaptClassesformat(data);

          setclasses(adaptedClasses);
          setAppStatus(APP_STATUS.READY_USAGE);
        }
      })
      .catch((error) => {
        setAppStatus(APP_STATUS.ERROR);
        console.log(error);
      });
  }, []);

  // const filterItem = (id: number) => {
  //   console.log(id)
  //   const newItem = classes.filter((newVal) => newVal.id === id);
  //   newItem !== undefined && setItem(newItem);
  // };
  const classesSlice = classes.slice(0, 3);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/classes");
  };


  return (
    <>
      <button
        className="w-full font-lato font-bold text-heading bg-lima-100 min-[566px]:bg-gray-100 min-w-40 rounded-md p-2 min-[566px]:w-48 hover:bg-lima-100 duration-300 hover:scale-110"
        onClick={handleClick}
      >
        Ver todas las clases
      </button>
      {appStatus === APP_STATUS.ERROR ? (
        <ErrorMessage>Ocurrió un error al traer las clases</ErrorMessage>
      ) : (
        classesSlice.map((user) => (
          <article
            // onClick={() => filterItem(user.id)}
            onClick={() => navigate(`/class-detail/${user.id}`)}
            key={user.id}
            className={` cursor-pointer flex flex-row gap-4 p-2 rounded-full justify-between items-center w-80 ${
              user.id % 2 !== 0 ? " bg-lima-200" : " bg-black-bg"
            }`}
          >
            <div className=" flex flex-row gap-4 items-center">
              <img
                src={`${user.image || "/avatarnone.png"}`}
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
        ))
      )}

      {/* <nav
        className={`${
          item.length === 0 ? "w-0" : "w-[100vw]"
        }  fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-[60] overflow-x-hidden origin-left duration-500 `}
      >
        <ClassCard item={item} setItem={setItem} />
      </nav> */}
    </>
  );
};

export default TeacherBanner;
