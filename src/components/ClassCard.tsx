import { useNavigate } from "react-router-dom";
import { CornerCirclesSVG, HeartSVG, DumbbellSVG, LightingSVG } from "../icons";
import { UserSVG } from "../icons/UserSVG";
import HeaderProfile from "./HeaderProfile";
import { Classes } from "../types/classesTypes";

type ClassCardProps = {
  item: Classes[];
  setItem: React.Dispatch<React.SetStateAction<Classes[]>>;
};

export const ClassCard = ({ item, setItem }: ClassCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/calendar");
  };

  const handleList = () => {
    setItem([]);
    navigate("/profile");
  };
  return (
    <>
      {item.map((clase) => (
        <div
          key={clase.id}
          className="bg-pattern bg-no-repeat bg-lima-100/60 bg-cover flex flex-col  items-center h-screen"
        >
          <HeaderProfile
            handleClick={handleList}
            closeButton={false}
            text={clase.instructor.name}
            showConfig={false}
          />
          <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
          <div className="flex flex-col items-center flex-1 min-[566px]:pb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden mt-7 mb-16">
              <img
                className="w-full h-full object-cover"
                src={clase.image}
                alt={clase.title}
              />
            </div>
            <div className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 md:max-h-96">
              <div className="absolute -top-8 flex justify-center items-center w-16 h-16 rounded-full bg-lima-100  shadow-custom">
                <UserSVG fill="white" />
              </div>
              <div className="w-full flex justify-evenly pt-16">
                <div className="w-full flex justify-evenly">
                  <div className="flex flex-col items-center justify-center">
                    <HeartSVG className="w-6 h-6" />
                    <p className="text-heading-sm font-bold font-DMsans">
                      {clase.type}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <DumbbellSVG />
                    <p className="text-heading-sm font-bold font-DMsans">
                      {clase.instructor.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <LightingSVG />
                    <p className="text-heading-sm font-bold font-DMsans">
                      {clase.level}
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="bg-lima-100 text-black font-lato text-heading font-bold rounded-xl w-full py-2 max-w-4xl mt-5"
                onClick={handleClick}
              >
                Ver calendario
              </button>
              <div className="w-full my-6">
                <h3 className="text-heading-md font-DMsans font-bold">
                  {" "}
                  Información{" "}
                </h3>
                <p className="font-DMsans font-normal text-heading-sm text-gray-500 mt-3">
                  {clase.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClassCard;
