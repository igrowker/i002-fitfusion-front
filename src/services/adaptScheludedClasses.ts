import { APIScheduledClases, ScheduledClasses } from "../types/scheduledClassesTypes";


export const adaptScheludedClasses = (scheduledClasses : APIScheduledClases[]) : ScheduledClasses[] => {

    return scheduledClasses.map((singleClass) => {
        return {
            id: singleClass.ScheduleId ,
            image: singleClass.Class.Image ,
            title: singleClass.Class.Title ,
            length: singleClass.Class.Duration,
            calories: singleClass.Class.Calories ,
            hour: singleClass.ClassTime.Time ,
            classId : singleClass.ClassId,
            classTimeId : singleClass.ClassTimeId,
            classPrice : Number(singleClass.Class.Price), //cambiar a number cuando se mande al back
        }   
    })

}


