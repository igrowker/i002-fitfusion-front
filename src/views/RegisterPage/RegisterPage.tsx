import { useForm } from "react-hook-form";
import { RegisterForm } from "../../types/formTypes";
import ErrorMessage from "../../components/ErrorMessage";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const { register, handleSubmit, formState } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 max-w-lg h-full">
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
            className="rounded w-full p-2 text-black"
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
            className="rounded w-full p-2 text-black"
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
            className="rounded w-full p-2 text-black"
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
    </div>
  );
};

export default RegisterPage;
