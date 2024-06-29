import { Outlet } from "react-router-dom";
import { Footer } from ".";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
