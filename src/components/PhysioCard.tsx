import { useNavigate } from "react-router-dom";
import { CornerCirclesSVG } from "../icons";
import { UserSVG } from "../icons/UserSVG";
import { Nutritionist } from "../types";
import HeaderProfile from "./HeaderProfile";
import { UbicationSVG } from "../icons/UbicationSVG";
import { PhoneSVG } from "../icons/PhoneSVG";
import { EmailSVG } from "../icons/EmailSVG";

type PhysioCardProps = {
  item: Nutritionist[];
  setItem: React.Dispatch<React.SetStateAction<Nutritionist[]>>;
};

export const PhysioCard = ({ item, setItem }: PhysioCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setItem([]);
    navigate("/physiotherapist");
  };
  return (
    <>
      {item.map((nut) => (
        <div
          key={nut.id}
          className="bg-lima-100/60 h-screen bg-cover bg-center flex flex-col md:bg-lima-100"
        >
          <HeaderProfile
            handleClick={handleClick}
            closeButton={false}
            text={nut.name}
            showConfig={false}
          />
          <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
          <div className="flex flex-col items-center flex-1">
            <div className="w-40 h-40 rounded-full overflow-hidden mt-7 mb-16">
              <img
                className="w-full h-full object-cover"
                src={nut.image}
                alt={nut.name}
              />
            </div>
            <div className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 md:max-h-96">
              <div className="absolute -top-8 flex justify-center items-center w-16 h-16 rounded-full bg-lima-100  shadow-custom">
                <UserSVG fill="white" />
              </div>
              <div className="w-full flex justify-evenly pt-16">
                <div className="w-full flex justify-evenly">
                  <div className="flex flex-col items-center justify-center">
                   <EmailSVG/>
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

              <div className="w-full my-6">
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

export default PhysioCard;