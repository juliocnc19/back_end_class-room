import { IActivities } from "../domain/IActivities";

export class MyActivities{
    constructor(
        private activitiesRepository: IActivities
    ){}

    async run(id:number){
        console.log("llego a este")
        const res = await this.activitiesRepository.myActivities(id)
        if(res==0) throw new Error("Usuario no existe")
        return res
    }
}