import { CourseRepository } from "../domain/courseRepository";

export class FindUserOfCourse{
    constructor(
        private courseRepository: CourseRepository
    ){}

    async run(id:number){
        console.log(id)
        return await this.courseRepository.findUserOfCourse(id)
    }
}