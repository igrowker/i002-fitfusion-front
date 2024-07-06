export const RegisterPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 max-w-lg h-full">
      <p className="text-center">
        Registrate y comienza a cambiar tu rutina
      </p>

      <form className="flex flex-col items-center gap-y-4 w-full">
        <div className="w-full">
          <label className="text-gray-500" htmlFor="name">
            Nombre
          </label>
          <input
            className="rounded w-full p-2 text-black"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
        </div>
        <div className="w-full">
          <label className="text-gray-500" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="rounded w-full p-2 text-black"
            type="email"
            name="email"
            id="email"
            placeholder="Correo Electrónico"
          />
        </div>
        <div className="w-full">
          <label className="text-gray-500" htmlFor="password">
            Contraseña
          </label>
          <input
            className="rounded w-full p-2 text-black"
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
          />
        </div>
      </form>

      <div className="flex flex-col items-center gap-y-4 w-full">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-x-1">
            <input className="w-6 h-6 accent-lima-200" type="checkbox" name="terms" id="terms" />
            <label className="text-lima-100 text-heading-sm font-bold" htmlFor="terms">Acepto las políticas de privacidad</label>
          </div>
        </div>
        <button className="bg-lima-100 rounded-lg text-black w-full p-1">Registrarme</button>
        <p className="text-gray-500 text-heading-sm w-full text-center">¿Ya tienes cuenta? <a className="text-lima-100 text-heading-sm">Inicia sesión</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;