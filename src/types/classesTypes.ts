export type Classes = {
    id: number ; 
    title: string ; 
    description: string ; 
    image: string  ;
    instructor: Instructor ;
    level: ClassesLevel ;
    type: ClassesType ;
    status : ClassesStatus ;
    length : string;
    calories : string;
    hour : string;
}


export type Instructor = {
    id: number  ;
    user_id: number ;
    name : string  ;
    bio: string ;
    professional_title: string ;
    years_experience: string ;
    class_type: string ;
}

type ClassesType = 'Aire libre' | 'En casa' | 'En gimnasio' | 'Virtual'  
type ClassesLevel = 'Suave' | 'Fuerte'   
type ClassesStatus = 'Disponible' | 'No disponible' 