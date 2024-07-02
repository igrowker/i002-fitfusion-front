import {
  CloseButtonProfileSVG,
  ColonSVG,
  DumbbellSVG,
  HeartSVG,
  LightingSVG,
} from "../../icons";
import coachImage from "../../assets/coach-img.jpg";
import { UserSVG } from "../../icons/UserSVG";

export const TrainerProfilePage = () => {
  return (
    <div className="bg-lima-100/60 flex flex-col items-center gap-y-6 h-screen">
      <div className="container pt-12 px-6">
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center h-12 w-12 border border-gray-500 rounded-full">
            <CloseButtonProfileSVG />
          </div>
          <h1 className="text-heading-sm font-DMsans font-bold  ">
            Martín Torres Lugo
          </h1>
          <div className="flex justify-center items-center h-12 w-12 border border-gray-500 rounded-full">
            <ColonSVG />
          </div>
        </div>
      </div>
      <div className="mb-8">
        <img className="rounded-full w-32 h-32" src={coachImage} alt="" />
      </div>
      <div className="bg-white rounded-t-[2.5rem] w-full flex flex-col gap-y-6 justify-center items-center px-4 h-screen">
        <div className="w-16 h-16 bg-lima-100 rounded-full flex justify-center items-center -mt-6 shadow-lg lg:-mt-24">
          <UserSVG className="text-white" />
        </div>
        <div className="w-full flex justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <HeartSVG className="w-6 h-6" />
            <p className="text-heading-sm font-bold font-DMsans">Funcional</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <DumbbellSVG />
            <p className="text-heading-sm font-bold font-DMsans">Entrenador</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <LightingSVG />
            <p className="text-heading-sm font-bold font-DMsans">Strong</p>
          </div>
        </div>

        <button className="bg-lima-100 text-black font-lato text-heading font-bold rounded-xl w-full py-2 max-w-4xl">
          Ver calendario
        </button>

        <div className="flex flex-col items-center gap-y-6">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-heading-md font-DMsans font-bold">
              Información
            </h3>
            <ColonSVG className="text-gray-500" />
          </div>
          <p>
            Shift stubborn body fat and build muscle with this total-body
            workout
          </p>
          <p>
            If you're an experienced gym-goer hitting the weights room for long
            sessions several times a week, the chances are you have a structured
            training plan that targets different areas of the body with each
            workout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfilePage;
