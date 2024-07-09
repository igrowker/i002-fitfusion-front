import { useState } from "react";
import { HeaderProfile } from "../../components";
import { useUser } from "../../hooks/useUser";
import { ColonSVG, RightArrowSVG } from "../../icons";
import { PhoneSVG } from "../../icons/PhoneSVG";
import NutritionCard from "../../components/NutritionCard";

export const Nutritionist = () => {
  const { dataNut } = useUser();

  const [item, setItem] = useState(dataNut);

  const filterItem = (id: number) => {
    const newItem = dataNut.filter((newVal) => newVal.id === id);
    setItem(newItem);
  };

  console.log(item);

  return (
    <main className=" bg-white">
      <HeaderProfile
        closeButton={false}
        text={"Nutricionistas"}
        showConfig={false}
      />

      <div className=" flex flex-row w-full justify-between items-center mt-5 pt-2 px-6 ">
        <p className=" font-bold text-heading font-lato">
          Contacta a nuestros nutricionistas
        </p>
        <ColonSVG className="text-gray-500" />
      </div>

      <div className=" mt-8 gap-6 flex justify-center items-center flex-col">
        {dataNut?.map((user) => (
          <article
            onClick={() => filterItem(user.id)}
            key={user.id}
            className={`flex flex-row gap-4 p-2 rounded-full justify-between items-center w-80 ${
              user.id % 2 !== 0 ? " bg-lima-200" : " bg-black-bg"
            }`}
          >
            <div className=" flex flex-row gap-4 items-center">
              <img
                className={`rounded-full bg-cover w-14 h-14 bg-center bg-[url(${user.image})]`}
              />
              <div className=" flex flex-col justify-start">
                <p className=" text-heading-sm text-white font-medium">
                  {user.name}
                </p>
                <p className=" text-heading-sm text-gray-100">
                  {user.residence}
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className=" flex flex-row gap-2 mr-4 items-center">
                <PhoneSVG className=" font-bold h-5" />

                <p className=" font-medium text-white text-heading-sm ">
                  {user.phone}
                </p>
              </div>
              <div className=" flex flex-row gap-2 mr-4">
                <p className=" font-medium text-white text-heading-sm ">
                  Mas info...
                </p>
                <RightArrowSVG className="text-white" />
              </div>
            </div>
          </article>
        ))}

        {item ? <NutritionCard item={item} setItem={setItem} /> : <p>nada</p>}
      </div>
    </main>
  );
};

export default Nutritionist;