import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from './contacto';


@Pipe({
  name: 'ordenarContactos'
})
export class OrdenarContactosPipe implements PipeTransform {

  transform(value: Contacto[], orden: string): Contacto[] {
    
    let contactosOrdenados: Contacto[];

    if(value){
      if (orden === 'asc') {

        // Orden ascendente por nombre y apellido de contacto
        contactosOrdenados = value.sort((contactoA: Contacto, contactoB: Contacto): number => {
          const nombreCompletoContactoA: string =`${contactoA.nombre.toLowerCase()} ${contactoA.apellidos.toLowerCase()}`;
          const nombreCompletoContactoB: string =`${contactoB.nombre.toLowerCase()} ${contactoB.apellidos.toLowerCase()}`;
          // -1 A < B
          //  0 A == B
          //  1 A > B
          // Si A va antes que B.
          return nombreCompletoContactoA > nombreCompletoContactoB 
              ? 1
              // Si A va despes de B
              : nombreCompletoContactoA < nombreCompletoContactoB
                ? -1
                // Si el orden entre A y B no importa
                :0;
        });
      }
      else {
        // Orden descendente por nombre y apellido de contacto
        contactosOrdenados = value.sort((contactoA: Contacto, contactoB: Contacto): number => {
          const nombreCompletoContactoA: string =`${contactoA.nombre.toLowerCase()} ${contactoA.apellidos.toLowerCase()}`;
          const nombreCompletoContactoB: string =`${contactoB.nombre.toLowerCase()} ${contactoB.apellidos.toLowerCase()}`;
          // -1 A < B
          //  0 A == B
          //  1 A > B
          return nombreCompletoContactoB > nombreCompletoContactoA 
              ? 1
              : nombreCompletoContactoB < nombreCompletoContactoA
                ? -1
                :0;
        });
      }
    }
    else {
      contactosOrdenados = [];
    }

    

    return contactosOrdenados;
  }

}
