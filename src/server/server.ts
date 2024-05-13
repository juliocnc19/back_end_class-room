import { Elysia } from "elysia";
import { useRouter } from "../user/userRouter";

export class Server {
  private app:Elysia

  constructor(){
    this.app = new Elysia()
    this.app.group('/api/v1',(app)=>
        app.use(useRouter)
    )
  }

  public start(){
    this.app.listen(3000,()=> console.log("corriendo en el puerto 3000"))
  }
}