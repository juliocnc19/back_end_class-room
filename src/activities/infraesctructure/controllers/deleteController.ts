import { ResponseData } from "../../../utils/response/response";
import { DeleteActivity } from "../../aplication/delete";

export class DeleteActivityController{
    constructor(
        private deleteActivity: DeleteActivity,
        private responseData: ResponseData
    ){}

    async run({params:{id}}:any){
        try{
            const activityDeleted = await this.deleteActivity.run(Number(id))
            const result = this.responseData.run(true,"Actividad eliminada con exito",activityDeleted)
            return {
                status: 200,
                success:true,
                result
            }
        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al eliminar la actividad")
            return {
                status: 500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}