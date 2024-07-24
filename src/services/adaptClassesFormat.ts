import { APIClasses } from "../types/classesTypes";

export const adaptClassesformat = (classesList: APIClasses[] ) => {
  const mappedClasses = classesList.map((oneClass: APIClasses) => {
    return {
      id: oneClass.ClassId,
      title: oneClass.Title,
      description: oneClass.Description,
      date: null,
      image: oneClass.Image,
      instructor: {
        id: 1,
        user_id: 1,
        name: oneClass.Teacher.User.Name,
        bio: oneClass.Teacher.Bio,
        professional_title: oneClass.Teacher.ProfessionalTitle,
        years_experience: oneClass.Teacher.YearsExperience,
        class_type: oneClass.TypeClass.Description,
      },
      level: oneClass.LevelClass.Description,
      type: oneClass.TypeClass.Description,
      status: oneClass.StatusClass.Description,
      length: null,
      calories: oneClass.Calories,
      hour: null,
      kcal: oneClass.Calories,
    };
  });
  return mappedClasses;
};

export const adaptClassformat = (oneClass: APIClasses) => {
  return {
    id: oneClass.ClassId,
    title: oneClass.Title,
    description: oneClass.Description,
    date: "",
    image: oneClass.Image,
    instructor: {
      id: oneClass.Teacher.TeacherId,
      user_id: oneClass.Teacher.UserId,
      name: oneClass.Teacher.User.Name,
      bio: oneClass.Teacher.Bio,
      professional_title: oneClass.Teacher.ProfessionalTitle,
      years_experience: oneClass.Teacher.YearsExperience,
      class_type: oneClass.TypeClass.Description,
    },
    level: oneClass.LevelClass.Description,
    type: oneClass.TypeClass.Description,
    status: oneClass.StatusClass.Description,
    length: null,
    calories: oneClass.Calories,
    hour: null,
    kcal: oneClass.Calories,
  };
};
