import { LoginUser } from "../../aplication/login";

export class LoginController{
    constructor(
        private loginUser:LoginUser
    ){}

    async run({body}:any){
        try{
            const user =  await this.loginUser.run(body.email,body.password)
            return {
                status: 200,
                user,
                msg:"User logged in"
            }
        }catch(e){
            const error = e as Error
            return {
                status: 500,
                msg: error.message
            }
        }
        
    }
}