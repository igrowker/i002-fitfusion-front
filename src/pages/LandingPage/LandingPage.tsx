import logo from "../../assets/faviconff.png";
import landingImg from "../../assets/landing_img.png";
import circles from "../../assets/circles.svg";
import bodyWeight from "../../assets/body-weigth.svg";
import dumbell from "../../assets/dumbell.svg";
import dinner from "../../assets/dinner.svg";
import fisio from "../../assets/fisio.svg";
import healing from "../../assets/healing.svg";

const LandingPage = () => {
  return (
    <>
      <div className="container flex flex-col gap-y-8 text-center items-center py-4 px-8">
        <img src={logo} alt="" width={78} height={61} />
        <div className="flex flex-col items-center text-white gap-y-4">
          <h1 className="text-heading-xl font-lato font-bold">
            REVOLUCIONA TU FORMA DE ENTRENAR
          </h1>
          <p className="text-heading font-normal font-lato">
            Clases personalizadas y apoyo profesional desde donde quieras!
          </p>
        </div>
        <button className="bg-lima-100 text-black rounded-2xl px-12 py-2 font-semibold">
          Empieza gratis
        </button>
      </div>
      <div className="relative h-[380px] w-full z-30 mt-8">
        <img
          className="absolute right-0 max-w-80 z-30"
          src={landingImg}
          alt=""
        />
        <img className="absolute left-0" src={circles} alt="" />
        <div className="w-full -skew-y-6 h-24 bg-lima-100 absolute bottom-0  z-50"></div>
      </div>
      <div className="container flex flex-col gap-y-8 text-center items-center py-8 px-8">
        <p className="text-white font-normal text-heading-md">
          FitFusion elimina las barreras de desplazamiento, tiempo y ansiedad
          proporcionando clases adaptadas a tus necesidades, desde donde te
          sientas más cómodo. Con entrenadores certificados, fisioterapeutas y
          nutricionistas, te ofrecemos una guía integral para alcanzar tus
          objetivos de fitness.
        </p>
      </div>
      <div className="text-center w-full px-8 py-4 text-black bg-lima-100">
        <h2 className="font-lato text-heading-md font-extrabold">
          ¡REGISTRATE AHORA!
        </h2>
        <p className="font-lato text-heading-md font-normal">
          Y obtén 7 días gratis, vive la experiencia de entrenar con un
          profesional desde donde sea
        </p>
      </div>

      <div className="container flex flex-col gap-y-4 px-16 py-8 text-white">
        <div className="flex gap-x-4">
          <img src={bodyWeight} alt="" />
          <p className="font-lato font-normal text-heading">ENTRENADORES</p>
        </div>
        <div className="flex gap-x-4">
          <img src={dumbell} alt="" />
          <p className="font-lato font-normal text-heading">
            CLASES PERSONALIZADAS
          </p>
        </div>
        <div className="flex gap-x-4">
          <img src={dinner} alt="" />
          <p className="font-lato font-normal text-heading">NUTRICIÓN</p>
        </div>
        <div className="flex gap-x-4">
          <img src={fisio} alt="" />
          <p className="font-lato font-normal text-heading">FISIOTERAPIA</p>
        </div>
        <div className="flex gap-x-4">
          <img src={healing} alt="" />
          <p className="font-lato font-normal text-heading">REHABILITACIÓN</p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
