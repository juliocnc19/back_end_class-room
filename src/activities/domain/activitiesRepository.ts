import { Activities } from "./Activities";
import { IActivities } from "./IActivities";
import { PrismaClient } from "@prisma/client";
import { IActivitieUpdate } from "./IActivitieUpdate";

export class ActivitiesRepository implements IActivities{

    private db: PrismaClient

    constructor(){
        this.db = new PrismaClient()
    }

    async create(course_id:number, title: string, description: string, grade: number, start_date: string, end_date: string, email: string, status_id: number): Promise<Activities> {
        const startDate = start_date
        const endDate = end_date
        const activitie = await this.db.activities.create({
            data:{
                course_id,
                title,
                description,
                grade,
                start_date:startDate,
                end_date:endDate,
                email,
                status_id

            }
        })

        const couseName = await this.db.course.findUnique({
            where:{
                id:course_id
            }
        })

        const status = await this.db.status.findUnique({
            where:{
                id:status_id
            }
        })

        return new Activities(
            activitie.id,
            activitie.course_id,
            couseName!.title,
            activitie.title,
            activitie.description,
            activitie.grade.toNumber(),
            new Date(activitie.start_date),
            new Date(activitie.end_date),
            activitie.email,
            activitie.status_id,
            status!.status
        )
    }

    async findOne(id: number): Promise<Activities | null> {
        const activitie = await this.db.activities.findUnique({
            include:{
                course:{
                    select:{
                        title:true
                    }
                },
                status:{
                    select:{
                        status:true
                    }
                }
            },
            where:{
                id
            }
        })

        if(!activitie) return null

        return new Activities(
            activitie.id,
            activitie.course_id,
            activitie.course.title,
            activitie.title,
            activitie.description,
            activitie.grade.toNumber(),
            new Date(activitie.start_date),
            new Date(activitie.end_date),
            activitie.email,
            activitie.status_id,
            activitie.status.status
        )
    }

    async findMany(course_id: number): Promise<Activities[] | []> {
        const listActivities:Activities[] = []
        const activities = await this.db.activities.findMany({
            include:{
                course:{
                    select:{
                        title:true
                    }
                },
                status:{
                    select:{
                        status:true
                    }
                }
            },
            where:{
                course_id
            }
        })

        if(!activities || activities.length < 1) return []

        activities.map((a)=>{
            const activity = new Activities(
                a.id,
                a.course_id,
                a.course.title,
                a.title,
                a.description,
                Number(a.grade),
                new Date(a.start_date),
                new Date(a.end_date),
                a.email,
                a.status_id,
                a.status.status
            )

            listActivities.push(activity)
        })
        
        return listActivities
    }

    async update(activitie: IActivitieUpdate): Promise<Activities> {
        const newActivity = await this.db.activities.update({
            where:{
                id:activitie.id
            },
            data:{
                title:activitie.title,
                description:activitie.description,
                grade:activitie.grade,
                start_date:activitie.start_date,
                end_date:activitie.end_date,
                email:activitie.email,
                status_id:activitie.status_id
            }
        })

        const couseName = await this.db.course.findUnique({
            where:{
                id:newActivity.course_id
            }
        })

        const status = await this.db.status.findUnique({
            where:{
                id:newActivity.status_id
            }
        })

        return new Activities(
            newActivity.id,
            newActivity.course_id,
            couseName!.title,
            newActivity.title,
            newActivity.description,
            newActivity.grade.toNumber(),
            new Date(newActivity.start_date),
            new Date(newActivity.end_date),
            newActivity.email,
            newActivity.status_id,
            status!.status
        )
    }

    async delete(id: number): Promise<Activities> {
        const deletedActivity = await this.db.activities.delete({
            where:{
                id
            }
        })

        const couseName = await this.db.course.findUnique({
            where:{
                id:deletedActivity.course_id
            }
        })

        const status = await this.db.status.findUnique({
            where:{
                id:deletedActivity.status_id
            }
        })

        return new Activities(
            deletedActivity.id,
            deletedActivity.course_id,
            couseName!.title,
            deletedActivity.title,
            deletedActivity.description,
            deletedActivity.grade.toNumber(),
            new Date(deletedActivity.start_date),
            new Date(deletedActivity.end_date),
            deletedActivity.email,
            deletedActivity.status_id,
            status!.status
        )
        
    }
}