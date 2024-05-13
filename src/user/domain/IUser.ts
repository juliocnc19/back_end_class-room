import { User } from "./User";

export interface IUser{
    create(email:string,password:string,user_name:string):Promise<User>
    find(email:string):Promise<User | null>
}