import { nanoid } from 'nanoid';

export interface ICourse {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
}

export class Course implements ICourse {
    constructor(
        public id: string = nanoid(5),
        public name: string = "",
        public startDate: Date = new Date(),
        public endDate: Date = new Date(),
    ) {}
}
