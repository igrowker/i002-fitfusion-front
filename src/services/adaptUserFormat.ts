import { APIUsers, User } from "../types/userTypes"



export const adaptUserFormat = (user : APIUsers) : User => {

    if(user.Teacher) {
        return {
    
            id: user.UserId,
            name:user.Name,
            email:user.Email,
            residence:user.Residence,
            age:user.Age,
            weight:user.Weight,
            height:user.Height,
            activity:user.ActivityLevel,
            image:user.Image,
            kcal:user.Calories,
            teacher : {
                teacherId : user.Teacher.TeacherId,
                userId : user.Teacher.UserId,
                bio : user.Teacher.Bio,
                professionalTitle : user.Teacher.ProfessionalTitle,
                yearsExperience : user.Teacher.YearsExperience,
                classType : user.Teacher.ClassType,
                isActive : user.Teacher.IsActive,
            }

        }
        
    }
    return {

        id: user.UserId,
        name:user.Name,
        email:user.Email,
        residence:user.Residence,
        age:user.Age,
        weight:user.Weight,
        height:user.Height,
        activity:user.ActivityLevel,
        image:user.Image,
        kcal:user.Calories,
        
    }

}