import { ResponseData } from "../../../utils/response/response";
import { MyActivities } from "../../aplication/myActivities";

export class MyActivitiesController{
    constructor(
        private myactivities: MyActivities,
        private responseData: ResponseData
    ){}

    async run({params:{idUser}}:any){
        console.log("controller")
        try{
            const res = await this.myactivities.run(Number(idUser))
            const result = this.responseData.run(true,"Mi lista de actividades",res)
            return {
                status:200,
                success:true,
                result
            }
            
        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al querer listar mis actividades")
            return {
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}