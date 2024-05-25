import { ResponseData } from "../../../utils/response/response";
import { JoinToCourse } from "../../aplication/joinToCourse";

export class JoinToCourseCotroller{
    constructor(
        private joinToCourse: JoinToCourse,
        private responseData: ResponseData
    ){}

    async run({body}:any){
        try{
            const res = await this.joinToCourse.run(body.idUser,body.token)
            const result = this.responseData.run(true,"Usuario añadido al curso con exito",res)
            return {
                status:200,
                success:true,
                result
            }

        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al unir el usuario al curso")
            return {
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}