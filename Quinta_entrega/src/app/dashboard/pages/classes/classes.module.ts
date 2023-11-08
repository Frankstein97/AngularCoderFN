import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { ClassesDialogComponent } from './components/classes-dialog/classes-dialog.component';
import { ClassesTableComponent } from './components/classes-table/classes-table.component';



@NgModule({
  declarations: [
    ClassesComponent,
    ClassesDialogComponent,
    ClassesTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClassesModule { }
