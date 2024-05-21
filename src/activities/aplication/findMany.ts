import { ActivitiesRepository } from "../domain/activitiesRepository";

export class FindManyActivity{
    constructor(
        private activitieRepository: ActivitiesRepository
    ){}

    async run(course_id:number){
        return await this.activitieRepository.findMany(course_id)
    }
}