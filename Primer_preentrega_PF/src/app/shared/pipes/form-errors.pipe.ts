import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | null | undefined, ...args: unknown[]): unknown {
    if (!value) return '';

    const errorMessages:string [] = [];
    if (value){
      if ('required' in value ) {
        errorMessages.push('Este campo es requerido')
      }
      if ('email' in value ) {
        errorMessages.push('Se requiere un email valido')
      }
    }
    
    return errorMessages.join('. ');
  }

}