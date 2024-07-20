import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(() => { 
    
    const token = Cookies.get('authToken');
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

