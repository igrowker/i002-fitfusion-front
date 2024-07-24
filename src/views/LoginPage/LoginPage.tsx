import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import { LoginForm } from "../../types/formTypes";
import { Link, useNavigate } from "react-router-dom";
import { apiCall } from "../../services/apiCall";
import { ToastContainer } from 'react-toastify';
import { useState } from "react";
import { Spinner } from "../../components";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";
import { createErrorToast } from "../../services/toastCreation";
import Cookies from 'js-cookie';


export const LoginPage = () => {
  const [appStatus , setAppStatus] = useState<AppStatusType>(APP_STATUS.IDLE)
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    setAppStatus(APP_STATUS.LOADING)
    apiCall({ url: "/auth/login", method: "POST", body: data })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // guardar datos del usuario en redux?
        setAppStatus(APP_STATUS.READY_USAGE)
        if(data.message === 'Credenciales inválidas.') {
          const notify = createErrorToast({ message : 'Ocurrio un error en el proceso de login.' })

          notify()
          setAppStatus(APP_STATUS.ERROR)
        } else if (data.message === 'Usuario no encontrado.') {
          // const notify = () => toast.error("El usuario no existe, por favor registrate.",
          // {position: "bottom-center",
          // onClose: () => navigate('/auth/register')
          // });
          const notify = createErrorToast({
            message : '"El usuario no existe, por favor registrate.',
            onClose : () => navigate('/auth/register')
          })

          notify()
          setAppStatus(APP_STATUS.ERROR)
        } else {
          Cookies.set('authToken', data.token, { expires: 1, sameSite: 'Strict' });
          localStorage.setItem("userData", JSON.stringify(data));
          navigate("/classes");

        }
      })
      .catch((error) => {
        setAppStatus(APP_STATUS.ERROR)
        console.log(error)
      })
      .finally(()=> {
        reset()
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 max-w-lg h-full">
      {appStatus=== APP_STATUS.LOADING && <Spinner /> }
      <p className="text-center">
        Ingresa tus credenciales para iniciar sesión
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col items-center w-full gap-y-4"
      >
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
        <div className="flex flex-col items-center gap-y-4 w-full">
          {/* <div className="flex justify-between w-full">
            <div className="flex items-center gap-x-1">
              <input
                className="w-6 h-6 accent-lima-200"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label
                className="text-gray-500 text-heading-sm"
                htmlFor="remember"
              >
                Recuérdame
              </label>
            </div>
            <a className="text-lima-100 text-heading-sm" href="#">
              He olvidado mi contraseña
            </a>
          </div> */}
          <button className="bg-lima-100 rounded-lg text-black w-full p-1 mt-3">
            Iniciar sesión
          </button>
          <p className="text-gray-500 text-heading-sm w-full text-center">
            ¿No tienes cuenta?{" "}
            <Link to="/auth/register" className="text-lima-100 text-heading-sm">
              Regístrate
            </Link>
          </p>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default LoginPage;
