import { Person } from "./persons.models";

export class Administrator {
    constructor(
        public id?: number,
        public login?:string,
        public password?:string,
        public status?:boolean,
        public person?: Person
    ) {}
}
