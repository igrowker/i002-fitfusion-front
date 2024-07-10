import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";

type LoginForm = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { register, handleSubmit, formState } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 max-w-lg h-full">
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
            className="rounded w-full p-2 text-black"
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
            className="rounded w-full p-2 text-black"
            type="password"
            placeholder="Contraseña"
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
        <div className="flex flex-col items-center gap-y-4 w-full">
          <div className="flex justify-between w-full">
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
          </div>
          <button className="bg-lima-100 rounded-lg text-black w-full p-1">
            Iniciar sesión
          </button>
          <p className="text-gray-500 text-heading-sm w-full text-center">
            ¿No tienes cuenta?{" "}
            <a className="text-lima-100 text-heading-sm">Regístrate</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
