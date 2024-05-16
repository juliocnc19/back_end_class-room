import { Elysia } from "elysia";
import { useRouter } from "../user/userRouter";
import { swagger } from '@elysiajs/swagger'

export class Server {
  private app:Elysia

  constructor(){
    this.app = new Elysia()
    this.app.derive(({headers})=>{
      const auth = headers['authorization']
      return {
        token: auth?.startsWith("Bearer ") ? auth.slice(7) : null
      }
    })
    this.app.use(swagger(
      {
          documentation: {
            info: {
              title: 'Classroom API',
              version: '1.0.0'
          },
            tags: [
              { name: 'App', description: 'General endpoints' },
              { name: 'Auth', description: 'Authentication endpoints' }
            ]
          }
        }
  )).group('/api/v1',(app)=>
        app.use(useRouter)
    )
  }

  public start(){
    this.app.listen(3000,()=> console.log("corriendo en el puerto 3000"))
  }
}