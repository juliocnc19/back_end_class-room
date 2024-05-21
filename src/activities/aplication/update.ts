import { ActivitiesRepository } from "../domain/activitiesRepository";
import { IActivitieUpdate } from "../domain/IActivitieUpdate";

export class UpdateActivity{
    constructor(
        private activitieRepository: ActivitiesRepository
    ){}

    async run(activity:IActivitieUpdate){
        return await this.activitieRepository.update(activity)
    }
}