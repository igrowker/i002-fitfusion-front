import { Teacher } from "../types/classesTypes";



export const adaptInstructorFormat = (instructor : Teacher) => {
    return {
        id: instructor.TeacherId ,
        user_id: instructor.UserId ,
        name: instructor.User.Name ,
        bio: instructor.Bio   ,
        professional_title: instructor.ProfessionalTitle   ,
        years_experience: instructor.YearsExperience   ,
        class_type: instructor.ClassType ,
    }
}