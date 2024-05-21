import { User } from "../../user/domain/User";

export class Course{
    constructor(
        public id: number,
        public title: string,
        public description:string,
        public ownerId: number,
        public owner_name: string,
        public section: string,
        public subject: string,
        public areaId: number,
        public token: string,
        public areaName: string,
        public users?: any[]
    ){}
}