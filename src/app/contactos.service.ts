import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

// el decorador 'injectable' indica que la clase decorada 
// debe comportarse como un servicio
@Injectable()
export class ContactosService {

  constructor (contatos: Contacto[]) {}
  // por convención si no ponemos private el atributo es public, 
  // por convención si algo es privado colocamos el prefijo _<nombre>.
  // se pone en privado para que nadie pueda modificarlos
  private _nombres: Contacto[] = [
    new Contacto(1,'Bob','Esponja'),
    new Contacto(2,'Elon', 'Musk'),
    new Contacto(3,'Steve', 'Jobs'),
    new Contacto(4,'Bill', 'Gates'),
    new Contacto(5,'Sundar', 'Picagai'),
    new Contacto(6,'Steve', 'Wozniak'),

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
}
