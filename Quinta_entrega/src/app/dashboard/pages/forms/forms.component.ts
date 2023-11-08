import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
 userForm: FormGroup;

 constructor (private formBuilder: FormBuilder) {
  this.userForm = this.formBuilder.group ({
    name: ['',[ 
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(6)
    ]
  ],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
  })

} 
public get nameControl () {
  return this.userForm.get('name')
 }
}
