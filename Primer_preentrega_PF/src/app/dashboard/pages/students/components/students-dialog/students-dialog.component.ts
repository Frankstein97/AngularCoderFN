import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styles: [
  ]
})
export class UsersDialogComponent {
studentsForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.studentsForm = this.fb.group({
    name:['', Validators.required],
  })
}

}
