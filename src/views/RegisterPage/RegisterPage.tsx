import { useForm } from "react-hook-form";
import { RegisterForm } from "../../types/formTypes";
import ErrorMessage from "../../components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { apiCall } from "../../services/apiCall";
import { createErrorToast, createSuccessToast } from "../../services/toastCreation";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";
import { Spinner } from "../../components";

export const RegisterPage = () => {
  const [appStatus , setAppStatus] = useState<AppStatusType>(APP_STATUS.IDLE)
  const navigate = useNavigate()
  const { register, handleSubmit, formState , watch } = useForm<RegisterForm>();

  const password = watch('password');

  const onSubmit = (data: RegisterForm) => {
    setAppStatus(APP_STATUS.LOADING)
    const body = { name : data.name, email : data.email , password : data.password, rolId : 2 }

    apiCall({ url : '/auth/register' , method :  'POST', body } )
    .then((res) => {
      // dejo el log para que haga el build
      if (res.ok) {
        const notify = createSuccessToast({ 
          message : 'El usuario se creo con exito, ya puedes hacer el login.',
          onClose : () => navigate('/auth/login')
        })
          
        notify()
      } else {
        return res.json()
      }
    })
    .then(data => {
      if(data.message === 'El correo electrónico ya está registrado.') {
        const notify = createErrorToast({ 
          message : data.message,
        })
        notify()
      }
    })
    .catch(error => console.log(error))
    .finally(() => setAppStatus(APP_STATUS.READY_USAGE))
  };  

  const handlePrivacyClick = () => {
    navigate('/privacy-policy')
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 max-w-lg h-full">
      {appStatus=== APP_STATUS.LOADING && <Spinner /> }
      <p className="text-center">Registrate y comienza a cambiar tu rutina</p>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-y-4 w-full"
      >
        <div className="w-full">
          <label className="text-gray-500" htmlFor="name">
            Nombre
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
        <div className="w-full">
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
        <div className="w-full">
          <label className="text-gray-500" htmlFor="password">
            Contraseña
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
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                message:
                  "El Password debe contener al menos 8 caracteres, numeros y letras",
              },
            })}
          />
          {formState.errors.password && (
            <ErrorMessage>{formState.errors.password.message}</ErrorMessage>
          )}
        </div>
        <div className="w-full">
          <label className="text-gray-500" htmlFor="repeatedPassword">
            Repetir Contraseña
          </label>
          <input
            className={`rounded w-full  p-2 text-black border-spacing-1 ${
              formState.errors.repeatedPassword && " outline-[#F73B3B]"
            }`}
            type="password"
            placeholder="Repetir Contraseña"
            id="repeatedPassword"
            {...register("repeatedPassword", {
              required: "La contraseña es requerida",
              validate: value =>
              value === password || "Las contraseñas no coinciden"
            })}
          />
          {formState.errors.repeatedPassword && (
            <ErrorMessage>{formState.errors.repeatedPassword.message}</ErrorMessage>
          )}
        </div>
        <div className="flex flex-col items-center gap-y-4 w-full">
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
                className="text-lima-100 text-heading-sm font-bold cursor-pointer"
                htmlFor="terms"
                onClick={handlePrivacyClick}
              >
                Acepto las políticas de privacidad
              </label>
              {formState.errors.terms && (
                <ErrorMessage>{formState.errors.terms.message}</ErrorMessage>
              )}
            </div>
          </div>
          <button className="bg-lima-100 rounded-lg text-black w-full p-1">
            Registrarme
          </button>
          <p className="text-gray-500 text-heading-sm w-full text-center">
            ¿Ya tienes cuenta?{" "}
            <Link to="/auth/login" className="text-lima-100 text-heading-sm">
              Inicia sesión
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
