import React from "react";


type ClassesFilterTypeProps = {
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filters: {
    type: string;
    level: string;
    status: string;
  };
  resetClasses: () => void;
};

export const ClassesFilter = ({
  handleSelectChange,
  filters,
  resetClasses,
}: ClassesFilterTypeProps) => {
  return (
    <section className="flex flex-col items-center gap-6 mt-7">
      <div className="flex items-center gap-3 w-full flex-wrap justify-center px-6 ">
        <select
          className="rounded-md p-2 font-lato w-full min-[566px]:w-48 bg-white flex flex-col shadow-lg outline-lima-100 cursor-pointer"
          onChange={handleSelectChange}
          name="type"
          id=""
          defaultValue={filters.type}
          value={filters.type}
        >
          <option value="Tipo" disabled>
            Tipo
          </option>
          <option value="Aire Libre">Aire libre</option>
          <option value="En casa">En casa</option>
          <option value="En gimnasio">En gimnasio</option>
          <option value="Virtual">Virtual</option>
        </select>
        <select
          className="rounded-md p-2 font-lato w-full min-[566px]:w-48 bg-white flex flex-col shadow-lg outline-lima-100 cursor-pointer"
          onChange={handleSelectChange}
          name="level"
          id=""
          defaultValue={filters.level}
          value={filters.level}
        >
          <option value="Nivel" disabled>
            Nivel
          </option>
          <option value="Suave">Suave</option>
          <option value="Fuerte">Fuerte</option>
        </select>
        <select
          className="rounded-md p-2 font-lato w-full min-[566px]:w-48 bg-white flex flex-col shadow-lg outline-lima-100 cursor-pointer"
          onChange={handleSelectChange}
          name="status"
          id=""
          defaultValue={filters.status}
          value={filters.status}
        >
          <option value="Estado" disabled>
            Estado
          </option>
          <option value="Disponible">Disponible</option>
          <option value="No disponible">No disponible</option>
        </select>
      </div>

      <button
        className="font-lato font-bold text-heading bg-lima-100 min-[566px]:bg-gray-100 min-w-40 rounded-md p-2 min-[566px]:w-48 hover:bg-lima-100 duration-300 hover:scale-110"
        onClick={resetClasses}
      >
        Todas las clases
      </button>
    </section>
  );
};
