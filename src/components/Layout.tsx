
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div >
        <h1 className="text-center text-white font-bold" > Aca va el Header </h1>
        <br/>
        <br/>
        <Outlet />
        <br/>
        <br/>
        <h1 className="text-center text-white font-bold" > Aca va el footer</h1>
    </div>
  )
}

export default Layout