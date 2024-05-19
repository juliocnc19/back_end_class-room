import { ICourse } from "../domain/ICourse";

export class FindOneCourse{
    constructor(
        private courseRepository:ICourse
    ){}

    async run(id:number){
        const course = this.courseRepository.findOne(id)
        if(!course) throw new Error("Course not found")
        return course
    }
}