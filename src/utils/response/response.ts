export class ResponseData{
    constructor(

    ){}

    run(status:boolean,message:string,data?:any){
        return {
            status,
            message,
            data: data? data : null
        }
    }
}