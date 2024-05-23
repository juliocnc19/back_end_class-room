import { ResponseData } from "../../../utils/response/response";
import { FindManyActivity } from "../../aplication/findMany";

export class FindManyActivityController{
    constructor(
        private findManyActivity: FindManyActivity,
        private responseData: ResponseData
    ){}

    async run({params:{course_id}}:any){
        try{
            const listActivities = await this.findManyActivity.run(Number(course_id))
            const result = this.responseData.run(true,"Lista de actividades por curso",listActivities)
            return {
                status:200,
                success:true,
                result
            }
        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al listar actividades por curso")
            return {
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}