import { ResponseData } from "../utils/response/response";

//Users
import { UserRepository } from "../user/infraestructure/userRepository";
import { Createuser } from "../user/aplication/create";
import { FindManyUsers } from "../user/aplication/finMany";
import { CreateUserController } from "../user/infraestructure/controllers/createController";
import { Hash } from "../services/hash";
import { LoginController } from "../user/infraestructure/controllers/loginController";
import { FindManyUsersController } from "../user/infraestructure/controllers/findManyController";
import { LoginUser } from "../user/aplication/login";
//import { Jwt } from "../services/jwt";

//Courses
import { CourseRepository } from "../course/domain/courseRepository";
import { CreateCourse } from "../course/aplication/create";
import { FindManyCourse } from "../course/aplication/findMany";
import { FindOneCourse } from "../course/aplication/findOne";
import { DeleteCourse } from "../course/aplication/delete";
import { UpdateCourse } from "../course/aplication/update";
import { FindUserOfCourse } from "../course/aplication/findUserOfCourse";
import { CreateCourseController } from "../course/infraestructure/controllers/creteControlleres";
import { FindOneController } from "../course/infraestructure/controllers/findControllers";
import { FindManyController } from "../course/infraestructure/controllers/findManyController";
import { DeleteCourseController } from "../course/infraestructure/controllers/deleteControllers";
import { UpdateCourseController } from "../course/infraestructure/controllers/updateController";
import { FindUsersOfCourseController } from "../course/infraestructure/controllers/findUserOfCourseController";


const responseData = new ResponseData()

// Users
const userRepository = new UserRepository()
const findManyUser = new FindManyUsers(userRepository)
//const jwt = new Jwt()
const hash = new Hash()
const createUser = new Createuser(userRepository,hash)
const loginUser = new LoginUser(userRepository,hash)
export const createUserController = new CreateUserController(createUser,responseData)
export const loginController = new LoginController(loginUser,responseData)
export const findManyUsersController = new FindManyUsersController(findManyUser,responseData)

//Courses
const courseRepository = new CourseRepository()
const createCourse = new CreateCourse(courseRepository)
const findMany = new FindManyCourse(courseRepository)
const findOne = new FindOneCourse(courseRepository)
const update = new UpdateCourse(courseRepository)
const deleteCourse = new DeleteCourse(courseRepository)
const findUserOfCourse = new FindUserOfCourse(courseRepository)
export const createCourseController = new CreateCourseController(createCourse,responseData)
export const findOneController = new FindOneController(findOne,responseData)
export const findManyController = new FindManyController(findMany,responseData)
export const deleteCourseController = new DeleteCourseController(deleteCourse,responseData)
export const updateCourseController = new UpdateCourseController(update,responseData)
export const findUserOfCourseController = new FindUsersOfCourseController(findUserOfCourse,responseData)