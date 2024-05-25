import { ICourse } from "../domain/ICourse";

export class JoinToCourse{
    constructor(
        private courseRepository: ICourse
    ){}

    async run(id:number,token:string){
        const res = await this.courseRepository.joinToCourse(id,token)
        if(res == 0) throw new Error("Usuario no existe")
        if(res == 1) throw new Error("token invalido")
        return res
    }
}