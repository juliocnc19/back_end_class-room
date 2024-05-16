import { UserRepository } from "../user/infraestructure/userRepository";
import { Createuser } from "../user/aplication/create";
import { CreateUserController } from "../user/infraestructure/controllers/createController";
import { Hash } from "../services/hash";
import { LoginController } from "../user/infraestructure/controllers/loginController";
import { LoginUser } from "../user/aplication/login";
import { Jwt } from "../services/jwt";

const userRepository = new UserRepository()
const jwt = new Jwt()
const hash = new Hash()
const createUser = new Createuser(userRepository,hash)
const loginUser = new LoginUser(userRepository,hash,jwt)
export const createUserController = new CreateUserController(createUser)
export const loginController = new LoginController(loginUser)