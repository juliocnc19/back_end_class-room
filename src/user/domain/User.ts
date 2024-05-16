export class User{
    constructor(
        public id:string,
        public email:string,
        public password:string,
        public user_name:string,
        public create_date:string,
        public genderId:number,
        public phone:string,
        public name:string,
        public last_name:string,
        public token?: string
    ){}

    setToken(token:string){
        this.token = token
    }
}
