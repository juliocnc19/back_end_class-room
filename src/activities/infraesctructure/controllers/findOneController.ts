import { ResponseData } from "../../../utils/response/response";
import { FindOneActivity } from "../../aplication/findOne";

export class FindOneActivityController{
    constructor(
        private findOneActivity: FindOneActivity,
        private responseData: ResponseData
    ){}

    async run({params:{id}}:any){
        try{
            const activity = await this.findOneActivity.run(Number(id))
            const result = this.responseData.run(true,"Actividad obtenida con exito",activity)
            return {
                status: 200,
                success:true,
                result
            }
        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al obtener la actividad")
            return {
                status: 500,
                success:false,
                msg:error.message,
                result
            }
        }

    }
}