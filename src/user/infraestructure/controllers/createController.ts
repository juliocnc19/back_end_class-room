import { Createuser } from "../../aplication/create";

export class CreateUserController{
    constructor(private createUser:Createuser){}

    async run({body}:any){
        try{
            const user = await this.createUser.run(body.email,body.password,body.user_name)
            return {
                status: 200,
                data:user
            }
        }catch(e){
            const error = e as Error
            return {
                status:500,
                message:error.message,

            }
        }
    }
}