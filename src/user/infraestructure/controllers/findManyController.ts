import { ResponseData } from "../../../utils/response/response";
import { FindManyUsers } from "../../aplication/finMany";

export class FindManyUsersController{
    constructor(
        private findManyUser: FindManyUsers,
        private responseData: ResponseData
    ){}

    async run(){
        try{
            const users = await this.findManyUser.run()
            const result = this.responseData.run(true,"Lista de usuarios",users)
            return{
                status:200,
                success:true,
                result
            }
        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Ocurrio un error al listar los usuarios")
            return{
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}