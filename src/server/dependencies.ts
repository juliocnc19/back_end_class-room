//Users
import { UserRepository } from "../user/infraestructure/userRepository";
import { Createuser } from "../user/aplication/create";
import { CreateUserController } from "../user/infraestructure/controllers/createController";
import { Hash } from "../services/hash";
import { LoginController } from "../user/infraestructure/controllers/loginController";
import { LoginUser } from "../user/aplication/login";
//import { Jwt } from "../services/jwt";

//Courses
import { CourseRepository } from "../course/domain/courseRepository";
import { CreateCourse } from "../course/aplication/create";
import { FindManyCourse } from "../course/aplication/findMany";
import { FindOneCourse } from "../course/aplication/findOne";
import { DeleteCourse } from "../course/aplication/delete";
import { CreateCourseController } from "../course/infraestructure/controllers/creteControlleres";
import { FindOneController } from "../course/infraestructure/controllers/findControllers";
import { FindManyController } from "../course/infraestructure/controllers/findManyController";
import { DeleteCourseController } from "../course/infraestructure/controllers/deleteControllers";


// Users
const userRepository = new UserRepository()
//const jwt = new Jwt()
const hash = new Hash()
const createUser = new Createuser(userRepository,hash)
const loginUser = new LoginUser(userRepository,hash)
export const createUserController = new CreateUserController(createUser)
export const loginController = new LoginController(loginUser)

//Courses
const courseRepository = new CourseRepository()
const createCourse = new CreateCourse(courseRepository)
const findMany = new FindManyCourse(courseRepository)
const findOne = new FindOneCourse(courseRepository)
export const deleteCourse = new DeleteCourse(courseRepository)
export const createCourseController = new CreateCourseController(createCourse)
export const findOneController = new FindOneController(findOne)
export const findManyController = new FindManyController(findMany)
export const deleteCourseController = new DeleteCourseController(deleteCourse)