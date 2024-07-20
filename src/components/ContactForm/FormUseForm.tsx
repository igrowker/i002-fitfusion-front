import { useState } from "react";
import { apiCall } from "../../services/apiCall";
import {
  createErrorToast,
  createSuccessToast,
} from "../../services/toastCreation";
import { APP_STATUS, AppStatusType } from "../../types/generalTypes";
import { ToastContainer } from "react-toastify";
import { Spinner } from "..";
import { useForm } from "react-hook-form";
import { ContactForm } from "../../types/contactTypes";

import ErrorMessage from "../ErrorMessage";

export const FormUseForm = () => {
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.IDLE);
  // const [form, setForm] = useState({
  //   subject: "",
  //   to: "",
  //   text: "",
  // });

  const { register, handleSubmit, formState } = useForm<ContactForm>();

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setForm((prev) => {
  //     return {
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    setAppStatus(APP_STATUS.LOADING);
    const body = { subject: data.subject, to: data.to, text: data.text };

    apiCall({ url: `/services/sendEmail`, method: "POST", body })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          const notify = createSuccessToast({
            message: "El formulario se envió correctamente",
          });
          notify();
        } else if (data?.errors?.length > 0) {
          const notify = createErrorToast({
            message: "Ocurrió un error, vuelve a intentarlo por favor.",
          });
          notify();
        }

        setAppStatus(APP_STATUS.READY_USAGE);
      })
      .catch((error) => {
        console.log(error);
        const notify = createErrorToast({
          message: "Ocurrió un error al enviar el formulario",
        });
        notify();
      });
  };

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   setAppStatus(APP_STATUS.LOADING)
  //   const body = form
  //   apiCall({ url: `/services/sendEmail`, method: "POST" , body})
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     if (data.includes('Email sent:')) {
  //       const notify = createSuccessToast({message : 'El formulario se envio correctamente'});
  //       notify();

  //     } else if (data?.errors?.length > 0 ) {
  //       const notify = createErrorToast({message : 'Ocurrio un error, vuelve a intentarlo por favor.'});
  //       notify();
  //     }

  //       setAppStatus(APP_STATUS.READY_USAGE)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //     const notify = createErrorToast({message : 'Ocurrio un error al enviar el formulario'});
  //     notify();
  //   }).finally(() => {
  //     setForm({
  //       subject: "",
  //       to: "",
  //       text: "",
  //     });
  //   });;

  // };

  return (
    <>
      {appStatus === APP_STATUS.LOADING && <Spinner className="-left-0" />}
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="subject" className="text-gray-500 mb-4">
            Nombre
          </label>
          <input
            type="text"
            id="subject"
            className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-md focus:outline-none focus:border focus:border-green-100 w-full px-5"
            placeholder="Escriba su nombre"
            required
            {...register("subject", {
              required: "El nombre es requerido",
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
            })}
          />
          {formState.errors.subject && (
            <ErrorMessage>{formState.errors.subject.message}</ErrorMessage>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="text-gray-500">
            Correo electrónico
          </label>
          <input
            type="email"
            id="to"
            className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-md focus:outline-none focus:border focus:border-green-100 w-full px-5"
            placeholder="ejemplo@gmail.com"
            required
            {...register("to", {
              required: "El correo es requerido",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "El correo no es válido",
              },
            })}
          />
          {formState.errors.to && (
            <ErrorMessage>{formState.errors.to.message}</ErrorMessage>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="text" className="text-gray-500">
            Mensaje
          </label>
          <textarea
            id="text"
            className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-md focus:outline-none focus:border focus:border-green-100 w-full px-5"
            placeholder="Escriba su mensaje aqui..."
            rows={4}
            required
            {...register("text", {
              required: "El nombre es requerido",
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
            })}
          ></textarea>
        </div>
        <div className="flex justify-center text-start md:text-center">
          <button
            type="submit"
            className={`font-lato font-bold text-heading bg-lima-100 max-w-80 w-full rounded-lg py-2 mt-5 ${
              !formState.isValid && " opacity-40 cursor-default"
            }`}
          >
            Enviar
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};
