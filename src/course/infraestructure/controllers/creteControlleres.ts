import { ResponseData } from "../../../utils/response/response";
import { CreateCourse } from "../../aplication/create";

export class CreateCourseController{
    constructor(
        private createCourse: CreateCourse,
        private responseData: ResponseData
    ){}

    async run({body}:any){
        try{
            const course = await this.createCourse.run(
                body.title,
                body.description,
                body.ownerId,
                body.section,
                body.subject,
                body.areaId
            )

            const result = this.responseData.run(true,"Curso creado con exito",course)

            return {
                status:200,
                success:true,
                result
            }
            
        }catch(e){
            const result = this.responseData.run(false,"Ocurrio un error al crear el curso")
            const error = e as Error
            return {
                status: 500,
                success:false,
                msg:error.message
            }
        }
    }
}