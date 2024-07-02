import { useState } from "react";
import { useClasses } from "../hooks/useClasses";
import { Classes, ClassesType } from "../types/classesTypes";
import { FilterButton, FilterCard } from "../components";
import { CloseButtonProfileSVG, ColonSVG } from "../icons";

export const FilterClasses = () => {
  const { data } = useClasses();

  const [item, setItem] = useState<Classes[]>(data);
  const menuItem = [...new Set(data.map((el) => el.type))];

  const filterItem = (cat: ClassesType) => {
    const newItem = data.filter((newVal) => newVal.type === cat);
    setItem(newItem);
  };

  return (
    <div className=" bg-white flex flex-col items-center">
      <header className=" flex flex-row w-full justify-between items-center pt-14 px-6">
        <button className=" rounded-full p-6 border-2 border-gray-300 flex justify-center items-center cursor-pointer">
          <CloseButtonProfileSVG />
        </button>

        <p className="font-bold text-base text-black font-lato">Entrenadores</p>
        <button className=" rounded-full p-6 border-2 border-gray-300 flex justify-center items-center cursor-pointer">
          <ColonSVG />
        </button>
      </header>

      <FilterButton
        menuItem={menuItem}
        filterItem={filterItem}
        setItem={setItem}
      />
      {item.length <= 0 ? (
        <FilterCard item={data} />
      ) : (
        <FilterCard item={item} />
      )}
    </div>
  );
};

export default FilterClasses;
