import { ResponseData } from "../../../utils/response/response";
import { UpdateActivity } from "../../aplication/update";

export class UpdateActivityController{
    constructor(
        private updateActivity: UpdateActivity,
        private responseData: ResponseData
    ){}

    async run({body}:any){
        try{
            const activity = await this.updateActivity.run(body)
            const result = this.responseData.run(true,"Actividad actulizada con exito",activity)
            return {
                status: 200,
                success:true,
                result
            }
        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al actualizar la actividad")
            return {
                status: 200,
                success:false,
                msg:error.message,
                result
            }
        }

    }
}