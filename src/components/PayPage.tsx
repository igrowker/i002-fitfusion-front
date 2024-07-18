import HeaderProfile from "./HeaderProfile";
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import GreenButton from "./GreenButton";
import { ScheduledClasses } from "../types/scheduledClassesTypes";
import { Value } from "../views/Calendar/Calendar";
import { apiCall } from "../services/apiCall";
import { getLocalSUserInfo } from "../services/handleLocalStorage";
import { toast, ToastContainer } from "react-toastify";

type PayPageProps = {
  item: ScheduledClasses;
  setItem: React.Dispatch<React.SetStateAction<ScheduledClasses | undefined>>;
  selectedDate: Value;
};

export const PayPage = ({ item, setItem, selectedDate }: PayPageProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setItem(undefined);
  };

  // const [classConfirmed, setclassConfirmed] = useState<ScheduledClasses | undefined>();

  const stripe = useStripe();
  const element = useElements();

  const handleConfirm = async () => {
    // e.preventDefault();
    // const { error, paymentMethod } = await stripe?.createPaymentMethod({
    //   type: "card",
    //   card: element?.getElement(CardElement),
    //   });
    //   if (!error) {
    //   console.log(paymentMethod);
    //   }
  };

  // console.log({item});
  // console.log(classConfirmed);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card: element?.getElement(CardElement),
    });

    if (error) {
      const notify = () =>
        toast.error(error.message, { position: "bottom-center" });
      notify();
      return console.log(error);
    } else {
      const notify = () =>
        toast.success("Pago realizado correctamente", {
          position: "bottom-center",
        });
      notify();
      console.log(paymentMethod);
    }

    const { userId } = getLocalSUserInfo();

    const body = {
      ClassId: item.classId,
      UserId: userId,
      Amount: item.classPrice,
      Status: "Payed",
      ClassTimeId: item.classTimeId,
      ClassDate: selectedDate,
    };

    apiCall({ url: `/payments`, method: "POST", body })
      .then((res) => {
        // console.log('res' , res );
        if (!res.ok) navigate("/classes");
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => console.error("payments", error));
    console.log("SE EJECUTA EL SUBMIT");
    navigate("/profile");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <HeaderProfile
          closeButton={false}
          text={"Pagina de pago"}
          showConfig={false}
          handleClick={handleClick}
        />

        <>
          <div
            key={item.id}
            className="flex flex-col justify-center items-center text-center w-full text-black bg-lima-100 py-6 mt-8"
          >
            <p className=" font-bold text-heading font-lato min-[566px]:max-w-xl text-center px-6 ">
              Estas a punto de reservar la clase "{item.title}"
              {/* con el profesor  */}
              {/* {item.instructor.name} */}
            </p>
          </div>
        </>

        <div className="w-full bg-black-bg py-10 flex flex-col items-center">
          <p className="mt-8 font-bold text-heading font-lato min-[566px]:max-w-xl text-center px-6 text-white">
            De querer realizar tu pago te pedimos los siguientes datos:
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-y-4 py-6 w-full px-6 min-[566px]:max-w-xl"
          >
            <CardElement className="bg-white rounded w-full p-4 text-black" />
            
            <GreenButton text="Confirmar clase" handleClick={handleConfirm} />
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default PayPage;
