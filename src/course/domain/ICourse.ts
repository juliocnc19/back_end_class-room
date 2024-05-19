import { Course } from "./Course";

export interface ICourse{
    create(title:string,description:string,ownerId:number,section:string,subject:string,areaId:number):Promise<Course>
    findOne(id:number):Promise<Course | null>
    findMany(ownerId:number):Promise<Array<Course> | []>
    delete(id:number):Promise<Course>
}