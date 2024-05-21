export class Activities{
    constructor(
        public id: number,
        public course_id: number,
        public course_name: string,
        public title: string,
        public description: string,
        public grade: number,
        public start_date: Date,
        public end_date: Date,
        public email: string,
        public status_id: number,
        public status_name: string,
    ){}
}