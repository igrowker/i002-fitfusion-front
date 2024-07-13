import { FireSVG } from "../icons";

type CardPropTypes = {
  img: string;
  name: string;
  descOrLength: number;
  calories: number;
  hour?: string;
};

export const ClassTeacherCard = ({
  img,
  name,
  descOrLength,
  calories,
  hour,
}: CardPropTypes) => {
  return (
    <div className="w-full max-w-80 max-h-20 flex border-2 rounded-full border-gray-400 hover:bg-lima-100 hover:border-lima-200">
      <div className=" p-1">
        <img src={img} alt="" className="w-14 h-14 rounded-large" />
      </div>
      <div className="flex-1 flex w-full justify-between px-3">
        <div className="flex flex-col justify-center items-start gap-1 p-1">
          <p className="font-DMsans font-normal text-heading-sm">{name}</p>
          <p className="font-DMsans font-medium text-heading-sm text-gray-500">
            {descOrLength} min
          </p>
        </div>
        <div className="flex flex-col justify-center items-end gap-1 p-1">
          {hour ? (
            <p className={"font-DMsans font-medium text-heading-sm"}>{hour.slice(0,5)}</p>
          ) : null}
          <p className={"flex gap-1 font-DMsans font-medium text-heading-sm"}>
            {" "}
            <FireSVG height="16" width="16" /> {calories}
          </p>
        </div>
      </div>
    </div>
  );
};
