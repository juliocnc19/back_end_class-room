import { ResponseData } from "../../../utils/response/response";
import { DeleteCourse } from "../../aplication/delete";

export class DeleteCourseController{
    constructor(
        private deleteCourse: DeleteCourse,
        private responseData: ResponseData
    ){}

    async run({ params: { id }}:any){
        try{
            const course = await this.deleteCourse.run(Number(id))
            const result = this.responseData.run(true,"Curso eliminado correctamente",course)
            return {
                status:200,
                success:true,
                result
            }
        }catch(e){
            const result = this.responseData.run(false,"Ocurrio un error al eliminar el curso")
            const error = e as Error
            return {
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}