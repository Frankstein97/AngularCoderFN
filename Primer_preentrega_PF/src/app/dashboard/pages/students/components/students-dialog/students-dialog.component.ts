import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styles: [
  ]
})
export class UsersDialogComponent {
studentsForm: FormGroup;

constructor(
  private fb: FormBuilder, 
  private matDialogRef: MatDialogRef<UsersDialogComponent>,
  @Inject (MAT_DIALOG_DATA) public student?: Student, 
  ) {
  this.studentsForm = this.fb.group({
    name:['', Validators.required],
    lastName:['', Validators.required],
    email:['',[  Validators.required, Validators.email]],
  })
  if (this.student) {
    this.studentsForm.patchValue(this.student);
  }
}

onSubmit(): void {
  if(this.studentsForm.invalid) {
    this.studentsForm.markAllAsTouched();
  } else {
    this.matDialogRef.close(this.studentsForm.value)
  }
}

}
