import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="border-2 border-white">
      <h1 className="text-white">Auth Layout</h1>
      <Outlet />
      <h1 className="text-white">Auth Layout</h1>
    </div>
  );
};

export default AuthLayout;
