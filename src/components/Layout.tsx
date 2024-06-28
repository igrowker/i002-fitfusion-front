import { Outlet } from 'react-router-dom'
import Header from './Header';


const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet />
        <h1 className="text-center text-white font-bold" > Aca va el footer</h1>
    </>
  )
}

export default Layout;
