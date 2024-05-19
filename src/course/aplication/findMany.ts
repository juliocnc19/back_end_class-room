import { ICourse } from "../domain/ICourse";

export class FindManyCourse{
    constructor(
        private courseRepository:ICourse
    ){}

    async run(ownerId:number){
        return this.courseRepository.findMany(ownerId)
    }
}