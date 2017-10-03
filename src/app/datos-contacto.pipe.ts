import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from './contacto';


@Pipe({
  name: 'datosContacto'
})
export class DatosContactoPipe implements PipeTransform {

  transform(contacto: Contacto): string {

    let datos: string;

    // si tenemos tanto email como movil
    if (contacto.email && contacto.movil) {
      datos = `${contacto.email} ${contacto.movil}`;
    }
    // si tenemos email
    else if(contacto.email) {
      datos = `${contacto.email}`;

    }
    // si tenemos movil
    else if(contacto.movil) {
      datos = `${contacto.movil}`;

    }
    // si no hay datos
    else{
      datos = ``;
    }

    return datos;
  }

}
