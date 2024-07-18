import { useNavigate } from "react-router-dom";
import { CornerCirclesSVG } from "../icons";
import { UserSVG } from "../icons/UserSVG";
import { NutriAndPhysioType } from "../types/userTypes";
import HeaderProfile from "./HeaderProfile";
import { UbicationSVG } from "../icons/UbicationSVG";
import { PhoneSVG } from "../icons/PhoneSVG";
import { EmailSVG } from "../icons/EmailSVG";

type NutritionCardProps = {
  item: NutriAndPhysioType[];
  setItem: React.Dispatch<
    React.SetStateAction<NutriAndPhysioType[] | undefined>
  >;
};

export const NutritionCard = ({ item, setItem }: NutritionCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setItem([]);
    navigate("/nutrition");
  };
  return (
    <>
      {item.map((nut) => (
        <div
          key={nut.id}
          className="bg-pattern bg-no-repeat bg-lima-100/60 bg-cover flex flex-col items-center h-screen"
        >
          <HeaderProfile
            handleClick={handleClick}
            closeButton={false}
            text={nut.name}
            showConfig={false}
          />
          <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
          <div className="flex flex-col items-center flex-1 ">

            <div className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl mt-20  pb-6 md:rounded-3xl md:flex-0 md:mb-6">
              <div className="absolute -top-8 flex justify-center items-center w-16 h-16 rounded-full bg-lima-100  shadow-custom ">
                <UserSVG fill="white" />
              </div>
              <div className="w-full flex justify-evenly pt-16 ">
                <div className="w-full flex justify-center flex-wrap gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <EmailSVG />
                    <p className="text-heading-sm font-bold font-DMsans">
                      {nut.email}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <PhoneSVG className=" font-bold h-5" fill="black" />
                    <p className="text-heading-sm font-bold font-DMsans">
                      {nut.phone}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <UbicationSVG />
                    <p className="text-heading-sm font-bold font-DMsans">
                      {nut.residence}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full mt-6">
                <h3 className="text-heading-md font-DMsans font-bold">
                  {" "}
                  Información{" "}
                </h3>
                <p className="font-DMsans font-normal text-heading-sm text-gray-500 mt-3">
                  {nut.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NutritionCard;
