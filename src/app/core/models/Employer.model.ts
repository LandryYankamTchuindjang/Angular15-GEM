import { Person } from "./persons.models";

class Employe {
    constructor(
        public id?: number,
        public enterpriseID?: number,
        public user?:Person
        
    ) {}
}
