import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre      = 'Capitán américa';
  nombre2     = 'cArlOs bErmUdeZ';
  arreglo     = [1, 2 , 3 , 4, 5, 6 , 7 , 8, 9, 10];
  PI          =  Math.PI;
  sario       = 1234.5;
  porcentaje  = 0.234;
  fecha: Date = new Date();
  activar     = true;
  idioma:       string;
  videoUrl = 'https://www.youtube.com/embed/Kc8KPE0O6g0';

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };


   cambiarValor = () =>  {
    if(this.activar === true){
      this.activar = false
    }else{
      this.activar = true;
    }
  }
   
  valorPromesa = new Promise<string>(( resolve ) => {

    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });
}
