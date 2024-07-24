export interface ScheduledClasses {
  id: number;
  image: string;
  title: string;
  length: number;
  calories: number;
  hour: string;
  classId : number;
  classTimeId : number
  classPrice : number //cambiar a number cuando se mande al back
  classDate? : string
}

export interface APIScheduledClases {
  ScheduleId: number;
  ClassId: number;
  WeekdayId: number;
  ClassTimeId: number;
  Class: Class;
  Weekday: Weekday;
  ClassTime: ClassTime;
}

interface Class {
  Title: string;
  Description: string;
  Calories: number;
  Price: string;
  Image: string;
  Duration : number;
  Teacher: Teacher;
  LevelClass: LevelClassClass;
  TypeClass: LevelClassClass;
  StatusClass: LevelClassClass;
}

interface LevelClassClass {
  Description: string;
}

interface Teacher {
  ProfessionalTitle: null;
  Bio: null;
  YearsExperience: null;
  User: Weekday;
}

interface Weekday {
  Name: string;
}

interface ClassTime {
  Time: string;
}
