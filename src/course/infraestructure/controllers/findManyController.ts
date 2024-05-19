import { FindManyCourse } from "../../aplication/findMany";

export class FindManyController{
    constructor(
        private findManyCourse: FindManyCourse
    ){}

    async run({ params: { ownerId }}:any){
        try{
            const courses = await this.findManyCourse.run(Number(ownerId))
            return {
                status:200,
                success:true,
                data:courses
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