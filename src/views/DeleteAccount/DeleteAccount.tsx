

import { useState } from 'react'
import RedButton from '../../components/RedButton'
import { getLocalSUserInfo } from '../../services/handleLocalStorage'
import { apiCall } from '../../services/apiCall'
import GreenButton from '../../components/GreenButton'
import { useNavigate } from 'react-router-dom'
import { CornerCirclesSVG } from '../../icons'
import { HeaderProfile, Spinner } from '../../components'
import { APP_STATUS, AppStatusType } from '../../types/generalTypes'
import { ToastContainer, toast } from 'react-toastify'

export const DeleteAccount = () => {
    const [appStatus , setAppStatus] = useState<AppStatusType>(APP_STATUS.IDLE)
    const navigate = useNavigate()
    const handleDeleteUser = () => {
        setAppStatus(APP_STATUS.LOADING)
        const {userId} = getLocalSUserInfo()
        const body = {userId}
        apiCall({ url: `/users/me/delete`, method: "PUT" , body})
        .then((res) => {

          if(res.ok) {
            localStorage.clear()
            navigate('/auth/register')
          } else {
            const notify = () => toast.error("Ocurrio un error en el proceso de login.",{position: "bottom-center",});
            notify()
            setAppStatus(APP_STATUS.ERROR)
          }
        })
        .catch((error) => {console.log(error)});
      }

  return (
    <div
        className=' h-screen bg-pattern bg-no-repeat bg-lima-100/60 bg-cover flex flex-col  items-center'
    >
      {appStatus=== APP_STATUS.LOADING && <Spinner /> }
      <HeaderProfile
        handleClick={() => navigate(-1)}
        closeButton={false}
        text={'Eliminacion de cuenta'}
        showConfig={false}
      />
      <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />

      <div className='h-2/3 flex flex-col justify-center items-center'>

        <div className='bg-white flex flex-col justify-between h-60 max-w-96 rounded-2xl p-4'>
          <p
            className='font-bold font-lato text-heading-md text-center'
          >
            Estas seguro de que quieres eliminar tu cuenta?
          </p>
          
          <div 
              className='flex justify-around'
          >
          <GreenButton 
            handleClick={() => navigate(-1)} 
            text = {'Volver'} 
            size='medium'
          />
          <RedButton 
            onClick={handleDeleteUser} 
            text={"Eliminar"} 
            size='medium'
          />
          </div>

        </div>
        <ToastContainer />
      </div>

    </div>
  )
}
