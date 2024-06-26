import { Course } from "./Course";
import { ICourseUpdate } from "./ICouseUpdate";

export interface ICourse{
    create(title:string,description:string,ownerId:number,section:string,subject:string,areaId:number):Promise<Course>
    findOne(id:number):Promise<Course | null>
    findMany(ownerId:number):Promise<Array<Course> | []>
    delete(id:number):Promise<Course>
    update(couse:ICourseUpdate):Promise<Course>
    findUserOfCourse(course_id:number):Promise<Course>
    joinToCourse(id:number,token:string):Promise<Course | number>
    delteUserOfCourse(idUser:number,idCourse:number):Promise<boolean | number>
}