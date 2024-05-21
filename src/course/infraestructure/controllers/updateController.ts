import { ResponseData } from "../../../utils/response/response";
import { UpdateCourse } from "../../aplication/update";

export class UpdateCourseController{
    constructor(
        private updateCourse: UpdateCourse,
        private responseData: ResponseData
    ){}

    async run({body}:any){
        try{
            const newCourse = await this.updateCourse.run(body)
            const result = this.responseData.run(true,"Curso actuliazado con exito",newCourse)
            return {    
                status:200,
                success:true,
                result
            }

        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al actulizar el curso")
            return {
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}