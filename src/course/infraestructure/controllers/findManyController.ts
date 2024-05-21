import { ResponseData } from "../../../utils/response/response";
import { FindManyCourse } from "../../aplication/findMany";

export class FindManyController{
    constructor(
        private findManyCourse: FindManyCourse,
        private responseData: ResponseData
    ){}

    async run({ params: { ownerId }}:any){
        try{
            const courses = await this.findManyCourse.run(Number(ownerId))
            const result = this.responseData.run(true,"lista de cursos por usuario",courses)
            return {
                status:200,
                success:true,
                result
            }
        }catch(e){
            const result = this.responseData.run(false,"Ocurrio un error al listar los curso")
            const error = e as Error
            return {
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}