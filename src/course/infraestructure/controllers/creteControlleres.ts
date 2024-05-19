import { CreateCourse } from "../../aplication/create";

export class CreateCourseController{
    constructor(
        private createCourse: CreateCourse
    ){}

    async run({body}:any){
        try{
            const course = await this.createCourse.run(
                body.title,
                body.description,
                body.ownerId,
                body.section,
                body.subject,
                body.areaId
            )
            return {
                status:200,
                success:true,
                data:course
            }
            
        }catch(e){
            const error = e as Error
            return {
                status: 500,
                success:false,
                msg:error.message
            }
        }
    }
}