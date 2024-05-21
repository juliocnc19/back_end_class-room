import { ActivitiesRepository } from "../domain/activitiesRepository";

export class CreateActivity{
    constructor(
        private activitieRepository: ActivitiesRepository
    ){}

    async run(course_id:number, title: string, description: string, grade: number, start_date: Date, end_date: Date, email: string, status_id: number){
        return await this.activitieRepository.create(course_id,title,description,grade,start_date,end_date,email,status_id)
    }
}