import { Elysia } from "elysia";
import { useRouter } from "../user/userRouter";
import { courseRouter } from "../course/courseRouter";
import { swagger } from '@elysiajs/swagger'
import { CourseRepository } from "../course/domain/courseRepository";

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
            ]
          }
        }
  )).group('/api/v1',(app)=>
        app
        .use(useRouter)
        .use(courseRouter)
    )
  }

  public start(){
    this.app.listen(3000,()=> console.log("corriendo en el puerto 3000"))
  }
}