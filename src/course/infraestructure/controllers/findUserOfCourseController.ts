import { ResponseData } from "../../../utils/response/response";
import { FindUserOfCourse } from "../../aplication/findUserOfCourse";

export class FindUsersOfCourseController{
    constructor(
        private findUserOfCourse: FindUserOfCourse,
        private responseData: ResponseData
    ){}

    async run({ params: { course_id }}:any){
        console.log(course_id)
        try{
            const course = await this.findUserOfCourse.run(Number(course_id))
            const resutl = this.responseData.run(true,"Usuario de curso ayados con exito",course)
            return{
                status:200,
                success:true,
                resutl
            }

        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurio un error al buscar los usuarios")
            return {
                status:500,
                success: false,
                msg:error.message,
                result
            }
        }
    }
}