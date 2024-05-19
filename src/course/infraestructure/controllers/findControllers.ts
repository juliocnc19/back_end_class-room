import { FindOneCourse } from "../../aplication/findOne";

export class FindOneController{
    constructor(
        private findOneCourse: FindOneCourse
    ){}

    async run({ params: { id }}:any){
        try{
            const course = await this.findOneCourse.run(Number(id))
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