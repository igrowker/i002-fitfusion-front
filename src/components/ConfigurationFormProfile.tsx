import { CloseButtonProfileSVG } from "../icons";
import { PencilSVG } from "../icons/PencilSVG";
import { User } from "../types";
import ErrorMessage from "./ErrorMessage";
import RedButton from "./RedButton";

import { useForm } from "react-hook-form";

type ConfigurationFormProfileProps = {
  editing: () => void;
  data: User;
};

export const ConfigurationFormProfile = ({
  editing,
  data,
}: ConfigurationFormProfileProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ defaultValues: data });

  const onSubmit = (data: User) => console.log(data);

  return (
    <>
      <div className=" flex flex-row justify-between items-center pt-14 px-6 ">
        <p className=" font-bold text-base text-black font-lato">
          Editar Perfil
        </p>
        <button
          className="min-h-14 min-w-14 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer"
          onClick={editing}
        >
          <CloseButtonProfileSVG />
        </button>
      </div>
      <div className=" flex flex-col items-center mb-10">
        <div className=" relative ">
          <img className=" rounded-full bg-cover w-32 h-32 bg-[url('/profile.jfif')] mt-5 bg-center" />

          <div className=" rounded-full bg-lima-100 border-2 h-9 w-9 absolute right-0 bottom-0 flex items-center justify-center">
            <PencilSVG />
          </div>
        </div>

        <p className=" font-bold text-[24px] text-black mt-4 font-lato">
          Jordi Garcia Ferre
        </p>
      </div>

      <form
        className="space-y-5 rounded-l px-6"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5 space-y-3">
          <label
            className="font-lato font-black text-heading-sm text-gray-500"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Cambiar Nombre"
            className="w-full p-3  border border-gray-100 rounded-lg"
            {...register("name", {})}
          />
        </div>

        <div className="mb-5 space-y-3">
          <label
            className="font-lato font-black text-heading-sm text-gray-500"
            htmlFor="residence"
          >
            Ubicacion
          </label>
          <input
            id="residence"
            type="text"
            placeholder="Cambiar ubicacion"
            className="w-full p-3  border border-gray-100 rounded-lg"
            {...register("residence", {})}
          />
        </div>

        <div className="mb-5 space-y-3">
          <label
            className="font-lato font-black text-heading-sm text-gray-500"
            htmlFor="age"
          >
            Edad
          </label>
          <input
            id="age"
            type="number"
            placeholder="Cambiar Edad"
            className="w-full p-3  border border-gray-100 rounded-lg"
            {...register("age", {
              pattern: {
                value: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
                message: "No es una edad permitida",
              },
            })}
          />
          {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
        </div>

        <div className="mb-5 space-y-3">
          <label
            className="font-lato font-black text-heading-sm text-gray-500"
            htmlFor="weight"
          >
            Peso
          </label>
          <input
            id="weight"
            type="number"
            placeholder="Cambiar Peso"
            className="w-full p-3  border border-gray-100 rounded-lg"
            {...register("weight", {})}
          />
        </div>

        <div className="mb-5 space-y-3">
          <label
            className="font-lato font-black text-heading-sm text-gray-500"
            htmlFor="height"
          >
            Altura
          </label>
          <input
            id="height"
            type="number"
            placeholder="Cambiar Altura"
            className="w-full p-3  border border-gray-100 rounded-lg"
            {...register("height", {})}
          />
        </div>

        <div className="mb-5 space-y-3">
          <label
            className="font-lato font-black text-heading-sm text-gray-500"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Cambiar Email"
            className="w-full p-3  border border-gray-100 rounded-lg"
            {...register("email", {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div className="mb-5 space-y-3">
          <label
            className="font-lato font-black text-heading-sm text-gray-500"
            htmlFor="current_password"
          >
            Cambiar Password
          </label>
          <input
            id="current_password"
            type="password"
            placeholder="Password Actual"
            className="w-full p-3  border border-gray-100 rounded-lg"
          />
        </div>

        <div className="mb-5 space-y-3">
          <input
            id="password"
            type="password"
            placeholder="Nuevo Password"
            className="w-full p-3  border border-gray-100 rounded-lg"
            {...register("password", {
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                message:
                  "El Password debe contener al menos 8 caracteres, numeros y letras",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>
        <div className="mb-5 space-y-3">
          <input
            id="password_confirmation"
            type="password"
            placeholder="Repetir Nuevo Password"
            className="w-full p-3  border border-gray-100 rounded-lg"
          />
        </div>

        <input
          type="submit"
          value="Guardar Cambios"
          className="bg-[#C1FF72] rounded-xl w-[327px] h-[64px] font-lato text-heading font-bold"
        />
      </form>

      <RedButton text={"Eliminar cuenta"} />
    </>
  );
};

export default ConfigurationFormProfile;
