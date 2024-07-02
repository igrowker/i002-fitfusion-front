import { HeartSVG, LocationSVG, WeightLiftingSVG } from "../icons";
import { Classes } from "../types/classesTypes";

type FilterCardProps = {
  item: Classes[];
};

export const FilterCard = ({ item }: FilterCardProps) => {
  return (
    <div className="bg-white bg-cover max-w-full max-h-full ">
      <ul className="flex flex-col justify-around items-center gap-4 max-h-full md:flex-row flex-wrap">
        {item.map((el) => {
          return (
            <li
              key={el.id}
              className="w-5/6 flex justify-around max-w-80 hover:cursor-pointer "
            >
              <img src={el.image} className="w-36 h-36 rounded-large" />
              <div className="flex flex-col items-start justify-center gap-1">
                <div className=" w-full flex justify-center text-center">
                  <h3 className="font-DMsans font-bold text-heading max-w-28">
                    {" "}
                    {el.title}{" "}
                  </h3>
                </div>
                <div className="flex items-center gap-2 ">
                  <LocationSVG className="text-lima-200 w-4" />
                  <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                    {" "}
                    {el.type}{" "}
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <WeightLiftingSVG className="text-lima-200 w-4" />
                  <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                    {" "}
                    {el.instructor.name}{" "}
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <HeartSVG className="text-lima-200 w-4" />
                  </div>
                  <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                    {" "}
                    {el.level}{" "}
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

export default FilterCard;
