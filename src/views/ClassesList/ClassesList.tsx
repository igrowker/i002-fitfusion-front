import { WeightLiftingSVG  , HeartSVG, LocationSVG } from "../../icons";
import { Classes } from "../../types/classesTypes";



const classes : Classes[] = [
    {
        id: 1,
        title: 'Funcional',
        description: 'Clase de una hora en la que trabajarás todo tu cuerpo',
        image: 'https://s3-alpha-sig.figma.com/img/21c4/a63c/15f4fba5fb794a1cf265f1ab3a037861?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bi3WY-j1BRJ9-mKGuZmplrK7QwN~uoz5AQmwxBOUMXSqS4mvzm2mOxsbuDLXVYV3eMqSbPH0UfD1M5vDnJ-Vn2ahtByRZIj~MRVzU0IOVH5g3vh7lryfKD8izsgka~pJaBk9qBRZ7ONDoRRC2Bi58rTyYHqD5cjBMPw3b0er7gUh7HqY2UU7F1oTkvMAxwxFOYFxD36-FZau1CrHq1QmjGpGOZ0g2ovcGIdusptJZr0tlO2zIlrYtzCqKauan2RLw9yClmW3IUL3Up8QHANucywtXsJ7BjQPM7zxcF51Q4NXgVH0D8UR2krwB8wGECK8bIHZdwBbO~eKCJicDWmruQ__',
        instructor: {
            id: 1,
            user_id: 1,
            name: 'John Doe',
            bio: 'Entrenador Funcional Certificado con 5 años de experiencia.',
            professional_title: 'Entrenador Funcional Certificado',
            years_experience: '5 años',
            class_type: 'Entrenamiento Funcional',
        },
        level: 'Fuerte',
        type: 'En gimnasio',
        status: 'Disponible',
    },
    {
        id: 2,
        title: 'Yoga',
        description: 'Una clase relajante centrada en la flexibilidad y la relajación',
        image: 'https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__',
        instructor: {
            id: 2,
            user_id: 2,
            name: 'Jane Smith',
            bio: 'Instructor de yoga experimentado especializado en yoga Hatha y Vinyasa.',
            professional_title: 'Instructor de Yoga',
            years_experience: '8 años',
            class_type: 'Yoga',
        },
        level: 'Suave',
        type: 'Virtual',
        status: 'Disponible',
    },
    {
        id: 3,
        title: 'Pilates',
        description: 'Fortalece tu núcleo con nuestras clases de pilates',
        image: 'https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__',
        instructor: {
            id: 3,
            user_id: 3,
            name: 'Michael Brown',
            bio: 'Instructor de pilates apasionado por mejorar la postura y la flexibilidad.',
            professional_title: 'Instructor de Pilates',
            years_experience: '6 años',
            class_type: 'Pilates',
        },
        level: 'Fuerte',
        type: 'En gimnasio',
        status: 'Disponible',
    },
    {
        id: 4,
        title: 'Spinning',
        description: 'Entrenamiento intensivo de ciclismo',
        image: 'https://s3-alpha-sig.figma.com/img/21c4/a63c/15f4fba5fb794a1cf265f1ab3a037861?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bi3WY-j1BRJ9-mKGuZmplrK7QwN~uoz5AQmwxBOUMXSqS4mvzm2mOxsbuDLXVYV3eMqSbPH0UfD1M5vDnJ-Vn2ahtByRZIj~MRVzU0IOVH5g3vh7lryfKD8izsgka~pJaBk9qBRZ7ONDoRRC2Bi58rTyYHqD5cjBMPw3b0er7gUh7HqY2UU7F1oTkvMAxwxFOYFxD36-FZau1CrHq1QmjGpGOZ0g2ovcGIdusptJZr0tlO2zIlrYtzCqKauan2RLw9yClmW3IUL3Up8QHANucywtXsJ7BjQPM7zxcF51Q4NXgVH0D8UR2krwB8wGECK8bIHZdwBbO~eKCJicDWmruQ__',
        instructor: {
            id: 4,
            user_id: 4,
            name: 'Emily Johnson',
            bio: 'Instructor certificado de Spinning apasionado por el fitness y el entrenamiento de resistencia.',
            professional_title: 'Instructor de Spinning Certificado',
            years_experience: '4 años',
            class_type: 'Spinning',
        },
        level: 'Fuerte',
        type: 'En gimnasio',
        status: 'Disponible',
    },
    {
        id: 6,
        title: 'CrossFit',
        description: 'Entrenamiento de alta intensidad que combina diferentes disciplinas',
        image: 'https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__',
        instructor: {
            id: 5,
            user_id: 5,
            name: 'Alexandra García',
            bio: 'Entrenadora experta en CrossFit con enfoque en resistencia y fuerza.',
            professional_title: 'Entrenadora de CrossFit',
            years_experience: '7 años',
            class_type: 'CrossFit',
        },
        level: 'Fuerte',
        type: 'En gimnasio',
        status: 'Disponible',
    },
    {
        id: 7,
        title: 'Clase de Baile',
        description: 'Disfruta aprendiendo diversos estilos de baile en una clase dinámica',
        image: 'https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__',
        instructor: {
            id: 6,
            user_id: 6,
            name: 'Carlos Martínez',
            bio: 'Bailarín profesional con experiencia en salsa, bachata y hip-hop.',
            professional_title: 'Instructor de Baile',
            years_experience: '10 años',
            class_type: 'Baile',
        },
        level: 'Suave',
        type: 'En gimnasio',
        status: 'Disponible',
    },
    {
        id: 8,
        title: 'Entrenamiento Cardiovascular',
        description: 'Mejora tu resistencia y salud cardiovascular con este entrenamiento',
        image: 'https://s3-alpha-sig.figma.com/img/21c4/a63c/15f4fba5fb794a1cf265f1ab3a037861?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bi3WY-j1BRJ9-mKGuZmplrK7QwN~uoz5AQmwxBOUMXSqS4mvzm2mOxsbuDLXVYV3eMqSbPH0UfD1M5vDnJ-Vn2ahtByRZIj~MRVzU0IOVH5g3vh7lryfKD8izsgka~pJaBk9qBRZ7ONDoRRC2Bi58rTyYHqD5cjBMPw3b0er7gUh7HqY2UU7F1oTkvMAxwxFOYFxD36-FZau1CrHq1QmjGpGOZ0g2ovcGIdusptJZr0tlO2zIlrYtzCqKauan2RLw9yClmW3IUL3Up8QHANucywtXsJ7BjQPM7zxcF51Q4NXgVH0D8UR2krwB8wGECK8bIHZdwBbO~eKCJicDWmruQ__',
        instructor: {
            id: 7,
            user_id: 7,
            name: 'Laura Pérez',
            bio: 'Entrenadora certificada en cardio con enfoque en salud y bienestar.',
            professional_title: 'Entrenadora de Cardio',
            years_experience: '8 años',
            class_type: 'Entrenamiento Cardiovascular',
        },
        level: 'Fuerte',
        type: 'En gimnasio',
        status: 'Disponible',
    },
    {
        id: 9,
        title: 'Boxeo',
        description: 'Aprende las técnicas básicas y avanzadas del boxeo con nuestros entrenadores',
        image: 'https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__',
        instructor: {
            id: 8,
            user_id: 8,
            name: 'Roberto González',
            bio: 'Entrenador de boxeo con experiencia en competiciones profesionales y entrenamiento personalizado.',
            professional_title: 'Entrenador de Boxeo',
            years_experience: '12 años',
            class_type: 'Boxeo',
        },
        level: 'Fuerte',
        type: 'En gimnasio',
        status: 'Disponible',
    },
];



const ClassesList = () => {
  return (
    <div className="bg-white bg-cover max-w-full max-h-full " >



        <ul className=" flex flex-col justify-around items-center gap-4">
            {
                classes.map( (fitClass : Classes) => {
                    return (
                        <li key={fitClass.id} className="w-5/6 flex justify-around max-w-80 hover:cursor-pointer ">
                            
                            <img src={fitClass.image} className="w-36 h-36 rounded-large" />
                            <div className="flex flex-col items-start justify-center gap-1"> 
                                <div className=" w-full flex justify-center text-center">
                                    <h3 className="font-DMsans font-bold text-heading max-w-28" > {fitClass.title} </h3>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <LocationSVG />
                                    <p className="font-DMsans font-medium text-heading-sm text-gray-500 " > {fitClass.type} </p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <WeightLiftingSVG height="12" width="12" fill="#86BA43"  />
                                    <p className="font-DMsans font-medium text-heading-sm text-gray-500 " > {fitClass.instructor.name} </p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <div >
                                        <HeartSVG />
                                    </div>
                                    <p className="font-DMsans font-medium text-heading-sm text-gray-500 " > {fitClass.level} </p>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ClassesList