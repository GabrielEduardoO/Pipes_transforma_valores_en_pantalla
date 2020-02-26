import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarcontrasena'
})
export class OcultarcontrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    if ( activar ) {
        return value = '*'.repeat(value.length);
    } else {

      return value;
    }
  }

}
