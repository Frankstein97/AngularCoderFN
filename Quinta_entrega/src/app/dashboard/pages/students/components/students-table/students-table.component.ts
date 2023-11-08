import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html'
})
export class StudentsTableComponent {

@Input()
dataSource: Student[] = [];

@Output() 
deleteStudent = new EventEmitter <number>();

@Output() 
editStudent = new EventEmitter <Student>();

displayedColumns = ['id', 'fullname','email', 'actions']
}

