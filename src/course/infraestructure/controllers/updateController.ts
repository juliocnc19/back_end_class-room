import { UpdateCourse } from "../../aplication/update";

export class UpdateCourseController{
    constructor(
        private updateCourse: UpdateCourse
    ){}

    async run({body}:any){
        try{
            const newCourse = await this.updateCourse.run(body)

            return {
                status:200,
                success:true,
                data:newCourse
            }

        }catch(e){
            const error = e as Error
            return {
                status:500,
                success:false,
                msg:error.message
            }
        }
    }
}