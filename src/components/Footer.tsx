
import logo from "../assets/logo.png"
import { FacebookSVG, InstagramSVG } from "../icons"


export const Footer = () => {
  return (
    <footer className="bg-black-bg bg-cover w-full ">
        <div className="flex justify-start border-solid border-y-2 border-y-lima-100 mx-8 md:px-16 " >
            <div className="py-4">
                <div>
                    <img src={logo} alt="Logo image" width={76} />
                    <p className="font-lato text-white font-extrabold text-heading-sm">FITFUSION</p>
                </div>
                <div className="flex justify-evenly content-center pt-4">
                    <FacebookSVG />
                    <InstagramSVG/>  
                </div>
            </div>
            <div className="ml-auto flex flex-col justify-evenly text-right">
                <p className="font-lato text-white font-normal text-heading-sm">SOBRE NOSOTROS</p>
                <p className="font-lato text-white font-normal text-heading-sm">CONTACTO</p>
            </div>

        </div>

        <div className="mb-5 pt-3 flex justify-center text-center">
            <p className="font-lato text-footer-gray font-light text-heading-xs" >FITFUSION® 2024 - Todos los derechos reservados | Privacidad y Cookies</p>
        </div>
    </footer>
  )
}
