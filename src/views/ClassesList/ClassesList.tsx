import { classes } from "../../data/db";
import { WeightLiftingSVG, HeartSVG, LocationSVG } from "../../icons";
import { Classes } from "../../types/classesTypes";

export const ClassesList = () => {
  return (
    <div className="bg-white bg-cover max-w-full max-h-full ">
      <ul className="flex flex-col justify-around items-center gap-4 max-h-full md:flex-row flex-wrap">
        {classes.map((fitClass: Classes) => {
          return (
            <li
              key={fitClass.id}
              className="w-5/6 flex justify-around max-w-80 hover:cursor-pointer "
            >
              <img src={fitClass.image} className="w-36 h-36 rounded-large" />
              <div className="flex flex-col items-start justify-center gap-1">
                <div className=" w-full flex justify-center text-center">
                  <h3 className="font-DMsans font-bold text-heading max-w-28">
                    {" "}
                    {fitClass.title}{" "}
                  </h3>
                </div>
                <div className="flex items-center gap-2 ">
                  <LocationSVG className="text-lima-200 w-4" />
                  <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                    {" "}
                    {fitClass.type}{" "}
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <WeightLiftingSVG className="text-lima-200 w-4" />
                  <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                    {" "}
                    {fitClass.instructor.name}{" "}
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <HeartSVG className="text-lima-200 w-4" />
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
    </div>
  );
};

export default ClassesList;
