import HeaderProfile from "./HeaderProfile";
import { Classes } from "../types/classesTypes";
import GreenButton from "./GreenButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type PayPageProps = {
  item: Classes[];
  setItem: React.Dispatch<React.SetStateAction<Classes[]>>;
};

export const PayPage = ({ item, setItem }: PayPageProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setItem([]);
  };

  const [classConfirmed, setclassConfirmed] = useState<Classes[]>([]);

  const handleConfirm = () => {
    setclassConfirmed(item);
    navigate("/profile");
  };

  console.log(item);
  console.log(classConfirmed);

  return (
    <div className="flex flex-col items-center">
      <HeaderProfile
        closeButton={false}
        text={"Pagina de pago"}
        showConfig={false}
        handleClick={handleClick}
      />
      {item.map((clase) => (
        <h2 className=" text-4xl">{clase.title}</h2>
      ))}

      <GreenButton text="Confirmar clase" handleClick={handleConfirm} />
    </div>
  );
};

export default PayPage;
