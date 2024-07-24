import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";

export const AuthLayout = () => {
  return (
    <div className="bg-black-bg text-white px-6 h-full flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center mb-16">
        <img className="mb-6" src={logo} alt="Logo" />

        <h1 className="font-lato font-extrabold italic text-heading-xl">
          FITFUSION
        </h1>
        <p className="font-lato text-heading-sm">
          A TU RITMO, EN DONDE QUIERAS
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
