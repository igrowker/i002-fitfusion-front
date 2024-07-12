export type Classes = {
  id: number;
  title: string;
  description: string;
  date: string | null ;
  image: string;
  instructor: Instructor;
  level: ClassesLevel;
  type: ClassesType;
  status: ClassesStatus;
  length: string | null;
  calories: number;
  hour: string | null ;
  kcal: number;
};

export type Instructor = {
  id: number;
  user_id: number;
  name: string;
  bio: string | null ;
  professional_title: string | null ;
  years_experience: number | null ;
  class_type: string | null | undefined;
  image? : string | null | undefined 
};

type ClassesType = "Aire libre" | "En casa" | "En gimnasio" | "Virtual";
type ClassesLevel = "Suave" | "Fuerte";
type ClassesStatus = "Disponible" | "No disponible";


export interface APIClasses {
    ClassId:     number;
    Title:       string;
    Description: string;
    Calories:    number;
    Price:       string;
    Image:       string;
    Teacher:     Teacher;
    LevelClass:  ClassLevel;
    TypeClass:   ClassTypes;
    StatusClass: ClassStatus;
}

export interface ClassLevel {
    Description: ClassesLevel;
}
export interface ClassTypes {
    Description: ClassesType;
}
export interface ClassStatus {
    Description: ClassesStatus;
}

export interface Teacher {
    TeacherId : number;
    UserId : number ;
    ProfessionalTitle: string;
    Bio:               string;
    YearsExperience:   number;
    User:              User;
    ClassType? : string | null | undefined
}

export interface User {
    Name: string;
    Image? : string
}