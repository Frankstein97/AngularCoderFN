import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesComponent } from './courses.component';



@NgModule({
  declarations: [
    CoursesDialogComponent,
    CoursesTableComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
