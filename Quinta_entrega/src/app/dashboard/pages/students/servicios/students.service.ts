import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Student {
  id: number;
  name: string;
  lastName: string;
  email: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentsData: Student[] = 
  [
    {
          id: 1,
          name: 'Maxwell',
          lastName: 'Nosferatu',
          email: 'maxwelln@gmail.com',
          age: 25
       },
       {
          id: 2,
          name: 'Evelyn',
          lastName: 'Howler',
          email: 'evelynh@gmail.com',
          age: 30
       },
       {
          id: 3,
          name: 'Cassandra',
          lastName: 'Lycan',
          email: 'cassandral@gmail.com',
          age: 30
       },
       {
          id: 4,
          name: 'Lucius',
          lastName: 'Phantomkin',
          email: 'luciusp@gmail.com',
          age: 25
       },
       {
          id: 5,
          name: 'Isadora',
          lastName: 'Gorgonov',
          email: 'isadorag@gmail.com',
          age: 32
       },
       {
          id: 6,
          name: 'Griffin',
          lastName: 'Lestat',
          email: 'griffinl@gmail.com',
          age: 60
       },
       {
          id: 7,
          name: 'Silvia',
          lastName: 'Kraken',
          email: 'silviak@gmail.com',
          age: 25
       },
       {
          id: 8,
          name: 'Rex',
          lastName: 'Mumford',
          email: 'rexm@gmail.com',
          age: 26
       },
       {
          id: 9,
          name: 'Vesper',
          lastName: 'Beetlejuice',
          email: 'vesperb@gmail.com',
          age: 72
       },
       {
          id: 10,
          name: 'Dorian',
          lastName: 'Howlsworth',
          email: 'dorianh@gmail.com',
          age: 55
       }
       
      ];

  constructor() { }

  getTotal(): Observable<number> {
    return interval(80);
  }

  getStudents(): Observable<Student[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.studentsData);
      subscriber.complete();
    });
  }

  // Corrección: Cambiar el tipo de retorno a 'void'
  deleteStudent(studentId: number): void {
    this.studentsData = this.studentsData.filter((student) => student.id !== studentId);
  }
}
