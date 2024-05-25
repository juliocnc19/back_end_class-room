import { ICourse } from "../domain/ICourse"

export class DeleteUserOfCourse{
    constructor(
        private courseRepository: ICourse
    ){}

    async run(idUser:number,idCourse:number){
        const res = await this.courseRepository.delteUserOfCourse(idUser,idCourse)
        if(res == 0) throw new Error("El usuario no existe")
        if(res == 1) throw new Error("El curso no existe")
        if(!res) throw new Error("Usuario no eliminado")
        return res
    }
}