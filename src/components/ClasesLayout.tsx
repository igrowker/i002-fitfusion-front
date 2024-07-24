import { PayedClasses } from "../types/classesTypes";

type ClassesLayoutProps = {
  payedClasses: PayedClasses[] | undefined;
  handleCompletedClick?: (id: number, completed: boolean) => void;
};

export const ClasesLayout = ({
  payedClasses,
  handleCompletedClick,
}: ClassesLayoutProps) => {




  return (
    <div className=" my-6 gap-6 flex flex-col min-[566px]:flex-row min-[566px]:max-w-3xl min-[566px]:items-center min-[566px]:justify-center min-[566px]:flex-wrap min-[566px]:gap-2 ">
      {payedClasses !== undefined &&
        payedClasses.map((payedClass: PayedClasses) => {
          return (
            <div key={payedClass.Id} className="p-6 shadow-lg flex flex-col">
              <div className=" flex flex-row justify-center gap-6  items-center border-b-2 border-gray-100 pb-2">
                <img
                  src={payedClass.Class.Image || '/avatarnone.png'}
                  className=" rounded-full bg-cover w-14 h-14  bg-center"
                />
                <div className=" text-center">
                  <p className=" font-lato text-heading text-black font-bold">
                    {payedClass.Class.Title}
                  </p>
                  <p className=" text-heading-sm font-lato font-black text-gray-300">
                    Clase de {`${payedClass.Class.Duration}'`}
                  </p>
                </div>
                {/* <img className=" rounded-full bg-cover w-14 h-14 bg-[url('/yoga.jfif')] bg-center" /> */}
              </div>
              <div className=" flex pt-2 flex-col items-center  ">
                <p className=" text-heading-sm font-lato font-black text-gray-300">
                  Fecha:{" "}
                  {payedClass.ClassDate.slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}
                </p>
                <p className=" text-heading-sm font-lato font-black text-gray-300">
                  Hora: {payedClass.ClassTime.Time}
                </p>
                <button
                  disabled={payedClass.ClassCompleted}
                  className="bg-lima-100 text-black-bg font-lato text-heading font-bold rounded-xl w-72 py-2 max-w-4xl mt-5 disabled:bg-gray-500/20"
                  onClick={() =>
                    handleCompletedClick &&
                    handleCompletedClick(
                      payedClass.Id,
                      payedClass.ClassCompleted
                    )
                  }
                >
                  {payedClass.ClassCompleted ? "Completada" : "Marcar completa"}
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
            </div>
          );
        })}
    </div>
  );
};

export default ClasesLayout;
