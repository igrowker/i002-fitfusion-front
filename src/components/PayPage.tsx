import HeaderProfile from "./HeaderProfile";
import { Classes } from "../types/classesTypes";
import GreenButton from "./GreenButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterForm } from "../types/formTypes";
import ErrorMessage from "./ErrorMessage";


type PayPageProps = {
  item: Classes[];
  setItem: React.Dispatch<React.SetStateAction<Classes[]>>;
};

export const PayPage = ({ item, setItem }: PayPageProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setItem([]);
  };

  const { register, handleSubmit, formState } = useForm<RegisterForm>();
  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  const [classConfirmed, setclassConfirmed] = useState<Classes[]>([]);

  const handleConfirm = () => {
    setclassConfirmed(item);
    navigate("/profile");
  };

  console.log(item);
  console.log(classConfirmed);



  return (
    <>
      <div className="flex flex-col items-center ">
        
          <HeaderProfile
            closeButton={false}
            text={"Pagina de pago"}
            showConfig={false}
            handleClick={handleClick}
          />
      

        {item.map((clase) => (
          <>
            <div className="flex flex-col justify-center items-center text-center w-full text-black bg-lima-100 py-6 mt-8">
              <p className=" font-bold text-heading font-lato min-[566px]:max-w-xl text-center px-6 ">
                Estas a punto de reservar la clase "{clase.title}" con el
                profesor {clase.instructor.name}
              </p>
            </div>

      
          </>
        ))}

        <div className="w-full bg-black-bg py-10 flex flex-col items-center">
        <p className=" mt-8 font-bold text-heading font-lato min-[566px]:max-w-xl text-center px-6 text-white">
              De querer realizar tu pago te pedimos los siguientes datos:
            </p>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-y-4 min-[566px]:max-w-xl py-6"
      >
        <div className="w-full px-6">
          <label className="text-gray-500" htmlFor="name">
            Nombre Titular de la Tarjeta
          </label>
          <input
            className={`rounded w-full  p-2 text-black border-spacing-1 ${
              formState.errors.name && " outline-[#F73B3B]"
            }`}
            type="text"
            placeholder="Nombre"
            id="name"
            {...register("name", {
              required: "El nombre es requerido",
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
            })}
          />
          {formState.errors.name && (
            <ErrorMessage>{formState.errors.name.message}</ErrorMessage>
          )}
        </div>

        <div className="w-full px-6">
          <label className="text-gray-500" htmlFor="password">
            Numero de Tarjeta
          </label>
          <input
            className={`rounded w-full  p-2 text-black border-spacing-1 ${
              formState.errors.password && " outline-[#F73B3B]"
            }`}
            type="password"
            placeholder="Contraseña"
            id="password"
            {...register("password", {
              required: "La contraseña es requerida",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            })}
          />
          {formState.errors.password && (
            <ErrorMessage>{formState.errors.password.message}</ErrorMessage>
          )}
        </div>


        <div className="w-full px-6">
          <label className="text-gray-500" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className={`rounded w-full  p-2 text-black border-spacing-1 ${
              formState.errors.email && " outline-[#F73B3B]"
            }`}
            type="email"
            placeholder="Correo Electrónico"
            id="email"
            {...register("email", {
              required: "El correo es requerido",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "El correo no es válido",
              },
            })}
          />
          {formState.errors.email && (
            <ErrorMessage>{formState.errors.email.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col items-center gap-y-4 w-full px-6">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-x-1">
              <input
                className="w-6 h-6 accent-lima-200"
                type="checkbox"
                id="terms"
                {...register("terms", {
                  required: "Debes aceptar las políticas de privacidad",
                })}
              />
              <label
                className="text-lima-100 text-heading-sm font-bold"
                htmlFor="terms"
              >
                Acepto las políticas de privacidad
              </label>
              {formState.errors.terms && (
                <ErrorMessage>{formState.errors.terms.message}</ErrorMessage>
              )}
            </div>
          </div>

        </div>
        
        <GreenButton text="Confirmar clase" handleClick={handleConfirm} />
      
      </form>
      </div>
      </div>
  
    </>
  );
};

export default PayPage;
