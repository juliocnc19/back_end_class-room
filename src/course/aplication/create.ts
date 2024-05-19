import { ICourse } from "../domain/ICourse";

export class CreateCourse{
    constructor(
        private courseRepository:ICourse
    ){}

    async run(title:string,description:string,ownerId:number,section:string,subject:string,areaId:number){
        return this.courseRepository.create(title,description,ownerId,section,subject,areaId)
    }
}