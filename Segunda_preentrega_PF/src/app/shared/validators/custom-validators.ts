import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map, of } from 'rxjs';
import { StudentService } from 'src/app/dashboard/pages/students/student.service';

export function idExistsValidator(studentService: StudentService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        const idControl = control.root.get('id');
        const idnumber = control.value;

        if (!idControl || !idnumber) {
            return of(null);
        }

        const id = idControl.value;

        return of(null).pipe(
            map(() => {
                const exists = studentService.studentExistsByIdNumber(id, idnumber);
                return exists ? { idnumberexists: true } : null;
            })
        );
    };
}


export function emailExistsValidator(studentService: StudentService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        const idControl = control.root.get('id');
        const email = control.value;

        if (!idControl || !email) {
            return of(null);
        }

        const id = idControl.value;

        return of(null).pipe(
            map(() => {
                const exists = studentService.studentExistsByEmail(id, email);
                return exists ? { emailexists: true } : null;
            })
        );
    };
}