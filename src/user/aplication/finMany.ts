import { UserRepository } from "../infraestructure/userRepository";

export class FindManyUsers{
    constructor(
        private userRepository: UserRepository
    ){}

    async run(){
        return this.userRepository.findMany()
    }
}