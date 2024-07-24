export type User = {
    id: number,
    name: string,
    email: string,
    residence: string,
    age: number,
    weight: number,
    height: number,
    activity: string,
    image: string,
    kcal: number,
    teacher? : {
        teacherId : number ;
        userId : number
        bio : string
        professionalTitle : string 
        yearsExperience : number
        classType : string
        isActive : boolean
    }
    new_password?: string,
    current_password?: string,  
    auth?: boolean 
    password?: string,
}

export type NutriAndPhysioType = {
    id: number,
    name: string,
    residence: string,
    email: string,
    image: string,
    phone: number,
    description: string
}


export interface APIUsers {
    UserId:            number;
    Name:              string;
    Email:             string;
    RolId:             number;
    Age:               number;
    Residence:         string;
    PhysicalCondition: string;
    ActivityLevel:     string;
    Weight:            number;
    Height:            number;
    Goals:             string;
    Preferences:       string;
    IsActive:          boolean;
    Image:             string;
    Calories:          number;
    Teacher:           APITeacher;
}

export interface APITeacher {
    TeacherId:         number;
    UserId:            number;
    Bio:               string;
    ProfessionalTitle: string;
    YearsExperience:   number;
    ClassType:         string;
    IsActive:          boolean;
}
