import {
  CornerCirclesSVG,
  DumbbellSVG,
  HeartSVG,
  LightingSVG,
} from "../../icons";
import coachImage from "../../assets/coach-img.jpg";
import { UserSVG } from "../../icons/UserSVG";
import { HeaderProfile } from "../../components";
import { useNavigate } from "react-router-dom";

export const TrainerProfilePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/calendar");
  };

  const handleBack = () => {
    navigate("");
  };

  return (
    <div className="bg-lima-100/60 h-screen bg-cover bg-center flex flex-col md:bg-lima-100">
      <HeaderProfile
        handleClick={handleBack}
        closeButton={false}
        text={"Martín Torres Lugo"}
        showConfig={false}
      />
      <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
      <div className="flex flex-col items-center flex-1">
        <div className="w-40 h-40 rounded-full overflow-hidden mt-7 mb-16">
          <img
            className="w-full h-full object-cover"
            src={coachImage}
            alt="Imagen del profesor"
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
                  Funcional
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <DumbbellSVG />
                <p className="text-heading-sm font-bold font-DMsans">
                  Entrenador
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <LightingSVG />
                <p className="text-heading-sm font-bold font-DMsans">Strong</p>
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
              Shift stubborn body fat and build muscle with this total-body
              workout. If you're an experienced gym-goer hitting the weights
              room for long sessions several times a week, the chances are you
              have a structured training plan that targets different areas of
              the body with each workout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfilePage;
