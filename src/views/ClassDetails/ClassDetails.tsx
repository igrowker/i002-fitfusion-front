import { useState } from "react"
import { HeaderProfile } from "../../components"
import { Classes } from "../../types/classesTypes"
import { CornerCirclesSVG, DumbbellSVG, HeartSVG, LightingSVG } from "../../icons"
import { UserSVG } from "../../icons/UserSVG"



export const ClassDetails = () => {

    const [classInfo, setClassInfo] = useState<Classes>({
        id: 1,
        title: "Funcional",
        description: "Clase de una hora en la que trabajarás todo tu cuerpo",
        image:
          "https://s3-alpha-sig.figma.com/img/21c4/a63c/15f4fba5fb794a1cf265f1ab3a037861?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bi3WY-j1BRJ9-mKGuZmplrK7QwN~uoz5AQmwxBOUMXSqS4mvzm2mOxsbuDLXVYV3eMqSbPH0UfD1M5vDnJ-Vn2ahtByRZIj~MRVzU0IOVH5g3vh7lryfKD8izsgka~pJaBk9qBRZ7ONDoRRC2Bi58rTyYHqD5cjBMPw3b0er7gUh7HqY2UU7F1oTkvMAxwxFOYFxD36-FZau1CrHq1QmjGpGOZ0g2ovcGIdusptJZr0tlO2zIlrYtzCqKauan2RLw9yClmW3IUL3Up8QHANucywtXsJ7BjQPM7zxcF51Q4NXgVH0D8UR2krwB8wGECK8bIHZdwBbO~eKCJicDWmruQ__",
        instructor: {
          id: 1,
          user_id: 1,
          name: "John Doe",
          bio: "Entrenador Funcional Certificado con 5 años de experiencia.",
          professional_title: "Entrenador Funcional Certificado",
          years_experience: "5 años",
          class_type: "Entrenamiento Funcional",
        },
        level: "Fuerte",
        type: "En gimnasio",
        status: "Disponible",
    },)


  return (
    <div 
        // className="bg-lima-100 bg-pattern h-screen bg-cover bg-center md:"
        className="bg-lima-100 bg-pattern h-screen bg-cover bg-center flex flex-col md:bg-none"
    >   
        <HeaderProfile closeButton={true} text={classInfo.title} showConfig={false} />
        <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
        <div className="flex flex-col items-center flex-1">
            <div className="w-40 h-40 rounded-full overflow-hidden mt-7 mb-16">
                <img 
                    className="w-full h-full object-cover"
                    src={classInfo.image} 
                    alt="Imagen de la clase"
                />
            </div>
            <div id="prueba" className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 md:max-h-96"  >
                <div className="absolute -top-8 flex justify-center items-center w-16 h-16 rounded-full bg-lima-100  shadow-custom">
                    <UserSVG fill="white"/>
                </div>
                <div className="flex gap-4 pt-16">
                    <div className=" flex flex-col items-center justify-between">
                        <HeartSVG width={24} height={24}/>
                        {classInfo.title}
                    </div>
                    <div className=" flex flex-col items-center justify-between">
                        <DumbbellSVG width={24} height={24}/>
                        {classInfo.title}
                    </div>
                    <div className=" flex flex-col items-center justify-between">
                        <LightingSVG width={24} height={24}/>
                        {classInfo.title}
                    </div>
                </div>
                <button 
                    className="font-lato font-bold text-heading bg-lima-100 max-w-80 w-full rounded-lg py-2 mt-5"
                > Ver calendario</button>
                <div className="w-full my-6">
                    <p className="font-DMsans font-bold text-heading text-left"> Información </p>
                    <p className="font-DMsans font-normal text-heading-sm text-gray-500 mt-3">
                        {classInfo.description}
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}