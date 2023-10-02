import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator, phoneNumberValidator } from '../utils/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

userForm: FormGroup;

  constructor (
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, ]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, phoneNumberValidator]],
      password: ['', [Validators.required, passwordValidator]]
      //tambien se puede escribir asi
      // pass: this.formBuilder.control('1234'),
    })
    
  }

get emailControl () {
    return this.userForm.controls['email']
  }
get emailControlInvalid () {
  return this.emailControl.invalid && this.emailControl.touched;
}


//para escuchar el submit
onSubmit(): void {
console.log(this.userForm.value)
}

}
