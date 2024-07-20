import { Link } from "react-router-dom";
import landingImg from "../../assets/landing-img.png";
import {
  WeightLiftingSVG,
  CirclesSVG,
  DinnerSVG,
  HealingSVG,
  DumbbellSVG,
  FisioSVG,
} from "../../icons";

export const HomePage = () => {
  return (
    <div className="bg-black-bg bg-pattern bg-no-repeat bg-cover">
      <div className=" flex flex-col justify-center gap-y-8 text-center items-center py-4 px-8 md:z-30">
        <div className="flex flex-col items-center text-white gap-y-4">
          <h1 className="text-heading-xl font-lato font-bold">
            REVOLUCIONA TU FORMA DE ENTRENAR
          </h1>
          <p className="text-heading font-normal font-lato">
          ¡Clases personalizadas y apoyo profesional desde donde quieras!
          </p>
        </div>
        <Link to="/auth/" className=" md:z-30">
          <button className="bg-lima-100 text-black rounded-2xl px-12 py-2 font-semibold md:z-30 md:text-heading-md">
            Empieza gratis
          </button>
        </Link>
      </div>
      <div className="relative h-[380px] w-full z-30 mt-8 md:z-0 md:mt-40">
        <img
          className="absolute right-0 max-w-80 z-30 md:max-w-lg md:bottom-10 md:z-0"
          src={landingImg}
          alt="Landing image"
        />
        <CirclesSVG className="text-lima-100" />
        <div className="w-full -skew-y-6 md:-skew-y-3 h-24 bg-lima-100 absolute bottom-0 z-50"></div>
      </div>
      <div className=" flex flex-col gap-y-8 text-center items-center py-24 px-8">
        <p className="text-white font-normal text-heading-md md:max-w-4xl">
          FitFusion elimina las barreras de desplazamiento, tiempo y ansiedad
          proporcionando clases adaptadas a tus necesidades, desde donde te
          sientas más cómodo. Con entrenadores certificados, fisioterapeutas y
          nutricionistas, te ofrecemos una guía integral para alcanzar tus
          objetivos de fitness.
        </p>
      </div>
      <Link to="/auth/">
        <div className="text-center w-full px-8 py-4 text-black bg-lima-100">
          <h2 className="font-lato text-heading-md font-extrabold uppercase">
          ¡Regístrate ahora!
          </h2>
          <p className="font-lato text-heading-md font-normal">
            Y obtén 7 días gratis, vive la experiencia de entrenar con un
            profesional desde donde sea
          </p>
        </div>
      </Link>
      <div className=" flex flex-col  gap-y-4 px-16 py-8 text-white md:flex-row md:justify-center md:flex-wrap md:gap-3">
        <div className="flex gap-x-4 md:gap-1">
          <WeightLiftingSVG className="text-lima-100" />
          <p className="font-lato font-normal text-heading">ENTRENADORES</p>
        </div>
        <div className="flex gap-x-4 md:gap-1">
          <DumbbellSVG className="text-lima-100" />
          <p className="font-lato font-normal text-heading">
            CLASES PERSONALIZADAS
          </p>
        </div>
        <div className="flex gap-x-4 md:gap-1">
          <DinnerSVG className="text-lima-100" />
          <p className="font-lato font-normal text-heading">NUTRICIÓN</p>
        </div>
        <div className="flex gap-x-4 md:gap-1">
          <FisioSVG className="text-lima-100" />
          <p className="font-lato font-normal text-heading">FISIOTERAPIA</p>
        </div>
        <div className="flex gap-x-4 md:gap-1">
          <HealingSVG className="text-lima-100" />
          <p className="font-lato font-normal text-heading">REHABILITACIÓN</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
