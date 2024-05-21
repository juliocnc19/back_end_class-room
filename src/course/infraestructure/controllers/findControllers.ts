import { ResponseData } from "../../../utils/response/response";
import { FindOneCourse } from "../../aplication/findOne";

export class FindOneController{
    constructor(
        private findOneCourse: FindOneCourse,
        private responseData: ResponseData
    ){}

    async run({ params: { id }}:any){
        try{
            const course = await this.findOneCourse.run(Number(id))
            const result = this.responseData.run(true,"Curso encontrado con exito",course)
            return {
                status:200,
                success:true,
                result
            }
        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al encontrar el curso")
            return {
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}