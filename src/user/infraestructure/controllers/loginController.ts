import { ResponseData } from "../../../utils/response/response";
import { LoginUser } from "../../aplication/login";

export class LoginController{
    constructor(
        private loginUser:LoginUser,
        private responseData: ResponseData
    ){}

    async run({body}:any){
        try{
            const user =  await this.loginUser.run(body.email,body.password)

            const result = this.responseData.run(true,"Autenticacion exitosa",user)

            return {
                status: 200,
                success:true,
                result
            }
        }catch(e){
            const result = this.responseData.run(false,"Ocurrio un error al iniciar sesion")
            const error = e as Error
            return {
                status: 500,
                success:false,
                msg: error.message,
                result
            }
        }
        
    }
}