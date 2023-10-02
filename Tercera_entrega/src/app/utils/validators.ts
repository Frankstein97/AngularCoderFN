import { AbstractControl, ValidationErrors , ValidatorFn } from "@angular/forms";


export function phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    const phoneNumberPatron = /^[0-9]{10}$/;

 if (control.value && !phoneNumberPatron.test(control.value)) {
    return {invalidPhoneNumber: true}
 }
 return null;
 }

 export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
  
    if (!password) {
      return null;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
  
    if (!hasUpperCase || !hasNumber) {
      return { invalidPassword: true };
    }
  
    return null;
  }

