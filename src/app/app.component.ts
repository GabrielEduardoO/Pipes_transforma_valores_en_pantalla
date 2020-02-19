import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán américa';
  arreglo = [1, 2 , 3 , 4, 5, 6 , 7 , 8, 9, 10];

  PI: number =  Math.PI;

  porcentaje: number = 0.234;

  sario: number = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
