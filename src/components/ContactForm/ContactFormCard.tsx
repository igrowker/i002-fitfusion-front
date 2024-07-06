import { Form } from "./Form";


export const ContactFormCard = () => (
	// <div className="bg-white dark:bg-[#162231] rounded-2xl border-[25px] dark:border-[#1C293A] border-[#F4F7FD] p-6 md:p-12">
	<div className="bg-white rounded-2xl border-[20px] border-lima-100 p-6 md:p-12">
		<h2 className="font-lato text-2xl md:text-[45px] leading-none font-bold mb-4">
			Contacta con nostros
		</h2>
		<p className="font-lato text-lg mb-12">
            Por favor, completa el formulario y nos pondremos en contacto contigo a la velocidad de la luz.
		</p>

		<Form />
	</div>
);