import { ActivitiesRepository } from "../domain/activitiesRepository";

export class DeleteActivity{
    constructor(
        private activitieRepository: ActivitiesRepository
    ){}

    async run(id:number){
        return await this.activitieRepository.delete(id)
    }
}