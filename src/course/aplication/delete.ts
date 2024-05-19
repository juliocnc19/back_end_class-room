import { ICourse } from "../domain/ICourse";

export class DeleteCourse{
    constructor(
        private courseRepository:ICourse
    ){}

    async run(id:number){
        return this.courseRepository.delete(id)
    }
}