import { Activities } from "./Activities";
import { IActivitieUpdate } from "./IActivitieUpdate";

export interface IActivities{
    create(course_id:number, title:string,description: string,grade: number,start_date: Date,end_date: Date,email: string,status_id: number):Promise<Activities>
    findOne(id:number):Promise<Activities | null>
    findMany(course_id:number):Promise<Activities[] | []>
    delete(id:number):Promise<Activities>
    update(activitie:IActivitieUpdate):Promise<Activities>
}