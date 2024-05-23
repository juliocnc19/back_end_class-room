import { ResponseData } from "../../../utils/response/response";
import { CreateActivity } from "../../aplication/create";

export class CreateActivityController{
    constructor(
        private createActivity: CreateActivity,
        private responseData: ResponseData
    ){}

    async run({body}:any){
        try{
            const activity = await this.createActivity.run(
                body.course_id,
                body.title,
                body.description,
                body.grade,
                body.start_date,
                body.end_date,
                body.email,
                body.status_id
            )
    
            const result = this.responseData.run(true,"Actividad creada con exito",activity)
            return {
                status:200,
                success:500,
                result
            }
        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al crear la actividad")
            return {
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
        
}