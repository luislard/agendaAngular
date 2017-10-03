import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datosContacto'
})
export class DatosContactoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
