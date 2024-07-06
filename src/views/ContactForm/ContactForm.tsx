import { ContactFormCard } from "../../components";


export const ContactForm = () => {
	return (
		<section className="ezy__contact11 light bg-black-bg overflow-hidden md:h-screen">
            
			<div
				className="bg-pattern bg-no-repeat bg-left-bottom bg-cover py-14"
			>
				<div className="container px-4">
					<div className="grid grid-cols-12 py-6">
						<div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
							<h2 className="font-lato text-white  text-2xl leading-none font-bold md:text-[40px] mb-6">
								Hola, ¿cómo podemos ayudarte?
							</h2>
						</div>
						<div className="col-span-12 lg:col-span-5 lg:col-start-8">
							<ContactFormCard />
						</div>
					</div>
				</div>
			</div>
			<div className="ezy__contact11-blank-card"></div>
		</section>
	);
};


