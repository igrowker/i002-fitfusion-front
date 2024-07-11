// import { useState } from "react";
import { HeaderProfile } from "../../components";
// import { Classes } from "../../types/classesTypes";
import {
  CornerCirclesSVG,
  DumbbellSVG,
  HeartSVG,
  LightingSVG,
  RightArrowSVG,
} from "../../icons";
import { UserSVG } from "../../icons/UserSVG";
import { useNavigate } from "react-router-dom";

export const ClassDetails = () => {
  const navigate = useNavigate();

  // const [classInfo, setClassInfo] = useState<Classes>({
  //   id: 1,
  //   title: "Funcional",
  //   description: "Clase de una hora en la que trabajarás todo tu cuerpo",
  //   image:
  //     "https://plus.unsplash.com/premium_photo-1663039803597-2c24cbebf1c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   instructor: {
  //     id: 1,
  //     user_id: 1,
  //     name: "John Doe",
  //     bio: "Entrenador Funcional Certificado con 5 años de experiencia.",
  //     professional_title: "Entrenador Funcional Certificado",
  //     years_experience: "5 años",
  //     class_type: "Entrenamiento Funcional",
  //   },
  //   level: "Fuerte",
  //   type: "En gimnasio",
  //   status: "Disponible",
  //   length: "",
  //   calories: "",
  //   hour: "",
  //   kcal: 300,
  // });

  const classInfo = {
      id: 1,
      title: "Funcional",
      description: "Clase de una hora en la que trabajarás todo tu cuerpo",
      image:
        "https://plus.unsplash.com/premium_photo-1663039803597-2c24cbebf1c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        id: 1,
        user_id: 1,
        name: "John Doe",
        bio: "Entrenador Funcional Certificado con 5 años de experiencia.",
        professional_title: "Entrenador Funcional Certificado",
        years_experience: "5 años",
        class_type: "Entrenamiento Funcional",
      },
      level: "Fuerte",
      type: "En gimnasio",
      status: "Disponible",
      length: "",
      calories: "",
      hour: "",
      kcal: 300,
    }

  const handleClick = (to: string) => {
    navigate(`${to}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-lima-100/60 h-screen bg-cover bg-center flex flex-col md:bg-lima-100">
      <HeaderProfile
        handleClick={handleBack}
        closeButton={false}
        text={classInfo.title}
        showConfig={false}
      />
      <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
      <div className="flex flex-col items-center flex-1">
        <div className="w-40 h-40 rounded-full overflow-hidden mt-7 mb-16">
          <img
            className="w-full h-full object-cover"
            src={classInfo.image}
            alt="Imagen de la clase"
          />
        </div>
        <div
          id="prueba"
          className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 md:max-h-96"
        >
          <div className="absolute -top-8 flex justify-center items-center w-16 h-16 rounded-full bg-lima-100  shadow-custom">
            <UserSVG fill="white" />
          </div>
          <div className="w-full flex justify-evenly pt-16">
            <div className=" flex flex-col items-center justify-between">
              <HeartSVG width={24} height={24} />
              <p className="text-heading-sm font-bold font-DMsans">
                {classInfo.title}
              </p>
            </div>
            <div className=" flex flex-col items-center justify-between">
              <DumbbellSVG width={24} height={24} />
              <p className="text-heading-sm font-bold font-DMsans">
                {classInfo.title}
              </p>
            </div>
            <div className=" flex flex-col items-center justify-between">
              <LightingSVG width={24} height={24} />
              <p className="text-heading-sm font-bold font-DMsans">
                {classInfo.title}
              </p>
            </div>
          </div>
          <button
            className="bg-lima-100 text-black font-lato text-heading font-bold rounded-xl w-full py-2 max-w-4xl mt-5"
            onClick={() => handleClick("/calendar")}
          >
            {" "}
            Ver calendario
          </button>
          <div className="w-full my-6">
            <h3 className="text-heading-md font-DMsans font-bold">
              {" "}
              Información{" "}
            </h3>
            <p className="font-DMsans font-normal text-heading-sm text-gray-500 mt-3">
              {classInfo.description}
            </p>

            {/* Pendiente de definir estilos */}
            <div
              className="flex items-center flex-row justify-between pt-6"
              onClick={() => handleClick("/trainer-profile")}
            >
              <p className=" font-lato text-heading">Conoce al Entrenador: <span className="font-bold text-[18px] "> {classInfo.instructor.name}</span></p>
              <RightArrowSVG width={36} height={36} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
