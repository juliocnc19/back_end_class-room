import { ResponseData } from "../../../utils/response/response";
import { Createuser } from "../../aplication/create";

export class CreateUserController {
  constructor(
    private createUser: Createuser,
    private responseData: ResponseData
  ) {}

  async run({ body }: any) {
    try {
      const user = await this.createUser.run(
        body.email,
        body.password,
        body.user_name,
        body.genderId,
        body.phone,
        body.name,
        body.last_name,
      );
      
      const result = this.responseData.run(true,"Usuario registrado con exit",user)

      return {
        status: 200,
        success:true,
        result
      };

    } catch (e) {
      const result = this.responseData.run(false,"Ocurrio un error al crear el usuario")
      const error = e as Error;
      return {
        status: 500,
        success:false,
        msg: error.message,
        result
      };
    }
  }
}
