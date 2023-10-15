import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsComponent } from './students.component';
import { UsersDialogComponent } from './components/students-dialog/students-dialog.component';



@NgModule({
  declarations: [StudentsComponent, UsersDialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
