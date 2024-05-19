import { CourseRepository } from "../domain/courseRepository";
import { ICourseUpdate } from "../domain/ICouseUpdate";

export class UpdateCourse{
    constructor(
        private courseRepository:CourseRepository
    ){}

    async run(course:ICourseUpdate){
        return this.courseRepository.update(course)
    }
}