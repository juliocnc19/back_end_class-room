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
import { JoinToCourse } from "../course/aplication/joinToCourse";
import { DeleteUserOfCourse } from "../course/aplication/deleteUserOfCourse";
import { CreateCourseController } from "../course/infraestructure/controllers/creteControlleres";
import { FindOneController } from "../course/infraestructure/controllers/findControllers";
import { FindManyController } from "../course/infraestructure/controllers/findManyController";
import { DeleteCourseController } from "../course/infraestructure/controllers/deleteControllers";
import { UpdateCourseController } from "../course/infraestructure/controllers/updateController";
import { FindUsersOfCourseController } from "../course/infraestructure/controllers/findUserOfCourseController";
import { JoinToCourseCotroller } from "../course/infraestructure/controllers/joinToCourseController";
import { DeleteUserOfCourseController } from "../course/infraestructure/controllers/deleteUserOfCourseController";

//Activities
import { ActivitiesRepository } from "../activities/domain/activitiesRepository";
import { CreateActivity } from "../activities/aplication/create";
import { FindManyActivity } from "../activities/aplication/findMany";
import { FindOneActivity } from "../activities/aplication/findOne";
import { DeleteActivity } from "../activities/aplication/delete";
import { UpdateActivity } from "../activities/aplication/update";
import { CreateActivityController } from "../activities/infraesctructure/controllers/createController";
import { FindManyActivityController } from "../activities/infraesctructure/controllers/findManyController";
import { FindOneActivityController } from "../activities/infraesctructure/controllers/findOneController";
import { DeleteActivityController } from "../activities/infraesctructure/controllers/deleteController";
import { UpdateActivityController } from "../activities/infraesctructure/controllers/updateController"

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
const joinToCourse = new JoinToCourse(courseRepository)
const deleteUserOfCourse = new DeleteUserOfCourse(courseRepository)
export const createCourseController = new CreateCourseController(createCourse,responseData)
export const findOneController = new FindOneController(findOne,responseData)
export const findManyController = new FindManyController(findMany,responseData)
export const deleteCourseController = new DeleteCourseController(deleteCourse,responseData)
export const updateCourseController = new UpdateCourseController(update,responseData)
export const findUserOfCourseController = new FindUsersOfCourseController(findUserOfCourse,responseData)
export const joinToCourseController = new JoinToCourseCotroller(joinToCourse,responseData)
export const deleteUserOfCourseController = new DeleteUserOfCourseController(deleteUserOfCourse,responseData)

//Activities

const activitiesRepository = new ActivitiesRepository()
const createActivity = new CreateActivity(activitiesRepository)
const findManyActivity = new FindManyActivity(activitiesRepository)
const findOneActivity = new FindOneActivity(activitiesRepository)
const deleteActivity = new DeleteActivity(activitiesRepository)
const updateActivity = new UpdateActivity(activitiesRepository)
export const createActivityController = new CreateActivityController(createActivity,responseData)
export const findManyActivityController = new FindManyActivityController(findManyActivity,responseData)
export const findOneActivityController = new FindOneActivityController(findOneActivity,responseData)
export const deleteActivityController = new DeleteActivityController(deleteActivity,responseData)
export const updateActivityController = new UpdateActivityController(updateActivity,responseData)