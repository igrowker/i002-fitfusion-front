import { CloseButtonProfileSVG } from "../icons";
import { PencilSVG } from "../icons/PencilSVG";
import { User } from "../types/userTypes";
import ErrorMessage from "./ErrorMessage";
import RedButton from "./RedButton";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiCall } from "../services/apiCall";
import { adaptUserFormat } from "../services/adaptUserFormat";
import { useNavigate } from "react-router-dom";
import { APP_STATUS, AppStatusType } from "../types/generalTypes";
import { Spinner } from ".";
import {
  createErrorToast,
  createSuccessToast,
} from "../services/toastCreation";
import { ToastContainer } from "react-toastify";
import AvatarContainer from "./AvatarContainer";

const ConfigurationFormProfile = (
  {
    // editing,
  }
) => {
  // }: ConfigurationFormProfileProps) => {
  const navigate = useNavigate();
  const [user, setuserEdit] = useState<User | undefined>();
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.LOADING);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [editAvatar, setEditAvatar] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<User>({ defaultValues: user });

  useEffect(() => {
    setAppStatus(APP_STATUS.LOADING);
    apiCall({ url: `/users/me`, method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const adaptedUsers = adaptUserFormat(data);
        setuserEdit(adaptedUsers);
        reset(adaptedUsers);
        if (profileImage === null || profileImage === undefined) {
          setProfileImage(adaptedUsers.image);
        }
        setAppStatus(APP_STATUS.READY_USAGE);
      })
      .catch((error) => {
        console.log(error);
        setAppStatus(APP_STATUS.ERROR);
      });
  }, []);

  const onSubmit = (data: User) => {
    setAppStatus(APP_STATUS.LOADING);

    const body = {
      Name: data.name,
      Email: data.email,
      Age: data.age,
      Residence: data.residence,
      Weight: data.weight,
      Height: data.height,
      Password: data.current_password?.trim(),
      NewPassword: data.new_password?.trim(),
      Image : profileImage,
      teacherInfo: {},
    };
    apiCall({ url: `/users/me`, method: "PUT", body })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message === "User updated successfully") {
          const adaptedUsers = adaptUserFormat(data.user);
          setuserEdit(adaptedUsers);
          const notify = createSuccessToast({
            message: "Los datos se actualizaron con éxito",
          });
          notify();
          reset(adaptedUsers);
        } else if (data?.errors?.length > 0) {
          const notify = createErrorToast({
            message: "Completa todos los datos por favor",
          });
          notify();
        }

        setAppStatus(APP_STATUS.READY_USAGE);
      })
      .catch((error) => {
        const notify = createErrorToast({
          message: "Ocurrio un error al actualizar los datos",
        });
        notify();
        console.log(error);
      });
  };

  // const password = watch("new_password");
  const current_password = watch("current_password");
  const new_password = watch("new_password");

  const handleEditAvatar = () => {
    setEditAvatar((prev) => !prev);
  };

  const setImage = (data: string) => {
    setProfileImage(data);
  };

  return (
    <>
      <nav
        className={`${
          !editAvatar ? "w-0 hidden" : " block w-[100vw]"
        } flex felx-col fixed top-0 left-0 bottom-0  justify-center  bg-white z-[60] overflow-x-hidden origin-left duration-500 px-6`}
      >
        <AvatarContainer setEditAvatar={handleEditAvatar} setImage={setImage} />
      </nav>

      <div className="min-[566px]:max-w-xl flex flex-col justify-between m-auto">
        {/* <ToastContainer /> */}
        {appStatus === APP_STATUS.LOADING ? (
          <Spinner />
        ) : (
          <>
            <ToastContainer />
            <div className=" flex flex-row justify-between items-center pt-14 px-6 ">
              <p className=" font-bold text-base text-black font-lato">
                Editar Perfil
              </p>
              <button
                className="min-h-14 min-w-14 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer"
                // onClick={editing}
                onClick={() => navigate("/profile")}
              >
                <CloseButtonProfileSVG />
              </button>
            </div>
            <div className=" flex flex-col items-center mb-10">
              <div
                className=" relative cursor-pointer "
                onClick={() => handleEditAvatar()}
              >
                <img
                  src={profileImage || user?.image || "/avatarnone.png"}
                  alt="Imagen de perfil de usuario"
                  className=" rounded-full bg-cover w-32 h-32  mt-5 bg-center"
                />

                <div className=" rounded-full bg-lima-100 border-2 h-9 w-9 absolute right-0 bottom-0 flex items-center justify-center">
                  <PencilSVG />
                </div>
              </div>

              <p className=" font-bold text-[24px] text-black mt-4 font-lato">
                {user?.name}
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
                  className={`w-full p-3  border border-gray-100 rounded-lg ${
                    errors.name && " outline-[#F73B3B]"
                  }`}
                  {...register("name", {
                    required: "El campo es requerido",
                    pattern: {
                      value: /^([a-zA-Z0-9_\s]+).{2,}$/,
                      message: "No es un nombre permitido",
                    },
                  })}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </div>

              <div className="mb-5 space-y-3">
                <label
                  className="font-lato font-black text-heading-sm text-gray-500"
                  htmlFor="residence"
                >
                  Ubicación
                </label>
                <input
                  id="residence"
                  type="text"
                  placeholder="Cambiar ubicación"
                  className={`w-full p-3  border border-gray-100 rounded-lg ${
                    errors.residence && " outline-[#F73B3B]"
                  }`}
                  {...register("residence", {
                    required: "El campo es requerido",
                    pattern: {
                      value: /^([a-zA-Z0-9_\s]+).{2,}$/,
                      message: "No es una ubicacion permitida",
                    },
                  })}
                />
                {errors.residence && (
                  <ErrorMessage>{errors.residence.message}</ErrorMessage>
                )}
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
                  className={`w-full p-3  border border-gray-100 rounded-lg ${
                    errors.age && " outline-[#F73B3B]"
                  }`}
                  {...register("age", {
                    required: "El campo es requerido",
                    pattern: {
                      value: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
                      message: "No es una edad permitida",
                    },
                  })}
                />
                {errors.age && (
                  <ErrorMessage>{errors.age.message}</ErrorMessage>
                )}
              </div>

              <div className="mb-5 space-y-3">
                <label
                  className="font-lato font-black text-heading-sm text-gray-500"
                  htmlFor="weight"
                >
                  Peso (kg)
                </label>
                <input
                  id="weight"
                  type="number"
                  placeholder="Cambiar Peso"
                  className={`w-full p-3  border border-gray-100 rounded-lg ${
                    errors.weight && " outline-[#F73B3B]"
                  }`}
                  {...register("weight", {
                    required: "El campo es requerido",
                    pattern: {
                      value:
                        /^(0?[1-9]|[1-9][0-9]|1[1-9][1-9]|200)(\.\d{1,2})?$/,
                      message: "No es un peso permitido",
                    },
                  })}
                />
                {errors.weight && (
                  <ErrorMessage>{errors.weight.message}</ErrorMessage>
                )}
              </div>

              <div className="mb-5 space-y-3">
                <label
                  className="font-lato font-black text-heading-sm text-gray-500"
                  htmlFor="height"
                >
                  Altura (m)
                </label>
                <input
                  id="height"
                  type="number"
                  placeholder="Cambiar Altura"
                  className={`w-full p-3  border border-gray-100 rounded-lg ${
                    errors.height && " outline-[#F73B3B]"
                  }`}
                  {...register("height", {
                    required: "El campo es requerido",
                    pattern: {
                      value:
                        /^(0?[1-9]|[1-9][0-9]|1[1-9][1-9]|200)(\.\d{1,2})?$/,
                      message: "No es una altura permitida",
                    },
                  })}
                />
                {errors.height && (
                  <ErrorMessage>{errors.height.message}</ErrorMessage>
                )}
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
                  className={`w-full p-3  border border-gray-100 rounded-lg ${
                    errors.email && " outline-[#F73B3B]"
                  }`}
                  {...register("email", {
                    required: "El campo es requerido",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "E-mail no válido",
                    },
                  })}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </div>

              <div className="mb-5 space-y-3">
                <label
                  className="font-lato font-black text-heading-sm text-gray-500"
                  htmlFor="current_password"
                >
                  Password
                </label>
                <input
                  id="current_password"
                  type="password"
                  placeholder="Password Actual"
                  className={`w-full p-3  border border-gray-100 rounded-lg ${
                    errors.current_password && " outline-[#F73B3B]"
                  }`}
                  {...register("current_password", {
                    required: "El password actual es obligatorio",
                  })}
                />
                {errors.current_password && (
                  <ErrorMessage>{errors.current_password.message}</ErrorMessage>
                )}
              </div>

              <div className="mb-5 space-y-3">
                <label
                  className="font-lato font-black text-heading-sm text-gray-500"
                  htmlFor="current_password"
                >
                  Cambiar Password
                </label>
                <input
                  id="new_password"
                  type="password"
                  placeholder="Nuevo Password"
                  className={`w-full p-3  border border-gray-100 rounded-lg ${
                    errors.new_password && " outline-[#F73B3B]"
                  }`}
                  {...register("new_password", {
                    validate: (value) =>
                      value !== current_password ||
                      "El Password no puede ser igual al actual...",
                    pattern: {
                      value: /^(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                      message:
                        "El Password debe contener al menos 8 caracteres, numeros y letras",
                    },
                  })}
                />
                {errors.new_password && (
                  <ErrorMessage>{errors.new_password.message}</ErrorMessage>
                )}
              </div>

              {new_password && (
                <div className="mb-5 space-y-3">
                  <label
                    className="font-lato font-black text-heading-sm text-gray-500"
                    htmlFor="current_password"
                  >
                    Repetir Nuevo Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Repetir Nuevo Password"
                    className={`w-full p-3  border border-gray-100 rounded-lg ${
                      errors.password && " outline-[#F73B3B]"
                    }`}
                    {...register("password", {
                      validate: (value) =>
                        value !== new_password && "El Password no coincide...",
                      required: "El password actual es obligatorio",
                    })}
                  />

                  {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                  )}
                </div>
              )}

              <input
                type="submit"
                value="Guardar Cambios"
                className=" cursor-pointer bg-[#C1FF72] rounded-xl w-[327px] h-[64px] font-lato text-heading font-bold min-[566px]:w-full"
              />
            </form>

            <RedButton
              onClick={() => navigate("/deleteAccount")}
              text={"Eliminar cuenta"}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ConfigurationFormProfile;
