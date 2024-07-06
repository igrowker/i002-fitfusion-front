import { useState } from "react";


export const Form = () => {

	const [form, setForm] = useState({
        subject:'',
        to:'',
        text:''
    });

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setForm(prev => {
            return {
                ...prev ,
                [e.target.name] : e.target.value
            }
        })
    }

	const handleSubmit = async (event : any ) => {
		event.preventDefault();

		// pendiente agrear validacion y cambiar la ruta 
		fetch('http://localhost:3000/api/services/sendEmail' , {
			method : 'POST', 
			headers: {
				'Content-Type': 'application/json'
			},
			body : JSON.stringify(form)
		}).then(res => {
			console.log('res' , res)
		}).catch(err => {
			console.log('err' , err)
		})
		.finally(() =>{
			setForm({
				subject:'',
				to:'',
				text:''
			})
		})

	};

    console.log('form' , form)

	return (
		// <form className="" noValidate validated={validated} onSubmit={handleSubmit}>
		<form className=""  onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
                    name= 'subject'
					value={form.subject}
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-xl focus:outline-none focus:border focus:border-green-100 w-full px-5"
					placeholder="Nombre"
                    onChange={(e) => handleChange(e)}
					required
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
                    name='to'
					value={form.to}
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-xl focus:outline-none focus:border focus:border-green-100 w-full px-5"
					placeholder="Email"
                    onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="text"
					value={form.text}
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-xl focus:outline-none focus:border focus:border-green-100 w-full px-5"
					placeholder="Mensaje"
					rows={4}
                    onChange={ (e) => handleChange(e)}
					required
				></textarea>
			</div>
			<div className="text-start md:text-center">
				<button
					type="submit"
					className="font-lato font-bold text-heading bg-lima-100 max-w-80 w-full rounded-lg py-2 mt-5 disabled:opacity-40"
					disabled = { form.text.length === 0 || form.to.length === 0 || form.subject.length === 0 }
				>
					Enviar
				</button>
			</div>
		</form>
	);
};