// Declaro la interface fuera del componente


export interface Alumno {
    nombre: string;
    apellido: string;
    nacimiento: Date;
    ausencias: number,
    notapromedio: number,
    calificacion: boolean;
  }