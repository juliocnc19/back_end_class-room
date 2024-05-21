import { ActivitiesRepository } from "../domain/activitiesRepository";

export class FindOneActivity{
    constructor(
        private activitieRepository: ActivitiesRepository
    ){}

    async run(id:number){
        const activity = await this.activitieRepository.findOne(id)
        if(!activity) throw new Error("Activity not found")
        return activity
    }
}