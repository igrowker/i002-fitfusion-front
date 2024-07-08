import { useState } from "react";

export const Form = () => {
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

    // pendiente agrear validacion y cambiar la ruta
    fetch("http://localhost:3000/api/services/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setForm({
          subject: "",
          to: "",
          text: "",
        });
      });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
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
      <div className="text-start md:text-center">
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
  );
};
