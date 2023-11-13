import { nanoid } from "nanoid";

export interface IStudent {
    id: string;
    idnumber: number;
    active: boolean;
    name: string;
    surname: string;
    email: string;
}

export class Student implements IStudent {

    constructor(
        public id: string = nanoid(5),
        public idnumber: number = 0,
        public active: boolean = true,
        public name: string = "",
        public surname: string = "",
        public email: string = "",
    ) {}
}
