import { Form, Header } from "../../components";

export const ContactForm = () => {
  return (
    <section className="flex flex-col items-center p-6 box-border bg-black-bg md:h-screen">
      <Header />

      <div className="flex flex-col items-center ">
        <h1 className="font-lato text-white text-heading-xl leading-none font-bold md:text-[40px] my-6">
          CONTÁCTANOS
        </h1>
        <p className="text-center text-white font-lato text-lg px-8">
          Por favor, completa el formulario y nos pondremos en contacto contigo
          a la velocidad de la luz.
        </p>
      </div>
      <div className="box-border min-w-80 mt-9 overflow-auto">
        <Form />
      </div>
    </section>
  );
};
