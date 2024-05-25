import { ResponseData } from "../../../utils/response/response";
import { DeleteUserOfCourse } from "../../aplication/deleteUserOfCourse";

export class DeleteUserOfCourseController{
    constructor(
        private deleteUserOfCourse: DeleteUserOfCourse,
        private responseData: ResponseData
    ){}

    async run({params:{idUser,idCourse}}:any){
        try{
            const res = await this.deleteUserOfCourse.run(Number(idUser),Number(idCourse))
            const result = this.responseData.run(true,"Usuario eliminado del curso con exito",res)
            return {
                status:200,
                success:true,
                result
            }
        }catch(e){
            const error = e as Error
            const result = this.responseData.run(false,"Error al eliminar usuario del curso")
            return {
                status:500,
                success:false,
                msg:error.message,
                result
            }
        }
    }
}