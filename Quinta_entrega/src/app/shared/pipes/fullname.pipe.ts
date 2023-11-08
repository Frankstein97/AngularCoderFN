import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/dashboard/pages/students/models';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {
    const firstArgs = args[0];
    const result = value.name + ' ' + value.lastName;

    switch (firstArgs) {
      case 'lowercase': 
      return result.toLowerCase();
      case 'uppercase' : 
      return result.toUpperCase();
      default:
        return 'Invalid Arguments'
    }


    // console.log('value', value)
  }

}
