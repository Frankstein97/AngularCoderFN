import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/students-dialog/students-dialog.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
studentName="";

constructor(
  private matDialog: MatDialog
) {}
  openStudentsDialog(): void {
    this.matDialog.open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => {
        console.log('VALOR:', v)
        if (!!v) {
          this.studentName = v; 
        }
      }
    })
  }


}
