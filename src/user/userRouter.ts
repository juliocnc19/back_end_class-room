import { Elysia,t } from "elysia";
import { createUserController, loginController, findManyUsersController } from "../server/dependencies";


export const useRouter = new Elysia({prefix: '/users'})
    .post('/register',createUserController.run.bind(createUserController),{
        detail: {
            tags: ['Auth']
          },
          body:t.Object({
            email:t.String(),
            password:t.String(),
            user_name:t.String(),
            genderId:t.Number(),
            phone:t.String(),
            name:t.String(),
            last_name:t.String(),
        })
   
    })
    .post('/login',loginController.run.bind(loginController),{
        detail: {
            tags: ['Auth']
          },
            body:t.Object({
                email:t.String(),
                password:t.String(),
            })
    })

    .get("/",findManyUsersController.run.bind(findManyUsersController),{
        detail:{
            tags:["Auth"]
        }
    })