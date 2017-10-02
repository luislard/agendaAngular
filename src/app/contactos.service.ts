import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

// el decorador 'injectable' indica que la clase decorada 
// debe comportarse como un servicio
@Injectable()
export class ContactosService {

  // por convención si no ponemos private el atributo es public, 
  // por convención si algo es privado colocamos el prefijo _<nombre>.
  // se pone en privado para que nadie pueda modificarlos
  private _nombres: Contacto[] = [
    new Contacto(
       1,
       'Steve',
       'Jobs',
       '555 666 777',
       'steve.jobs@apple.com'
     ),
     new Contacto(
       2,
       'Steve',
       'Wozniak',
       '765 890 345',
       'steve.wozniak@apple.com'
     ),
     new Contacto(
       3,
       'Bill',
       'Gates'
     ),
     new Contacto(
       4,
       'Sundar',
       'Pichai',
       null,
       'sundar.pichai@google.com'
     ),
     new Contacto(
       5,
       'Elon',
       'Musk',
       '345 213 456'
     ),
     new Contacto(
       6,
       'Bob',
       'Esponja',
       '123 123 123',
       'bob.esponja@dibus.es'
     ),

  ];

  // getter de los contactos
  obtenerContactos(): Contacto[] {
    return this._nombres;
  }

  eliminarContacto(nombre: Contacto): void {
    // console.log(nombre);

    // Para eliminar un contacto lo que hacemos es
    // filtrar la colección y quedarnos con todos
    // aquellos que no sean el indicado

    // la funcion filter itera por los elementos del array
    // y se queda con los elementos que returnen true
    // en este caso los nombres diferentes al nombre que
    // hemos pulsado.
    this._nombres = this._nombres.filter(n => n.id !== nombre.id);

  }

  agregarContacto(contacto: Contacto): void {
    this._nombres.push(contacto);
  }
}
