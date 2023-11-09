import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/students-dialog/students-dialog.component';
import { Student } from './models';
import { StudentsService } from './servicios/students.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnDestroy {
  students$: Observable<Student[]>; // Utiliza un observable para estudiantes
  mayores$: Observable<Student[]> | undefined; // Observable para estudiantes mayores
  total: number = 0;
  totalSubscription: Subscription;

  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService
  ) {
    this.students$ = this.studentsService.getStudents();
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
            // Recargar datos de estudiantes después de agregar uno nuevo
            this.students$ = this.studentsService.getStudents();
          }
        }
      });
  }

  // Filtrar estudiantes mayores de 30 años
  filterMayores(): void {
    this.mayores$ = this.students$.pipe(
      map((data) => data.filter((student) => student.age > 30))
    );
  }

  onEditStudent(student: Student): void {
    this.matDialog.open(UsersDialogComponent, { data: student })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            // Actualizar los datos del estudiante editado
            this.students$ = this.studentsService.getStudents();
          }
        }
      });
  }

  onDeleteStudent(studentId: number): void {
    // Eliminar estudiante y recargar datos
    this.studentsService.deleteStudent(studentId);
    this.students$ = this.studentsService.getStudents();    
  }
}
