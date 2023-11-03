import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/students-dialog/students-dialog.component';
import { Student } from './models';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

students: Student[] = [
  {
    id: 1,
    name: 'Maxwell',
    lastName: 'Nosferatu',
    email: 'maxwelln@gmail.com'
 },
 {
    id: 2,
    name: 'Evelyn',
    lastName: 'Howler',
    email: 'evelynh@gmail.com'
 },
 {
    id: 3,
    name: 'Cassandra',
    lastName: 'Lycan',
    email: 'cassandral@gmail.com'
 },
 {
    id: 4,
    name: 'Lucius',
    lastName: 'Phantomkin',
    email: 'luciusp@gmail.com'
 },
 {
    id: 5,
    name: 'Isadora',
    lastName: 'Gorgonov',
    email: 'isadorag@gmail.com'
 },
 {
    id: 6,
    name: 'Griffin',
    lastName: 'Lestat',
    email: 'griffinl@gmail.com'
 },
 {
    id: 7,
    name: 'Silvia',
    lastName: 'Kraken',
    email: 'silviak@gmail.com'
 },
 {
    id: 8,
    name: 'Rex',
    lastName: 'Mumford',
    email: 'rexm@gmail.com'
 },
 {
    id: 9,
    name: 'Vesper',
    lastName: 'Beetlejuice',
    email: 'vesperb@gmail.com'
 },
 {
    id: 10,
    name: 'Dorian',
    lastName: 'Howlsworth',
    email: 'dorianh@gmail.com'
 }
 
]


constructor(
  private matDialog: MatDialog
) {}
  openStudentsDialog(): void {
    this.matDialog
    .open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => {
        if (!!v) {
          this.students = [
            ...this.students,
            {
              ...v,
              id: new Date().getTime(),
            }
          ]
        }


      }
    })
  }

  onEditStudent (student: Student): void {
    this.matDialog.open(UsersDialogComponent, {
      data:student,
    }).afterClosed().subscribe({
      next: (v) => {
      if (!!v) {
        this.students = this.students.map((s) => 
        s.id === student.id ? {...student, ...v} : s
        )
      } 
      }
    })
   }

  onDeleteStudent(studentId: number): void {
    this.students = this.students.filter((s) => s.id !== studentId);
  }

}
