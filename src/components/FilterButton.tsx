import { Classes, ClassesType } from "../types/classesTypes";
import { useClasses } from "../hooks/useClasses";

type FilterButtonProps = {
  menuItem: ClassesType[];
  filterItem: (cat: ClassesType) => void;
  setItem: React.Dispatch<React.SetStateAction<Classes[]>>;
};

export const FilterButton = ({
  menuItem,
  filterItem,
  setItem,
}: FilterButtonProps) => {
  const { data } = useClasses();
  return (
    <div className=" flex flex-row bg-gray-300 p-[2px] rounded-3xl mt-8 w-full mb-16">
      {menuItem.map((el) => (
        <button
          key={el}
          onClick={() => filterItem(el)}
          className="w-28 h-8 font-lato rounded-2xl font-bold text-heading-sm duration-500 bg-gray-300"
        >
          {el}
        </button>
      ))}
      <button
        onClick={() => setItem(data)}
        className="w-28 h-8 font-lato rounded-2xl font-bold text-heading-sm duration-500 bg-white"
      >
        Todas
      </button>
    </div>
  );
};

export default FilterButton;
