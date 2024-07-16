import { useEffect, useState } from "react";
import { BicicleSVG } from "../icons";
import { apiCall } from "../services/apiCall";
import { getLocalSUserInfo } from "../services/handleLocalStorage";
import { PayedClasses } from "../types/classesTypes";

export const ClasesLayout = () => {
  const [payedClasses, setPayedClasses] = useState<PayedClasses[]>()
  const [getClasses, setGetClasses] = useState<Boolean>(false)

  useEffect(() => {

    const {userId} = getLocalSUserInfo()
    
    apiCall({ url: `/payments/${2 ||userId}`, method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // guardar datos del clases en redux?
      data.sort((a : PayedClasses,b : PayedClasses) => (a.ClassDate).localeCompare(b.ClassDate) )
      setPayedClasses(data)
      setGetClasses(false)
    })
    .catch((error) => console.log(error));
    return () => {
      
    }
  }, [getClasses])
  
  console.log(payedClasses);

  const handleCompletedClick = (id : number , completed : boolean) => {

      if(!completed){
        const body = {paimentId : id}

        apiCall({ url: `/classes/complete`, method: "PATCH" , body })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log({data})
          setGetClasses(true)
        })
        .catch((error) => console.log(error));

      }
  }
  

  return (
    <>
      {
        payedClasses !== undefined && payedClasses.map((payedClass: PayedClasses) => {
          return (
            <article className=" mx-6 my-8 rounded-xl border-2 border-gray-100 p-6">
              <div className=" flex flex-row justify-between gap-2  items-center border-b-2 border-gray-100 pb-2">
                <img 
                  src={payedClass.Class.Image}
                  className=" rounded-full bg-cover w-14 h-14  bg-center" 
                />
                <div className=" text-center">
                  <p className=" font-lato text-heading text-black font-bold">
                    {payedClass.Class.Title}
                  </p>
                  <p className=" text-heading-sm font-lato font-black text-gray-300">
                    Clase de {`${payedClass.Class.Duration}'`}
                  </p>
                  <p className=" text-heading-sm font-lato font-black text-gray-300">
                  </p>
                </div>
                {/* <img className=" rounded-full bg-cover w-14 h-14 bg-[url('/yoga.jfif')] bg-center" /> */}
              </div>
              <div className=" flex pt-2 flex-col items-center  ">
                <p className=" text-heading-sm font-lato font-black text-gray-300">
                  Fecha: {payedClass.ClassDate.split('-').reverse().join('-')}
                </p>
                <p className=" text-heading-sm font-lato font-black text-gray-300">
                  Hora: {payedClass.ClassTime.Time}
                </p>
                <button
                  disabled={payedClass.ClassCompleted}
                  className="bg-lima-500/80 text-black font-lato text-heading font-bold rounded-xl w-72 py-2 max-w-4xl mt-5 disabled:bg-gray-500/20"
                  onClick={() => handleCompletedClick(payedClass.Id , payedClass.ClassCompleted)}
                >
                  {payedClass.ClassCompleted ? 'Completada' : 'Marcar completa'}
                </button>
                {/* <div className=" rounded-xl border-2 border-gray-100 p-6 mt-4 flex flex-row justify-between items-center gap-4">
                  <div className=" p-3 bg-gray-100 rounded-xl">
                    <BicicleSVG className="text-black"/>
                  </div>
        
                  <div className=" flex flex-col justify-center gap-2">
                    <div className=" flex flex-row items-center justify-between">
                      <p>Objetivo</p>
                      <p>4km</p>
                    </div>
                    <img src="/Progressbar.png" />
                  </div>
                </div> */}
              </div>
            </article>

          )
        })
      }
    </>
  );
}

export default ClasesLayout;