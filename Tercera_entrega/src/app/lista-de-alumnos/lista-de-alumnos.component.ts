import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.interface';
//Se declara una interface interna para definir al alumnx
// interface Alumno {
//   nombre: string;
//   apellido: string;
//   edad: number
// }

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss']
})
export class ListaDeAlumnosComponent {
// Variable para controlar la visualización de la lista
  mostrarLista: boolean = false; 

  alumnos: Alumno [] = [
  
{
  nombre: 'Pepito',
  apellido: 'Pablo',
  nacimiento: new Date('2000-10-10'),
  ausencias: 27,
  notapromedio: 2.3,
  calificacion: false,
},
{
  nombre: 'María',
  apellido: 'Gómez',
  nacimiento: new Date('1999-07-15'),
  ausencias: 10,
  notapromedio: 8.5,
  calificacion: true,
},
{
  nombre: 'Juan',
  apellido: 'López',
  nacimiento: new Date('2001-03-20'),
  ausencias: 5,
  notapromedio: 3.2,
  calificacion: false,
},
{
  nombre: 'Laura',
  apellido: 'Martínez',
  nacimiento: new Date('1998-05-02'),
  ausencias: 15,
  notapromedio: 6.8,
  calificacion: false,
},
{
  nombre: 'Carlos',
  apellido: 'Sánchez',
  nacimiento: new Date('2002-12-08'),
  ausencias: 8,
  notapromedio: 8.0,
  calificacion: true,
},
{
  nombre: 'Sofía',
  apellido: 'Rodríguez',
  nacimiento: new Date('1997-09-25'),
  ausencias: 3,
  notapromedio: 9.7,
  calificacion: true,
}

    
  ]

  toggleLista() {
    // Cambia el valor de mostrarLista al hacer clic en un botón
    this.mostrarLista = !this.mostrarLista; 
  }

}
