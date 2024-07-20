import { useEffect, useState } from "react";
import { Header, HeaderProfile, Spinner } from "../../components";
import { ColonSVG, RightArrowSVG } from "../../icons";
import { PhoneSVG } from "../../icons/PhoneSVG";
import { useNavigate } from "react-router-dom";
import PhysioCard from "../../components/PhysioCard";
import { apiCall } from "../../services/apiCall";
import { NutriAndPhysioType } from "../../types/userTypes";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";
import ErrorMessage from "../../components/ErrorMessage";

export const Physio = () => {
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.LOADING);
  const [dataPhysio, setDataPhysio] = useState<
    NutriAndPhysioType[] | undefined
  >();
  const [item, setItem] = useState(dataPhysio);

  useEffect(() => {
    apiCall({ url: `/physiotherapist/getAllPhysioterapist`, method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // guardar datos del clases en redux?
        if (data.message === "No se encuentra data") {
          setAppStatus(APP_STATUS.ERROR);
        } else {
          setDataPhysio(data);
          setAppStatus(APP_STATUS.READY_USAGE);
        }
      })
      .catch((error) => {
        console.log(error);
        setAppStatus(APP_STATUS.ERROR);
      });
  }, []);

  const filterItem = (id: number) => {
    if (dataPhysio) {
      const newItem = dataPhysio.filter((newVal) => newVal.id === id);
      setItem(newItem);
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("");
  };

  return (
    <div className="bg-white flex flex-col items-center h-screen">
      <div className=" hidden min-[566px]:flex min-[566px]:z-30 min-[566px]:w-full min-[566px]:bg-black-bg min-[566px]:sticky min-[566px]:bottom-0  ">
        <Header />
      </div>
      <main className=" bg-white h-screen flex flex-col items-center">
        {appStatus === APP_STATUS.LOADING && <Spinner />}
        <HeaderProfile
          handleClick={handleClick}
          closeButton={true}
          text={"Fisioterapeutas"}
          showConfig={false}
        />

        <div className=" flex flex-row w-full justify-between items-center mt-5 pt-2 px-6 min-[566px]:max-w-xl">
          <p className=" font-bold text-heading font-lato">
            Contacta a nuestros Fisioterapeutas
          </p>
          <ColonSVG className="text-gray-500" />
        </div>

        <div className="min-[566px]:max-w-2xl pb-6 mt-8 gap-6 flex justify-center items-center flex-col min-[566px]:px-6 min-[566px]:flex-row min-[566px]:justify-center min-[566px]:flex-wrap min-[566px]:gap-3">
          {appStatus === APP_STATUS.ERROR ? (
            <ErrorMessage className="w-2/3 text-center">
              Ocurrió un error al traer los datos de nuestros Fisioterapeutas
            </ErrorMessage>
          ) : dataPhysio?.length === 0 ? (
            <ErrorMessage className="w-2/3 text-center">
              No existen Fisioterapeutas disponibles en este momento.
            </ErrorMessage>
          ) : (
            dataPhysio?.map((user) => (
              <article
                onClick={() => filterItem(user.id)}
                key={user.id}
                className="min-w-[80vw] min-[566px]:min-w-0 cursor-pointer p-6 shadow-lg flex flex-col items-center justify-center gap-4 hover:scale-105 duration-300 "
              >
                <div className=" flex flex-col gap-4 items-center justify-center">
                  {/* <img
                      className={`rounded-full bg-cover w-14 h-14 bg-center bg-[url(${user.image})]`}
                    /> */}
                  <div className=" flex flex-col justify-center items-center px-4">
                    <p className=" bg-lima-100 px-4 py-2 rounded-lg text-heading text-black-bg font-medium">
                      {user.name}
                    </p>
                    <p className=" text-heading-sm text-gray-400">
                      {user.residence}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className=" flex flex-row gap-2 items-center">
                    <PhoneSVG className=" font-bold h-5 fill-black-bg" />

                    <p className=" font-medium text-black-bg text-heading-sm ">
                      {user.phone}
                    </p>
                  </div>
                  <div className=" flex flex-row gap-2">
                    <p className=" font-medium text-gray-400 text-heading-sm ">
                      Más info...
                    </p>
                    <RightArrowSVG className="text-lima-400" />
                  </div>
                </div>
              </article>
            ))
          )}
          {item !== undefined && (
            <nav
              className={`${
                item.length === 0 ? "w-0" : "w-[100vw]"
              }  fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-[60] overflow-x-hidden origin-left duration-500 `}
            >
              <PhysioCard item={item} setItem={setItem} />
            </nav>
          )}
        </div>
      </main>
    </div>
  );
};

export default Physio;
