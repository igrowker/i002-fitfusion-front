import { Nutritionist } from "../types";

type NutritionCardProps = {
  item: Nutritionist[];
  setItem: React.Dispatch<React.SetStateAction<Nutritionist[]>>;
};

export const NutritionCard = ({ item, setItem }: NutritionCardProps) => {
  return (
    <>
      {item.map((nut) => (
        <>
          <button onClick={() => setItem([])}>CERRAR</button> <p>{nut.name}</p>
          <p>{nut.description}</p>
        </>
      ))}
    </>
  );
};

export default NutritionCard;
