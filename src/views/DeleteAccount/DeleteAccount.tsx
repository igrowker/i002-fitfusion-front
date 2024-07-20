import { useState } from "react";
import { getLocalSUserInfo } from "../../services/handleLocalStorage";
import { apiCall } from "../../services/apiCall";
import { useNavigate } from "react-router-dom";
import { CornerCirclesSVG } from "../../icons";
import { Spinner } from "../../components";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

export const DeleteAccount = () => {
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.IDLE);
  const navigate = useNavigate();
  const handleDeleteUser = () => {
    setAppStatus(APP_STATUS.LOADING);
    const { userId } = getLocalSUserInfo();
    const body = { userId };
    apiCall({ url: `/users/me/delete`, method: "PUT", body })
      .then((res) => {
        if (res.ok) {
          Cookies.remove("authToken");
          localStorage.clear();
          navigate("/auth/register");
        } else {
          const notify = () =>
            toast.error("Ocurrio un error en el proceso de login.", {
              position: "bottom-center",
            });
          notify();
          setAppStatus(APP_STATUS.ERROR);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />

      <div className=" h-screen bg-pattern bg-no-repeat bg-black-bg bg-cover flex flex-col  items-center justify-center px-6">
        {appStatus === APP_STATUS.LOADING && <Spinner />}

        <div className=" flex flex-col  justify-center items-center z-50">
          <div className="bg-white flex flex-col justify-center items-center rounded-2xl p-11 gap-6 shadow-xl">
            <p className="font-bold font-lato text-heading-md text-center">
              ¿Estás seguro de que quieres eliminar tu cuenta?
            </p>

            <div className="flex flex-col min-[566px]:flex-row justify-center gap-6">
              <button
                className="font-lato font-bold text-heading bg-lima-100  min-w-40 rounded-md p-2 min-[566px]:w-48  duration-300 hover:scale-110"
                onClick={() => navigate(-1)}
              >
                Vover
              </button>
              <button
                className="font-lato font-bold text-heading bg-[#F73B3B]  min-w-40 rounded-md p-2 min-[566px]:w-48  duration-300 hover:scale-110 text-white"
                onClick={handleDeleteUser}
              >
                Eliminar
              </button>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
