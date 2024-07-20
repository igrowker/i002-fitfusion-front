import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(() => { 
    
    const token = localStorage.getItem('token')
    console.log('location' , location , token)

    if(!token) {
      navigate('/auth/login')
    }

  }, [location])
  
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;

