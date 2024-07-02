import { ColonSVG } from "../icons";
import { ClasesLayout, TeacherBanner } from "./";

export const ClasesProfile = () => {
  return (
    <article className=" flex flex-col items-center mx-6 mb-8">
      <ClasesLayout />
      <div className=" flex flex-row w-full justify-between items-center pt-2 px-6 ">
        <p className=" font-bold text-heading font-lato">
          Comienza a entrenar hoy
        </p>
        <ColonSVG className="text-gray-500" />
      </div>
      <div className=" flex flex-col items-center px-6 mt-8 gap-4">
        <TeacherBanner />
      </div>
    </article>
  );
};

export default ClasesProfile;
