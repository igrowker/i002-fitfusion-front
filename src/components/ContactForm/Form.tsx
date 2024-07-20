import { useState } from "react";
import { apiCall } from "../../services/apiCall";
import { createErrorToast, createSuccessToast } from "../../services/toastCreation";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";
import { ToastContainer } from "react-toastify";
import { Spinner } from "..";

export const Form = () => {
  const [appStatus , setAppStatus] = useState<AppStatusType>(APP_STATUS.IDLE)
  const [form, setForm] = useState({
    subject: "",
    to: "",
    text: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setAppStatus(APP_STATUS.LOADING)
    const body = form
    apiCall({ url: `/services/sendEmail`, method: "POST" , body})
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.includes('Email sent:')) {
        const notify = createSuccessToast({message : 'El formulario se envio correctamente'});
        notify();
        
      } else if (data?.errors?.length > 0 ) {
        const notify = createErrorToast({message : 'Ocurrio un error, vuelve a intentarlo por favor.'});
        notify();
      }  
        
        setAppStatus(APP_STATUS.READY_USAGE)
    })
    .catch((error) => {
      console.log(error)
      const notify = createErrorToast({message : 'Ocurrio un error al enviar el formulario'});
      notify();
    }).finally(() => {
      setForm({
        subject: "",
        to: "",
        text: "",
      });
    });;

  };

  return (
    <>
      {appStatus === APP_STATUS.LOADING && <Spinner className="-left-0" /> }
      <form className="" onSubmit={handleSubmit}>
        <ToastContainer />
        <div className="mb-4">
          <label htmlFor="subject" className="text-gray-500 mb-4">
            Nombre
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={form.subject}
            className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-md focus:outline-none focus:border focus:border-green-100 w-full px-5"
            placeholder="Escriba su nombre"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="text-gray-500">
            Correo electrónico
          </label>
          <input
            type="email"
            name="to"
            id="to"
            value={form.to}
            className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-md focus:outline-none focus:border focus:border-green-100 w-full px-5"
            placeholder="ejemplo@gmail.com"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="text" className="text-gray-500">
            Mensaje
          </label>
          <textarea
            name="text"
            id="text"
            value={form.text}
            className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-md focus:outline-none focus:border focus:border-green-100 w-full px-5"
            placeholder="Escriba su mensaje aqui..."
            rows={4}
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
        </div>
        <div className="flex justify-center text-start md:text-center">
          <button
            type="submit"
            className="font-lato font-bold text-heading bg-lima-100 max-w-80 w-full rounded-lg py-2 mt-5 disabled:opacity-40"
            disabled={
              form.text.length === 0 ||
              form.to.length === 0 ||
              form.subject.length === 0
            }
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
