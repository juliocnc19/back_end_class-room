import { Elysia } from "elysia";
import { useRouter } from "../user/userRouter";
import { courseRouter } from "../course/courseRouter";
import { activityRouter } from "../activities/activitiesRoutes";
import { swagger } from '@elysiajs/swagger'

export class Server {
  private app:Elysia

  constructor(){
    this.app = new Elysia()
    this.app.use(swagger(
      {
          documentation: {
            info: {
              title: 'Classroom API',
              version: '1.0.0'
          },
            tags: [
              { name: 'App', description: 'General endpoints' },
              { name: 'Auth', description: 'Authentication endpoints' },
              { name: 'Course', description: 'Course endpoints' },
              { name: 'Activity', description: 'Activity endpoints' },
            ]
          }
        }
  )).group('/api/v1',(app)=>
        app
        .use(useRouter)
        .use(courseRouter)
        .use(activityRouter)
    )
  }

  public start(){
    this.app.listen(3000 || process.env.PORT,()=> console.log("corriendo en el puerto 3000"))
  }
}