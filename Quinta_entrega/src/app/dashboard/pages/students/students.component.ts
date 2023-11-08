import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/students-dialog/students-dialog.component';
import { Student } from './models';
import { StudentsService } from './servicios/students.service'; // Importa el servicio
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnDestroy {
  students: Student[] = [];
  total: number = 0;
  totalSubscription: Subscription;

  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService // Inyecta el servicio
  ) {
    this.studentsService.getStudents().subscribe((data) => {
      this.students = data;
    });

    this.totalSubscription = this.studentsService.getTotal().subscribe({
      next: (v) => {
        this.total = v;
      },
    });
  }

  ngOnDestroy(): void {
    this.totalSubscription.unsubscribe();
  }
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
