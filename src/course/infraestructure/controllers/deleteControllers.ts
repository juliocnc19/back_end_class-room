import { DeleteCourse } from "../../aplication/delete";

export class DeleteCourseController{
    constructor(
        private deleteCourse: DeleteCourse
    ){}

    async run({ params: { id }}:any){
        try{
            const course = await this.deleteCourse.run(Number(id))
            return {
                status:200,
                success:true,
                data:course
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