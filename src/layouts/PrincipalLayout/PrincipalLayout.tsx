import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export const PrincipalLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PrincipalLayout;
