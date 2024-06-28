import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <h1 className="text-center text-white font-bold"> Aca va el footer</h1>
    </>
  );
};

export default Layout;
