import { useRef, useState } from "react";
import { DBclasses } from "../../data/db";
import { WeightLiftingSVG, HeartSVG, LocationSVG } from "../../icons";
import { Classes } from "../../types/classesTypes";
import { HeaderProfile } from "../../components";

export const ClassesList = () => {

  const originalClasses = useRef(DBclasses)

  const [filters, setfilters] = useState({
    type : 'Tipo',
    level : 'Nivel',
    status : 'Estado',
  })
  const [classes, setclasses] = useState(DBclasses)


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    const className = e.target.name as keyof Classes;

    setfilters(prev => {return { ...prev , [e.target.name] : e.target.value }})
    

    const filteredClases = classes.filter((clas : Classes) => {
        return (
          clas[className] === e.target.value  
        )
    })

    setclasses(filteredClases)


  }

  const resetClasses = () => {
    setclasses(originalClasses.current)
    setfilters({
      type : 'Tipo',
      level : 'Nivel',
      status : 'Estado',
    })
  }

  console.log('filters' , filters)
  return (
    <div className="bg-white bg-cover max-w-full max-h-full py-4 ">

      <HeaderProfile closeButton={false} text="Clases" showConfig={false} />


      <section className="flex flex-col items-center gap-6 mt-7">
        <div className="flex gap-3">
          <select 
            className="rounded-md px-1 py-1 font-lato" 
            onChange={ handleSelectChange} 
            name="type" 
            id=""
            defaultValue={filters.type}
            value={filters.type}
            >
            <option value="Tipo" disabled >Tipo</option>
            <option value="Aire Libre">Aire libre</option>
            <option value="En casa">En casa</option>
            <option value="En gimnasio">En gimnasio</option>
            <option value="Virtual">Virtual</option>
          </select>
          <select 
            className="rounded-md px-1 py-1 font-lato" 
            onChange={ handleSelectChange} 
            name="level" 
            id=""
            defaultValue={filters.level}
            value={filters.level}
          >
          <option value="Nivel" disabled>Nivel</option>
            <option value="Suave">Suave</option>
            <option value="Fuerte">Fuerte</option>
          </select>
          <select 
            className="rounded-md px-1 py-1 font-lato" 
            onChange={ handleSelectChange} 
            name="status" 
            id=""
            defaultValue={filters.status}
            value={filters.status}
          >
            <option value="Estado" disabled >Estado</option>
            <option value="Disponible">Disponible</option>
            <option value="No disponible">No disponible</option>
          </select>

        </div>

        <button 
          className="font-lato font-bold text-heading bg-lima-100 min-w-40 rounded-md py-1"
          onClick={resetClasses} 
        >Todas las clases</button>
      </section>

      {classes.length === 0 
        ? (
          <h2>No existen clases para la combinacion de filtros seleccionada</h2>
        )
        : (
          <ul className="flex flex-col justify-around items-center gap-4 max-h-full mt-7 md:flex-row flex-wrap">
            {classes.map((fitClass: Classes) => {
              return (
                <li
                  key={fitClass.id}
                  className="w-5/6 flex justify-around max-w-80 hover:cursor-pointer "
                >
                  <img src={fitClass.image} className="w-36 h-36 rounded-large" />
                  <div className="flex flex-col items-start justify-center gap-1">
                    <div className=" w-full flex justify-center text-center">
                      <h3 className="font-DMsans font-bold text-heading max-w-28">
                        {" "}
                        {fitClass.title}{" "}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <LocationSVG />
                      <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                        {" "}
                        {fitClass.type}{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <WeightLiftingSVG height="12px" width="12px" fill="#86BA43" />
                      <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                        {" "}
                        {fitClass.instructor.name}{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <div>
                        <HeartSVG />
                      </div>
                      <p className="font-DMsans font-medium text-heading-sm text-gray-500 ">
                        {" "}
                        {fitClass.level}{" "}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )
      }

    </div>
  );
};

export default ClassesList;
