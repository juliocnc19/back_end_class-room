import type { IUser } from "../domain/IUser";
import type { IHash } from "../../services/interfaces/IHash";

export class Createuser{
    constructor(
        private userRepository:IUser,
        private hash: IHash
    ){}

    async run(email:string, password:string,user_name:string,genderId:number,phone:string,name:string,last_name:string){
        const hashedPassword = await this.hash.hash(password)
        return await this.userRepository.create(email,hashedPassword,user_name,genderId,phone,name,last_name)
    }
}